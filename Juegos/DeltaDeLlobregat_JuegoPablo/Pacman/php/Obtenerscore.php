<?php

require_once('bd.php');

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['id_usuario'])) {
    echo "Debes iniciar sesión para guardar tu puntaje.";
    exit;
}

// Validar que se reciban los parámetros necesarios
if (isset($_GET['id_videojuego']) && is_numeric($_GET['id_videojuego'])) {
    $id_videojuego = $_GET['id_videojuego'];
} else {
    echo "Error: ID de videojuego no válido.";
    exit;
}
if (isset($_GET['puntuacion']) && is_numeric($_GET['puntuacion'])) {
    $puntuacion = $_GET['puntuacion']; // Cambiado de 'score' a 'puntuacion'
} else {
    echo "Error: Puntaje no válido.";
    exit;
}

// Obtener el ID del usuario desde la sesión
$id_usuario = $_SESSION['id_usuario'];

try {
    $pdo = openDB();

    $stmt = $pdo->prepare("
        INSERT INTO jugar (id_videojuego, id_usuario, puntuacion) 
        VALUES (:id_videojuego, :id_usuario, :puntuacion);
    ");
    $stmt->bindParam(':id_videojuego', $id_videojuego, PDO::PARAM_INT);
    $stmt->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
    $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_INT);
    $stmt->execute();
    echo "Puntaje guardado correctamente.";
} catch (PDOException $e) {
    echo "Error al guardar el puntaje: " . $e->getMessage();
}