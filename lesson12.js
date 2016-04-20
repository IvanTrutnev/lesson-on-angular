var app = angular.module('app', []);

app.run(function ($templateCache) {
	$templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>");
});

app.directive('fooBar', function ($templateCache) {
	var bookmarks = [
	{
		id:1,
		name: 'AngularJs'
	},
	{
		id: 2,
		name: 'EmberJs'
	}
	];
	return {
		restrict: 'E',
		templateUrl: "bookmarks.html",
		link : function(scope, element, attrs) {
			console.log('directive');
			scope.bookmarks = bookmarks;
			console.log($templateCache.info());
		}
	};
});