<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Perfil</title>
	<!-- <link rel="stylesheet" type="text/css" href="profile.css"> -->
	<link rel="stylesheet" type="text/css" href="CSS/Perfil/perfil.css">
	<!-- En plantilla.css solo necesito los estilos del menu de navegación. Estoy
	extrayendo información de más-->
	<link rel="stylesheet" type="text/css" href="CSS/icons/style.css">
	<link rel="icon" type="image/ico" href="images/favicon.ico">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

</head>
<body>

	<div class="content">

			<?php include'plantillas/header.php'; ?>
			<?php include'mainprofile.php'; ?>
			<?php include'plantillas/chat.php'; ?>
				
			</div>
	<script type="text/javascript" src="Javascript/desplegar_chat.js" ></script>
	<script type="text/javascript" src="Javascript/buscar.js"></script>

</body>
</html>