var app = angular.module("myFirstApp",[]);
app.controller('myCtr', ['$scope', '$http', function ($scope, $http) {
    $scope.questions = [];
    $http
        .get("data/dataoffer.json")
        .then(function(response){
            $scope.questions = response.data.offer;
        });
}]);

