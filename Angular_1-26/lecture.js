--ROUTING--

github.com/joeeames/devmtnreview

*its good if the url tracks where you are at in your site.

// Code goes here

angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/teams/:teamId', {
    templateUrl: 'RSL.html',
    controller: 'RSLCtrl',
    resolve: {
    	teamData: function($http, $route, $q) {
    		var dfd = $q.defer();
    		http.get($route.current.params.teamId + '.json').then(function(res) {
    			dfd.resolve(res.data);
    		})
    		return dfd.promise;
    	}
    }
  }).when('/teams/SKC', {
  	templateUrl: 'SKC.html',
  	controller: 'SCKCtrl'
  }).otherwise({
  	redirectTo: 
  })

  $locationProvider.
})

app.controller('teamCtrl', function($scope, $routeParams, teamData) {
	$scope.teamName = $routeParams.teamId
	$scope.teams = [
		{teamName: 'RSL', city: 'Salt Lake City'},
		{teamName: 'SKC', city: 'Kansas City'}
	]


})