<?php
session_start();

// Función para abrir la conexión con la base de datos
function openDB()
{
    $servername = "localhost";
    $username = "root";
    $password = "mysql";
    $dbname = "scoreBD"; // Asegúrate de que este sea el nombre correcto de tu base de datos

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

// Insertar el score en la base de datos
function insertarScore($score)
{
    try {
        $conexion = openDB();
        $sentenciaText = "INSERT INTO scores (punto, fecha) VALUES (:punto, NOW())";
        $sentencia = $conexion->prepare($sentenciaText);
        $sentencia->bindParam(':punto', $score);
        $sentencia->execute();
        closeDB($conexion);

        return true;
    } catch (PDOException $e) {
        echo "Error al insertar el score: " . $e->getMessage();
        closeDB($conexion);
        return false;
    }
}

// Obtener los datos del request POST
$data = json_decode(file_get_contents('php://input'), true);
$score = $data['score'] ?? 0; // Obtener el valor del score, por defecto 0 si no existe

// Insertar el score en la base de datos
if (insertarScore($score)) {
    $response = ['success' => true];
} else {
    $response = ['success' => false, 'message' => 'Error al guardar el score'];
}

// Devolver la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
