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

function obtenerRanking(PDO $pdo, int $id_videojuego): array
{
    try {
        // Consulta para obtener el ranking
        $stmt = $pdo->prepare("
            SELECT j.puntuacion, u.username
            FROM jugar j
            INNER JOIN usuario u ON j.id_usuario = u.id_usuario
            WHERE j.id_videojuego = :id_videojuego
            ORDER BY j.puntuacion DESC
            LIMIT 10
        ");
        $stmt->bindParam(':id_videojuego', $id_videojuego, PDO::PARAM_INT);
        $stmt->execute();

        // Devolver los resultados
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Error al obtener los datos: " . $e->getMessage());
    }
}
?>
