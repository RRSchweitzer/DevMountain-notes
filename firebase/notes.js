parse and firebase are 'backend as a service';

// Chris' Esplin Lecture --->

web sockets: a constant ping or heartbeat of data going directly from firebase
to the client browser.

download 'bower'

in index.html:
	call angular
	call firebase
	call angularfire

firebase paths are like json attributes.

rtfm-demo.firebaseio.com/'attribute'/'attribute'/etc

you can nest up to 32 attributes deep!

angularfire is the bindings between firebase and angularJS.

$scope.comments = commentsRef.$asArray();
$scope.comment = commentRef.$asObject();

$scope.addComment = function(newComment) {
	newComment.created = new Date().toString();
}

	$scope.comments.$add(newComment).then(function() {
		delete newComment.text;
	});

any code with "$" is part of angularfire.

*strict JSON always uses double quotes.

FIREBASE DOES AWAY WITH $http AND $q !

how to save array changes:

$scope.saveComment = function(comment) {
	$scope.comments.$save(comment);
}

$scope.removeComment = function(comment) {
	$scope.comments.$remove(comment);
}

NO CASHING OR BROWSER STORAGE b/c firebase is live.

$scope.editComment = function(comment) {
	var commentIAmEditing = FirebaseService.getComment(comment.$id).$asObject();
	commentIAmEditing.$bindTo($scope, 'editing'); //$bindTo initiates 3-way binding!!!
}

