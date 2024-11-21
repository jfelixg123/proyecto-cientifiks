<?php
require_once('bd.php');

function selectScore()
{
    $conexion = openDB();

    $sentenciaText = "SELECT * FROM scores";
    $sentencia = $conexion->prepare($sentenciaText);
    $sentencia->execute();

    $resultado = $sentencia->fetchAll();

    return $resultado;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = selectScore();
    echo "<h1>Puntuaciones Guardadas</h1>";
    
    if (!empty($score)) {
        echo "<ul>";
        foreach ($score as $scores) {
            echo "<li>Usuario: " . htmlspecialchars($scores['id_score']) . ", Score: " . htmlspecialchars($scores['punto']) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No se encontraron puntuaciones.</p>";
    }
} else {
    echo "<p>Acceso no permitido. Por favor, usa el formulario en index.php.</p>";
}

?>
