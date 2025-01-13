document.addEventListener("DOMContentLoaded", function () {
    const personaje = document.getElementById('personaje');
    const panelVidas = [
        document.getElementById('PrimeroVida'),
        document.getElementById('SegundaVida'),
        document.getElementById('TerceraVida')
    ];
    const modal = document.getElementById("modal");
    const jugar = document.getElementById("botonPlay");
    const pisos = document.querySelectorAll('.tercerPisoIzquierda, .segundoPisoIzquierda, .primerPisoIzquierda, .tercerPisoDerecha, .segundoPisoDerecha, .primerPisoDerecha, .pasoPrimerPiso, .pasoSegundoPiso');
    const juegoContenedor = document.getElementById('juegoContenedorCentral');
    const aparecerJuego = document.getElementById('juegoContenedor');
    const alturaSalto = 140;
    const gravedad = 5;
    const maxvelocidadX = 4;
    const suelo = document.querySelector('.suelo');
    const puerta = document.querySelector('.puerta');
    const pantallaGameOver = document.getElementById('pantallaGameOver');
    const pantallaFelicitaciones = document.getElementById('pantallaFelicitaciones');
    const rataTercerPiso = document.getElementById('rataTercerPiso');
    const rataSegundoPiso = document.getElementById('rataSegundoPiso');
    const rataPrimerPiso = document.getElementById('rataPrimerPiso');
    const rataSegundoPisoDerecha = document.getElementById('rataSegundoPisoDerecha');
    const rataPrimerPisoDerecha = document.getElementById('rataPrimerPisoDerecha');
    const volverMenuGameOver = document.getElementById('volverMenuGameOver');
    const volverMenuCongratulations = document.getElementById('volverMenuCongratulations');
    const music = document.getElementById('background-music');
    let juegoEmpezado = false;
    let velocidadX = 0;
    let estaSaltando = false;
    let estaEnSuelo = true;
    let vidas = 3;

    function reposicionarPersonaje() {
        personaje.style.left = '0px';
        personaje.style.top = '869px';
        estaEnSuelo = false;
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            velocidadX = maxvelocidadX;
            personaje.style.backgroundImage = "url('./imagenes/PersonajeCaminandoIzq.gif')";
        }
        if (event.key === 'ArrowLeft') {
            velocidadX = -maxvelocidadX;
            personaje.style.backgroundImage = "url('./imagenes/PersonajeCaminandoDer.gif')";
        }
        if (event.key === 'ArrowUp' && !estaEnSuelo) {
            const personajeTop = parseInt(personaje.style.top || (window.innerHeight - personaje.offsetHeight) + 'px');
            personaje.style.top = (personajeTop - alturaSalto) + 'px';
            personaje.style.backgroundImage = "url('./imagenes/PersonajeSaltando.gif')";
            estaEnSuelo = true;
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowRight') {
            personaje.style.backgroundImage = "url('./imagenes/AnnaMujal.gif')";
            velocidadX = 0;
        }
        if (event.key === 'ArrowLeft') {
            personaje.style.backgroundImage = "url('./imagenes/PersonajeReposoDer.gif')";
            velocidadX = 0;
        }
        if (event.key === 'ArrowUp' && !estaSaltando) {
            estaSaltando = true;
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
                terminarJuego();
                moverRataRebotando()
            }
        }
    }

    jugar.addEventListener("click", function () {
        modal.classList.add('modal-off');
        aparecerJuego.style.display = "block";
        if (!juegoEmpezado) {
            music.play();
            music.volume = 0.2;
            iniciarTemporizador();
            iniciarPuntaje();
            aplicarGravedad();
            reposicionarPersonaje();
            moverRataRebotando(rataTercerPiso, document.querySelector('.tercerPisoIzquierda'));
            moverRataRebotando(rataSegundoPiso, document.querySelector('.segundoPisoIzquierda'));
            moverRataRebotando(rataPrimerPiso, document.querySelector('.primerPisoIzquierda'));
            moverRataRebotando(rataSegundoPisoDerecha, document.querySelector('.segundoPisoDerecha'));
            moverRataRebotando(rataPrimerPisoDerecha, document.querySelector('.primerPisoDerecha'));
        }
    });

    const basura = document.querySelectorAll('.basuraTercerPiso, .basuraPrimerPiso, .basuraSegundoPisoDerecha, .basuraPrimerPisoDerecha');

    function handleObstacleCollision() {
        const personajeLeft = parseInt(personaje.style.left || '0px');

        if (velocidadX > 0) {
            personaje.style.left = (personajeLeft - 10) + 'px';
        } else if (velocidadX < 0) {
            personaje.style.left = (personajeLeft + 10) + 'px';
        }
        velocidadX = 0;
    }

    function verificarColisionConBasuras() {
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

    const slowvelocidadX = 2;
    let velocidadReducida = false;
    const charcos = document.querySelectorAll('.charcoTercerPisoIzquierda, .charcoSegundoPisoIzquierda, .charcoPrimerPisoIzquierda, .charcoPrimerPisoDerecha');

    function verificarColisionCharcos() {
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
            velocidadX = Math.sign(velocidadX) * slowvelocidadX;
            velocidadReducida = true;
        } else if (!enCharco && velocidadReducida) {
            velocidadX = Math.sign(velocidadX) * maxvelocidadX;
            velocidadReducida = false;
        }
    }

    function verificarColisionRatas() {
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

    function verificarColisionConLlaves() {
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

    function detectarColisionPuertaFinal() {
        if (contadorLlaves === 4) {
            const personajeRect = personaje.getBoundingClientRect();
            const puertaRect = puerta.getBoundingClientRect();

            if (
                personajeRect.left < puertaRect.right &&
                personajeRect.right > puertaRect.left &&
                personajeRect.top < puertaRect.bottom &&
                personajeRect.bottom > puertaRect.top
            ) {
                finJuego();
                enviarPuntos();
            }
        }
    }


    function sumarLlave(llave) {
        llave.remove();
        contadorLlaves++;
        document.querySelector('.llaves p:nth-child(2)').textContent = contadorLlaves;

        if (contadorLlaves === 4) {
            puerta.style.backgroundImage = "url('./imagenes/puerta.gif')";
            clearInterval(intervalo);
            multiplicadorPuntajeVidas();
        }
    }

    function aplicarGravedad() {
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
                estaEnSuelo = false;
                isCollidingWithPiso = true;
            }
        });

        if (estaEnSuelo) {
            personaje.style.top = (personajeTop + gravedad) + 'px';
        }

        if (!isCollidingWithPiso) {
            const sueloRect = suelo.getBoundingClientRect();
            if (personajeRect.bottom >= sueloRect.top) {
                personaje.style.top = sueloRect.top - personaje.offsetHeight + 'px';
                estaEnSuelo = false;
            } else {
                estaEnSuelo = true;
            }
        }
        verificarColisionConLlaves();
        verificarColisionRatas();
        verificarColisionCharcos();
        verificarColisionConBasuras();
        detectarColisionPuertaFinal();
    }

    function actualizarPosision() {
        const personajeLeft = parseInt(personaje.style.left || '0px');
        const nextPositionX = personajeLeft + velocidadX;
        const contenedorRect = juegoContenedor.getBoundingClientRect();
        const personajeRight = nextPositionX + personaje.offsetWidth;

        if (nextPositionX < 0) {
            personaje.style.left = '0px';
        } else if (personajeRight > contenedorRect.width) {
            personaje.style.left = (contenedorRect.width - personaje.offsetWidth) + 'px';
        } else {
            personaje.style.left = nextPositionX + 'px';
        }
        requestAnimationFrame(actualizarPosision);
    }

    let timeRemaining = 300;
    let timerInterval;

    function iniciarTemporizador() {
        timerInterval = setInterval(actualizarTemporizador, 1000);
    }

    function actualizarTemporizador() {
        if (timeRemaining > 0) {
            timeRemaining--;
            const formattedTime = formatTime(timeRemaining);
            mostrarTiempo(formattedTime);
        } else {
            clearInterval(timerInterval);
            mostrarTiempo("00:00");
            terminarJuego();
        }
    }

    function formatTime(totalSeconds) {
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    }

    function mostrarTiempo(timeString) {
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
                terminarJuego();
                console.log("¡Juego terminado!", puntuacionFinal);
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

    function terminarJuego() {
        music.pause();
        pantallaGameOver.style.display = 'flex';
        aparecerJuego.style.display = 'none';
        enviarPuntos();
    }

    function finJuego() {
        pantallaFelicitaciones.style.display = 'flex';
        aparecerJuego.style.display = 'none';
    }

    function volverAlIndex() { 
        window.location.href = '../../../PanelJoc.html';
    }

    if (volverMenuGameOver) {
        volverMenuGameOver.addEventListener("click", function () {
            volverAlIndex();
        });
    }
    
    if (volverMenuCongratulations) {
        volverMenuCongratulations.addEventListener("click", function () {
            volverAlIndex();
        });
    }

    function enviarPuntos() {
        fetch('../../../php/Obtenerscore.php?id_videojuego=4&puntuacion=' + puntuacionFinal)

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

    actualizarPosision();

    setInterval(aplicarGravedad, 20);
});