var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
	consumerKey: '',
	consumerSecret: '',
	callbackURL: 'http://localhost:8080/auth/twitter/callback'
}, function(token, tokenSecret, profile, done) {
	console.log(token);
	console.log(profile);
	done(null, profile);
}));

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: 'ASL32FDJSD$JLKJ34L567KJ%7JLJ'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
	successRedirect: '/',
	failureRedirect: '/login.html'
});

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect('/login.html');
	}
	next();
};

app.get('/', function(req, res) {
	if (req.isAuthenticated()) {
		return res.sendFile(__dirname + '/public/home.html')
	} else {
		return res.redirect('/login.html');
	}
});

app.listen(8080);