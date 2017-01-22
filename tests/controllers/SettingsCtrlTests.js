describe('SettingsCtrl', function( ) {

	var $controller;
	var $scope;
	beforeEach( module('app.controllers') );

	beforeEach( inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	beforeEach( inject(function(_$rootScope_) {
		$scope = _$rootScope_.$new( );
	}));

	it("accesses SettingsService infoDb on ionicView.beforeEnter event", function() {
		SettingsService = { };
		SettingsService.dbInfo = false;
		var infoDbCalled = false;

		SettingsService.infoDb = function( ) {
			infoDbCalled = true;
			self.dbInfo = { key: 'value' };
		}

		spyOn(SettingsService, 'infoDb');
		var SettingsCtrl = $controller('SettingsCtrl', { $scope: $scope, SettingsService: SettingsService} );

		expect(SettingsService.dbInfo).toEqual(false);

		$scope.$emit('$ionicView.beforeEnter');
		expect(SettingsService.infoDb).toHaveBeenCalled();

	});

	it("attaches SettingsService to the scope", function( ) {
		SettingsService = { };
		SettingsService.dbInfo = false;
		SettingsService.infoDb = function( ) {
			self.dbInfo = { key: 'value' };
		}

		var SettingsCtrl = $controller('SettingsCtrl', { $scope: $scope, SettingsService: SettingsService} );
		expect($scope.settings).toBeDefined();
		expect($scope.settings.infoDb).toBeDefined();

	});

	it("does not call SettingsService.infoDb if dbInfo is truthy", function( ) {

		SettingsService = { };
		SettingsService.dbInfo = "a string that says we already have the info";
		SettingsService.infoDb = function( ) {
			self.dbInfo = { key: 'value' };
		}
		spyOn( SettingsService, 'infoDb');


		$scope.$emit('$ionicView.beforeEnter');
		expect(SettingsService.infoDb).not.toHaveBeenCalled();

	});



});
