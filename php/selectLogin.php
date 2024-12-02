<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM usuario WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['id_usuario'] = $user['id_usuario']; // Usar el mismo nombre en todas partes
        $_SESSION['username'] = $user['username'];  
        $_SESSION['mensaje'] = "¡Inicio de sesión completado con éxito! Bienvenido, <strong>$username</strong>.";
        header("Location: index.php");
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