<?php
session_start();
require 'php/bd.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$username, $email, $password]);
        $id_usuario = $pdo->lastInsertId();
        $_SESSION['id_usuario'] = $id_usuario; // Guardar el ID del usuario en la sesión
        $_SESSION['username'] = $username;
          // Mensaje de éxito
          $_SESSION['mensaje'] = "¡Registro completado con éxito! Bienvenido, <strong>$username</strong>.";
          header("Location: login.php");
          exit;
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) { // Código para errores de duplicados
            $_SESSION['error'] = "El nombre de usuario o el correo ya están registrados. Intenta con otro.";
        } else {
            $_SESSION['error'] = "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.";
        }
        header("Location: register.php");
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
    <title>Registro</title>
</head>
<body>
<div class="bodycss">
    <nav class="navLogin">
        <button type="button" id="back-button"><img src="./LangingPagPhoto/flecha.png" alt="" class="flechaVolver"></button>

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

                <label id="email-label" for="email" >Correo electrónico</label>
                <br>
                <input type="email" id="email" name="email"  required>
                
                <br>
                
                <label id="password-label" for="password" >Contraseña</label>
                <br>
                <input type="password" id="password"  name="password" required>
                <button type="submit" id="register-button">REGISTRARSE</button>
           
            </form>
        </div>
    </div>
</div>
<script src="main.js"></script>
</body>
</html>
