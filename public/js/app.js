var app = angular.module('myApp', ['ngRoute', 'ngStorage','appRoutes', 'MainCtrl', 'NewsCtrl', 'DetailCtrl', 'StoreCtrl']);

app.directive("navBar",function () {
    return{
        restrict: "AEC",
        templateUrl : "views/navBar.html"
    }
});

app.directive('backToTop', function(){
    return {
        restrict: 'E',
        replace: true ,
        template: '<div class="back-to-top"><i class="fa fa-chevron-up"></i></div>',
        link: function($scope, element) {
            $(window).scroll(function(){
                if ($(window).scrollTop() <= 100) {
                    $(element).fadeOut();
                }
                else {
                    $(element).fadeIn();
                }
            });
            $(element).on('click', function(){
                $('html, body').animate({ scrollTop: 0 }, '800');
            });

        }
    }

});