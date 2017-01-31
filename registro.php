<!DOCTYPE html>
<html lang="es">
<head>
	<title>Registro U-Net USB</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link href="CSS/Registro/registro.css" type="text/css" rel="stylesheet">
	<link rel="icon" type="image/ico" href="images/favicon.ico">

</head>
<body>

	<section class="formulario">
		

		<h2>REGISTRO</h2>
		<form action="" method="get" name="formulario" id="formulario">
			
			<div class="input">
				<input type="text" name="names" placeholder="Nombres" id="nombre"  autofocus class="inp"><span class="tooltip"></span>
			</div>

			<div class="input">
				<input type="text" name="last_names" placeholder="Apellidos" id="apellido" class="inp"><span class="tooltip"></span>
			</div>
			<div class="input">
				<input type="text" name="id-card" placeholder="Carnet(XX-XXX)" id="carnet" class="inp"><span class="tooltip"></span>
			</div>
			<div class="input">
				<input type="password" name="password" placeholder="Contraseña" id="contraseña" class="inp"><span class="tooltip"></span>
			</div>
			<div class="input">
				<input type="password" name="password_review" placeholder="Verifique su contraseña" id="contraseña_conf" class="inp"><span class="tooltip"></span>
			</div>
			<p class="in-b"><input type="checkbox" name="terminos" id="checkbox" class="in-b">He leído y acepto los <a href="#">términos y condiciones de servicio</a>.</p>
			<input class="btn" type="submit" name="sign-in" value="Crear cuenta" id="boton">
		
		</form>

	</section>

<script type="text/javascript" src="Javascript/validar_reg.js"></script>
<script type="text/javascript" src="Javascript/defaultForm.js"></script>

</body>
</html>