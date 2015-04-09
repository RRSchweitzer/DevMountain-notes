var email = require('emailjs');
var q = require('q');

var server = email.server.connect({
	user: 'cahlan.test@gmail.com',
	password: process.env.GMAIL_SMTP_PASSWORD,
	host: 'smtp.gmail.com',
	ssl: true
});

var sendWelcomeEmail = function(to) {
	var text = "Welcome to our awesome product. We hope you have a great time!";
	var from = "admin@mycompany.com";
	var subject = "Welcome to mycompany";
	return send(text, from, to, subject);
};

var send = function(text, from, to, subject) {
	var deferred = q.defer();
	server.send({
	   text: text,
	   from: from,
	   to: to,
	   subject: subject
	}, function(err, message) {
		if (err) {
			console.error("error sending email", err);
			deferred.reject(message);
		}
		else {
			deferred.resolve(message);
		}
	});
	return deferred.promise;
};

module.exports = {
	send: send,
	sendWelcomeEmail: sendWelcomeEmail
};
