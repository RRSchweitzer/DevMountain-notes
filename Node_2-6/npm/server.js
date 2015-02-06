
var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

//the following ONE line is all you will typically need to make post requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'ORIGIN, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(function(req, res, next) {
	console.log('handling post ---->');
	next();
}, function(req, res, next) {
	console.log('post HANDLED.');
	next();
});

app.get('/', function(req, res) {
	res.type('application/json');
	if(req.query.lang === 'es') {
		res.json({message: 'Hola Mundo'});
	} else {
		res.json({message: 'Hello World'});
	}
	// return res.send(JSON.stringify({message: 'Hello World'})); 
});

app.post('/', function(req, res) {
	console.log(req.body);
	console.log(req.body.name);
	res.json({message: 'Go Skateboarding'}); //express feature that already turns stuff to JSON.
});

app.listen(8888);
console.log('listening on port 8888');



