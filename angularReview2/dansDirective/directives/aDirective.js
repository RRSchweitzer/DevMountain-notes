var app = angular.module('weatherApp');

app.directive('aDirective', function() {
	return {
		restrict: 'E', //'EAC'
		templateUrl: 'directives/aDirective.html',
		scope: {
			// @ string
			// = bind
			// & function
			message: '@', // directly manipulates the scope
			variable: '=', // variable="name" passes in $scope.name from the controller. Located in 'scope.variable'.
			funk: '&' // manipulate the scope with a function. funk="logger()" ($scope.logger = function(){} was on the scope.)
		}
		link: function(scope, attrs, )
	}
})