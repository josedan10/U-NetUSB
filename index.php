<!DOCTYPE html>
<html lang="es">
<head>
	<title>U-Net USB</title>
	<link rel="stylesheet" type="text/css" href="CSS/Ingreso/ingreso.css">
	<link rel="stylesheet" type="text/css" href="CSS/icons/style.css">
	<link rel="icon" type="image/ico" href="images/favicon.ico">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<body>
<div class="content">
	<div class="main">
	  <h2>ACCEDE</h2>
			<form action="" method="get" name="formulario" id="formulario">
	        	<div class="input b">
					<span class="icon icon-v-card in-b"></span><input type="text" name="username" placeholder="Carnet (XX-XXX)" id="carnet" class="in-b"><span class="tooltip" name="tooltip"></span>
				</div>

				<div class="input b">
					<span class="icon icon-key in-b"></span><input type="password" name="password" placeholder="Contraseña" id="contraseña" class="in-b"><span class="tooltip" name="tooltip"></span>
				</div>

				<input type="submit" name="login" value="Iniciar Sesión" class="btn center"><!-- Debo sustituir estos estilos en CSS -->
	      
			</form>

			<p class="b">¿No tienes cuenta? <a href="registro.php">Regístrate</a></p><p class="b">¿Olvidaste tu contraseña? <a href="#">Recupérala</a></p>
	</div>
	<footer class="b">Desarrollado por J. Quintero e I. Ibarra</footer>
</div>

	
<script type="text/javascript" src="Javascript/validar_ingreso.js"></script>
<script type="text/javascript" src="Javascript/defaultIngreso.js"></script>
</body>
</html>