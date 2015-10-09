//Controllers
recipeApp.controller('homeController', ['$scope', '$location', 'recipeService', function($scope, $location, recipeService){

 $scope.recipe = recipeService.recipe;

 $scope.$watch('recipe', function(){
   recipeService.recipe = $scope.recipe;
 });

 $scope.submit = function() {
 	$location.path ('/forecast');
 };

}]);


recipeApp.controller('forecastController', ['$scope', '$resource', 'recipeService', function($scope, $resource, recipeService) {
 $scope.recipe = recipeService.recipe;


 $scope.recipeAPI = $resource('http://food2fork.com/api/search?key='+key, + {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});

 $scope.recipeResult = $scope.recipeAPI.get({ q: $scope.recipe });


}]);

