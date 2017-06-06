//ROUTES
var calibreApp = angular.module('shakespeareApp');

calibreApp.config(function ($routeProvider) {

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

        // .when('/play', {
        //     templateUrl: 'assets/plays/alls_well_that_ends_well_FF.htm',
        //     controller: 'playCtrl'
        // })

});