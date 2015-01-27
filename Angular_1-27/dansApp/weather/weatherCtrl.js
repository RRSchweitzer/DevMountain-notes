app.controller('weatherCtrl', function($scope, weather) { //weather is the same weather from the resolve block in the app.config
	$scope.weather = weather;
	console.log($scope.weather);
});