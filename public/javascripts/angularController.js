var app = angular.module('mainApp', []);

app.controller('customer', function($scope, $http){
	$http.get('http://localhost:3000/customers').success(function(res){
		$scope.customers = res;
	});
})