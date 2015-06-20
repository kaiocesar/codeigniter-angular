 'use strict';

 var App = angular.module('myApp', ['ui.bootstrap']);

 function FormController($scope, $http) {
 	$scope.name = undefined;
 	$scope.city = undefined;
 	$scope.message = undefined;

 	$scope.submitForm = function() {
 		console.log("posting data ...");
 		$http({
 			method: 'POST',
 			url: '/modelo/index.php/users/add',
 			headers: {
 				"Content-Type" :  "application/json"
 			},
 			data: JSON.stringify({name: $scope.name, city: $scope.city})
 		}).success(function(data){ 			
 			alertify.alert('Status message', data.status);
 			//$scope.message = data.status;
 		});
 	}
 }


App.controller('FormController', FormController);