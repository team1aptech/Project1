var app = angular.module("myFirstApp",[]);
app.controller('myCtr', ['$scope', '$http', function ($scope, $http) {
    $scope.suzukies = [];
    $http
        .get("data/dataoffer.json")
        .then(function(response){
            $scope.suzukies = response.data.suzuki;
        });
}]);

