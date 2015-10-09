// DIRECTIVES

recipeApp.directive('recipeReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		replace: true
	};
});