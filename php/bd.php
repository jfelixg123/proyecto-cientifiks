<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
  }
  function errorMessage($e)
  {
  
    if (!empty($e->errorInfo[1])) {
  
      switch ($e->errorInfo[1]) {
        case 1062:
          $mensaje = 'Registro duplicado';
          break;
        case 1451:
          $mensaje = 'Registro con elementos relacionados';
          break;
        default:
          $mensaje = $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
          break;
      }
    } else {
      switch ($e->getCode()) {
        case 1044:
          $mensaje = "Usuario y/o password incorrecto";
          break;
        case 1049:
          $mensaje = "Base de datos desconocida";
          break;
        case 2002:
          $mensaje = "No se encuentra el servidor";
          break;
        default:
          $mensaje = $e->getCode() . ' - ' . $e->getMessage();
          break;
      }
    }
    return $mensaje;
  }

  
function openDB()
{
    $servername = "localhost";
    $username = "root";
    $password = "mysql";
    $dbname = "cientifiks"; 

    try {
        $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->exec("set names utf8");
        return $conexion;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        return null;
    }
}

// Función para cerrar la conexión con la base de datos
function closeDB($conexion)
{
    $conexion = null;
}
  
$host = 'localhost';
$db = 'cientifiks';
$user = 'root';
$pass = 'mysql';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
