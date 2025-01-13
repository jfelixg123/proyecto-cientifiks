<?php
// Incluir el archivo de conexión a la base de datos
require_once './php/bd.php';

// ID del videojuego (en este caso 2)
$id_videojuego = 1;

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
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</head>

<body>
    <div class="body_scoreboard1">
        <nav class="navLogin">
            <nav class="navegador-scoreboard" id="navbar">
                <div class="idiomas">
                    <button type="button" id="back-button"><img src="./LangingPagPhoto/flechascore.png" alt=""
                            class="flechaVolverscoreboard"></button>
                    <div class="titulo" id="miTitulo">
                        <h1>CIENTIFIKS</h1>
                    </div>
                    <div class="ranking-juegos">
                        <form action="">
                            <label class="elegir-juego" for="elegir-juego"></label>
                            <select name="elegir-juegos" id="lista-juegos" onchange="cambiarPagina()">
                                <option value="scoreboard1.php" <?php echo ($id_videojuego == 1) ? 'selected' : ''; ?>>
                                    Tres Fuentes</option>
                                <option value="scoreboard2.php" <?php echo ($id_videojuego == 2) ? 'selected' : ''; ?>>
                                    Delta Llobregat</option>
                                <option value="scoreboard3.php" <?php echo ($id_videojuego == 3) ? 'selected' : ''; ?>>La
                                    Depuradora</option>
                                <option value="scoreboard4.php" <?php echo ($id_videojuego == 4) ? 'selected' : ''; ?>>Las
                                    Cloacas</option>
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
                <h1 class="h1_scoreboard">Tres Fuentes</h1>
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
                                            <div class="rank-name">
                                                <?= htmlspecialchars($fila['username']) ?>
                                            </div>
                                        </div>
                                        <div class="pastilla-puntos">
                                            <div class="rank-score">
                                                <?= htmlspecialchars($fila['puntuacion']) ?>
                                            </div>
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

            const traducciones = {
                es: {
                    titulo: "Resultados Globales",
                    cientifiks: "CIENTIFIKS",
                    tres_fuentes: "Tres Fuentes",
                    delta_llobregat: "Delta Llobregat",
                    las_cloacas: "Las Cloacas",
                    la_depuradora: "La Depuradora",
                    no_datos: "No hay datos disponibles para este videojuego."
                },
                ca: {
                    titulo: "Resultats Globals",
                    cientifiks: "CIENTIFIKS",
                    tres_fuentes: "Tres Fonts",
                    delta_llobregat: "Delta Llobregat",
                    las_cloacas: "Les Clavegueres",
                    la_depuradora: "La Depuradora",
                    no_datos: "No hi ha dades disponibles per a aquest videojoc."
                },
                en: {
                    titulo: "Global Results",
                    cientifiks: "CIENTIFIKS",
                    tres_fuentes: "Three Sources",
                    delta_llobregat: "Delta Llobregat",
                    las_cloacas: "The Sewers",
                    la_depuradora: "The Purifier",
                    no_datos: "No data available for this video game."
                }
            };

            let idiomaActual = 'es'; // Idioma predeterminado

            // Cambia el idioma y actualiza el contenido
            function cambiarIdioma(idioma) {
                idiomaActual = idioma;
                actualizarIdioma();
            }

            // Actualiza el contenido de la página según el idioma seleccionado
            function actualizarIdioma() {
                document.title = traducciones[idiomaActual].titulo;
                document.querySelector('#miTitulo h1').textContent = traducciones[idiomaActual].cientifiks;
                document.querySelector('.h1_scoreboard').textContent = traducciones[idiomaActual].tres_fuentes;

                const opciones = document.querySelectorAll('#lista-juegos option');
                opciones[0].textContent = traducciones[idiomaActual].tres_fuentes;
                opciones[1].textContent = traducciones[idiomaActual].delta_llobregat;
                opciones[2].textContent = traducciones[idiomaActual].la_depuradora;
                opciones[3].textContent = traducciones[idiomaActual].las_cloacas;

                const noDatos = document.querySelector('.ranking_scoreboard p');
                if (noDatos) {
                    noDatos.textContent = traducciones[idiomaActual].no_datos;
                }
            }

            // Eventos para cambiar idioma al hacer clic en las banderas
            document.querySelector('.idiomascoreboard').addEventListener('click', (e) => {
                if (e.target.alt) { // Asegúrate de que clickeas una imagen
                    cambiarIdioma(e.target.alt);
                }
            });

            // Inicializa el idioma al cargar la página
            actualizarIdioma();
        </script>
</body>

</html>