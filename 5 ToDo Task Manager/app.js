angular.module('todoApp', [])
.controller('todoController', function($scope) {
  // Check if tasks are stored in localStorage
  $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Add a new task
  $scope.addTask = function() {
    if ($scope.newTask) {
      $scope.tasks.push({ text: $scope.newTask, completed: false });
      $scope.newTask = ''; // Clear the input field

      // Save tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
  };

  // Delete a task
  $scope.deleteTask = function(task) {
    const index = $scope.tasks.indexOf(task);
    if (index !== -1) {
      $scope.tasks.splice(index, 1); // Remove task from the array

      // Update tasks in localStorage
      localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
  };

  // Edit a task
  $scope.editTask = function(task) {
    const updatedText = prompt('Edit task:', task.text);
    if (updatedText) {
      task.text = updatedText;

      // Update tasks in localStorage
      localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
  };
});
