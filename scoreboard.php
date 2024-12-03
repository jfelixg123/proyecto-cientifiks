<?php
require_once 'php/bd.php';
require_once 'php/selectScore.php';

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

    <div class="body_scoreboard">
        <nav class="navLogin">
            <nav class="navegador-scoreboard" id="navbar">
                
                <div class="idiomas">
                    <a href="index.html">
                        <button type="button" id="back-button"><img src="./LangingPagPhoto/flechascore.png" alt=""
                            class="flechaVolverscoreboard"></button>
                    </a>
                    <div class="titulo" id="miTitulo">
                        <h1>Cientifico en juego</h1>
                    </div>
                    <div class="ranking-juegos">
                        <form action="">
                            <label class="elegir-juego" for="elegir-juego">JUEGOS:</label>
                            <select name="elegir-juegos" id="lista-juegos">
                                <option value="tresfuentes">Las Tres Fuentes</option>
                                <option value="delta">Delta Llobregat</option>
                                <option value="cloaca">Las cloacas</option>
                                <option value="depuradora">La Depuradora</option>
                            </select>
                        </form>
                    </div>
                    <div class="idioma">
                        <img src="LangingPagPhoto/spain.png" alt="es">
                        <img src="LangingPagPhoto/catalan.png" alt="ca">
                        <img src="LangingPagPhoto/english.png" alt="en">
                    </div>
        </nav>
        <div class="container_scoreboard">
            <header class="header_scoreboard">
                <h1 class="h1_scoreboard">RESULTADOS GLOBALES</h1>
            </header>

            <div class="scoreboard">
                <div class="ranking_scoreboard">

                    <div class="rank-item">
                        <div class="pastilla-posicion">
                            <span class="rank-number">#1</span>
                        </div>
                        <div class="pastilla-nombre">
                            <input type="text" class="rank-name" placeholder="Nombre">
                        </div>
                        <div class="pastilla-puntos">
                            <input type="text" class="rank-score" placeholder="Score">
                        </div>
                    </div>
                    <div class="rank-item">
                        <div class="pastilla-posicion">
                            <span class="rank-number">#2</span>
                        </div>
                        <div class="pastilla-nombre">
                            <input type="text" class="rank-name" placeholder="Nombre">
                        </div>
                        <div class="pastilla-puntos">
                            <input type="text" class="rank-score" placeholder="Score">
                        </div>
                    </div>
                    <div class="rank-item">
                        <div class="pastilla-posicion">
                            <span class="rank-number">#3</span>
                        </div>
                        <div class="pastilla-nombre">
                            <input type="text" class="rank-name" placeholder="Nombre">
                        </div>
                        <div class="pastilla-puntos">
                            <input type="text" class="rank-score" placeholder="Score">
                        </div>
                    </div>
                    <div class="rank-item">
                        <div class="pastilla-posicion">
                            <span class="rank-number">#4</span>
                        </div>
                        <div class="pastilla-nombre">
                            <input type="text" class="rank-name" placeholder="Nombre">
                        </div>
                        <div class="pastilla-puntos">
                            <input type="text" class="rank-score" placeholder="Score">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>

<script src="main.js">
</script>

</html>