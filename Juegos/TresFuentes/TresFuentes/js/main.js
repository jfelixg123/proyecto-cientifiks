const player = document.getElementById("player");
const playerCollider = document.getElementById("playerCollider");
const scoreElem = document.getElementById("score");
const enemigoContainer = document.getElementById("enemigo-container");
const fondo = document.getElementById("background");
const jugar = document.getElementById("botonPlay");
const modal = document.getElementById("modal");
const board = document.getElementById("board");
const fuente = document.getElementById("imagenFuente");
const vampiro = document.getElementById("vampiroVertical");
const gameOverScreen = document.getElementById('gameOverScreen');
const jugarotravez = document.getElementById('jugarDeNuevo');
const volverMenu = document.getElementById('returnMenu');
const vampiroHorizontal = document.getElementById('vampiro');

/**
 * Variables para el score,personaje,enemigos.
 */
let morir = false;
let score = 0;
let gameStarted = false;
let scoreInterval;
let enemigoInterval;
let mapacheInterval;
let enemigoArray = [];
let index = 0;
let gameOver = false;

/** 
 * Movimientos de el espacio para saltar y flecha abajo y arriba para cada vez que interactua el personaje
*/
jugar.addEventListener("click", function () {
    modal.classList.add('modal-off'); // Ocultar el modal   
    board.style.display = "block";
    if (!gameStarted) {
        startScoreCounter();
        gameStarted = true;
        generadorEnemigos();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        player.classList.add("playerJump");
        player.style.backgroundImage = "url('./img/gifchica_saltando.gif')";
    }
});

player.addEventListener('animationend', () => {
    player.classList.remove("playerJump");
    player.style.backgroundImage = "url('./img/gifchica.gif')";
});

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowDown") {
        playerCollider.style.animation = "agacharse 0.1s forwards";
        player.style.backgroundImage = "url('./img/gifchica_esquivar.png')";


    }
});

document.addEventListener("keyup", function (event) {
    if (event.code === "ArrowDown") {
        playerCollider.style.animation = "none";
        player.style.backgroundImage = "url('./img/gifchica.gif')";
        playerCollider.style.height = "100%";
        playerCollider.style.bottom = "0px";
    }
});

/**
 * Muestra el display de la pantalla de Game Overy puedes volver a jugar o volver al Menu de todos los juegos
 */
function mostrarPantallaGameOver() {
    const gameOverScreen = document.getElementById('gameOverScreen');
    gameOverScreen.style.display = 'flex';
    console.log("Pantalla de 'Has muerto' mostrada.");

    jugarotravez.addEventListener("click", function () {
        reiniciarJuego();
    });

    volverMenu.addEventListener("click", function () {
        returnMenu();
    });
}

function  returnMenu(){
    volverMenu.addEventListener('click', function() {
        window.location.href = '/proyecto-cientifiks/PanelJoc.html';

    });
}
/**
 *  Funcion para el Score cuando empieza el juego, empieza a contar el Score
 * @returns 
 */
function startScoreCounter() {
    scoreInterval = setInterval(() => {
        score += 1;
        scoreElem.textContent = `Score: ${score}`;

        if (score == 100) {
            fuente.style.display = 'block';
            console.log("Primera fuente");
            setTimeout(() => {
                fuente.style.display = 'none';
            }, 2200);

        } else if (score == 200) {
            fuente.src = './img/segundafuente.gif';
            fuente.style.width = '30%';
            fuente.style.display = 'block';
            console.log("SEGUNDA FUENTE");
            setTimeout(() => {
                fuente.style.display = 'none';
            }, 4200);

        } else if (score == 350) {
            fuente.src = './img/fuente3.gif';
            fuente.style.width = '30%';
            fuente.style.display = 'block';
            console.log("Tercera fuente");
            setTimeout(() => {
                fuente.style.display = 'none';
            }, 4200);
        }
    }, 100);
    return score;
}
/**
 * Esta funcion detecta Colisiones para cada enemigo con el box Collider que cree para el player.
 * @returns 
 */
function detectarColision() {
    const playerRect = playerCollider.getBoundingClientRect();


    for (let enemigo of enemigoArray) {
        const enemigoRect = enemigo.getBoundingClientRect();

        // Verificar colisión entre el jugador y el enemigo
        const colisionEnemigo = (
            playerRect.left < enemigoRect.left + enemigoRect.width &&
            playerRect.left + playerRect.width > enemigoRect.left &&
            playerRect.top < enemigoRect.top + enemigoRect.height &&
            playerRect.top + playerRect.height > enemigoRect.top
        );


        if (colisionEnemigo) {
            console.log("Colisión detectada con un enemigo");
            return true;
        }
    }

    const vampiroRect = vampiro.getBoundingClientRect();
    const colisionVampiro = (
        playerRect.left < vampiroRect.left + vampiroRect.width &&
        playerRect.left + playerRect.width > vampiroRect.left &&
        playerRect.top < vampiroRect.top + vampiroRect.height &&
        playerRect.top + playerRect.height > vampiroRect.top
    );

    if (colisionVampiro) {
        console.log("Colisión detectada con el vampiro");
        return true;
    }


    return false;
}

/**
 * Esta funcion detiene la animacion de los enemigos cuando se muere el personaje y esta la pantalla final
 */
function detenerAnimacionEnemigos() {
    vampiroHorizontal.style.animation = "none";

    for (let enemigo of enemigoArray) {
        enemigo.style.animation = "none";
        enemigo.style.left = enemigo.style.left;
        enemigo.style.top = enemigo.style.top;
    }

}
/**
 * Esta funciona es para reniciar el juego cada vez que te mueres te reinicia el:
 * Score
 * El array de enemigos
 * Y cada animacion de cada enemigo
 */
function reiniciarJuego() {
    score = 0;
    gameStarted = true;
    morir = false;
    fondo.style.animation = "moveBackground 10s linear infinite";
    gameOverScreen.style.display = 'none';

    enemigoContainer.innerHTML = '';
    enemigoArray = [];
    index = 0;
    vampiro.style.animation = "moveVampiroVertical 11s linear infinite";
    clearInterval(scoreInterval);
    clearInterval(enemigoInterval);
    clearInterval(mapacheInterval);
    startScoreCounter();

    generadorEnemigos();
}
/**
 * Esta funcion es el loop del juego aqui compruebas que cada vez que te mueres si lo detecta la colision entonces te mueres
 * y sale la pantalla de gameover, se detiene la animacion de los enemigos y se guarda el score en la base de datos, en 'guardarScore'
 */
function gameLoop() {
    if (detectarColision()) {
        morir = true;
        console.log("has muerto");

        fondo.style.animation = "none";
        vampiro.style.animation = "none";

        detenerAnimacionEnemigos();

        guardarScore(score);
        clearInterval(scoreInterval);

        gameStarted = false;
        mostrarPantallaGameOver();
        clearInterval(enemigoInterval);
        clearInterval(mapacheInterval);
    }
    requestAnimationFrame(gameLoop);
}

/**
 * Esta funcion hace que genere enemigos, mientras sigas sin morir que no paren de aparecer cada 3 segundos unos y los mapaches cada 15 segundos.
 */

function generadorEnemigos() {

    if (!morir) {
        enemigoInterval = setInterval(() => {

            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("enemigo");

            enemigoContainer.appendChild(nuevoDiv);
            enemigoArray.push(nuevoDiv);


            console.log("Enemigo añadido: " + enemigoArray.length);

        }, 3000);

        mapacheInterval = setInterval(() => {

            let enemigoMapache = document.createElement("div");
            enemigoMapache.classList.add("enemigosMapache");

            enemigoContainer.appendChild(enemigoMapache);
            enemigoArray.push(enemigoMapache);

        }, 15000);
    }
}
/**
 * Esta funcion es la funcion que se usa como API para llamar al php y que obtenga el score de cada usuario y se quede registrado en el sql gracias el PDO.
 * @param {*} score 
 */
function guardarScore(score) {
    //debugger;
    fetch('php/obtenerScore.php?id_videojuego=1&puntuacion=' + score)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            // Puedes mostrar un mensaje al usuario aquí, por ejemplo, usando un alert o actualizando el DOM
        })
        .catch(error => {
            console.error('Error:', error);

        });
}

gameLoop();
