var app = angular.module("myFirstApp",[]);
//get data for pages product
app.controller('myCtr', ['$scope', '$http', function ($scope, $http) {
    $scope.suzukies = [];
    $scope.yamahaes = [];
    $scope.hondaes = [];
    $scope.harleys = [];
    $scope.bmws = [];
    $scope.kawasakies = [];
    $scope.triumphs = [];
    $scope.offers = [];

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
    $http
        .get("data/offer.json")
        .then(function(response){
            $scope.offers = response.data.offer;
        });
}]);

<!--comment Facebook-->
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.10';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//create Directives
app.directive("headerMain",function () {
    return{
        restric: "AEC",
        templateUrl : "header.html"
    }
});
app.directive("offerSell",function () {
    return{
        restric: "AEC",
        templateUrl : "offers.html"
    }
});
app.directive("carouselMain",function () {
    return{
        restric: "AEC",
        templateUrl : "carousel.html"
    }
});
app.directive("newEvents",function () {
    return{
        restric: "AEC",
        templateUrl : "new-events.html"
    }
});
app.directive("footerMain",function () {
    return{
        restric: "AEC",
        templateUrl : "footer.html"
    }
});
app.directive("hondaPage",function () {
    return{
        restric: "AEC",
        templateUrl : "honda.html"
    }
});

