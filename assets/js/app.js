 'use strict';

(function(){
	var HC = {};
 	var App = angular.module('myApp', ['ui.bootstrap']);
 	var $scope;


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
	 			var scope = angular.element(document.getElementById("table")).scope();
	 			scope.rows.push({name: $scope.name, city: $scope.city});
	 			$scope.rows = scope;
	 			
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