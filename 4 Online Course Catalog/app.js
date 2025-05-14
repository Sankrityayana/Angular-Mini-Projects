angular.module('courseApp', [])
.controller('courseController', function($scope) {
  $scope.courses = [
    { title: 'Web Development Basics', category: 'Web', description: 'Learn HTML, CSS, and JS.' },
    { title: 'Advanced JavaScript', category: 'Web', description: 'Deep dive into JS concepts.' },
    { title: 'Machine Learning Intro', category: 'AI/ML', description: 'Start your AI journey.' },
    { title: 'Python for Data Science', category: 'Data', description: 'Use Python for analytics.' },
    { title: 'Angular Fundamentals', category: 'Web', description: 'Get started with AngularJS.' },
    { title: 'Statistics 101', category: 'Math', description: 'Understand data and numbers.' },
    { title: 'AI with Python', category: 'AI/ML', description: 'Hands-on projects in AI.' },
    { title: 'Bootstrap Framework', category: 'Web', description: 'Build responsive designs.' },
    { title: 'Data Visualization', category: 'Data', description: 'Charts and dashboards.' }
  ];

  $scope.categories = [...new Set($scope.courses.map(c => c.category))];

  $scope.selectedCategory = "";
  $scope.searchText = "";

  $scope.pageSize = 3;
  $scope.currentPage = 1;

  $scope.searchFilter = function(course) {
    const keyword = $scope.searchText.toLowerCase();
    const matchTitle = course.title.toLowerCase().includes(keyword);
    const matchCategory = course.category.toLowerCase().includes(keyword);
    const categoryMatch = !$scope.selectedCategory || course.category === $scope.selectedCategory;
    return (matchTitle || matchCategory) && categoryMatch;
  };

  $scope.changePage = function(page) {
    const totalPages = Math.ceil(($scope.courses.filter($scope.searchFilter)).length / $scope.pageSize);
    if (page >= 1 && page <= totalPages) {
      $scope.currentPage = page;
    }
  };

  $scope.getPageNumbers = function() {
    const totalPages = Math.ceil(($scope.courses.filter($scope.searchFilter)).length / $scope.pageSize);
    $scope.pageCount = totalPages;
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };
});
