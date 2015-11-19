'use strict';

angular.module('myApp.view1', ['ngRoute','underscore'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','_',function($scope,_) { 
    $scope.list = [];
    $scope.list2 = [];
    $scope.model = [];
    $scope.model2 = [];
    $scope.isSelected = true;
    $scope.selectedCategory = '0';

    $scope.selectRight = selectRight;
    $scope.selectLeft =  selectLeft;
    $scope.reset = reset;
    $scope.clickCategory = clickCategory;
    $scope.selectedCategoryFilter = selectedCategoryFilter;
    $scope.isSelected = isSelected;
    
    $scope.feature = [{
        'active': true,
        'label': 'Indoor',
        'validFor':null,
        'value': 'Indoor'
      },{
        'active': true,
        'label': 'Outdoor',
        'validFor':null,
        'value': 'Outdoor'
      },{
        'active': true,
        'label': 'ECO',
        'validFor':null,
        'value': 'ECO'
      }];

    var updateList = function() {
      $scope.list.push({
        'active': true,
        'label': 'Air Conditioning',
        'validFor':'0',
        'value': 'Air Conditioning'
      },{
        'active': true,
        'label': 'Alarm System',
        'validFor':'0',
        'value': 'Alarm System'
      },{
        'active': true,
        'label': 'Balcony',
        'validFor':'1',
        'value': 'Balcony'
      },{
        'active': true,
        'label': 'Deck',
        'validFor':'1',
        'value': 'Deck'
      },{
        'active': true,
        'label': 'Garden',
        'validFor':'1',
        'value': 'Garden'
      },{
        'active': true,
        'label': 'Double glazed windows',
        'validFor':'2',
        'value': 'Double glazed windows'
      },{
        'active': true,
        'label': 'Greywater system',
        'validFor':'2',
        'value': 'Greywater system'
      },{
        'active': true,
        'label': 'Solar panels',
        'validFor':'2',
        'value': 'Solar panels'
      },{
        'active': true,
        'label': 'Ensuite',
        'validFor':'0',
        'value': 'Ensuite'
      },{
        'active': true,
        'label': 'Gas',
        'validFor':'0',
        'value': 'Gas'
      });
    };

    updateList();

    var temp_object = {};
   

    function selectRight() {
    	for (var i = 0; i < $scope.model.length; i++ ) {
	      	var featureKey = $scope.model[i].validFor;

	      	//$scope.model[i].index = i;

	      	//use temp_object to store the selection
	      	if (temp_object[featureKey] != undefined) {
	      		temp_object[featureKey].push($scope.model[i]);
	      	}else {
	      		var temp = [];
	      		temp.push($scope.model[i]);
	      		temp_object[featureKey] = temp;
	      	};
	      	
	      	//delete selected item from right hand side
	      	//todo: use index in list to delete
	      	for (var j = 0; j < $scope.list.length; j++ ) {
	      		if ($scope.list[j].label == $scope.model[i].label) {
	      			$scope.list.splice(j,1);
	      		};
	      	};
  		};

  		//sort left hand side temp object
      	for (var k = 0; k < Object.keys(temp_object).length; k++) {
      		if(temp_object[k] != undefined){
      			temp_object[k].sort(function(a,b) {
	      			if (a.label < b.label)
	      				return -1;
	      			if (a.label > b.label)
	      				return 1;
	      			return 0;
	      		});
      		}; 		
      	};

	  	//put item into left hand side
	  	$scope.list2 = [];
	  	for (var i = 0; i < $scope.feature.length; i++) {
	  		if (temp_object[i] != undefined) {
	  			$scope.list2.push($scope.feature[i]);
	  			
	  			for (var j = 0; j < temp_object[i].length; j++) {
	  				$scope.list2.push(temp_object[i][j]);
	  			};
	  			
	  		};
  		};
  	};

  	function selectLeft() {
  		var featureLength = [];
  		for (var i = 0; i < Object.keys(temp_object).length; i++) {
  			featureLength = temp_object[i];
  		}

  		//add seleted feature to right hand side and delete that item in left hand side
     	for (var i = 0; i < $scope.model2.length; i++) {
     		if ($scope.model2[i].validFor != null) {
     			$scope.list.push($scope.model2[i]);
     		};

     		for (var j = 0; j < $scope.list2.length; j++) {
     				if($scope.list2[j].label == $scope.model2[i].label) {
     					$scope.list2.splice(j,1);
     				};
     		};

     		//keep record in temp_object
			temp_object[$scope.model2[i].validFor] = _.reject(temp_object[$scope.model2[i].validFor], function(el) {
				return el.label == $scope.model2[i].label;
			});
     	};

     	//delete empty category
     	var isEmpty = true;
     	for (var i = $scope.list2.length - 1 ; i >= 0; i--) {
     		if ($scope.list2[i].validFor == null && $scope.list2.length == 1 && isEmpty == true) {
     			$scope.list2 = [];
     		}else if ($scope.list2[i].validFor == null && isEmpty == true) {
     			$scope.list2.splice(i,1);
     		}else if ($scope.list2[i].validFor != null) {
     			isEmpty = false;
     		}else if ($scope.list2[i].validFor == null && isEmpty == false) {
     			isEmpty = true;
     		};
     	};
    };

    function reset() {
      $scope.model = [];
      $scope.model2 = [];
    };

    function clickCategory(index) {
    	//console.log(index)
    	$scope.selectedCategory = index;
    };

    function selectedCategoryFilter(item) {
    	//console.log(selectedCategory);
    	return item.validFor == $scope.selectedCategory;
    };

    function isSelected(index) {
    	console.log(index);
    	if (index == $scope.selectCategory)
    		return "active";
    	return ;
    };

}]);