angular.module('weatherApp', [])
.controller('weatherController', function($scope, $http) {
    const apiKey = '372876ae8e6eb664916e86ff4543f678'; // Your OpenWeatherMap API key

    // List to store recent searches
    $scope.recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    // Function to fetch weather data from the API
    $scope.searchWeather = function(event) {
        if ($scope.city && (event.keyCode === 13 || !event.keyCode)) {
            const cityName = $scope.city.trim();

            // Fetch weather data from OpenWeatherMap API
            $http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
            .then(function(response) {
                $scope.weather = response.data;
                addRecentSearch(cityName);
                $scope.city = ''; // Clear the input field
            }, function(error) {
                if (error.status === 401) {
                    alert('Invalid API Key. Please check your API key and try again.');
                } else if (error.status === 404) {
                    alert('City not found! Please try again.');
                } else {
                    alert('An error occurred. Please try again.');
                }
            });
        }
    };

    // Function to add city to recent searches
    function addRecentSearch(city) {
        if (!$scope.recentSearches.includes(city)) {
            $scope.recentSearches.unshift(city); // Add to the beginning of the list
            if ($scope.recentSearches.length > 5) {
                $scope.recentSearches.pop(); // Keep only the last 5 recent searches
            }
            localStorage.setItem('recentSearches', JSON.stringify($scope.recentSearches)); // Save to localStorage
        }
    }

    // Function to load weather for a recently searched city
    $scope.loadWeather = function(city) {
        $scope.city = city; // Set the input field to the city
        $scope.searchWeather({ keyCode: 13 }); // Fetch the weather for that city
    }
});
