"use strict";

angular.module('app.controllers')

.controller('HomeCtrl', function ($scope, $state) {
		$scope.goSearch = function () {
				$state.go('app.search');
		}
});
