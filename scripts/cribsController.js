angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {

		$scope.cribs;

		cribsFactory.getCribs().then(function(data) {
			$scope.cribs = data.data;
		});

		$scope.sayHello = function() {
			console.log("Hello");
		}
	});