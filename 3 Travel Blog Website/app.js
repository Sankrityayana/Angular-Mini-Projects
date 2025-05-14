angular.module('travelBlogApp', [])
.controller('blogController', function($scope) {
  $scope.destinations = ['Paris', 'Tokyo', 'New York', 'Sydney'];

  $scope.blogPosts = [
    {
      title: 'Eiffel Tower Adventure',
      destination: 'Paris',
      summary: 'A day under the Eiffel Tower with amazing food and culture.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Tokyo Tech and Tradition',
      destination: 'Tokyo',
      summary: 'Modern meets tradition in this beautiful Japanese city.',
      image: 'https://images.unsplash.com/photo-1589878397025-0f24fbc0d4a6?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'NYC Vibes',
      destination: 'New York',
      summary: 'Skyscrapers, bagels, and bustling city life.',
      image: 'https://images.unsplash.com/photo-1549921296-3a6b1e64fb1c?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Sydney Shorelines',
      destination: 'Sydney',
      summary: 'A trip along the iconic Opera House and sunny beaches.',
      image: 'https://images.unsplash.com/photo-1526481280690-99c49e4a1c03?auto=format&fit=crop&w=800&q=60'
    }
  ];

  $scope.comments = [
    { name: 'Alice', text: 'Amazing post about Paris!' },
    { name: 'Bob', text: 'I love Tokyo too. Great write-up!' }
  ];

  $scope.searchFilter = function(post) {
    if (!$scope.searchText) return true;
    const keyword = $scope.searchText.toLowerCase();
    return post.title.toLowerCase().includes(keyword) || post.summary.toLowerCase().includes(keyword);
  };
});
