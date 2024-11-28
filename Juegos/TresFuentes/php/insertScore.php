<?php 
require_once('bd.php');

function insertScore($punto){
    $conexion = openDB();
    
    try {
        // Preparar la consulta para insertar el puntaje
        $sentenciaText = "INSERT INTO scores (punto) VALUES (:punto)";
        $sentencia = $conexion->prepare($sentenciaText);
        
        // Ejecutar con el valor de puntuación
        $sentencia->execute([':punto' => $punto]);

        echo json_encode(['success' => true, 'message' => 'Puntuación guardada correctamente.']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error al guardar la puntuación: ' . $e->getMessage()]);
    }
    
}

?>