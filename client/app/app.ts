'use strict';

angular.module('meanyEcommerceApp', [
  'meanyEcommerceApp.auth',
  'meanyEcommerceApp.admin',
  'meanyEcommerceApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
