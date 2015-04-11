'use strict';

/**
 * @ngdoc function
 * @name triviaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the triviaApp
 */
angular.module('triviaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
