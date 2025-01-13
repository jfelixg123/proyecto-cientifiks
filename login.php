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
            <a href="index.php"><button type="button" id="back-button"><img src="./LangingPagPhoto/flecha.png" alt="" class="flechaVolver"></button></a>

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
                    <button type="button" id="register-button"><a href="register.php">REGISTRARSE</a></button>
                </form>
            </div>
        </div>
    </div>

    <script>
        // Diccionario de traducciones
        const translations = {
            es: {
                loginTitle: "INICIAR SESIÓN",
                emailLabel: "Nombre de usuario:",
                passwordLabel: "Contraseña:",
                loginButton: "INICIAR SESIÓN",
                registerButton: "REGISTRARSE",
            },
            ca: {
                loginTitle: "INICIA SESSIÓ",
                emailLabel: "Nom d'usuari:",
                passwordLabel: "Contrasenya:",
                loginButton: "INICIA SESSIÓ",
                registerButton: "REGISTRA'T",
            },
            en: {
                loginTitle: "LOG IN",
                emailLabel: "Username:",
                passwordLabel: "Password:",
                loginButton: "LOG IN",
                registerButton: "REGISTER",
            },
        };

        // Función para cambiar idioma
        function changeLanguage(lang) {
            document.getElementById("login-title").textContent = translations[lang].loginTitle;
            document.getElementById("email-label").textContent = translations[lang].emailLabel;
            document.getElementById("password-label").textContent = translations[lang].passwordLabel;
            document.getElementById("login-button").textContent = translations[lang].loginButton;
            document.getElementById("register-button").textContent = translations[lang].registerButton;
        }

        // Event listeners para los botones de idioma
        document.getElementById("lang-es").addEventListener("click", () => changeLanguage("es"));
        document.getElementById("lang-ca").addEventListener("click", () => changeLanguage("ca"));
        document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
    </script>
</body>

</html>
