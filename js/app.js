'use strict';

angular.module('awesome-shop', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).when('/store', {
    templateUrl: 'views/store.html',
    controller: 'storeCtrl'
  }).when('/product/:productID', {
    templateUrl: 'views/product.html'
  }).when('/cart', {
    templateUrl: 'views/cart.html'/*,
    controller: 'cartCtrl'*/
  }).otherwise({
    redirectTo: '/'
  });
}]);
