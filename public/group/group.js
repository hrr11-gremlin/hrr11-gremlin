angular.module('Recipeoples.group', [])

.controller('GroupController', function($scope, $rootScope, ProfileFactory){
  $rootScope.focusGroup = $rootScope.focusGroup || {
    name: "Carnivores",
    members: [{username:'Bear'}, {username:'Tiger'}, {username:'Alligator'}],
    recipes: ['Awesome Burger', 'Spicy Tuna Rolls', 'Sloe Gin Fizz']
  };
  $scope.group = $rootScope.focusGroup;
 

  $scope.goToRecipe = ProfileFactory.goToRecipe;
});

