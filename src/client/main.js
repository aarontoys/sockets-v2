(function () {
  'use strict';

  angular.module('myApp', ['ngRoute']).config(config);

  config.$inject = ['$routeProvider'];

  function config ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'myController',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});
  }
})();
