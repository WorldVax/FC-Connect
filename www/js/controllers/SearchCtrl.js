"use strict";

angular.module('app.controllers')

.controller('SearchController', function($scope, $state, $timeout, SearchService) {
    $scope.context = SearchService.context;

    $scope.onSearch = function() {
        if ($scope.context.query) {
            SearchService.search($scope.context.query);
            if (!$state.is('app.search')) {
                $state.go('app.search');
            }
        };
    };

    $scope.pin = function(model) {
        if (model.isPinned) {
            SearchService.unpin(model);
        } else {
            SearchService.pin(model);
        }
    };
});