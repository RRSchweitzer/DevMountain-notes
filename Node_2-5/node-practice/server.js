

var onRequest = function(req, res) {
	res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	res.end(JSON.stringify({message: 'Hello Wod'}));
};

var smurfs = require('./smurfs');
smurfs();


var http = require('http');
http.createServer(onRequest).listen(12200); //port 443 = SSL, port 80 = normal
console.log('Hey breh, listening on port 12200');