HTTP request: hypertext transfer protocol

a request is made to:
-URL: uniform resource locator

request & response both have:
-Headers
-Body
-Cookies

JSON: javascript object notation
-subset of javascript, but less flexible
-all JSON is readable by javascript, but not the other way around.
-strings, numbers, booleans, arrays, and objects are only acceptable data-types.
-every key and value is in quotes.
-way better than xml.

AJAX: asynchronous javascript and xml

ReST: representation state transfer
-Methods:
	-Post
	-Put
	-Get
	-Delete

API: application programming interface

127.0.0.1:4000
localhost:4000
-ways to locally host a webpage.

app.listen(4000);

var controller = app.controller('bears', function($scope, $http) {

	$scope.bears = [];

	function success(resp) {
		console.log(resp.data);
		$scope.bears = resp.data;
	};

	function error(err) {
		console.log(err);
	};

	$http.get('/json/bunnies', {
		headers: {
			'X-Token': 'please'
		}

	}).then(success, error)

})

//prom.then(success, error) 
//look up promises vs callbacks.
//promises are either fulfilled or rejected.

app.service('bears', funtion() {
	this.getBears = function() {
		return $http.get('/json/bears', {
			headers: {
				'X-Token': 'please'
			}
		})
	}
})
