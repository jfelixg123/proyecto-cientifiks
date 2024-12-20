<?php
session_start();
require 'php/bd.php';
require 'php/insertRegister.php';
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
    <title>Registro</title>
</head>

<body>
    <div class="bodycss">
        <nav class="navLogin">
            <a href="index.php">
            <button type="button" id="back-button"><img src="./LangingPagPhoto/flecha.png" alt=""
            class="flechaVolver"></button>
            </a>

            <div class="idioma">
                <img src="LangingPagPhoto/spain.png" alt="es">
                <img src="LangingPagPhoto/catalan.png" alt="ca">
                <img src="LangingPagPhoto/english.png" alt="en">
            </div>
        </nav>

        <h1 id="register-title">REGISTRARSE</h1>
        <?php include 'php/mensaje.php'; ?>
        <div class="container">
            <div class="capa1"></div>
            <div class="login-container-register">

                <form method="POST" action="">
                    <label id="name-label" for="name">Nombre</label>
                    <br>
                    <input type="name" name="username" id="name" required>
                    <br>
                    <label id="email-label" for="email">Correo electrónico</label>
                    <br>
                    <input type="email" id="email" name="email" required>
                    <br>
                    <label id="password-label" for="password">Contraseña</label>
                    <br>
                    <input type="password" id="password" name="password" required>
                    <button type="submit" id="register-button">REGISTRARSE</button>

                </form>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>