<?php 
require_once 'bd.php';
function selectScore()
{
    $conexion = openDB();

    $sentenciaText = "SELECT usuario.username, jugar.puntuacion 
                    FROM jugar
                    INNER JOIN usuario ON jugar.id_usuario = usuario.id_usuario
                    ORDER BY jugar.puntuacion DESC;";

    try {
        
        $sentencia = $conexion->prepare($sentenciaText);
        $sentencia->execute();
        return $sentencia->fetchAll();
    } catch (PDOException $e) {
        return null;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = selectScore();

    echo "<h1>Puntuaciones Guardadas</h1>";

    if (!empty($score)) {
        echo "<ul class='score-list'>";
        foreach ($score as $scores) {
            echo "<li><strong>Usuario:</strong> " . htmlspecialchars($scores['username']) . 
                 " <strong>Score:</strong> " . htmlspecialchars($scores['puntuacion']) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No se encontraron puntuaciones.</p>";
    }
} else {
    echo "<p>Acceso no permitido. Por favor, usa el formulario en index.php.</p>";
}
?>