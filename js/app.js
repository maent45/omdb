var app = angular.module('omdbApp', []);

// controllers
app.controller('omdbController', function($scope, $http) {

    $scope.getMovie = function() {
        var title = document.getElementById('title_input').value;

        $scope.movies = [];

        $http.get('http://api.tvmaze.com/search/shows?q=' + title)
            .then(function(response) {
                $scope.movies = response;
                console.log('the data is ',$scope.movies);
            }, function(response) {
                // errors
                $scope.movies = response;
                console.log('woooooooppps',response);
            });
    }

});