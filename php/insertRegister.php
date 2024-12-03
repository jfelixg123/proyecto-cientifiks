<?php
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