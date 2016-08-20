'use strict';

/**
 * @ngdoc overview
 * @name eCommerceAdminApp
 * @description
 * # eCommerceAdminApp
 *
 * Main module of the application.
 */
angular
  .module('eCommerceAdminApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload'
  ])
  .constant({
    'endpoint': 'http://ecommerce.provenlogic.xyz/api/v1'//"http://localhost:3000/api/v1"//'http://ecommerce.provenlogic.xyz/api/v1'
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        requireAuth: true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        requireAuth: true
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'LC'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'ProdC'
      })
      .when('/product/:id', {
        templateUrl: 'views/product-edit.html',
        controller: 'ProductEditCtrl',
        controllerAs: 'ProdEdit'
      })
      .when('/product/view/:id', {
        templateUrl: 'views/product-view.html',
        controller: 'ProductViewCtrl',
        controllerAs: 'ProdView'
      })
      .when('/pages', {
        templateUrl: 'views/pages.html',
        controller: 'PagesCtrl',
        controllerAs: 'PagesCtrl'
      })
      .when('/pages/:id', {
        templateUrl: 'views/pages-edit.html',
        controller: 'PagesEditCtrl',
        controllerAs: 'PagesEdit'
      })
      .when('/add-pages', {
        templateUrl: 'views/pages-edit.html',
        controller: 'PagesAddCtrl',
        controllerAs: 'PagesEdit'
      })
      .when('/emailtemplates', {
        templateUrl: 'views/emailtemplates.html',
        controller: 'EmailtemplatesCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/emailtemplates/:id', {
        templateUrl: 'views/emailtemplates-edit.html',
        controller: 'EmailtemplatesEditCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/add-emailtemplates', {
        templateUrl: 'views/emailtemplates-edit.html',
        controller: 'EmailtemplatesAddCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/categories/:id', {
        templateUrl: 'views/categories-edit.html',
        controller: 'CategoriesEditCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/add-categories', {
        templateUrl: 'views/categories-edit.html',
        controller: 'CategoriesAddCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/add-users', {
        templateUrl: 'views/users-edit.html',
        controller: 'UsersAddCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/users/:id', {
        templateUrl: 'views/users-edit.html',
        controller: 'UsersEditCtrl',
        controllerAs: 'Ctrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

  })
  .run(['$rootScope', '$location', 'sessionService', function($rootScope, $location, sessionService) {
    $rootScope.$on('$routeChangeStart', function(event, newUrl) {
      if (newUrl.requireAuth && !sessionService.get('token')) {
        event.preventDefault();
        $location.path('/login');
      }
      if(newUrl.controller == "LoginCtrl" && sessionService.get('token')) {
        event.preventDefault();
        $location.path('/');
      }
    });
  }]);
