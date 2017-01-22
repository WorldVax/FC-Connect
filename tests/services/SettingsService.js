// removed to test settings service independant of previous mock
describe('SettingsService', function( ) {
	var loadThen, loadCall, destroyCall, destroyThen;
	beforeEach(function() {
		module('app.services');

		module(function($provide) {

			$provide.service('MedicalData', function() {
				design_docs: 'string that is design_docs'
			});

			$provide.service('pouchDB', function() {
				return function( ) {
					var definition = {
						query: function( ) {
							// fBQuery = true;
							return {
								then: function(callback) {
									// fBThen = true;

									callback({ rows: [1,2,3] });
									return {
										catch: function() {
											// fBCatch = true;
										}
									}
								}
							}
						},
						get: function( id  ) {
							// getBool = true;
							return {
								catch: function(err) {
									// getCatchBool = true;
								}
							}
						},
						put: function( doc ) {
							// putBool = true;
							return {
								catch: function(err) {
									// putCatchBool = true;
								}
							}
						},
						info: function( ) {
							return {
								then: function( callback ) {
									return callback( );
								}
							}
						},
						bulkDocs: function( ) {
							loadCall = true;
							return {
								then: function( callback ) {
									loadThen = true;
									return callback( );
								}
							}
						},
						destroy: function() {
							destroyCall = true;
							return {
								then: function( callback ) {
									destroyThen = true;
									callback( );
								}
							}
						}
					}
					return definition;
				}
			});

		});
	});


	beforeEach(inject(function(_$log_, _pouchDB_, _MedicalData_, _SettingsService_) {
		$log            = _$log_;
		pouchDB         = _pouchDB_;
		MedicalData     = _MedicalData_;
		SettingsService = _SettingsService_;
	} ) );
	beforeEach( function( ) {
		loadCall = false;
		loadThen = false;
		destroyCall = false;
		destroyThen = false;
	})

	it("has a method calld infoDb" , function( ) {
		expect(SettingsService.infoDb).toBeDefined();
	});

	it("has a method called replicate", function() {
		expect(SettingsService.replicate).toBeDefined();
		SettingsService.replicate(); //for coverage, method was stubbed when I wrote this
		// I wrote this note because I *know* this may give you a headache.
		// I'm a horrible person.
	});

	it("has a method called loadDb that aliases a pouchDB load sequence", function( ) {

		expect(SettingsService.loadDb).toBeDefined();
		expect(loadCall).toEqual(false);
		expect(loadThen).toEqual(false);
		SettingsService.loadDb();

		expect(loadCall).toEqual(true);
		expect(loadThen).toEqual(true);

	});

	it("has a method called createDb that aliases a pouchDB destroy load sequence", function() {

		expect(SettingsService.createDb).toBeDefined();

		expect(loadCall).toEqual(false);
		expect(loadThen).toEqual(false);
		expect(destroyCall).toEqual(false);
		expect(destroyThen).toEqual(false);

		SettingsService.createDb();

		expect(loadCall).toEqual(true);
		expect(loadThen).toEqual(true);
		expect(destroyCall).toEqual(true);
		expect(destroyThen).toEqual(true);

	});



});
