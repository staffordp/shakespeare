var shakespeareApp= angular.module('shakespeareApp');

shakespeareApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.tmpl.htm',
            controller: 'homeCtrl'
        })

        .when('/play', {
            templateUrl: 'templates/play.tmpl.htm',
            controller: 'playCtrl'
        })

        .when('/error', {
            templateUrl: 'templates/error.tmpl.htm',
            controller: 'errorCtrl'
        })

});