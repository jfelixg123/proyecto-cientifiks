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

    // Verificar si ya existe el puntaje para este usuario y videojuego
    $stmt = $pdo->prepare("SELECT puntuacion FROM jugar WHERE id_videojuego = :id_videojuego AND id_usuario = :id_usuario");
    $stmt->bindParam(':id_videojuego', $id_videojuego, PDO::PARAM_INT);
    $stmt->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
    $stmt->execute();
    $existing_score = $stmt->fetchColumn();

    if ($existing_score !== false) {
        // Si ya existe un puntaje, verificar si el nuevo puntaje es mayor
        if ($puntuacion > $existing_score) {
            // Si el nuevo puntaje es mayor, actualizar el puntaje directamente
            $stmt = $pdo->prepare("UPDATE jugar SET puntuacion = :puntuacion WHERE id_videojuego = :id_videojuego AND id_usuario = :id_usuario");
            $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_INT);
            $stmt->bindParam(':id_videojuego', $id_videojuego, PDO::PARAM_INT);
            $stmt->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
            $stmt->execute();
            echo "Puntaje actualizado correctamente.";
        } else {
            echo "El nuevo puntaje debe ser mayor que el anterior.";
        }
    } else {
        // Si no existe un puntaje, insertar el nuevo puntaje
        $stmt = $pdo->prepare("INSERT INTO jugar (id_videojuego, id_usuario, puntuacion) VALUES (:id_videojuego, :id_usuario, :puntuacion)");
        $stmt->bindParam(':id_videojuego', $id_videojuego, PDO::PARAM_INT);
        $stmt->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
        $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_INT);
        $stmt->execute();
        echo "Puntaje guardado correctamente.";
    }
} catch (PDOException $e) {
    echo "Error al guardar el puntaje: " . $e->getMessage();
}
