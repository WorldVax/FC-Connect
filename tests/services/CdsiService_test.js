describe('CdsiService', function( ) {
	var dummyReturn = "wooo";
	beforeEach(function() {
		module('app.services');
		module(function($provide) {
			$provide.service('CdsiData', function() {
				cvx: 1234
			});
		});
	});

	beforeEach(inject(function(_$log_, _CdsiData_, _CdsiService_) {
		$log        = _$log_;
		CdsiData    = _CdsiData_;
		CdsiService = _CdsiService_;
	}));

	beforeEach( function() {

		var filterItem = { //you may need to change this to test branches
			VaccineStatus: "Active",
			NonVaccine:    false
		};

		var mapItem = {
			CvxCode:     1234,
			Description: "A vaccine against illnesses",
			VaccineName: "Josh's super effective Vaccine for all the diseases",
			Note:        "Not for human consumption"
		};

		var sortItem = mapItem;

		_ = {
			chain: ( data ) => {
				return {
					filter: ( callback ) => {
						callback( filterItem );
						return {
							map: function( callback ) {
								callback( mapItem );
								return {
									sortBy: function( callback ) {
										callback(sortItem);
										return {
											value: function( ){
												return dummyReturn;
											}
										}
									}
								}
							}
						}
		     		}
				}
			}
		};

	});

	it("returns an object with 'asOptions' defined", function() {
		expect(CdsiService.asOptions).toBeDefined();
	});

	it("calls _ with an asOptions call", function( ) {

		var returnFromAsOptions = CdsiService.asOptions();

		expect(returnFromAsOptions).toEqual(dummyReturn);

	});

});
