//from ecommerce-day-one project--->
var Product = require('./Product')// must require Product b/c its embedded!! Dont have to require things you reference.

var schema = new Schema({
	items: [Product], //embedded, b/c the price is subject to change...
	customer: { type: Schema.Types.ObjectId, ref: 'Customer' }, //referenced, b/c it will update if the customer updates their information...
	status:
	createdAt:
	updatedAt: 
	billingAddress: //static billing/shipping info b/c the customer info may change but we want to preserve the information from THIS ORDER.
	billingCity:
	billingState:
	billingZip:
	shippingAddress:
	shippingCity:
	etc...
})

//Cahlans notes--->
Mongoose is an ORM. It creates an abstraction layer between the API and the DataBase.
ORM = Object Relational Mapping.
ORM gives you validation, convenience, queries. 'abstraction'. Firebase is ultimate abstraction.

indexes/queries:

user =
	{
		name: String,
		email: String,
		bio: String,
		createdAt: Date,
		age: Number
	}


//in order of speed--->
User.findOne({ age: 12 }).exec();

User.findOne({ createdAt: { '$gt': new Date(2015, 01, 12) } }).exec(); //$gt = greater than

User.findOne({ name: new RegExp('^F') }).exec(); //^F = name begins with capital F

User.findOne({ name: function(doc) {
	return doc.charAt(0) === 'F'; //same as above
}}).exec();


User.find({ bio: new RegExp('some phrase', 'g')}).exec(); 

User.find({ name: function(doc) {
	return doc.name.charAt(0) === 'F';
}}).exec();

//Mongoose middleware--->
var userSchema = {
		name: String,
		email: String,
		bio: String,
		createdAt: Date,
		age: { type: Number, min: 0, max: 99 }
	}

userSchema.pre('save', function(next) { //before this gets saved, run this fn
	this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
	next();
});

//encryption--->
var bcrypt = require('bcrypt');

userSchema.pre('save', function(next) { //before this gets saved, run this fn
	var user = this;
	if (!user.isModified('password')) {
		return next(;
	}
	bcrypt.genSalt(12, function(err, salt) {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		})
	})

});

var q = require('q');
userSchema.methods.comparePassword = function(pass) {
	var deferred = q.defer();
	bcrypt.compare(pass, this.password, function(err, isMatch) {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(isMatch);
		}
	});
	return deferred.promise;
};

	//inside a controller
	User.findOne({email: req.body.email}).exec().then(function(err, user) {
		if (user) {
			user.comparePassword(req.body.password).then(function(isMatch) {
				if (isMatch) {
					req.session.authed = true;
				} else {
					return res.redirect('/login');
				}
			})
		}
	});

//queries--->
module.exports = {
	getCustomer: function(req, res) {
		// /api/customers/:id
		Customer.findOne({ __id: req.params.id }).exec().then(function(err, user) {
			return res.json(user);
		});
	},
	getCustomers: function(req, res) {
		var sort = req.query.sort || '-createdAt'; //the negative sign means it starts at the end instead of at the beginning. 'descending'. for ascending just take off the '-' sign.
		var skip = req.query.skip || 0;
		var limit = Number(req.query.limit) || 100;
		if (limit > 1000) {
			limit = 1000;
		}
		// /api/customers/:id
		Customer
			.find()
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.select('name email address') //only find me these particular fields in my collection.
			.exec().then(function(err, users) {
				return res.json(users);
			});	
	}
}

//In mongo, its ok to make your controllers heavy, unlike AngularJS. On the back-end, services are really light, or less needed.
//for every model there must be a controller, they have a one-to-one relationship.

//example of queries--->
module.exports = {
	getOrder: function(req, res) {
		// /api/customers/:id
		Order.findOne({ __id: req.params.id })
			.exec()
			.populate('customer')
			.then(function(err, order) {
			console.log(order);
			//before .populate()--->
			//{
			// 	items: [........],
			// 	customer: 'AnsdfjlddkSDLJF',
			// 	status...
			// }
			//
			//after .populate()--->
			//{
			// 	items: [........],
			// 	customer: {
			//		name: 'John Wayne',
			//		email: 'pistols@deadman.com'
			//  }
			// 	status...
			// }
			return res.json(order);
		});
	}
}

//cant populate embedded items, can only populate referenced items, and only one level deep. 

