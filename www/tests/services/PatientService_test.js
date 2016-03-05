
describe('PatientService', function() {
	//use these to check if deep methods are called
	var getBool;
	var putBool;
	var getCatchBool;
	var putCatchBool;
	var fBQuery, fBThen, fBCatch;



	beforeEach(function( ) {
		module('app.services');
		module(function($provide) {
			$provide.service('CdsiData', function() {
				cvx: 1234
			});
			$provide.service('MedicalData', function() {
				design_docs: 'string that is design_docs'
			});
			$provide.service('pouchDB', function() {
				return function( ) {
					var definition = {
						query: function( ) {
							fBQuery = true;
							return {
								then: function(callback) {
									fBThen = true;

									callback({ rows: [1,2,3] });
									return {
										catch: function() {
											fBCatch = true;
										}
									}
								}
							}
						},
						get: function( id  ) {
							getBool = true;
							return {
								catch: function(err) {
									getCatchBool = true;
								}
							}
						},
						put: function( doc ) {
							putBool = true;
							return {
								catch: function(err) {
									putCatchBool = true;
								}
							}
						}
					}
					return definition;
				}
			});

			$provide.service('SettingsService', function( ) {
				dbOptions: {
					name:    'medical.db'
					adapter: 'websql'
				}
			});

		});
	});



	beforeEach( function() {
		getBool      = false;
		getCatchBool = false;
		putBool      = false;
		putCatchBool = false;
		fBQuery      = false;
		fBCatch      = false;
		fBThen       = false;
	});
	beforeEach( inject(function(_$log_, _pouchDB_, _SettingsService_, _PatientService_) {
		$log            = _$log_;
		pouchDB         = _pouchDB_;
		SettingsService = _SettingsService_;
		PatientService  = _PatientService_;
	}));

	it("Has a method called filter", function( ) {
		expect(PatientService.filter).toBeDefined();
	});

	it("has a method called read", function( ) {
		expect(PatientService.read).toBeDefined();
	});

	it("has a method called save", function( ) {
		expect(PatientService.save).toBeDefined();
	});

	it("calls db.get on call to read", function( ) {
		expect(getBool).toEqual(false);
		PatientService.read();
		expect(getBool).toEqual(true);
	});

	it("calls db.get.catch on call to read", function() {
		expect(getCatchBool).toEqual(false);
		PatientService.read();
		expect(getCatchBool).toEqual(true);
	});

	it("calls db.put on call to save", function( ) {
		expect(putBool).toEqual(false);
		PatientService.save();
		expect(putBool).toEqual(true);
	})
	it("calls db.put.catch on call to read", function() {
		expect(putCatchBool).toEqual(false);
		PatientService.save();
		expect(putCatchBool).toEqual(true);
	});

	it("calls through the query promise chain with a call to filter", function() {
		_ = {
			map: function( rows, callback) {
				callback( rows );
			}
		};

		expect(fBQuery).toEqual(false);
		expect(fBCatch).toEqual(false);
		expect(fBThen ).toEqual(false);

		PatientService.filter("A string");

		expect(fBQuery).toEqual(true);
		expect(fBCatch).toEqual(true);
		expect(fBThen ).toEqual(true);
	
	});

})
