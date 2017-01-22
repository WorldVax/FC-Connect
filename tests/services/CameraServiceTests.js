describe("CameraService" , function () {
	var scopedBool;
	beforeEach( function() {
		scopedBool = false;
	});
	beforeEach( module(function($provide) {
		$provide.value('$q', {
			defer: function() {
					scopedBool = true;
					return {
					resolve: () => {},
					reject:  () => {},
					promise: "promise"
				}
			}
		});
	}));
	beforeEach( function () {
		module('app.services');
	});

	beforeEach(
		inject(function (_$q_, _CameraService_) {
			$q = _$q_;
			CameraService = _CameraService_;
		}));

	it("should have a function named getPicture", function() {
		expect(CameraService.getPicture).toBeDefined();
	});

	it("will call q.defer() when getPicture is called", function() {
		scopedBool = false;
		navigator.camera = {
			getPicture: function(callBack,Failed,options) {
				callBack();
				Failed();
			}
		}
		// spyOn($q, 'defer');
		CameraService.getPicture();
		// expect($q.defer).toHaveBeenCalled();
		expect(scopedBool).toEqual(true);
	});
});
