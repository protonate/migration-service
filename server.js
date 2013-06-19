var express = require('express'),
    migrate = require('./routes/migrate'),
	_ = require('underscore'),
	app = express();

// allow cross domain 
var allowCrossDomain = function(req, res, next) {
  // Added other domains you want the server to give access to
  // WARNING - Be careful with what origins you give access to
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
	next();
}

app.configure(function() {
    app.use(allowCrossDomain);
    app.use(express.bodyParser());    
});
// end x domain	

// run_mode can be 'demo' or 'live' and determines which functions are exported from migrate.js
var run_mode = process.argv[2];

if (run_mode === undefined ) {
	console.log("You need to tell me what mode to run in, 'demo' or 'live'.");
	process.exit(1);
}
console.log('run mode ' + run_mode);

app.get('/initDB', migrate.initDB);
app.get('/RPs', migrate.findAllRPs);
app.get('/RPs/:id', migrate.findRPById);
app.put('/RPs/:id', migrate.updateRP);
app.get('/getLoadFile/:host/:rp', migrate[run_mode].getLoadFile);
app.get('/hiho/:name', migrate[run_mode].sayHi);
app.get('/getLoadFileCollection', migrate[run_mode].getLoadFileCollection);

app.listen(3030);
console.log('Listening on port 3030...');