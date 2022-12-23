<?php
	if(isset($_POST['base']) & isset($_POST['altura'])){
		$base = $_POST['base'];
		$altura = $_POST['altura'];
		$resultado = ($base * $altura) / 2;

		echo $resultado;
	}else{
		echo "0";
	}