var app = angular.module("myFirstApp",[]);
//get data suzuki for offer
app.controller('myCtr', ['$scope', '$http', function ($scope, $http) {
    $scope.suzukies = [];
    $scope.yamahaes = [];
    $scope.hondaes = [];
    $scope.harleys = [];
    $http
        .get("data/suzukidata.json")
        .then(function(response){
            $scope.suzukies = response.data.suzuki;
        });
    $http
        .get("data/yamahadata.json")
        .then(function(response){
            $scope.yamahaes = response.data.yamaha;
        });
    $http
        .get("data/hondadata.json")
        .then(function(response){
            $scope.hondaes = response.data.honda;
        });
    $http
        .get("data/harleydavidsondata.json")
        .then(function(response){
            $scope.harleys = response.data.harley;
        });
}]);


