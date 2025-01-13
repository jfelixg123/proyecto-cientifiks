const tutorial = document.querySelector('.tutorial');
const ocultarTutorial = () => {
    tutorial.style.display = 'none';
};
document.querySelector('#cerrar_tutorial_btn').addEventListener('click', ocultarTutorial);

let puntos = 0; // Variable para llevar el puntaje

// Función que reemplaza caracteres en una cadena
const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
};

// Array de palabras y selección aleatoria inicial
const palabras = ['depuran', 'agujero', 'pantano', 'escuela', 'arroyos', 'lagunas', 'cascada'];
let nivelActual = 1; // Nivel inicial
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let palabrasUsadas = []; // Para evitar repetir palabras

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

const deformarContenedores = () => {
    const contenedores = document.querySelectorAll('.contenedor1, .contenedor2, .contenedor3, .contenedor4, .contenedor5, .contenedor6, .contenedor7');

    // Añadir la clase de animación a cada contenedor
    contenedores.forEach((contenedor) => {
        contenedor.classList.add('deformado');
        // Eliminar la clase después de la animación para poder reutilizarla
        setTimeout(() => {
            contenedor.classList.remove('deformado');
        }, 500); // Duración de la animación en ms
    });
};

// Función para avanzar al siguiente nivel desde el botón
const avanzarNivelDesdeBoton = () => {
    document.querySelector('.resultado').innerHTML = ''; // Ocultar el mensaje y el botón
    avanzarNivel(); // Llamar a la función para avanzar al siguiente nivel
};

// Función modificada para avanzar al siguiente nivel
const avanzarNivel = () => {
    nivelActual++;
    palabrasUsadas.push(palabraSecreta);

    // Sumar puntos por pasar de nivel
    puntos += 300;
    actualizarPuntaje();

    // Si se han completado todos los niveles
    if (nivelActual > 3) {
        document.querySelector('.resultado').innerHTML = `<h1>¡HAS GANADO!</h1>`;
        document.getElementById('reiniciar-win').style.display = 'inline-block';
        document.getElementById('continuar').style.display = 'inline-block';
        return;
    }

    // Restaurar la escala de los contenedores antes de iniciar el siguiente nivel
    const contenedores = document.querySelectorAll('.contenedor1, .contenedor2, .contenedor3, .contenedor4, .contenedor5, .contenedor6, .contenedor7');
    contenedores.forEach((contenedor) => {
        contenedor.style.transform = 'scaleY(1)'; // Restablecer la escala a su valor original
    });

    contenedorIndex = 0; // Reiniciar el índice de los contenedores

    // Seleccionar una nueva palabra secreta que no haya sido usada
    do {
        palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    } while (palabrasUsadas.includes(palabraSecreta));

    // Crear la nueva palabra escondida
    palabraEscondida = palabraSecreta.replace(/./g, "_ ");
    document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

    // Restaurar letras disponibles
    document.querySelectorAll('.letter').forEach((letra) => {
        letra.setAttribute('draggable', 'true');
        letra.classList.remove('used-letter');
    });
};

// Modificar la lógica al completar un nivel
if (!palabraEscondida.includes('_')) {
    // Mostrar mensaje de nivel completado
    const resultadoContenedor = document.querySelector('.siguiente-nivel');
    resultadoContenedor.innerHTML = `<h1>¡Nivel ${nivelActual} completado!</h1>`;

    deformarContenedores(); //deforma todos los contenedores al completar palabra

    // Esperar unos segundos antes de avanzar al siguiente nivel
    setTimeout(() => {
        resultadoContenedor.innerHTML = ''; // Vaciar el contenido del contenedor
        avanzarNivel(); 
    }, 2000); 
}

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
            acierto = true;
        }
    }

    // Actualizar la palabra escondida
    document.querySelector('.palabraEscondida').innerHTML = palabraEscondida;

    // Lógica al verificar la letra seleccionada
    if (acierto) {
        // Sumar puntos por acierto
        puntos += 100;
        actualizarPuntaje(); // Actualizar puntaje en pantalla

        cambiarDeformacion(0); // Deforma el siguiente contenedor
        if (!palabraEscondida.includes('_')) {
            const resultadoContenedor = document.querySelector('.siguiente-nivel');
            resultadoContenedor.innerHTML = `<h1>¡Nivel ${nivelActual} completado!</h1>`;

            setTimeout(() => {
                resultadoContenedor.innerHTML = ''; // Vaciar el contenido
                avanzarNivel(); // Avanzar al siguiente nivel
            }, 2000); // 2 segundos
        }
    } else {
        puntos -= 50; // Restar puntos por fallo
        actualizarPuntaje(); // Actualizar puntaje en pantalla

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
    letraElemento.classList.add('used-letter');
});

// Función para actualizar el puntaje en la pantalla
const actualizarPuntaje = () => {
    document.getElementById('puntaje').innerText = puntos;
};

// Función para reiniciar el juego completo
const reiniciarJuego = () => {
    nivelActual = 1;
    palabrasUsadas = [];
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
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
    document.getElementById('continuar').style.display = 'none';
    document.getElementById('reiniciar-lose').style.display = 'none';

    // Reiniciar puntos
    puntos = 0;
    actualizarPuntaje();
};

// Evento de reinicio en botón
document.getElementById('reiniciar-lose').addEventListener('click', reiniciarJuego);
document.getElementById('reiniciar-win').addEventListener('click', reiniciarJuego);
