angular.module('recipeApp', [])
.controller('recipeController', function($scope) {
  $scope.categories = ['Appetizers', 'Main Course', 'Desserts'];

  $scope.recipes = [
    { title: 'Spring Rolls', category: 'Appetizers', description: 'Crispy rolls with vegetables.' },
    { title: 'Butter Chicken', category: 'Main Course', description: 'Creamy and spicy chicken dish.' },
    { title: 'Gulab Jamun', category: 'Desserts', description: 'Sweet syrupy balls.' }
  ];

  $scope.newRecipe = {
    title: '',
    category: '',
    description: ''
  };

  $scope.addRecipe = function() {
    if ($scope.newRecipe.title && $scope.newRecipe.category && $scope.newRecipe.description) {
      $scope.recipes.push({
        title: $scope.newRecipe.title,
        category: $scope.newRecipe.category,
        description: $scope.newRecipe.description
      });

      $scope.newRecipe = {
        title: '',
        category: '',
        description: ''
      };

      $('#addRecipeModal').modal('hide');
    }
  };
});
