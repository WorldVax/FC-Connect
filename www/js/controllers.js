"use strict";

angular.module('app.controllers', [])

    .controller('MenuCtrl', function ($scope, PatientService) {
        $scope.current = PatientService.current;
    })

    .controller('HomeCtrl', function ($scope){
    })

    .controller('SearchCtrl', function ($scope, $timeout, $q, PatientService) {
        $scope.vm = {
            patients: [],
            query: ''
        };

        function bind(model) {
            $scope.vm.patients = model;
        }

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
                    .then(bind);
            };
        }
    })

    .controller('PatientCtrl', function ($scope, $stateParams, PatientService) {

        $scope.isEditable = false;

        function bind(result) {
            $scope.vm = result;
            PatientService.currentPatientId = $stateParams.patientId;
        }

        $scope.startEdit = function () {
            $scope.isEditable = true;
        };
        $scope.cancelEdit = function () {
            $scope.isEditable = false;
        };
        $scope.finishEdit = function () {
            PatientService.save($scope.vm);
            $scope.isEditable = false;
        };

        PatientService
            .read($stateParams.patientId)
            .then(bind);
    })

    .controller('SettingsCtrl', function ($scope, DbSetup) {

    });
