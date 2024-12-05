<?php
session_start();
/**
 * Summary of openDB funcion para activar la base de datos
 * @return PDO
 */
function openDB()
{
  $servername = "localhost";
  $username = "root";
  $password = "mysql";

  $conexion = new PDO("mysql:host=$servername;dbname=cientifiks", $username, $password);
  // set the PDO error mode to exception
  $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $conexion->exec("set names utf8");

  return $conexion;
}

function closeDB($conexion) {
  $conexion = null;
}


?>
