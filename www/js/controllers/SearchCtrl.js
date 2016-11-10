"use strict";

angular.module('app.controllers')

	.controller('SearchController', function ($scope, $state, $timeout, SearchService) {
		$scope.context = SearchService.context;

		var timer = false;
		$scope.$watch('context.query', function () {
			if (timer) {
				$timeout.cancel(timer);
			}
			timer = $timeout($scope.onSearch, 250)
		});

		$scope.onSearch = function () {
			if ($scope.context.query) {
				if (!$state.is('app.search')) {
					$state.go('app.search');
				}
				
				SearchService.search($scope.context.query);
			};
		}
	});
