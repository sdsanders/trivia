'use strict';

/**
 * @ngdoc function
 * @name triviaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the triviaApp
 */
angular.module('triviaApp')
  .controller('MainCtrl', function ($scope, Random) {

    Random.query(function(response) {
      $scope.question = response[0];
      $scope.question.answer = $scope.question.answer.toLowerCase();

      $scope.$watch('answer', function(newValue, oldValue) {
        if (newValue.toLowerCase() == $scope.question.answer) {
          console.log('correct answer');

          $scope.answer = "";

          Random.query(function(response){
            $scope.question = response[0];
            $scope.question.answer = $scope.question.answer.toLowerCase();
          });
        }
      });
    });
  });
