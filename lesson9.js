var app = angular.module('app', []);

app.directive('fooBar', function() {
	return {
		restrict: 'CEA',
		link: function () {
			console.log('fooBar');
		}
	};
});