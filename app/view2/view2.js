'use strict';

angular.module('myApp.view2', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
	var value = Math.floor((Math.random() * 100) + 1);
	$scope.dynamic = value;
	$scope.type1 = 'success';
	$scope.type2 = 'success';
	$scope.type3 = 'success';
	$scope.value1 = 50;
	$scope.value2 = 60;
	$scope.value3 = 90;
	$scope.barOptions = [
	{name:'#progress 1', index: '1'},
	{name:'#progress 2', index: '2'},
	{name:'#progress 3', index: '3'}];

	$scope.barSelection = $scope.barOptions[0];

	$scope.minus25 = minus25;
	$scope.minus10	= minus10;
	$scope.add25 = add25;
	$scope.add10 = add10;

	function minus25() {
		if ($scope.barSelection.index == '1') {
			if($scope.value1 >= 25) {
				$scope.value1 -= 25;
			}else {
				$scope.value1 = 0; 
			}			
		}else if ($scope.barSelection.index == '2') {
			if($scope.value2 >= 25) {
				$scope.value2 -= 25;
			}else {
				$scope.value2 = 0; 
			}	
		}else if ($scope.barSelection.index == '3') {
			if($scope.value3 >= 25) {
				$scope.value3 -= 25;
			}else {
				$scope.value3 = 0; 
			}	
		}
	};

	function minus10() {
		if ($scope.barSelection.index == '1') {
			if($scope.value1 >= 10) {
				$scope.value1 -= 10;
			}else {
				$scope.value1 = 0; 
			}	
		}else if ($scope.barSelection.index == '2') {
			if($scope.value2 >= 10) {
				$scope.value2 -= 10;
			}else {
				$scope.value2 = 0; 
			}	
		}else if ($scope.barSelection.index == '3') {
			if($scope.value3 >= 10) {
				$scope.value3 -= 10;
			}else {
				$scope.value3 = 0; 
			}	
		}
	};

	function add25() {
		if ($scope.barSelection.index == '1') {
			$scope.value1 += 25;
			if ($scope.value1 >= 100) {
				$scope.type1 = "danger";
			};
		}else if ($scope.barSelection.index == '2') {
			$scope.value2 += 25;
			if ($scope.value2 >= 100) {
				$scope.type2 = "danger";
			};
		}else if ($scope.barSelection.index == '3') {
			$scope.value3 += 25;
			if ($scope.value3 >= 100) {
				$scope.type3 = "danger";
			};
		}
	};

	function add10() {
		if ($scope.barSelection.index == '1') {
			$scope.value1 += 10;
			if ($scope.value1 >= 100) {
				$scope.type1 = "danger";
			};
		}else if ($scope.barSelection.index == '2') {
			$scope.value2 += 10;
			if ($scope.value2 >= 100) {
				$scope.type2 = "danger";
			};
		}else if ($scope.barSelection.index == '3') {
			$scope.value3 += 10;
			if ($scope.value3 >= 100) {
				$scope.type3 = "danger";
			};
		}
	};

}]);