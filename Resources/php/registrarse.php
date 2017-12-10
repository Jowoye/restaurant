<?php
	$dbc = mysqli_connect('localhost:8080','root','','restaurant')
	or die('Error conectado a MYSQL');
	
	$nombre = $_POST['nombre'];
	$pass = $_POST['password'];
    $correo = $_POST['correo'];
	$link = "<script>window.open(\"https://restaurant-happy-chef.herokuapp.com/Login.html\")</script>";

	
	$query = "INSERT INTO `registro`(`nombre`, `contrasenna`, `correo`) VALUES('$nombre', '$pass' ,'$correo')";
	
	mysqli_query($dbc, $query)
	or die ('Error ejecutando query en la BD');
	
	echo 'Registro exitoso', $link;
	
	mysqli_close($dbc);
	
?>