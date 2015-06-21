 'use strict';

//  var App = angular.module('myApp', ['ui.bootstrap']);

//  function FormController($scope, $http) {
//  	$scope.name = undefined;
//  	$scope.city = undefined;
//  	$scope.message = undefined;

//  	$scope.submitForm = function() { 		
//  		$http({
//  			method: 'POST',
//  			url: '/modelo/index.php/users/add',
//  			headers: {
//  				"Content-Type" :  "application/json"
//  			},
//  			data: JSON.stringify({name: $scope.name, city: $scope.city})
//  		}).success(function(data){
//  			alertify.notify(data.message, data.status, 5, function() { console.log(data.message); });
//  		});
//  	}
//  }


// function TableViewController($scope, $http) {
// 	$http({
// 		method: 'POST',
// 		url: '/modelo/index.php/users/listAll',
// 		headers: {"Content-Type":"application/json"},
// 	}).success(function(data){
// 		$scope.rows = data;
// 	});
// }

// App.controller('TableViewController', TableViewController);
// App.controller('FormController', FormController);

(function(){
	var HC = {};
 	var App = angular.module('myApp', ['ui.bootstrap']);


	HC.FormController = function($scope, $http) {
	 	$scope.name = undefined;
	 	$scope.city = undefined;
	 	$scope.message = undefined;

	 	$scope.submitForm = function() { 		
	 		$http({
	 			method: 'POST',
	 			url: '/modelo/index.php/users/add',
	 			headers: {
	 				"Content-Type" :  "application/json"
	 			},
	 			data: JSON.stringify({name: $scope.name, city: $scope.city})
	 		}).success(function(data){	 			
	 			alertify.notify(data.message, data.status, 5, function() { console.log(data.message); });
	 		});
	 	}
	};


	HC.TableViewController = function($scope, $http) {
		$http({
			method: 'POST',
			url: '/modelo/index.php/users/listAll',
			headers: {"Content-Type":"application/json"},
		}).success(function(data){
			$scope.rows = data;
		});
	};

	App.controller('TableViewController', HC.TableViewController);
	App.controller('FormController', HC.FormController);

	return HC;

})();