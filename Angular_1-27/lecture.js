what is a directive?
-directives must have a dash in their name.


angular.module('app').directive('userInfoCard', function() {
	return {
		template: '<h1>This is a user</h1>',
	}
})

component, decorator, template/structural

transclusion: 

<div ng-transclude></div>

angular.module('app').directive('displayBox', function() {

})