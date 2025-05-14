var app = angular.module('musicApp', []);

app.controller('MusicController', function($scope) {
    // Sample music data
    $scope.tracks = [
        { title: "Song 1", artist: "Artist 1", image: "https://via.placeholder.com/150", audio: "track1.mp3" },
        { title: "Song 2", artist: "Artist 2", image: "https://via.placeholder.com/150", audio: "track2.mp3" },
        { title: "Song 3", artist: "Artist 1", image: "https://via.placeholder.com/150", audio: "track3.mp3" },
        { title: "Song 4", artist: "Artist 3", image: "https://via.placeholder.com/150", audio: "track4.mp3" }
    ];

    $scope.currentTrack = {}; // Currently playing track object

    // Play track function
    $scope.playTrack = function(track) {
        $scope.currentTrack = track;
    };
});
