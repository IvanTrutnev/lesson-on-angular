var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
	console.log('ctrl scope', $scope);
	$scope.posts = [];
});

app.directive('post', function () {
	return {
		link: function (scope, element, attrs) {
			console.log('scope', scope);
		}
	};
});