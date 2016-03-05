"use strict";

angular.module('app.controllers')

.controller('MenuCtrl', function ($scope, $state, PatientService) {
    $scope.showPatient = function () {
        $state.go('app.patient', {
            patientId: PatientService.currentId
        });
    };
});
