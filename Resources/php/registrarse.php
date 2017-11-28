<?php
	$dbc = mysqli_connect('localhost','root','','restaurant')
	or die('Error conectado a MYSQL');
	
	$nombre = $_POST['nombre'];
	$pass = $_POST['password'];
    $correo = $_POST['correo'];
	
	
	$query = "INSERT INTO `registro`(`nombre`, `contrasenna`, `correo`) VALUES('$nombre', '$pass' ,'$correo')";
	
	mysqli_query($dbc, $query)
	or die ('Error ejecutando query en la BD');
	
	echo 'Registro exitoso';
	
	mysqli_close($dbc);
	
?>