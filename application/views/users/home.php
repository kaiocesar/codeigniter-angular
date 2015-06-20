<!DOCTYPE html>
<html>
<head>
	<title>Codeigniter with Angular.js</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/js/css/alertify.css">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/alertify.min.js"></script>
</head>
<body>

	<div class="container" ng-app="myApp">
		<section>
			<form class="form-inline" ng-controller="FormController" ng-submit="submitForm()" role="form" method="post">
				<div class="form-group">
					<label class="sr-only" for="Source Station">Insert Your Name</label>
					<input type="text" class="form-control" placeholder="Insert your name" ng-model="name"></input>
				</div>
				<div class="form-group">
					<label class="sr-only" for="Source Station">Insert Your City</label>
					<input type="text" class="form-control" placeholder="Insert your city" ng-model="city"></input>
				</div>

				<button type="submit" class="btn btn-default btn-primary">Submit Record</button>
				<pre style="display:none;">{{ message }}</pre>
			</form>
		</section>			
	</div><!-- .container -->


	<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/app.js"></script>

</body>
</html>