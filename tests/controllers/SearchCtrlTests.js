describe('SearchCtrl', function( ) {

	var $controller;
	var $scope;
	var SearchCtrl;
	var PatientService;

	beforeEach( module('app.controllers') );
	beforeEach( module('app.services')    );
	beforeEach( module( function($provide) {
		$provide.value('PatientService', {
			currentId: 1337,
			filter:    function( ) {
				return { then: function(callBack) { return callBack( ); } }
			},
			read: function() {
				return { then: function(callBack) { return callBack( ); } }
			}
		});
	}));
	beforeEach( inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	beforeEach( inject(function(_$timeout_) {
		$timeout = _$timeout_;
	}));

	beforeEach( inject(function(_$rootScope_) {
		$scope = _$rootScope_.$new();
	}));

	beforeEach( inject( function(_PatientService_) {
		PatientService = _PatientService_;
	}));


	//init controller
	beforeEach( function( ) {
		spyOn($timeout, 'cancel');

		SearchCtrl =
			$controller('SearchCtrl', {	$scope: $scope,
										$timeout: $timeout,
										PatientService: PatientService } );
	});

	it("puts object 'vm' on scope", function( ) {

		expect($scope.vm).toBeDefined();
		expect($scope.vm.patients).toBeDefined();
		expect($scope.vm.query).toBeDefined( );

	});

	it("puts 'onSearch' on scope", function( ) {
		expect($scope.onSearch).toBeDefined();
	});


	it("Calls PatientService filter onSearch", function( ) {

		spyOn(PatientService, 'filter').and.callFake( function( ) { return { then: function() { } } } );
		// make sure if block will execute
		$scope.vm.query = "A string to query";
		expect($scope.vm.query).not.toBeFalsy();

		$scope.onSearch();
		expect(PatientService.filter).toHaveBeenCalled();

	});

	it("calls onSearch sometime after a change to the vm.query searchbox", function(){

		$scope.vm = SearchCtrl;

		spyOn($scope, 'onSearch');
		$scope.$apply('vm.query="A"');
		$scope.$digest( );

		$scope.$apply('vm.query="AB"');
		$scope.$digest( );
		window.setTimeout( ( ) => {
			expect($scope.onSearch).toHaveBeenCalled();
		}, 750);

	});

	it("calls $timeout.cancel if a change to vm.query occurs within a timeframe", function( ) {

		$scope.vm = SearchCtrl;

		spyOn($scope, 'onSearch');
		$scope.$apply('vm.query="A"');
		$scope.$digest( );

		$scope.$apply('vm.query="AB"');
		$scope.$digest( );

		expect($timeout.cancel).toHaveBeenCalled();
	});


	it("completes a promise chain when onSearch is called", function() {

		$scope.vm.query = "A name to search for."; //set truthy for if
		$scope.onSearch();

	});

	it("does not access patientService onSearch if search query is not truthy", function() {

		$scope.vm.query = "";

		spyOn(PatientService, "filter");
		$scope.onSearch();
		expect(PatientService.filter).not.toHaveBeenCalled();

	});
});
