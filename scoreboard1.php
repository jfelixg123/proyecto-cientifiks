<?php
require_once 'php/bd.php';
require_once 'php/selectScore.php';  // Incluye el archivo con la función selectScore()

// Obtén las puntuaciones directamente al cargar la página
$score = selectScore();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados Globales</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="body_scoreboard1">
        <nav class="navLogin">
            <nav class="navegador-scoreboard" id="navbar">
                <div class="idiomas">
                    <button type="button" id="back-button"><img src="./LangingPagPhoto/flechascore.png" alt=""
                            class="flechaVolverscoreboard"></button>
                    <div class="titulo" id="miTitulo">
                        <h1>Cientifico en juego</h1>
                    </div>
                    <div class="ranking-juegos">
                        <form action="">
                            <label class="elegir-juego" for="elegir-juego"></label>
                            <select name="elegir-juegos" id="lista-juegos" onchange="cambiarPagina()">
                                <option value="scoreboard1.html">Las Tres Fuentes</option>
                                <option value="scoreboard2.html">Delta Llobregat</option>
                                <option value="scoreboard3.html">Las cloacas</option>
                                <option value="scoreboard4.html">La Depuradora</option>
                            </select>
                        </form>
                    </div>
                    <div class="idiomascoreboard">
                        <img src="LangingPagPhoto/spain.png" alt="es">
                        <img src="LangingPagPhoto/catalan.png" alt="ca">
                        <img src="LangingPagPhoto/english.png" alt="en">
                    </div>
                </div>
            </nav>
        </nav>
        <div class="container_scoreboard">
            <header class="header_scoreboard">
                <h1 class="h1_scoreboard">LAS TRES FUENTES</h1>
            </header>
            <div class="scroll-bg">
                <div class="scroll-div">
                    <div class="scoreboard">
                        <div class="ranking_scoreboard">
                            <?php
                            if (!empty($score)) {
                                $rank = 1;  // Inicializamos el contador de posición
                                foreach ($score as $scores) { ?>
                                    <div class='rank-item'>
                                        <div class='pastilla-posicion'>
                                            <span class='rank-number'>#<?php echo $rank++; ?></span>
                                            <!-- Muestra la posición -->
                                        </div>
                                        <div class='pastilla-nombre'>
                                            <!-- Aquí se muestra el nombre del usuario en un input -->
                                            <input type="text" class="rank-name"
                                                value="<?php echo htmlspecialchars($scores['username']); ?>" readonly>
                                        </div>
                                        <div class='pastilla-puntos'>
                                            <!-- Aquí se muestra la puntuación en un input -->
                                            <input type="text" class="rank-score"
                                                value="<?php echo htmlspecialchars($scores['puntuacion']); ?>" readonly>
                                        </div>
                                    </div>
                                <?php }
                            } else {
                                echo "<p>No se encontraron puntuaciones.</p>";
                            }
                            ?>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="main.js"></script>
</body>

<script>
    document.getElementById("back-button").addEventListener("click", () => {
        window.location.href = 'index.php';
    });

    function cambiarPagina() {
        const select = document.getElementById("lista-juegos");
        const url = select.value; // Obtiene el valor seleccionado (la URL)
        if (url) {
            window.location.href = url; // Redirige a la página correspondiente
        }
    }
</script>

</html>