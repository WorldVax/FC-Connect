"use strict";

angular.module('app.controllers', [])

    .controller('HomeCtrl', function ($scope) {

    })

    .controller('SearchCtrl', function ($scope, $timeout, $q, MedicalService) {
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
                MedicalService
                    .filter($scope.vm.query)
                    .then(bind);
            };
        }
    })

    .controller('PatientDetailCtrl', function ($scope, $stateParams, MedicalService) {
        
        $scope.isEditable = false;
        
        function bind(result){
            $scope.vm = result;
        }
        
        $scope.startEdit = function () {
            $scope.isEditable = true;
        };
        $scope.cancelEdit = function () {
            $scope.isEditable = false;
        };
        $scope.finishEdit = function () {
            // TODO save the model
            $scope.isEditable = false;
        };        
        
       MedicalService.get($stateParams.patientId)
       .then(bind);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
        };
    })
    
    .controller('AdminCtrl', function(Admin){
      Admin.initialize();  
    });
