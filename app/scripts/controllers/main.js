'use strict';

/**
 * @ngdoc function
 * @name triviaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the triviaApp
 */
angular.module('triviaApp')
  .controller('MainCtrl', function ($scope, Random, $interval) {

      getNewQuestion();

      $interval(callAtInterval, 1000);

      function callAtInterval() {
        $scope.timeRemaining -= 1;

        if ($scope.timeRemaining == 0) {
          getNewQuestion();
        }
      }

      function getNewQuestion() {
        Random.query().$promise.then(function(data){
          $scope.question = data[0];
          $scope.question.answer = $scope.question.answer.toLowerCase();
          $scope.timeRemaining = 15;
        });
      }

      $scope.$watch('answer', function(newValue, oldValue) {
        console.log(newValue);
        if (newValue.toLowerCase() == $scope.question.answer) {
          console.log('correct answer');

          $scope.answer = "";

          getNewQuestion();
        }
      });
  });
