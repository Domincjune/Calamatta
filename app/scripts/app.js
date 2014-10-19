'use strict';

/**
 * @ngdoc overview
 * @name calamattaApp
 * @description
 * # calamattaApp
 *
 * Main module of the application.
 */
angular
  .module('calamattaApp', ['ui.router'])
  .config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "",
      views: {
        "watchList": { templateUrl: 'views/watchList.html' },
        "graphs": { templateUrl: 'views/graphs.html', },
        "tradeList": { templateUrl: 'views/tradeList.html', }
      }
    })
    
});

