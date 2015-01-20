var app = angular.module('FriendsApp', []); //is really on separate app.js doc

// var app = angular.module('FriendsApp');
//goes on top of other non-controller js docs.




app.service('friendsService', function() { //is really on separate service.js doc

	//var this = Object.create(x.prototype);

	var friends = ['Sydney', 'Brixton', 'Logan', 'Spencer D'];

	this.addAFriend = function() {
		friends.push(friend);
	};

	this.getFriends = function() {
		return friends;
	};

	//return this;

});


app.controller('mainCtrl', function($scope, friendsService) { //is really on a separate controller.js doc

	$scope.addFriend = function() {
		friendsService.addAFriend($scope.newFriend)
	};

	$scope.newFriend = '';

});

NOTES:

Why use services?
-to not bloat controllers.
-services do all the heavy lifting.
-data inside can be used by multiple controllers.


