"use strict";

angular.module('app.controllers')

.controller('PatientCtrl', function ($scope, $stateParams, $ionicModal, PatientService, CdsiService, CameraService) {

		$scope.vaccination = {
				cvxOptions: CdsiService.asOptions(),
				selectedCvx: {},
				dateAdministered: null
		};

		$scope.$on('$ionicView.beforeEnter', function () {
				if ($stateParams.patientId) {
						$scope.hasData = true;
						PatientService
								.read($stateParams.patientId)
								.then(function (result) {
										PatientService.currentId = result._id;
										$scope.vm = result;
								});
				} else {
						delete (PatientService.currentId);
						delete ($scope.vm);
				}
		});

		$ionicModal.fromTemplateUrl('templates/patient-edit.html', {
				scope: $scope,
				animation: 'slide-in-up'
		}).then(function (modal) {
				$scope.editModal = modal;
		});

		$ionicModal.fromTemplateUrl('templates/patient-vaccination.html', {
				scope: $scope,
				animation: 'slide-in-up'
		}).then(function (modal) {
				$scope.vaccinationModal = modal;
		});

		$ionicModal.fromTemplateUrl('templates/patient-image.html', {
				scope: $scope,
				animation: 'slide-in-up'
		}).then(function(modal) {
				$scope.imageModal = modal;
		});

		$scope.viewImage = function() {
				$scope.imageModal.show();
		};

		$scope.updateImage = function () {
				CameraService.getPicture().then(function(base64ImageEncoding) {
						$scope.vm.identity.picture = base64ImageEncoding;
						PatientService
								.save($scope.vm);
				}, function(err) {
						console.log(err);
				});

				console.log($scope.vm);
		};

		$scope.finishImageUpdate = function() {
				$scope.imageModal.hide();
		};

		$scope.startVaccination = function () {
				$scope.vaccination.dateAdministered =  new Date();
				$scope.vaccination.selectedCvx = $scope.vaccination.cvxOptions[0];
				$scope.vaccinationModal.show();
		};

		$scope.finishVaccination = function () {
				$scope.vm.medical.series.push({
						Cvx: $scope.vaccination.selectedCvx.code,
						VaccineName: $scope.vaccination.selectedCvx.desc,
						DateAdministered: $scope.vaccination.dateAdministered
				});
				$scope.finishEdit();
		};

		$scope.startEdit = function () {
				$scope.editModal.show();
		};

		$scope.finishEdit = function () {
				PatientService
						.save($scope.vm)
						.then(function () {
								$scope.editModal.hide();
								$scope.vaccinationModal.hide();
						});
		};

		$scope.cancelEdit = function () {
				PatientService
						.read($scope.vm._id)
						.then(function (result) {
								$scope.vm = result;
								$scope.editModal.hide();
								$scope.vaccinationModal.hide();
						});
		};

		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function () {
				$scope.editModal.remove();
				$scope.vaccinationModal.remove();
				$scope.imageModal.remove();
		});

		// Execute action on hide modal
		$scope.$on('modal.hidden', function () {
		});

		// Execute action on remove modal
		$scope.$on('modal.removed', function () {
		});
});
