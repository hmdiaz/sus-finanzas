var susFinanzasApp = angular.module('susFinanzasApp', [])
	.config(function($routeProvider, $provide){
		$routeProvider
			.when('/creditAnalysis', {
				controller: 'CreditAnalysisCtrl',
				templateUrl: 'client/templates/creditAnalysis.html'
			})
			.when('/mainPage', {
				controller: 'mainPageCtrl',
				templateUrl: 'client/templates/mainPage.html'
			})
			.when('/generalQueries', {
				controller: '',
				templateUrl: 'client/'
			})

			.otherwise({ redirectTo: '/mainPage' })
	});
