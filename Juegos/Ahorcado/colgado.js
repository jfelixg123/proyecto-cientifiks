// Función que reemplaza caracteres en una cadena
const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
};

// Array de palabras y selección aleatoria de una palabra secreta
const palabras = ['depurar', 'fuentes', 'agua', 'escuela', 'tres'];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

// Crear la palabra escondida con guiones bajos
let palabraEscondida = palabraSecreta.replace(/./g, "_ ");
document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

let errorCounter = 0; // Contador de errores
let contenedorIndex = 0; // Índice del próximo contenedor a deformar

const corazones = [
    document.getElementById('corazon5'),
    document.getElementById('corazon4'),
    document.getElementById('corazon3'),
    document.getElementById('corazon2'),
    document.getElementById('corazon1')
];
const corazonesRotos = [
    document.getElementById('corazon-roto5'),
    document.getElementById('corazon-roto4'),
    document.getElementById('corazon-roto3'),
    document.getElementById('corazon-roto2'),
    document.getElementById('corazon-roto1')
];

// Crear el contenedor de letras
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lettersContainer = document.getElementById('dragNdrop');

// Crear letras arrastrables
letras.forEach(letra => {
    const letraDiv = document.createElement('div');
    letraDiv.textContent = letra;
    letraDiv.classList.add('letter');
    letraDiv.setAttribute('draggable', 'true');
    letraDiv.id = `letter-${letra}`;

    // Evento dragstart
    letraDiv.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', letra); // Transfiere el carácter
    });

    lettersContainer.appendChild(letraDiv);
});

// Dropzone para soltar letras
const dropzone = document.getElementById('dropzone');

// Eventos de dragover y drop
dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropzone.classList.add('hover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('hover');
});

// Función para cambiar la escala de un único contenedor
const cambiarDeformacion = (factorEscala) => {
    const contenedores = document.querySelectorAll('.contenedor1, .contenedor2, .contenedor3, .contenedor4, .contenedor5, .contenedor6, .contenedor7');
    if (contenedorIndex < contenedores.length) {
        const contenedor = contenedores[contenedorIndex];
        contenedor.style.transform = `scaleY(${factorEscala})`; // Cambiar solo la escala en el eje Y
        contenedorIndex++; // Pasar al siguiente contenedor
    }
};

// Dropzone para soltar letras
dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.classList.remove('hover');

    const letraArrastrada = event.dataTransfer.getData('text').toLowerCase();
    let acierto = false;

    // Verificar si la letra está en la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letraArrastrada) {
            palabraEscondida = replaceAt(palabraEscondida, letraArrastrada, i * 2);
            acierto = true; // Marcamos que hay un acierto
        }
    }

    // Actualizar la palabra escondida
    document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

    // Lógica al verificar la letra seleccionada
    if (acierto) {
        cambiarDeformacion(0); // Deforma el siguiente contenedor
        if (!palabraEscondida.includes('_')) {
            document.querySelector('.resultado').innerHTML = '<h1>¡Has ganado!</h1>';

            // Mostrar el botón de reinicio
            document.getElementById('reiniciar-win').style.display = 'inline-block';
        }
    } else {
        if (errorCounter < corazones.length) {
            corazones[errorCounter].style.display = 'none';
            corazonesRotos[errorCounter].style.display = 'inline';
        }
        errorCounter++;

        if (errorCounter === corazones.length) {
            document.querySelector('.resultado').innerHTML = '<h1>Has perdido</h1>';
            document.getElementById('reiniciar-lose').style.display = 'inline-block';
        }
    }

    // Deshabilitar la letra arrastrada
    const letraElemento = document.getElementById(`letter-${letraArrastrada.toUpperCase()}`);
    letraElemento.setAttribute('draggable', 'false');
    letraElemento.classList.add('used-letter'); // Cambiar estilo de la letra usada
});

// Función para reiniciar el juego
const reiniciarJuego = () => {
    // Seleccionar una nueva palabra secreta aleatoria
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

    // Crear la nueva palabra escondida con la longitud de la nueva palabra secreta
    palabraEscondida = palabraSecreta.replace(/./g, "_ ");
    document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

    // Reiniciar corazones
    for (let i = 0; i < corazones.length; i++) {
        corazones[i].style.display = 'inline';
        corazonesRotos[i].style.display = 'none';
    }
    errorCounter = 0;
    contenedorIndex = 0; // Reiniciar el índice de los contenedores

    // Restaurar la escala original de todos los contenedores
    const contenedores = document.querySelectorAll('.contenedor1, .contenedor2, .contenedor3, .contenedor4, .contenedor5, .contenedor6, .contenedor7');
    contenedores.forEach((contenedor) => {
        contenedor.style.transform = 'scaleY(1)'; // Escala normal
    });

    // Restaurar letras disponibles
    document.querySelectorAll('.letter').forEach((letra) => {
        letra.setAttribute('draggable', 'true');
        letra.classList.remove('used-letter');
    });

    // Ocultar mensajes y botones de reinicio
    document.querySelector('.resultado').innerHTML = '';
    document.getElementById('reiniciar-win').style.display = 'none';
    document.getElementById('reiniciar-lose').style.display = 'none';
};
// // Reiniciar la palabra secreta
// palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];


// Evento de reinicio en botón
document.getElementById('reiniciar-lose').addEventListener('click', reiniciarJuego);
document.getElementById('reiniciar-win').addEventListener('click', reiniciarJuego);




