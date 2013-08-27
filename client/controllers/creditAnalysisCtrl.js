susFinanzasApp.controller('CreditAnalysisCtrl', function($scope){
	
	$scope.datosAnalisis = {
		tasaInteresEA: 0.00,
		tasaInteresMensual: 0.00,
		saldoCredito: 0.00,
		tiempoReal: 0,
		nCuotas: 0,
		cuotaMaxima: 0, 
		valorCuota: 0.00,
		incrementoMaximo: 0.00,
		coberturaTasa: 0.00,
		valorSeguro: 0.00
	};
		
	$scope.verTasaInteresMensual = function()
	{
		return $scope.datosAnalisis.tasaInteresEA > 0.00;
	};
	
	$scope.calcularTasaInteresMensual = function() 
	{
		$scope.datosAnalisis.tasaInteresMensual = ($scope.datosAnalisis.tasaInteresEA / 12) * 0.955;
	};
	
	$scope.verTablaAnalisis = function ()
	{
		return $scope.datosAnalisis.nCuotas > 0;
	};
	
	$scope.calcularTiempoReal = function()
	{
		var anios = Math.floor($scope.datosAnalisis.nCuotas / 12);
		var meses = $scope.datosAnalisis.nCuotas % 12;
		
		$scope.datosAnalisis.tiempoReal = anios + ' Años ' + meses + ' Meses';
		$scope.datosAnalisis.reduccion1 = (anios - 1) + ' Años ' + meses + ' Meses';
		$scope.datosAnalisis.reduccion2 = (anios - 2) + ' Años ' + meses + ' Meses';
		$scope.datosAnalisis.reduccion3 = (anios - 3) + ' Años ' + meses + ' Meses';
		$scope.datosAnalisis.reduccion4 = (anios - 4) + ' Años ' + meses + ' Meses';	
	};
	
	$scope.calcularCuotaMaxima = function()
	{
		$scope.datosAnalisis.cuotaMaxima = parseFloat($scope.datosAnalisis.ingresosMensuales) * 0.30;
	};
	
	$scope.mostrarCuotaMaxima = function()
	{
		return $scope.datosAnalisis.ingresosMensuales > 0 && $scope.datosAnalisis.ingresosMensuales;
	};
	
	$scope.$watch('[datosAnalisis.incrementoMaximo, datosAnalisis.valorCuota, datosAnalisis.coberturaTasa]', function(newValue) {
		$scope.totalCuotaIncrementada = parseFloat(newValue[0]) + parseFloat(newValue[1]) - parseFloat(newValue[2]);		
	    $scope.superaCuotaMaxima = $scope.totalCuotaIncrementada > $scope.datosAnalisis.cuotaMaxima;
	});
	
	$scope.CalcularIncrementoCuota = function (nCuotas) {
		debugger;
	  var tasa = $scope.datosAnalisis.tasaInteresMensual / 100;
	  return Math.round(($scope.datosAnalisis.saldoCredito * tasa) / (1 - Math.pow((1 + tasa), (-1) * nCuotas)), 2);
	}
	
	 
	
});
