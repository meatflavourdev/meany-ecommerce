'use strict';

angular.module('meanyEcommerceApp.auth', [
  'meanyEcommerceApp.constants',
  'meanyEcommerceApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
