(function(){
	"use strict";

	angular
	.module('meanCore')
	.config(route)
	;

  /* @ngInject */
  function route($stateProvider, $urlRouterProvider) {

  	console.log('lalalala', $stateProvider);
		$stateProvider
			.state('mean', {
				// url: "/core",
				abstract :true,
				// template: '<h1>MyTemplate</h1>'
				templateUrl: "modules/core/core.html",
				// controller: "contactNetsController"
			})
			.state('mean.core', {
				url: "/core",
				// abstract :true,
				// template: '<h1>MyTemplate</h1>'
				// templateUrl: "modules/core/core.html",
				// controller: "contactNetsController"
			});

		$urlRouterProvider.otherwise("/core");
			
  }

}());
