angular.module('Recipeople.post', [])

.controller('PostController', function($scope, $location, PostRecipeFactory){
 $scope.recipe = {};

 $scope.postRecipe = function() {
  PostRecipeFactory.post($scope.recipe);
 };
})

.factory('PostRecipeFactory', function($http) {
  var postRecipe = function(data) {
    return $http({
      method: 'POST',
      url: '/recipes',
      data: data
    })
    .then(function(response) {
      return response.data;
    });
  }

  return {
    postRecipe : postRecipe
  }

});