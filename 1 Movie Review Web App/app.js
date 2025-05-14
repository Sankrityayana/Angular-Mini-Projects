angular.module('movieApp', [])

    .controller('movieController', function ($scope) {
        $scope.movies = [
            {
                title: "Inception",
                genre: "Sci-Fi",
                rating: 5,
                poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
                review: "A mind-bending thriller with stunning visuals and an intricate plot."
            },
            {
                title: "The Shawshank Redemption",
                genre: "Drama",
                rating: 5,
                poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
                review: "A powerful story of hope and friendship set within a prison."
            },
            {
                title: "The Dark Knight",
                genre: "Action",
                rating: 4,
                poster: "https://m.media-amazon.com/images/I/51k0qa6qCdL._AC_.jpg",
                review: "A gripping superhero film with deep characters and thrilling action."
            },
            {
                title: "Parasite",
                genre: "Thriller",
                rating: 5,
                poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
                review: "A brilliant critique of social class with suspense and dark humor."
            },
            {
                title: "Inception",
                genre: "Sci-Fi",
                rating: 5,
                poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
                review: "A mind-bending thriller with stunning visuals and an intricate plot."
            },
            {
                title: "The Shawshank Redemption",
                genre: "Drama",
                rating: 5,
                poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
                review: "A powerful story of hope and friendship set within a prison."
            },
            {
                title: "The Dark Knight",
                genre: "Action",
                rating: 4,
                poster: "https://m.media-amazon.com/images/I/51k0qa6qCdL._AC_.jpg",
                review: "A gripping superhero film with deep characters and thrilling action."
            },
            {
                title: "Parasite",
                genre: "Thriller",
                rating: 5,
                poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
                review: "A brilliant critique of social class with suspense and dark humor."
            }
        ];

        $scope.getStars = function (rating) {
            return Array.from({ length: rating }, (_, i) => i + 1);
        }
    });