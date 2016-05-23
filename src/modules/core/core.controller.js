(function () {
	"use strict";

	angular
	.module('meanCore')
	.controller('meanCoreController', controller)
	;

	/* @ngInject */
	function controller($scope, $http) {
		console.log('Scope meanCoreController', this);
		console.log($scope);
		this.newTest = 'testing!';
		this.hola = 'asfasf';
		$http.get('/api/todos/').then(function() {
			console.log('first get to express');
		}, function () {
			console.log('first get to express fail =)');
		})
	}

}());