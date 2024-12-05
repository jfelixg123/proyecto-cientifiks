document.addEventListener("DOMContentLoaded", function () {
    let vidas = 3;
    const personaje = document.getElementById('personaje');
    const panelVidas = [
        document.getElementById('PrimeroVida'),
        document.getElementById('SegundaVida'),
        document.getElementById('TerceraVida')
    ];
    const pisos = document.querySelectorAll('.tercerPisoIzquierda, .segundoPisoIzquierda, .primerPisoIzquierda, .tercerPisoDerecha, .segundoPisoDerecha, .primerPisoDerecha, .pasoPrimerPiso, .pasoSegundoPiso');
    const juegoContenedor = document.getElementById('juegoContenedorCentral');
    const jumpHeight = 140;
    const gravity = 6;
    const maxVelocityX = 4;
    let velocityX = 0;
    let isJumping = false;
    let isOnGround = true;
    const suelo = document.querySelector('.suelo');
    const rataTercerPiso = document.getElementById('rataTercerPiso');
    const rataSegundoPiso = document.getElementById('rataSegundoPiso');
    const rataPrimerPiso = document.getElementById('rataPrimerPiso');
    const rataSegundoPisoDerecha = document.getElementById('rataSegundoPisoDerecha');
    const rataPrimerPisoDerecha = document.getElementById('rataPrimerPisoDerecha');

    function reposicionarPersonaje() {
        personaje.style.left = '0px';
        personaje.style.top = '869px';
        isOnGround = false;
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            velocityX = maxVelocityX;
            personaje.style.backgroundImage = "url('./imagenes/PersonajeCaminandoIzq.gif')";
        }
        if (event.key === 'ArrowLeft') {
            velocityX = -maxVelocityX;
            personaje.style.backgroundImage = "url('./imagenes/PersonajeCaminandoDer.gif')";
        }
        if (event.key === 'ArrowUp' && !isOnGround) {
            const personajeTop = parseInt(personaje.style.top || (window.innerHeight - personaje.offsetHeight) + 'px');
            personaje.style.top = (personajeTop - jumpHeight) + 'px';
            personaje.style.backgroundImage = "url('./imagenes/PersonajeSaltando.gif')";
            isOnGround = true;
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowRight') {
            personaje.style.backgroundImage = "url('./imagenes/AnnaMujal.gif')";
            velocityX = 0;
        }
        if (event.key === 'ArrowLeft') {
            personaje.style.backgroundImage = "url('./imagenes/PersonajeReposoDer.gif')";
            velocityX = 0;
        }
        if (event.key === 'ArrowUp' && !isJumping) {
            isJumping = true;
            personaje.style.backgroundImage = "url('./imagenes/AnnaMujal.gif')";


        }
    });

    function perderVida() {
        if (vidas > 0) {
            vidas--;
            panelVidas[vidas].style.display = 'none';
            reposicionarPersonaje();

            if (vidas === 0) {
                puntuacionFinal = 0;
                clearInterval(intervalo);
                gameOver();
                enviarPuntos();
            }
        }
    }

    const basura = document.querySelectorAll('.basuraTercerPiso, .basuraPrimerPiso, .basuraSegundoPisoDerecha, .basuraPrimerPisoDerecha');

    function handleObstacleCollision() {
        const personajeLeft = parseInt(personaje.style.left || '0px');

        if (velocityX > 0) {
            personaje.style.left = (personajeLeft - 10) + 'px';
        } else if (velocityX < 0) {
            personaje.style.left = (personajeLeft + 10) + 'px';
        }
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
    const charcos = document.querySelectorAll('.charcoTercerPisoIzquierda, .charcoSegundoPisoIzquierda, .charcoPrimerPisoIzquierda, .charcoPrimerPisoDerecha');

    function checkCollisionWithCharcos() {
        const personajeRect = personaje.getBoundingClientRect();
        let enCharco = false;
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
            velocityX = Math.sign(velocityX) * slowVelocityX;
            velocidadReducida = true;
        } else if (!enCharco && velocidadReducida) {
            velocityX = Math.sign(velocityX) * maxVelocityX;
            velocidadReducida = false;
        }
    }

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

    const llaves = document.querySelectorAll('.llavePasoTercerPiso, .llavePasoPrimerPiso, .llavePasoSegundoPisoDerecha, .llaveDePasoPrimerPisoDerecha');
    let contadorLlaves = 0;

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

    function sumarLlave(llave) {
        llave.remove();
        contadorLlaves++;
        document.querySelector('.llaves p:nth-child(2)').textContent = contadorLlaves;

        if (contadorLlaves === 4) {
            clearInterval(intervalo);
            multiplicadorPuntajeVidas();
            abrirPuerta();
            console.log(`¡Has recolectado 4 llaves! Puntaje final: ${puntuacionFinal}`);
            enviarPuntos();

        }
    }

    function applyGravity() {
        let personajeTop = parseInt(personaje.style.top || (window.innerHeight - personaje.offsetHeight) + 'px');
        const personajeRect = personaje.getBoundingClientRect();
        let isCollidingWithPiso = false;

        pisos.forEach(piso => {
            const pisoRect = piso.getBoundingClientRect();

            if (personajeRect.bottom >= pisoRect.top &&
                personajeRect.top < pisoRect.top &&
                personajeRect.right > pisoRect.left &&
                personajeRect.left < pisoRect.right) {

                personaje.style.top = pisoRect.top - personaje.offsetHeight + 'px';
                isOnGround = false;
                isCollidingWithPiso = true;
            }
        });

        if (isOnGround) {
            personaje.style.top = (personajeTop + gravity) + 'px';
        }
        
        if (!isCollidingWithPiso) {
            const sueloRect = suelo.getBoundingClientRect();
            if (personajeRect.bottom >= sueloRect.top) {
                personaje.style.top = sueloRect.top - personaje.offsetHeight + 'px';
                isOnGround = false;
            } else {
                isOnGround = true;
            }
        }
        checkCollisionWithKeys();
        checkCollisionWithRats();
        checkCollisionWithCharcos();
        checkCollisionWithObstacles();
    }

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

    let timeRemaining = 300;
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(updateTimerDisplay, 1000);
    }

    function updateTimerDisplay() {
        if (timeRemaining > 0) {
            timeRemaining--;
            const formattedTime = formatTime(timeRemaining);
            displayTime(formattedTime);
        } else {
            clearInterval(timerInterval); 
            displayTime("00:00");
            gameOver();
        }
    }

    function formatTime(totalSeconds) {
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    }

    function displayTime(timeString) {
        document.getElementById("tiempo").textContent = timeString;
    }

    let puntajeBase = 300;
    let puntuacionFinal = puntajeBase;
    let intervalo;

    function multiplicadorPuntajeVidas() {
        if (vidas > 0) {

            puntuacionFinal = Math.floor(puntajeBase * Math.pow(1.5, vidas));
        } else {
            puntuacionFinal = 0;
        }
        console.log("Puntaje final ajustado por vidas:", puntuacionFinal);
    }

    function iniciarPuntaje() {
        intervalo = setInterval(() => {
            if (puntajeBase > 0) {
                puntajeBase--; 
                console.log(puntajeBase)
            } else {
                clearInterval(intervalo);
                puntuacionFinal = 0;
                alert("¡Juego terminado!", puntuacionFinal);

            puntaje = Math.floor(puntajeBase * Math.pow(1.5, vidas - 1));  // Multiplicar puntaje por 1.5 por cada vida
          } else {
            puntaje = 0;
          } 
    }

    function iniciarPuntaje(){
    intervalo = setInterval(() => {
      if (puntajeBase > 0) {    
        puntajeBase--;  // Restar 1 al puntaje
        console.log(puntajeBase);
      } else {
        clearInterval(intervalo);  // Detener el temporizador cuando llega a 0
        puntaje = 0;
        alert("¡Juego terminado!");
      }
    }, 1000);  // Intervalo de 1 segundo
}

    

   // Función para mover una rata horizontalmente por su piso
// Función para mover una rata horizontalmente por su piso
function moverRataRebotando(rata, piso) {
    let posicionX = 0;            // Comienza desde el borde izquierdo del piso
    let velocidad = 1.5;            // Velocidad de movimiento
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
        }, 1000); 
    }

    function moverRataRebotando(rata, piso) {
        let posicionX = 0;            
        let velocidad = 1.5;            
        const anchoPiso = piso.getBoundingClientRect().width; 
        const anchoRata = rata.getBoundingClientRect().width; 
        let direccionInvertida = false; 
 
        rata.style.left = `${posicionX}px`;
        rata.style.transform = 'scaleX(-1)'; 

        function animacion() {
            posicionX += velocidad; 

            if (posicionX + anchoRata >= anchoPiso) {
                velocidad = -velocidad;
                posicionX = anchoPiso - anchoRata;
                if (!direccionInvertida) {
                    rata.style.transform = 'scaleX(1)';
                    direccionInvertida = true;
                }
            }
            else if (posicionX <= 0) {
                velocidad = -velocidad; 
                posicionX = 0; 
                if (direccionInvertida) {
                    rata.style.transform = 'scaleX(-1)'; 
                    direccionInvertida = false;
                }
            }
            rata.style.left = `${posicionX}px`;

            requestAnimationFrame(animacion);
        }
            animacion();
    }

    function gameOver() {
        clearInterval(timerInterval);
        alert("Game Over!");
    }

    function enviarPuntos(){
        fetch('../DeltaDeLlobregat_JuegoPablo/Pacman/php/Obtenerscore.php?id_videojuego=3&puntuacion=' + puntuacionFinal)

            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    updatePosition();
    moverRataRebotando(rataTercerPiso, document.querySelector('.tercerPisoIzquierda'));
    moverRataRebotando(rataSegundoPiso, document.querySelector('.segundoPisoIzquierda'));
    moverRataRebotando(rataPrimerPiso, document.querySelector('.primerPisoIzquierda'));
    moverRataRebotando(rataSegundoPisoDerecha, document.querySelector('.segundoPisoDerecha'));
    moverRataRebotando(rataPrimerPisoDerecha, document.querySelector('.primerPisoDerecha'));

    setInterval(applyGravity, 20);

    window.onload = function () {
        startTimer();
        iniciarPuntaje();
    };

});