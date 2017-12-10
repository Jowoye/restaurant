<?php
	$dbc = mysqli_connect('localhost','root','','restaurant')
	or die('Error conectado a MYSQL');
	
	$email = $_POST['email'];
	$pass = $_POST['pass'];
    $link = "<script>window.open(\"https://restaurant-happy-chef.herokuapp.com/\")</script>";
	
	$query = "SELECT * FROM `registro` WHERE correo = '$email' and contrasenna= '$pass'";
	
	mysqli_query($dbc, $query)
	or die ('Error ejecutando query en la BD');
	
	echo 'Login exitoso', $link;
	
	mysqli_close($dbc);
	
?>