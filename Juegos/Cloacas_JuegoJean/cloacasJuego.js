const div = document.getElementById('personaje');
const obstaculo = document.getElementById('obstaculo');
const jumpHeight = 170;
const gravity = 5;
let velocityX = 0; // Velocidad horizontal inicial
const maxVelocityX = 5; // Velocidad máxima horizontal

// Función para aplicar la gravedad
function applyGravity() {
    const divBottom = parseInt(div.style.top || window.innerHeight - div.offsetHeight + 'px');

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
    if (divLeft + velocityX >= 0 && divLeft + div.offsetWidth + velocityX <= window.innerWidth) {
        div.style.left = (divLeft + velocityX) + 'px';
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
