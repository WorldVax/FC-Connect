"use strict";

angular.module('app.controllers')

.controller('SettingsCtrl', function ($scope, SettingsService) {
	$scope.$on('$ionicView.beforeEnter', function () {
			if (!SettingsService.dbInfo) {
					SettingsService.infoDb();
			}

	});
	$scope.settings = SettingsService;
});
