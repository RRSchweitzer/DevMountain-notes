var app = angular.module('weatherApp');

	app.directive('clockWeather', function($interval) {
		return {
			scope: {
				message: '@'
			},
			template: '<div>{{hours}}:{{minutes}}:{{seconds}}</div>',
			restrict: 'E',
			link: function(scope, elem, attrs) {
				
				var getTime = function() {
					var date = new Date();
					scope.hours = date.getHours();
					scope.minutes = date.getMinutes();
					scope.seconds = date.getSeconds();
				}

				getTime();
				$interval(getTime, 1000);
			}
		}
	});