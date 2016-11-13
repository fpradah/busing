'use strict';

/**
 * Route configuration for the RDash module.
 */
angular
.module('busingApp',[
    'ui.bootstrap', 
    'ui.router', 
    'ngCookies'
   
    ])
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');
       
        // Application routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                
            })
            .state('busquedaRutas', {
                url: '/busquedaRutas',
                templateUrl: 'templates/busquedaRutas.html'
            })
            .state('misRutas', {
                url: '/misRutas',
                templateUrl: 'templates/misRutas.html'
            })
            .state('pagoRutas', {
                url: '/pagoRutas',
                templateUrl: 'templates/pagoRutas.html'
            })
            .state('infoRutas', {
                url: '/infoRutas',
                templateUrl: 'templates/infoRutas.html'
            })
            .state('creaRuta', {
                url: '/creaRuta',
                templateUrl: 'templates/creaRuta.html'
            });

    }
]);