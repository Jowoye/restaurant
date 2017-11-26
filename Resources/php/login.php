<?php
	$dbc = mysqli_connect('localhost:8080','root','','restaurant')
	or die('Error conectado a MYSQL');
	
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	
	
	$query = "SELECT * FROM `registro` WHERE correo = '$email' and contrasenna= $pass";
	
	mysqli_query($dbc, $query)
	or die ('Error ejecutando query en la BD');
	
	echo 'Login exitoso';
	
	mysqli_close($dbc);
	
?>