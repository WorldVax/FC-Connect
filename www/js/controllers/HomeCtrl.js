"use strict";

angular.module('app.controllers')

.controller('HomeController', function ($scope, $state) {
		$scope.goSearch = function () {
				$state.go('app.search');
		}
});
