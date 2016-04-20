var app = angular.module('app', []);

app.directive('fooBar', function() {
	var bookmarks = [
	{
		id: 1,
		name: 'AngularJS'
	},
	{
		id: 2,
		name: 'EmberJS'
	},
	{
		id: 3,
		name: 'ReactJS'
	},
	];
	return {
		template: "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>",
		link : function (scope, element, attrs)
		{
			console.log('foobar');
			scope.name = "Ivan";
			scope.bookmarks = bookmarks;
		}
	};
});