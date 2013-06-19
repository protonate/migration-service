var e = document.createElement('script');
e.type = 'text/javascript';
e.id = 'janrainAuthWidget'

var url = document.location.protocol === 'https:' ? 'https://' : 'http://';
url += 'd29usylhdk1xyu.cloudfront.net/load/{{RP_NAME}}';
e.src = url;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(e, s);