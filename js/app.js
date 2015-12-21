/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
            .when('/todo', {
            templateUrl : '../index.html',
            controller  : 'contactController'
            })
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});

	});