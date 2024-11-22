<?php
session_start();
require 'php/bd.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM usuario WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['id_usuario'] = $user['id_usuario']; // Usar el mismo nombre en todas partes
        $_SESSION['mensaje'] = "¡Inicio de sesión completado con éxito! Bienvenido, <strong>$username</strong>.";
        header("Location: indexInicioSession.html");
        exit;
    } else {
        $_SESSION['error'] = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
        header("Location: login.php");
        exit;
    }
}

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
    <script>
        const texts = {
            es: {
                loginTitle: "INICIAR SESIÓN",
                emailLabel: "Correo",
                passwordLabel: "Contraseña",
                loginButton: "INICIAR SESIÓN",
                registerButton: "REGISTRARSE"
            },
            ca: {
                loginTitle: "INICIAR SESSIÓ",
                emailLabel: "Correu",
                passwordLabel: "Contrasenya",
                loginButton: "INICIAR SESSIÓ",
                registerButton: "REGISTRAR-SE"
            },
            en: {
                loginTitle: "LOGIN",
                emailLabel: "Email",
                passwordLabel: "Password",
                loginButton: "LOGIN",
                registerButton: "REGISTER"
            }
        };

        function changeLanguage(lang) {
            document.getElementById("login-title").innerText = texts[lang].loginTitle;
            document.getElementById("email-label").innerText = texts[lang].emailLabel;
            document.getElementById("password-label").innerText = texts[lang].passwordLabel;
            document.getElementById("login-button").innerText = texts[lang].loginButton;
            document.getElementById("register-button").innerText = texts[lang].registerButton;
        }

        document.getElementById("lang-es").addEventListener("click", () => changeLanguage('es'));
        document.getElementById("lang-ca").addEventListener("click", () => changeLanguage('ca'));
        document.getElementById("lang-en").addEventListener("click", () => changeLanguage('en'));

        document.getElementById("register-button").addEventListener("click", () => {
            window.location.href = 'register.php';
        });

        document.getElementById("back-button").addEventListener("click", () => {
            window.location.href = 'index.html';
        });
    </script>

</body>

</html>