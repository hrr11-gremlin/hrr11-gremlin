angular.module('Recipeoples.group', [])

.controller('GroupController', function($scope, $rootScope, ProfileFactory){
  $rootScope.focusGroup = $rootScope.focusGroup || {
    name: "Carnivores",
    members: [{name:'Bear'}, {name:'Tiger'}, {name:'Alligator'}],
    recipes: ['Awesome Burger', 'Spicy Tuna Rolls', 'Sloe Gin Fizz']
  };
  $scope.group = $rootScope.focusGroup;
 

  $scope.goToRecipe = ProfileFactory.goToRecipe;
});

