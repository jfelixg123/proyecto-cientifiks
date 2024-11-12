let timerInterval;
let secondsElapsed = 0;

const personaje = document.getElementById('personaje');
const jumpHeight = 200;
const gravity = 5;
let velocityX = 0;
const maxVelocityX = 5;
let isJumping = false;
let isOnGround = false;
let pisoActual = null; // Guarda el piso actual sobre el que está el personaje
const pisos = document.querySelectorAll('.tercerPisoIzquierda, .segundoPisoIzquierda, .primerPisoIzquierda, .tercerPisoDerecha, .segundoPisoDerecha, .primerPisoDerecha, .pasoPrimerPiso, .pasoSegundoPiso');
const juegoContenedor = document.querySelector('.juegoContenedor');

// Función para detectar colisiones con los pisos
function checkCollision() {
    const personajeRect = personaje.getBoundingClientRect();
    let collisionDetected = false;
    
    pisos.forEach(piso => {
        const pisoRect = piso.getBoundingClientRect();

        // Comprobar si el personaje está tocando el piso desde arriba
        if (
            personajeRect.bottom <= pisoRect.top + gravity &&
            personajeRect.bottom >= pisoRect.top - gravity &&
            personajeRect.right > pisoRect.left &&
            personajeRect.left < pisoRect.right
        ) {
            // Si hay colisión, ajustamos la posición y el estado
            collisionDetected = true;
            isOnGround = true;
            isJumping = false;
            pisoActual = piso;
            personaje.style.top = pisoRect.top - personaje.offsetHeight + 'px';
        }
    });

    // Si no detecta colisión con ningún piso, permite aplicar gravedad
    if (!collisionDetected) {
        isOnGround = false;
        pisoActual = null; // El personaje no tiene piso asignado
    }
}

// Función para aplicar gravedad
function applyGravity() {
    let personajeTop = parseInt(personaje.style.top || (window.innerHeight - personaje.offsetHeight) + 'px');

    if (pisoActual) {
        // Si el personaje está sobre un piso, sigue su posición vertical si se mueve
        const pisoRect = pisoActual.getBoundingClientRect();
        personaje.style.top = pisoRect.top - personaje.offsetHeight + 'px';
    } else if (!isOnGround) {
        // Aplica gravedad si no está sobre el suelo o un piso
        personaje.style.top = (personajeTop + gravity) + 'px';
        checkCollision();
    }

    // Detección de colisión con el suelo
    const suelo = document.querySelector('.suelo');
    const sueloRect = suelo.getBoundingClientRect();
    const personajeRect = personaje.getBoundingClientRect();

    if (personajeRect.bottom >= sueloRect.top) {
        isOnGround = true;
        personaje.style.top = sueloRect.top - personaje.offsetHeight + 'px';
        isJumping = false;
    }
}

// Función para actualizar la posición horizontal del personaje
function updatePosition() {
    const personajeLeft = parseInt(personaje.style.left || '0px');
    const nextPositionX = personajeLeft + velocityX;
    const contenedorRect = juegoContenedor.getBoundingClientRect();
    const personajeRight = nextPositionX + personaje.offsetWidth;

    // Limitar el movimiento horizontal dentro de los límites del contenedor
    if (nextPositionX < 0) {
        personaje.style.left = '0px';
    } else if (personajeRight > contenedorRect.width) {
        personaje.style.left = (contenedorRect.width - personaje.offsetWidth) + 'px';
    } else {
        personaje.style.left = nextPositionX + 'px';
    }

    requestAnimationFrame(updatePosition);
}

// Eventos de teclado para mover el personaje
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') velocityX = maxVelocityX;
    if (event.key === 'ArrowLeft') velocityX = -maxVelocityX;
    if (event.key === 'ArrowUp' && isOnGround) { // Solo permite saltar si está en el suelo
        const personajeTop = parseInt(personaje.style.top || (window.innerHeight - personaje.offsetHeight) + 'px');
        personaje.style.top = (personajeTop - jumpHeight) + 'px';
        isJumping = true;
        isOnGround = false;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        velocityX = 0;
    }
});

// Aplicar gravedad cada 20ms
setInterval(applyGravity, 20);

// Iniciar bucle de animación para el movimiento horizontal
updatePosition();

// Temporizador para el juego
function initializeTimer() {
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    secondsElapsed++;
    const formattedTime = formatTime(secondsElapsed);
    displayTime(formattedTime);
}

function formatTime(totalSeconds) {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

function displayTime(timeString) {
    document.getElementById("tiempo").textContent = timeString;
}

// Al cargar la página
window.onload = function () {
    initializeTimer();
};

// Selección de cada rata en sus pisos
const rataTercerPiso = document.getElementById('rataTercerPiso');
const rataSegundoPiso = document.getElementById('rataSegundoPiso');
const rataPrimerPiso = document.getElementById('rataPrimerPiso');
const rataSegundoPisoDerecha = document.getElementById('rataSegundoPisoDerecha');
const rataPrimerPisoDerecha = document.getElementById('rataPrimerPisoDerecha');

// Función para mover cada rata, cambiando de dirección al llegar a los bordes
function moverRataRebotando(rata, piso) {
    let posicionX = 0;
    let velocidad = 2; // Ajusta la velocidad de movimiento
    const anchoPiso = piso.getBoundingClientRect().width;
    const anchoRata = rata.getBoundingClientRect().width;

    // Variable para almacenar el estado de la dirección (izquierda o derecha)
    let direccionInvertida = false;

    function animacion() {
        // Actualizar la posición de la rata
        posicionX += velocidad;

        // Si la rata alcanza el borde derecho, cambia la dirección a la izquierda
        if (posicionX + anchoRata >= anchoPiso) {
            velocidad = -velocidad; // Cambiar dirección hacia la izquierda
            posicionX = anchoPiso - anchoRata; // Ajustar posición para que quede dentro del div
            if (!direccionInvertida) {
                rata.style.transform = 'scaleX(-1)'; // Aplicar la inversión horizontal
                direccionInvertida = true; // Marcar que la dirección está invertida
            }
        }
        // Si la rata alcanza el borde izquierdo, cambia la dirección a la derecha
        else if (posicionX <= 0) {
            velocidad = -velocidad; // Cambiar dirección hacia la derecha
            posicionX = 0; // Ajustar posición para que quede dentro del div
            if (direccionInvertida) {
                rata.style.transform = 'scaleX(1)'; // Eliminar la inversión (vuelve a la dirección normal)
                direccionInvertida = false; // Marcar que la dirección no está invertida
            }
        }

        // Aplicar la posición en el eje X, manteniendo las transformaciones acumuladas
        rata.style.transform = `translateX(${posicionX}px)` + (direccionInvertida ? ' scaleX(-1)' : ' scaleX(1)');

        // Solicitar la siguiente animación en el próximo cuadro
        requestAnimationFrame(animacion);
    }

    animacion(); // Iniciar la animación de la rata
}

// Llamar a la función para cada rata con su respectivo piso
moverRataRebotando(rataTercerPiso, document.querySelector('.tercerPisoIzquierda'));
moverRataRebotando(rataSegundoPiso, document.querySelector('.segundoPisoIzquierda'));
moverRataRebotando(rataPrimerPiso, document.querySelector('.primerPisoIzquierda'));
moverRataRebotando(rataSegundoPisoDerecha, document.querySelector('.segundoPisoDerecha'));
moverRataRebotando(rataPrimerPisoDerecha, document.querySelector('.primerPisoDerecha'));