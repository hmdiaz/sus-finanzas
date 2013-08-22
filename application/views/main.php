<!DOCTYPE html>
<html lang="en" ng-app="susFinanzasApp">
	<head>
		<meta charset="utf-8" />

		<title>Página Principal</title>
		<meta name="description" content="" />
		<meta name="author" content="Haroldo Diaz" />

		<link rel="stylesheet" href="client/css/normalize.css" />
		<link rel="stylesheet" href="client/integrated/bootstrap/css/bootstrap.min.css" />
		<script type="text/javascript" src="client/js/jquery.min.js"></script>
		<script type="text/javascript" src="client/js/angular.min.js"></script>
		<script type="text/javascript" src="client/integrated/bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="client/app.js"></script>
		<script type="text/javascript">
			$(document).on('ready', function(){
				console.log('Loaded');
			});
		</script>
	</head>

	<body>
		<div class="navbar">
		  <div class="navbar-inner">
		    <a class="brand" href="#">Sus Finanzas SAS</a>
		    <ul class="nav">
		      <li><a href="#/mainPage">Principal</a></li>
		      <li><a href="#/creditAnalysis">Estudio de Crédito</a></li>
		      <li><a href="#/generalQueries">Consultas</a></li>
		    </ul>
		  </div>
		</div>
		<div class="container" ng-view>
			
		</div>
		<script type="text/javascript" src="client/controllers/creditAnalysisCtrl.js"></script>
	</body>
</html>