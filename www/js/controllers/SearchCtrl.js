"use strict";

angular.module('app.controllers')

.controller('SearchCtrl', function ($scope, $timeout, PatientService) {
	$scope.vm = {
			patients: [],
			query: ''
	};

	var timer = false;
	$scope.$watch('vm.query', function () {
			if (timer) {
					$timeout.cancel(timer);
			}
			timer = $timeout($scope.onSearch, 250)
	});

	$scope.onSearch = function () {
			if ($scope.vm.query) {
					PatientService
							.filter($scope.vm.query)
							.then(function (model) {
									$scope.vm.patients = model;
							});
			};
	}
});
