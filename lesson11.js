var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
	$scope.name = 'Bob';
});

app.directive('fooBar', function () {
	return {
		transclude: true,
		restrict: 'E',
		template: 'This is my superdirective',
		link: function(scope, element, attrs, ctrl, transclude) {
			console.log('This is my superdirective');
			transclude(scope, function(clone, scope) {
				console.log('!', clone, scope);
				element.append(clone);
			});
		}
	};
});