var app = angular.module('weatherApp', ['ngRoute']); //the app file is all-encasing for your entire app. it is how you link everything together.

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeCtrl'
		})
		.when('/weather/:lat/:long', {
			templateUrl: 'weather/weather.html',
			controller: 'weatherCtrl',
			resolve: {
				weather: function(weatherService, $route) {
					return weatherService.getWeather($route.current.params.lat, $route.current.params.long); //this will return a promise to the resolve. Use a resolve block when you want the data to load before you route to the weather page.
				}
			}
		})
		.otherwise('/');
})