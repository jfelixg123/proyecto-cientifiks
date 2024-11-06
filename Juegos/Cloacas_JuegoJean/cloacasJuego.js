const div = document.getElementById('personaje');
const obstaculo = document.getElementById('obstaculo');
const jumpHeight = 170;
const gravity = 5;
let velocityX = 0; // Velocidad horizontal inicial
const maxVelocityX = 5; // Velocidad máxima horizontal

// Función para aplicar la gravedad
function applyGravity() {
    const divBottom = parseInt(div.style.top || window.innerHeight - div.offsetHeight + 'px');

    // Solo aplica gravedad si no está colisionando con el obstáculo desde arriba
    if (!isColliding(div, obstaculo) && divBottom + div.offsetHeight < window.innerHeight) {
        div.style.top = (divBottom + gravity) + 'px';
    }
}

// Función para verificar colisiones
function isColliding(div1, div2) {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    return !(
        rect1.top > rect2.bottom ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right ||
        rect1.right < rect2.left
    );
}

// Función para actualizar la posición en función de la velocidad
function updatePosition() {
    const divLeft = parseInt(div.style.left || '0px');
    const nextPosition = divLeft + velocityX;

    // Verifica colisión en cada frame y detén el movimiento si hay colisión
    if (velocityX > 0 && isColliding(div, obstaculo)) {
        // Si colisiona moviéndose hacia la derecha, lo coloca justo al borde izquierdo del obstáculo
        div.style.left = obstaculo.getBoundingClientRect().left - div.offsetWidth + 'px';
        velocityX = 0;
    } else if (velocityX < 0 && isColliding(div, obstaculo)) {
        // Si colisiona moviéndose hacia la izquierda, lo coloca justo al borde derecho del obstáculo
        div.style.left = obstaculo.getBoundingClientRect().right + 'px';
        velocityX = 0;
    } else {
        // Si no hay colisión, actualiza la posición del personaje
        div.style.left = nextPosition + 'px';
    }

    requestAnimationFrame(updatePosition); // Llama a esta función repetidamente para una animación suave
}

// Eventos de teclado para iniciar y detener el movimiento
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') velocityX = maxVelocityX;
    if (event.key === 'ArrowLeft') velocityX = -maxVelocityX;
    if (event.key === 'ArrowUp') {
        const divTop = parseInt(div.style.top || window.innerHeight - div.offsetHeight + 'px');
        if (divTop > 0) div.style.top = (divTop - jumpHeight) + 'px';
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        velocityX = 0; // Detenemos el movimiento al soltar la tecla
    }
});

// Aplicar la gravedad cada 20ms
setInterval(applyGravity, 20);

// Inicia el bucle de animación para el movimiento
updatePosition();