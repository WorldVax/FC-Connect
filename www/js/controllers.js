"use strict";

angular.module('app.controllers', [])

    .controller('MenuCtrl', function ($scope, PatientService) {
        $scope.current = PatientService.current;
    })

    .controller('HomeCtrl', function ($scope, $state) {
        $scope.goSearch = function () {
            $state.go('app.search');
        }
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

        PatientService
            .read($stateParams.patientId)
            .then(function (result) {
                $scope.vm = result;
            });

        $scope.startEdit = function () {
        };

        $scope.cancelEdit = function () {
        };

        $scope.finishEdit = function () {
            PatientService.save($scope.vm);
        };
    })

    .controller('SettingsCtrl', function ($scope, DbSetup) {

    });
