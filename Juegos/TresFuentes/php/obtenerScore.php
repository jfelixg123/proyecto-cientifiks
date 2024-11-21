<?php
require_once('bd.php');

// Obtener el puntaje desde la solicitud GET
$score = $_GET['score'];

try {
    // Obtener la conexión a la base de datos
    $pdo = openDB();

    // Preparar y ejecutar la sentencia SQL
    $stmt = $pdo->prepare("INSERT INTO scores (punto) VALUES (:punto)");
    $stmt->bindParam(':punto', $score, PDO::PARAM_INT); // Suponiendo que score es un entero
    $stmt->execute();

    // En lugar de enviar JSON, podemos mostrar un mensaje simple o redirigir
    echo "Puntaje guardado correctamente";
    // header('Location: gracias.html'); // Redirigir a una página de agradecimiento

} catch (PDOException $e) {
    // Manejar excepciones
    echo "Error al guardar el puntaje: " . $e->getMessage();
}