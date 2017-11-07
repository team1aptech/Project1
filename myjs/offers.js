var app = angular.module("myFirstApp",[]);
//get data suzuki for offer
app.controller('myCtr', ['$scope', '$http', function ($scope, $http) {
    $scope.suzukies = [];
    $scope.yamahaes = [];
    $scope.hondaes = [];
    $scope.harleys = [];
    $scope.bmws = [];
    $scope.kawasakies = [];
    $scope.triumphs = [];
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
    $http
        .get("data/bmwdata.json")
        .then(function(response){
            $scope.bmws = response.data.bmw;
        });
    $http
        .get("data/kawasakidata.json")
        .then(function(response){
            $scope.kawasakies = response.data.kawasaki;
        });
    $http
        .get("data/triumphdata.json")
        .then(function(response){
            $scope.triumphs = response.data.triumph;
        });
}]);


