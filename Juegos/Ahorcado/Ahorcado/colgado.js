// Función que reemplaza caracteres en una cadena
const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

// Array de imágenes para cambiar en caso de error
const imagenes = ['1.png', '2.png', '3.png', '4.png', '5.png'];
let indice = 0;

// Array de palabras y selección aleatoria de una palabra secreta
const palabras = ['depurar', 'fuentes', 'agua', 'escuela', 'tres'];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

// Crear la palabra escondida con guiones bajos (imprime en pantalla guiones bajos)
let palabraEscondida = palabraSecreta.replace(/./g, "_ ");
document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;
let errorCounter = 0; // Contador de errores

// Selecciona el campo de entrada
const input = document.querySelector('input[type="text"]');

// Función para permitir solo una letra en el input
input.addEventListener('input', () => {
    // Si el valor del input tiene más de un carácter, corta al primero
    if (input.value.length > 1) {
        input.value = input.value.charAt(0);
    }
});


// Función para evaluar la letra ingresada
const evaluarLetra = () => { 
    const letra = document.querySelector('input').value.toLowerCase();
    let error = true;

    // Este bucle revisa cada letra en la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) { 
        if (palabraSecreta[i] === letra) {
            palabraEscondida = replaceAt(palabraEscondida, letra, i * 2); // Coloca la letra correcta en su posición
            error = false; // Indica que no hubo error
        }
    }

    // Actualizar la palabra escondida en pantalla
    document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

    // Si hubo un error (la letra no está en la palabra secreta)
    if (error) {
        errorCounter++; 

       
        // Si se alcanzó el límite de errores, el jugador pierde
        if (errorCounter === imagenes.length) {
            document.querySelector('.resultado').innerHTML = '<h1>Has perdido</h1>';
            document.getElementById('reiniciar-lose').style.display = 'inline-block'; // Muestra el botón de reinicio
        }
    }

    // Verificar si el jugador ha ganado (no quedan guiones bajos)
    if (!palabraEscondida.includes("_")) {
        document.querySelector('.resultado').innerHTML = '<h1>HAS GANADO!</h1>';
        document.getElementById('reiniciar-lose').style.display = 'inline-block'; // Muestra el botón de reinicio
        document.getElementById('continuar-win').style.display = 'inline-block';
    }

    // Limpia el campo de entrada para el próximo intento
    document.querySelector('input').value = '';
}

// Función para reiniciar el juego
const reiniciarJuego = () => {
    // Reinicia el contador de errores y el índice de imagen
    errorCounter = 0;
    indice = 0;

    // Elige una nueva palabra secreta al azar
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraEscondida = palabraSecreta.replace(/./g, "_ ");
    document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

    // Reinicia el contenido de los mensajes
    document.querySelector('.resultado').innerHTML = '';
    
    

    // Oculta el botón de reinicio nuevamente
    document.getElementById('reiniciar-lose').style.display = 'none';

    // Limpia el campo de entrada
    document.querySelector('input').value = '';
}

// Agrega el evento de clic al botón de reinicio
document.getElementById('reiniciar-lose').addEventListener('click', reiniciarJuego);

// Agrega el evento de clic al botón de verificar letra
document.getElementById('verificar').addEventListener('click', evaluarLetra);
