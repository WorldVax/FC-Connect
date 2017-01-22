describe('HomeCtrl', function( ) {

		var $controller;

		beforeEach( module('app.controllers') );

		beforeEach( inject(function(_$controller_) {
			$controller = _$controller_;
		}))

		it("puts method goSearch on $scope", function( ) {
			var $scope   = { };
			var $state   = { };

			var myController = $controller('HomeCtrl', {$scope: $scope, $state: $state} );
			expect($scope.goSearch).toBeDefined( );

		});

		it("creates $scope.goSearch to call $state.go", function( ) {
			var $scope   = { };
			var $state   = { };
				$state.go = jasmine.createSpy( "Method Go!" );
			var myController = $controller('HomeCtrl', {$scope: $scope, $state: $state} );

			$scope.goSearch();
			expect($state.go).toHaveBeenCalled( );
			expect($state.go).toHaveBeenCalledWith('app.search');

		});
});
