var webApp = angular.module('webApp', [])
	.config(function ($routeProvider) {
		$routeProvider
			.when('', 
				{
					template: '', 
					controller: ''
				})
			.when('', 
				{				
					template: '', 
					controller: ''
				})
			.othewise({ redirectTo: '/' })
});