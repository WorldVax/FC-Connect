"use strict";

angular.module('app.controllers')

.controller('MenuController', function ($scope, $state, PatientService) {
    $scope.showPatient = function () {
        $state.go('app.patient', {
            patientId: PatientService.currentId
        });
    };
    $scope.addPatient = function () {
        $state.go('app.addpatient', {
            patientId: null
        });
    }
});
