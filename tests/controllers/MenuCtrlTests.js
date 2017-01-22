describe('MenuCtrl', function( ) {

	var $controller;

	beforeEach( module('app.controllers') );

	beforeEach( inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	it("puts method showPatient on $scope", function( ) {
		var $scope = { };
		var $state = { };
			$state.go = jasmine.createSpy( "Method $state.Go!" );
		var PatientService = { };
		var menuCtrl = $controller('MenuCtrl', {$scope: $scope, $state: $state, PatientService: PatientService } );
		expect($scope.showPatient).toBeDefined( );

	});

	it("puts method showPatient that calls state.go", function( ) {

		var $scope = { };
		var $state = { };
			$state.go = jasmine.createSpy( "Method $state.Go!" );
		var PatientService = { };
			PatientService.currentId = 1337;
		var menuCtrl = $controller('MenuCtrl', { $scope: $scope, $state: $state, PatientService: PatientService } );

		$scope.showPatient();

		expect($state.go).toHaveBeenCalled();
		expect($state.go).toHaveBeenCalledWith( 'app.patient', {
							patientId: 1337} );
		expect($state.go).not.toHaveBeenCalledWith( 'app.patient', {
			patientId: 7331} );

	});

});
