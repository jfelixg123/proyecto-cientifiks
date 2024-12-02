document.addEventListener("DOMContentLoaded", function () {
    // Variables globales
    let timerInterval;
    let secondsElapsed = 0;
    let vidas = 3;
    const personaje = document.getElementById('personaje');
    const panelVidas = [
        document.getElementById('PrimeroVida'),
        document.getElementById('SegundaVida'),
        document.getElementById('TerceraVida')
    ];

    const pisos = document.querySelectorAll('.tercerPisoIzquierda, .segundoPisoIzquierda, .primerPisoIzquierda, .tercerPisoDerecha, .segundoPisoDerecha, .primerPisoDerecha, .pasoPrimerPiso, .pasoSegundoPiso');
    const juegoContenedor = document.getElementById('juegoContenedorCentral');
    const jumpHeight = 350;
    const gravity = 5;
    const maxVelocityX = 5;
    let velocityX = 0;
    let isJumping = false;
    let isOnGround = false;
    let pisoActual = null; // Piso actual donde el personaje se encuentra
    const suelo = document.querySelector('.suelo');

    // Selección de las ratas en sus pisos
    const rataTercerPiso = document.getElementById('rataTercerPiso');
    const rataSegundoPiso = document.getElementById('rataSegundoPiso');
    const rataPrimerPiso = document.getElementById('rataPrimerPiso');
    const rataSegundoPisoDerecha = document.getElementById('rataSegundoPisoDerecha');
    const rataPrimerPisoDerecha = document.getElementById('rataPrimerPisoDerecha');

    function reposicionarPersonaje() {
        personaje.style.left = '0px';
        personaje.style.top = '867px';
        isOnGround = true;
        isJumping = false;
        pisoActual = null;
    }

    // Función para perder vida
    function perderVida() {
        if (vidas > 0) {
            vidas--;
            panelVidas[vidas].style.display = 'none'; // Oculta la vida
            reposicionarPersonaje();
            if (vidas === 0) gameOver(); // Si ya no hay vidas, termina el juego
        }
    }

    const basura = document.querySelectorAll('.basuraTercerPiso, .basuraPrimerPiso, .basuraSegundoPisoDerecha, .basuraPrimerPisoDerecha');

    function handleObstacleCollision() {
        const personajeLeft = parseInt(personaje.style.left || '0px');

        // Determinar la dirección del rebote
        if (velocityX > 0) { // Si se mueve a la derecha
            personaje.style.left = (personajeLeft - 10) + 'px'; // Rebote hacia la izquierda
        } else if (velocityX < 0) { // Si se mueve a la izquierda
            personaje.style.left = (personajeLeft + 10) + 'px'; // Rebote hacia la derecha
        }
        // Detener el movimiento horizontal
        velocityX = 0;
    }
    function checkCollisionWithObstacles() {
        const personajeRect = personaje.getBoundingClientRect();

        basura.forEach((obstacle) => {
            const obstacleRect = obstacle.getBoundingClientRect();

            if (
                personajeRect.left < obstacleRect.right &&
                personajeRect.right > obstacleRect.left &&
                personajeRect.top < obstacleRect.bottom &&
                personajeRect.bottom > obstacleRect.top
            ) {
                handleObstacleCollision();
            }
        });
    }

    

    const slowVelocityX = 2;
    let velocidadReducida = false;

    function reducirVelocidad() {
        velocityX = Math.sign(velocityX) * slowVelocityX; // Mantiene la dirección, pero reduce la magnitud
        velocidadReducida = true; // Indicamos que la velocidad está reducida
    }

    function restaurarVelocidad() {
        velocityX = Math.sign(velocityX) * maxVelocityX; // Restablece la velocidad normal
        velocidadReducida = false; // Indicamos que ya no está reducida
    }

    const charcos = document.querySelectorAll('.charcoTercerPisoIzquierda, .charcoSegundoPisoIzquierda, .charcoPrimerPisoIzquierda, .charcoPrimerPisoDerecha');

    function checkCollisionWithCharcos() {
        const personajeRect = personaje.getBoundingClientRect();

        let enCharco = false; // Bandera para verificar si el personaje está en un charco

        charcos.forEach(charco => {
            const charcoRect = charco.getBoundingClientRect();

            if (
                personajeRect.left < charcoRect.right &&
                personajeRect.right > charcoRect.left &&
                personajeRect.top < charcoRect.bottom &&
                personajeRect.bottom > charcoRect.top
            ) {
                enCharco = true;
            }
        });

        if (enCharco && !velocidadReducida) {
            velocityX = Math.sign(velocityX) * slowVelocityX; // Reducir la velocidad
            velocidadReducida = true;
        } else if (!enCharco && velocidadReducida) {
            velocityX = Math.sign(velocityX) * maxVelocityX; // Restaurar la velocidad
            velocidadReducida = false;
        }
    }


    // Función para verificar las colisiones con las ratas
    function checkCollisionWithRats() {
        const personajeRect = personaje.getBoundingClientRect();
        const ratas = [rataTercerPiso, rataSegundoPiso, rataPrimerPiso, rataSegundoPisoDerecha, rataPrimerPisoDerecha];
        ratas.forEach(rata => {
            const rataRect = rata.getBoundingClientRect();
            if (
                personajeRect.left < rataRect.right &&
                personajeRect.right > rataRect.left &&
                personajeRect.top < rataRect.bottom &&
                personajeRect.bottom > rataRect.top
            ) {
                perderVida();
            }
        });
    }

    // Función para verificar las colisiones con los pisos
    function checkCollision() {
        const personajeRect = personaje.getBoundingClientRect();
        let collisionDetected = false;

        pisos.forEach(piso => {
            const pisoRect = piso.getBoundingClientRect();
            if (
                personajeRect.bottom <= pisoRect.top + gravity &&
                personajeRect.bottom >= pisoRect.top - gravity &&
                personajeRect.right > pisoRect.left &&
                personajeRect.left < pisoRect.right
            ) {
                collisionDetected = true;
                isOnGround = true;
                isJumping = false;
                pisoActual = piso;
                personaje.style.top = pisoRect.top - personaje.offsetHeight + 'px';
            }
        });

        if (!collisionDetected) {
            isOnGround = false;
            pisoActual = null;
        }
    }
/*
  
 
    function checkCollisionWithFloors() {
        const pisos = document.querySelectorAll('.tercerPisoIzquierda, .segundoPisoIzquierda, .primerPisoIzquierda, .tercerPisoDerecha, .segundoPisoDerecha, .primerPisoDerecha, .pasoPrimerPiso, .pasoSegundoPiso');
        const personajeRect = personaje.getBoundingClientRect();
        

        pisos.forEach(piso => {
            const pisoRect = piso.getBoundingClientRect();
    
            // Detectar colisión del personaje con la parte inferior del piso
            if (
                personajeRect.top <= pisoRect.bottom &&       // La cabeza del personaje alcanza la parte inferior del piso
                personajeRect.bottom > pisoRect.bottom    // El personaje está parcialmente debajo del piso
                
            ) {
            
                personaje.style.top = pisoRect.bottom + 6 + 'px'; // Coloca al personaje justo debajo del piso
                isJumping = false;
                    
            }
        });
    }
*/
    // Obtener referencias a todas las llaves de paso
    const llaves = document.querySelectorAll('.llavePasoTercerPiso, .llavePasoPrimerPiso, .llavePasoSegundoPisoDerecha, .llaveDePasoPrimerPisoDerecha');

    // Contador de llaves inicializado en 0
    let contadorLlaves = 0;

    // Función para verificar colisiones con las llaves
    function checkCollisionWithKeys() {
        const personajeRect = personaje.getBoundingClientRect();

        llaves.forEach((llave) => {
            const llaveRect = llave.getBoundingClientRect();

            if (
                personajeRect.left < llaveRect.right &&
                personajeRect.right > llaveRect.left &&
                personajeRect.top < llaveRect.bottom &&
                personajeRect.bottom > llaveRect.top
            ) {
                
                sumarLlave(llave);
            }
        });
    }

    function abrirPuerta() {
        const puerta = document.querySelector('.puerta');

        puerta.style.backgroundImage = "url('./imagenes/puerta.gif')";

    }

    // Función para sumar una llave y actualizar el contador en el DOM
    function sumarLlave(llave) {

        llave.remove();

        contadorLlaves++;

        document.querySelector('.llaves p:nth-child(2)').textContent = contadorLlaves;

        if (contadorLlaves === 4) {
            abrirPuerta();
        }
    }

    function applyGravity() {
        let personajeTop = parseInt(personaje.style.top || (window.innerHeight - personaje.offsetHeight) + 'px');

        if (!isOnGround) {
            personaje.style.top = (personajeTop + gravity) + 'px';
          //  checkCollisionWithFloors();
            checkCollision();
        } else if (pisoActual) {
            const pisoRect = pisoActual.getBoundingClientRect();
            personaje.style.top = pisoRect.top - personaje.offsetHeight + 'px';
        }

        const sueloRect = suelo.getBoundingClientRect();
        const personajeRect = personaje.getBoundingClientRect();
        
        if (personajeRect.bottom >= sueloRect.top) {
            isOnGround = true;
            personaje.style.top = sueloRect.top - personaje.offsetHeight + 'px';
            isJumping = false;
        }
        checkCollisionWithKeys();
        checkCollisionWithRats();
        checkCollisionWithCharcos();
        checkCollisionWithObstacles();
    }


    // Función para actualizar la posición horizontal del personaje
    function updatePosition() {
        const personajeLeft = parseInt(personaje.style.left || '0px');
        const nextPositionX = personajeLeft + velocityX;
        const contenedorRect = juegoContenedor.getBoundingClientRect();
        const personajeRight = nextPositionX + personaje.offsetWidth;

        if (nextPositionX < 0) {
            personaje.style.left = '0px';
        } else if (personajeRight > contenedorRect.width) {
            personaje.style.left = (contenedorRect.width - personaje.offsetWidth) + 'px';
        } else {
            personaje.style.left = nextPositionX + 'px';
        }

        requestAnimationFrame(updatePosition);
    }

    // Función para iniciar el temporizador
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

   // Función para mover una rata horizontalmente por su piso
// Función para mover una rata horizontalmente por su piso
function moverRataRebotando(rata, piso) {
    let posicionX = 0;            // Comienza desde el borde izquierdo del piso
    let velocidad = 2;            // Velocidad de movimiento
    const anchoPiso = piso.getBoundingClientRect().width; // Ancho del piso
    const anchoRata = rata.getBoundingClientRect().width; // Ancho de la rata
    let direccionInvertida = false; // La rata comienza mirando a la derecha (false)

    // Establecer la posición inicial de la rata
    rata.style.left = `${posicionX}px`;
    rata.style.transform = 'scaleX(-1)'; // Inicia mirando a la derecha

    // Función de animación
    function animacion() {
        posicionX += velocidad; // Actualiza la posición

        // Si la rata llega al extremo derecho del piso
        if (posicionX + anchoRata >= anchoPiso) {
            velocidad = -velocidad; // Cambia de dirección (hacia la izquierda)
            posicionX = anchoPiso - anchoRata; // Ajusta la posición al extremo derecho
            if (!direccionInvertida) {
                rata.style.transform = 'scaleX(1)'; // Gira a la izquierda
                direccionInvertida = true;
            }
        }
        // Si la rata llega al extremo izquierdo del piso
        else if (posicionX <= 0) {
            velocidad = -velocidad; // Cambia de dirección (hacia la derecha)
            posicionX = 0; // Ajusta la posición al extremo izquierdo
            if (direccionInvertida) {
                rata.style.transform = 'scaleX(-1)'; // Gira a la derecha
                direccionInvertida = false;
            }
        }

        // Actualiza la posición horizontal
        rata.style.left = `${posicionX}px`;

        // Llama a la animación en el siguiente cuadro
        requestAnimationFrame(animacion);
    }

    animacion(); // Inicia la animación
}

    
// Función para el fin del juego
    function gameOver() {
        clearInterval(timerInterval);
        alert("Game Over!");
    }

    // Eventos de teclado para mover el personaje
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') velocityX = maxVelocityX;
        if (event.key === 'ArrowLeft') velocityX = -maxVelocityX;
        if (event.key === 'ArrowUp' && isOnGround) {
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

    // Iniciar el bucle de animación para la posición horizontal
    updatePosition();

    // Iniciar el temporizador
    window.onload = function () {
        initializeTimer();
    };

    // Llamar a la función para mover las ratas
    moverRataRebotando(rataTercerPiso, document.querySelector('.tercerPisoIzquierda'));
    moverRataRebotando(rataSegundoPiso, document.querySelector('.segundoPisoIzquierda'));
    moverRataRebotando(rataPrimerPiso, document.querySelector('.primerPisoIzquierda'));
    moverRataRebotando(rataSegundoPisoDerecha, document.querySelector('.segundoPisoDerecha'));
    moverRataRebotando(rataPrimerPisoDerecha, document.querySelector('.primerPisoDerecha'));

    // Ejecutar gravedad en intervalos
    setInterval(applyGravity, 20);
});
