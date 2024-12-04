<?php
// Incluir el archivo de conexión a la base de datos
require_once './php/bd.php';

// ID del videojuego (en este caso 2)
$id_videojuego = 3;

// Obtener el ranking
$ranking = obtenerRanking($pdo, $id_videojuego);
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
    <div class="body_scoreboard3">
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
            <option value="scoreboard1.php" <?php echo ($id_videojuego == 1) ? 'selected' : ''; ?>>Delta Llobregat</option>
            <option value="scoreboard2.php" <?php echo ($id_videojuego == 2) ? 'selected' : ''; ?>>Las Tres Fuentes</option>
            <option value="scoreboard3.php" <?php echo ($id_videojuego == 3) ? 'selected' : ''; ?>>Las cloacas</option>
            <option value="scoreboard4.php" <?php echo ($id_videojuego == 4) ? 'selected' : ''; ?>>La Depuradora</option>
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
                <h1 class="h1_scoreboard">DELTA DE LLOBREGAT</h1>
            </header>

            <div class="scroll-bg">
                <div class="scroll-div">
                    <div class="scoreboard">
                        <div class="ranking_scoreboard">
                            <?php if (!empty($ranking)): ?>
                                <?php foreach ($ranking as $index => $fila): ?>
                                    <div class="rank-item">
                                        <div class="pastilla-posicion">
                                            <span class="rank-number">#<?= $index + 1 ?></span>
                                        </div>
                                        <div class="pastilla-nombre">
                                            <input type="text" class="rank-name"
                                                value="<?= htmlspecialchars($fila['username']) ?>" readonly disabled>
                                        </div>
                                        <div class="pastilla-puntos">
                                            <input type="text" class="rank-score"
                                                value="<?= htmlspecialchars($fila['puntuacion']) ?>" readonly disabled>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            <?php else: ?>
                                <p>No hay datos disponibles para este videojuego.</p>
                            <?php endif; ?>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.getElementById("back-button").addEventListener("click", () => {
            window.location.href = 'index.php';
        });
        function cambiarPagina() {
            const select = document.getElementById("lista-juegos");
            const url = select.value;
            if (url) {
                window.location.href = url;
            }
        }
    </script>
</body>

</html>