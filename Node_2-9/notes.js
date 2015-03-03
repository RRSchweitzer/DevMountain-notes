var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
//how to serve up static files in express to simulate real web processes.
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get('/api/current_weather', function(req, res) {
	return res.json({current_weather: 'partly cloudy'});
});

app.post('/api/:outgoing/send_text_message', function(req, res) {
	console.log(req.body.message);
	request.post('https://accountId:authToken@api.twilio.com/apiVersion/Accounts/accountId/Messages.json', {
		form: {
			To: req.params.outgoing,
			From: '+twilio#',
			Body: req.body.message
		}
	}, function(err, response, body) {
		if (err) {
			return res.status(500).end();
		}
		res.status(200).end();
	});
});

app.listen(9000);