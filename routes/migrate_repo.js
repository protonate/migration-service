var http = require('http'),
    querystring = require('querystring'),
    fs = require('fs'),
    knox = require('knox'),
    invalidate = require('invalidatejs'),
    _ = require('underscore'),
    q = require('q'),
    bucket = 'XXXXXXX-widgets',
    s3 = {
        key: process.env.WIDGETS_S3_KEY,
        secret: process.env.WIDGETS_S3_SECRET,
        bucket: bucket
    },
    client = knox.createClient(s3),
    loadfile = {
        port: 80,
        method: 'GET'
    },
    hosts = {
        rpx : {
            hostname : 'XXXXXX.com',
            path : '/load/{{RP_NAME}}'
        },
        s3 : {
            hostname : 'XXXXXX.cloudfront.net',
            path: '/{{RP_NAME}}/load.js',
        },
        file : {
            hostname: '/'
        },
        apps : {},
        db : {}
    },
    invalidateConfig = {
        resourcePaths: ['/{{RP_NAME}}/load.js'],
        secret_key: s3.secret,
        access_key: s3.key,
        dist: "XXXXXX"
    },
    mongo = require('mongodb')
    ;

var MongoClient = mongo.MongoClient,
        Server = mongo.Server,
        db = mongo.Db,
        BSON = mongo.BSONPure;

var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.open(function(err, mongoClient) { 
    db = mongoClient.db("RPDB"); 
});

exports.demo = {};
exports.live = {};
exports.live.sayHi = function(req, res){
    res.send('hi there ' + req.params.name + ', we\'re live!');
}
exports.demo.sayHi = function(req, res){
    res.send('wazzup ' + req.params.name + ', we\'re just demo\'ing it up here.');
}

exports.noop = function(req, res) {
    // no operation
    console.log('noop');
    res.end();
}

exports.updateRP = function(req, res) {
    console.log('WE ARE HERE AND ITS NOW');
    var id = req.params.id;
    var rp = req.body;
    delete rp._id;
    console.log('Updating RP: ' + id);
    console.log(JSON.stringify(rp));
    db.collection('RPs', function(err, collection) {
        collection.update({'_id': new BSON.ObjectID(id)}, rp, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating RP: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(rp);
            }
        });
    });
}

exports.live.getLoadFile = function(req, res) {
    console.log('getLoadFile live: ' + req.params.host + '/' + req.params.rp);
    var rp = req.params.rp;
    var host = req.params.host;
    loadfile.hostname = hosts[host].hostname;
    loadfile.path = hosts[host].path.replace('{{RP_NAME}}', rp);

    // http.get(loadfile, function(result) {
    //     var file = '';
    //     result.on('data', function (chunk){
    //         file += chunk;
    //     });
    //     result.on('end', function(){
    //         var returnObj = {
    //             "rp": rp,
    //             "host": loadfile.hostname,
    //             "js": file
    //         };            
    //         res.jsonp(returnObj);
    //     });
    // });
    http.get(loadfile, function(result) {
        result.setEncoding('utf8');
        var file = '';
        result.on('data', function (chunk){
            file += chunk;
        });
        result.on('end', function(){
            var returnObj = {};
            // var returnObj = {
            //     "rp": rp,
            //     "host": loadfile.hostname,
            //     "js": file
            // };            
            // res.jsonp(returnObj);
            var post_data = querystring.stringify({  
                // 'compilation_level' : 'ADVANCED_OPTIMIZATIONS',  
                'compilation_level' : 'SIMPLE_OPTIMIZATIONS',
                'output_format': 'text',
                'output_info': 'compiled_code',
                'warning_level' : 'QUIET',
                'formatting' : 'pretty_print',
                'js_code' : file
            });

            var post_options = {  
                host: 'closure-compiler.appspot.com',  
                port: '80',  
                path: '/compile',  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/x-www-form-urlencoded',  
                    'Content-Length': post_data.length  
                }  
            }; 

            var post_req = http.request(post_options, function(post_res) {  
                var compiled_file = '';
                post_res.setEncoding('utf8');  
                post_res.on('data', function (chunk) {  
                    compiled_file += chunk;
                });  
                post_res.on('end', function () {
                    returnObj = {
                        "rp": rp,
                        "host": loadfile.hostname,
                        js: compiled_file
                    };
                    // console.log(returnObj);
                    res.jsonp(returnObj);
                });            
            });
            post_req.write(post_data);
            post_req.end();
        });
    }).end();
}
exports.demo.getLoadFile = function(req, res) {
   
};

exports.demo.getLoadFileCollection = function(req, res) {
    db.collection('loadfiles', function(err, collection) {
        // res.jsonp(_.pluck(collection.find(), 'host'));
        collection.find().toArray(function(err, items) {
            res.jsonp(items);
        });
    });
};

exports.live.getLoadFileCollection = function(req, res) {
    // return;
};

exports.live.getCompiledFile = function(req, res) {    
    // return; 
};

exports.findAllRPs = function(req, res) {
    console.log('findAllRPs');
    var name = req.query["name"];
    db.collection('RPs', function(err, collection) {
        if (name) {
            collection.find({"rp": new RegExp(name, "i")}).toArray(function(err, items) {
                res.jsonp(items);
            });
        } else {
            collection.find().toArray(function(err, items) {
                res.jsonp(items);
            });
        }
    });
};

exports.findRPById = function(req, res) {
    console.log('findRPById req.params.id: ' + req.params.id);
    var obj_id = new require('mongodb').ObjectID(req.params.id);
    console.log('obj_id: ' + obj_id);
    db.collection('RPs', function(err, collection) {
        collection.findOne({ _id: obj_id}, function(err, item) {
            console.log('item: ', item);
            res.jsonp(item);
        });
    });
};

exports.demo.initLoadfileDB = function(req, res) {
    var loadfiles = [];

};

exports.initDB = function(req, res) {

    var RPs = [];

    function getRPs (lastMark){
        client.list({'marker': lastMark}, function(err,data){
            for(var i = 0, len = data.Contents.length; i < len; i++) {
                var parts = data.Contents[i].Key.split('/');
                if(parts[1] && parts[1].match(/load.js/)) {
                    RPs.push({
                        "rp": parts[0], 
                        "migrated": false,
                        "rpxUrl": "http://XXXXXX.com/load/" + parts[0],
                        "s3Url": "http://XXXXXX.cloudfront.net/" + parts[0] + "/load.js"
                    })
                }
            }
            if(data.IsTruncated === true) {
                var mark = data.Contents[data.Contents.length - 1].Key;
                console.log('last mark is ' + mark);
                getRPs(mark);
            }
            else {
                populateRPDB(RPs);
                res.send(RPs);
            }            
        });
    }

    getRPs();

    function getFile(options, res) {
        // console.log(result);
        options.hostname = hosts[options.host].hostname;
        options.path = hosts[options.host].path.replace('{{RP_NAME}}', options.rp);
        http.get(options, function(result) {
            var file = '';
            result.on('data', function (chunk){
                file += chunk;
            });
            result.on('end', function(){
                res(options, file);
            });
        });        
    }
}

var populateRPDB = function(RPs){

    db.collection('RPs', function(err, collection){
        collection.insert(RPs, {safe:true}, function(err, result) {});
    });
};


