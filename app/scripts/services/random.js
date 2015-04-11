'use strict';

/**
 * @ngdoc service
 * @name triviaApp.random
 * @description
 * # random
 * Factory in the triviaApp.
 */
angular.module('triviaApp')
  .factory('Random', function ($resource) {
    var factory = {};
    var baseUrl = "http://jservice.io/api/random";

    return $resource(baseUrl);
  });
