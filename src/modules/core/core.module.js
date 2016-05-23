(function () {
	"use strict";

	var modules = [
		'ui.router', 
	  'ngSanitize', 
	  'ngAnimate',
	  'ngAria',
	  'ngMaterial',
	];

	/**
	* @ngdoc overview
	* @name index
	*
	* @description
	*
	* # Minimal App Example Config
	*   
	*
	*/

	angular
	.module('meanCore', modules)
	;

}());