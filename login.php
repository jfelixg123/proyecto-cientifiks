<?php
session_start();
require 'php/bd.php';
require 'php/selectLogin.php';
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>

<body>
    <div class="bodycss">
        <nav class="navLogin">
            <button type="button" id="back-button"><img src="./LangingPagPhoto/flecha.png" alt="" class="flechaVolver"></button>

            <div class="cambioIdioma">
                <button id="lang-es"><img src="./LangingPagPhoto/mundo.png" alt=""></button>
                <button id="lang-ca"><img src="./LangingPagPhoto/bandera.png" alt=""></button>
                <button id="lang-en"><img src="./LangingPagPhoto/reino-unido.png" alt=""></button>
            </div>
        </nav>

        <h1 id="login-title">INICIAR SESIÓN</h1>
        <div class="container">
            <div class="capa1"></div>
            <div class="login-container">
                <form action="" method="POST">
                    <label id="email-label" for="email">Nombre de usuario:</label>
                    <br>
                    <input type="name" name="username" id="email" required>
                    <br>
                    <label id="password-label" for="password">Contraseña:</label>
                    <br>
                    <input type="password" id="password" name="password" required>
                    <button type="submit" id="login-button">INICIAR SESIÓN</button>
                    <button type="button" id="register-button"><a href="register.php"></a>REGISTRARSE</button>
                </form>
            </div>
        </div>
    </div>
    <script src="main.js"> </script>
</body>
</html>