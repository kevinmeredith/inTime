	var optModule = angular.module('MyModule', []);

    function Controller($scope) { 	
		$scope.days = ["", "MON", "TUE", "WED", 
			"THU", "FRI", "SAT", "SUN"];		
			
		$scope.chargeNumbers =[1,2,3,4];
			
		$scope.addNewChargeNumber = function() { 
			$scope.chargeNumbers.push(1);
		}
	
	}