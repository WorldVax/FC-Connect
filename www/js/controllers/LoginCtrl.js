"use strict";

angular.module('app.controllers')

.controller('LoginCtrl', function ($scope, $state, $ionicSideMenuDelegate, SecurityService) {
        $scope.username = {value: ""};
        $scope.password= {value: ""};
        
        $scope.$on('$ionicView.enter', function(){
            $ionicSideMenuDelegate.canDragContent(false);
        });

        $scope.$on('$ionicView.leave', function(){
            $ionicSideMenuDelegate.canDragContent(true);
        });

		$scope.validateLogin = function () {
            if($scope.username.value && $scope.password.value)
            {
                if(SecurityService.checkLogin($scope.username.value, $scope.password.value))
                    $state.go('app.home');
                else
                    $state.go('app.login');
            }
		};
});
