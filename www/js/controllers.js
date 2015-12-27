"use strict";

angular.module('app.controllers', [])

    .controller('HomeCtrl', function ($scope) {

    })

    .controller('SearchCtrl', function ($scope, $timeout, MedicalDbService) {
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
            $scope.vm.patients = MedicalDbService.filter($scope.vm.query);
        };
    })

    .controller('PatientDetailCtrl', function ($scope, $stateParams, Patients) {                
        $scope.vm = Patients.get($stateParams.patientId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
        };
    });
