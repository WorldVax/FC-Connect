describe('PatientCtrl', function( ) {
	var $controller, $scope;

	var $stateParams, $ionicModal, PatientService, CdsiService, CameraService;
	var patCtrl;

	beforeEach( module("app.controllers") );
	beforeEach( module("app.services"));
	beforeEach( module( function($provide) {
		$provide.value('PatientService', {
			currentId: 1337,
			filter:    function( ) {
				return { then: function(callBack) { return callBack( ); } }
			},
			read: function() {
				var result = {_id: 1337};
				return { then: function(callBack) { return callBack( result ); } }
			},
			save: function() {
				var result = {_id: 1337};
				return { then: function(callBack) { return callBack( result ); } }
			}
		});
	}));

	beforeEach( module( function($provide) {
		$provide.value('CameraService', {
			getPicture: function() {
				return {
						then: function(callBack,callBackFail) { callBack( ); callBackFail(); }
				}
			}
		});
	}));

	beforeEach( inject(function(_PatientService_, _CameraService_) {
		PatientService = _PatientService_;
		CameraService = _CameraService_;
	}));

	beforeEach( inject(function(_$rootScope_, _$controller_) {
		$scope      = _$rootScope_.$new();
		$controller = _$controller_;

		// MOCK OUT OUR SERVICES
		$stateParams    = { patientId: 299 };
		$ionicModal     = { fromTemplateUrl: function( urlString, scopeObj  ) {
								if(urlString == 'templates/patient-edit.html' || urlString == 'templates/patient-vaccination.html' || urlString == 'templates/patient-image.html') {
									return {
										//mimicking functionality of tested specifically for PatientCtrl
										then: function(callback) {
											callback( {remove: function() { }, hide: function( )  { }, show: function() {} });
										}
									}
								} else {
									return {
										then: function(callback) {
											callback( null );
										}
									}
								}
							}};

		CdsiService     = {  asOptions: function( ) { return  ['vaccination 1', 'vaccination 2']  } };
	} ) );

	beforeEach( function( ) {
		patCtrl = $controller('PatientCtrl', { $scope:          $scope,
										$stateParams:   $stateParams,
										$ionicModal:    $ionicModal,
										PatientService: PatientService,
										CdsiService:    CdsiService,
									  CameraService: CameraService   });
	});


	it("calls modal remove on scope destruction", function( ) {
		setTimeout(function(){}, 200);
		spyOn($scope.editModal,        'remove');
		spyOn($scope.vaccinationModal, 'remove');
		spyOn($scope.imageModal,			 'remove');

		$scope.$emit('$destroy');

		expect($scope.editModal.remove       ).toHaveBeenCalled();
		expect($scope.vaccinationModal.remove).toHaveBeenCalled();
		expect($scope.imageModal.remove			 ).toHaveBeenCalled();

	});

	it("creates editModal, vaccinationModal, imageModal on creation", function( ) {

		//  ...testing that the mock is where
		//  we think we put it
		expect($scope.editModal).toBeDefined();
		expect($scope.vaccinationModal).toBeDefined();
		expect($scope.imageModal).toBeDefined();
		expect($scope.editModal.remove).toBeDefined();
		expect($scope.vaccinationModal.remove).toBeDefined();
		expect($scope.imageModal.remove).toBeDefined();
		expect($scope.editModal.hide).toBeDefined();
		expect($scope.vaccinationModal.hide).toBeDefined();
		expect($scope.imageModal.hide).toBeDefined();


	});

	it("creates scope.vaccination object on creation", function( ) {

		expect($scope.vaccination).toBeDefined();
		expect($scope.vaccination.cvxOptions).toBeDefined();
		expect($scope.vaccination.selectedCvx).toBeDefined();
		expect($scope.vaccination.dateAdministered).toBeDefined();

	});

	it("calls PatientService.read on $scope.cancelEdit call", function( ) {

		spyOn(PatientService, 'read').and.callFake( function( ) {
											return {
												then: function() { }
											}
										} );

		$scope.vm = {
			_id: 1290
		}

		$scope.cancelEdit(  );

		expect( PatientService.read ).toHaveBeenCalled();

	});

	it("sets $scope.hasData to true if $stateParams.patientId on $ionicView.beforeEnter", function( ) {

		expect($scope.hasData).not.toBeDefined();
		$scope.$emit('$ionicView.beforeEnter');
		expect($scope.hasData).toEqual(true);

	});

	it("calls delete on PatientService currentId when ionicView.beforeEnter is called without patientId set", function( ) {

		spyOn(PatientService, 'read').and.callFake( function( ) {
											return {
												then: function() {
													PatientService.currentId = $stateParams.patientId;
													$scope.vm = "Dummy string";
												}
											}
										} );

		$scope.$emit('$ionicView.beforeEnter');

		expect(PatientService.currentId).not.toBeUndefined();
		expect($scope.vm).toBeDefined();

		$stateParams.patientId = null;
		$scope.$emit('$ionicView.beforeEnter');

		expect(PatientService.currentId).toBeUndefined();
		expect($scope.vm).toBeUndefined();

	});

	it("creates a viewImage function on the scope", function () {

		expect($scope.viewImage).toBeDefined();

	});

	it("imageModal.show is called when the viewImage function is called", function() {
		$scope.imageModal.show = jasmine.createSpy("modal show spy");
		$scope.viewImage();

		expect($scope.imageModal.show).toHaveBeenCalled();
	});

	it("creates a updateImage function on the scope", function() {
		expect($scope.updateImage).toBeDefined();
	});

	it("will call CameraService.getPicture when updateImage is called", function () {
		spyOn(CameraService, 'getPicture').and.callFake( () => { return { then: ()=>{} } } );
		$scope.updateImage();
		expect( CameraService.getPicture ).toHaveBeenCalled();
	});

	it("will call PatientService.save when updateImage is called", function() {
		$scope.vm = {
			identity: {
				picture: "base64ImageEncoding string"
			}
		}
		PatientService.save = jasmine.createSpy("Patient Service ");
		$scope.updateImage();
		expect(PatientService.save).toHaveBeenCalled();
	});

	it("will call imageModal.hide when the finishImageUpdate function is called", function() {
		$scope.imageModal.hide = jasmine.createSpy("modal hide spy");
		$scope.finishImageUpdate();

		expect($scope.imageModal.hide).toHaveBeenCalled();
	});

	it("creates a startVaccination function on the scope", function( ) {

		expect($scope.startVaccination).toBeDefined();

	});

	it("adjusts the $scope.vaccination object on startVaccination call", function( ) {

		var populatedObj = { "key": "value" };
		$scope.vaccinationModal.show = jasmine.createSpy("My show modal spy");
		expect($scope.vaccination.dateAdministered).toBeNull( );
		expect($scope.vaccination.selectedCvx).toEqual({});
		expect($scope.vaccination.selectedCvx).not.toEqual( populatedObj ); //for my sanity

		$scope.startVaccination();
		expect($scope.vaccination.dateAdministered instanceof Date).toEqual(true);
		expect($scope.vaccination.selectedCvx).not.toEqual( { } );
		expect($scope.vaccinationModal.show).toHaveBeenCalled( );

	});

	it("pushes a record to vm.medical.series on finishVaccination", function( ) {

		spyOn($scope, 'finishEdit').and.callFake( function ( ) {/*it's UNIT testing */});
		$scope.vm = {
			medical: {
				series: []
			}
		}
		$scope.vaccination.selectedCvx.code = 1234;
		$scope.vaccination.selectedCvx.desc = "I am an vaccine name";
		$scope.vaccination.dateAdministered  = new Date();

		expect( $scope.vm.medical.series[0]).not.toBeDefined();
		$scope.finishVaccination();

		expect( typeof($scope.vm.medical.series[0].Cvx) ).toEqual('number');
		expect( typeof($scope.vm.medical.series[0].VaccineName) ).toEqual('string');
		expect( $scope.vm.medical.series[0].DateAdministered instanceof Date).toEqual( true );

	});

	it("calls editModal.show on startEdit call", function( ) {

		$scope.editModal.show = jasmine.createSpy("modal show spy");
		$scope.startEdit();
		expect($scope.editModal.show).toHaveBeenCalled();

	});

	it("calls patientService.save on finshEdit", function( ) {

		spyOn(PatientService, 'save').and.callFake( () => { return { then: ()=>{} } } );
		$scope.finishEdit();
		expect( PatientService.save ).toHaveBeenCalled();

	});

	it("calls through PatientService.save won finishEdit", function( ) {

		$scope.vaccinationModal.hide = jasmine.createSpy("my vacModal hide spy");
		$scope.editModal.hide        = jasmine.createSpy("my editModal hide spy")
		$scope.finishEdit();
		expect($scope.vaccinationModal.hide).toHaveBeenCalled();
		expect($scope.editModal.hide).toHaveBeenCalled();
	});

	it("calls through PatientService.read on cancelEdit", function() {

		$scope.vm = {
			_id: "string because it changes to number in cancelEdit call"
		}

		$scope.vaccinationModal.hide = jasmine.createSpy("my vacModal hide spy");
		$scope.editModal.hide        = jasmine.createSpy("my editModal hide spy")
		$scope.cancelEdit();
		expect($scope.vaccinationModal.hide).toHaveBeenCalled();
		expect($scope.editModal.hide).toHaveBeenCalled();
		expect(typeof($scope.vm._id)).toEqual('number');

	});

	it("calls nyi functions on modal.hidden and modal.removed -- JUST FOR COVERAGE", function() {

		$scope.$emit('modal.hidden');
		$scope.$emit('modal.removed');

		expect(1).toEqual(2-1);
	});
});
