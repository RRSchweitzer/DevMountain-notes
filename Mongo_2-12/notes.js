terminal: 'sudo mongod' starts mongo just like 'nodemon server.js' does.
OR- just use launchrocket (see screenshot).

var Mongoose = require('mongoose');

var mongoURI = 

Mongoose.connect(mongoURI);
Mongoose.connection.once('open', function() {
	console.log('a;lsdjasl;dgasld;j');
})

var Schema = Mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true, uniqueness: true },
	age: Number,
	nationality: { type: String, enum: ['British', 'American', 'Russian'] },
	occupation: String,
	hasLicenseToKill: { type: Boolean, default: true },
	weapons: [{
		kind: { type: String, required: true },
		name: { type: String, required: true },
		numberOfRounds: { type: Number, required: true }
	}]
})

module.exports = Mongoose.model('Agent', schema);

27017 port for mongodb