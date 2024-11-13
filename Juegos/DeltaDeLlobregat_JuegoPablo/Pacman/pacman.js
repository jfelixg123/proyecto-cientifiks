const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 3, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 3, 1, 4, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 5, 1, 0, 0, 0, 3, 1],
    [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 5, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 3, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 5, 3, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

    
const gameContainer = document.getElementById('game');
let vidas = 3;
let pacmanPosition = { x: 1, y: 18 };   // Posición inicial del pacman
let enemyPosition = { x: 47, y: 18 }; // Posición inicial del enemigo
let secondEnemyPosition = { x: 32, y: 10 };  
let score = 8; // Variable global para la puntuación
let canMove = true; // Variable para controlar si Pac-Man puede moverse
let timerInterval;
let timeLeft = 300;
let currentSpeed = 250;
let boostTimeout;
let secondEnemyAppeared = false;
let isPaused = false;
let enemyMovementInterval;

// Crear el mapa
function createMap() {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (map[row][col] === 1) {
                cell.classList.add('wall');
            }else if(map[row][col] === 2){
                cell.classList.add('exit');
            } else if(map[row][col] === 3){
                cell.classList.add('point');
            }else if(map[row][col] === 4){
                cell.classList.add('SpeedBoost');
            }else if(map[row][col] === 5){
                cell.classList.add('The_World');
            }
            gameContainer.appendChild(cell);
        }
    }
}
function drawPacman() {
    const cells = document.querySelectorAll('.cell');
    const index = pacmanPosition.y * map[0].length + pacmanPosition.x;
    cells[index].classList.add('pacman');
}
function drawEnemy() {
    const cells = document.querySelectorAll('.cell');    
    // Dibujar el primer enemigo
    const index = enemyPosition.y * map[0].length + enemyPosition.x;
    cells[index].classList.add('enemy');    
    // Dibujar el segundo enemigo solo si ha aparecido
    if (secondEnemyAppeared) {
        const secondIndex = secondEnemyPosition.y * map[0].length + secondEnemyPosition.x;
        cells[secondIndex].classList.add('enemy');
    }
}
function movePacman(dx, dy) {
    if (!isPaused) {
        const newX = pacmanPosition.x + dx;
        const newY = pacmanPosition.y + dy;    
        // Verifica si la posicion se puede mover
        if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length && (map[newY][newX] === 0 || map[newY][newX] === 2 || map[newY][newX] === 3 || map[newY][newX] === 4|| map[newY][newX] === 5)) {
            // Quitar la poscion anterior
            const cells = document.querySelectorAll('.cell');
            const currentIndex = pacmanPosition.y * map[0].length + pacmanPosition.x;
            cells[currentIndex].classList.remove('pacman');
            // Actualizar posición
            pacmanPosition.x = newX;
            pacmanPosition.y = newY;
            // Dibujar en la nueva posición
            drawPacman();
            // Verificar colisión con el enemigo
            checkCollision();
        }
    }
}
// Mover el enemigo utilizando BFS
function moveEnemy() {
    if (!isPaused) {
        // Mover el primer enemigo
        const path = findPath(enemyPosition, pacmanPosition);
        if (path.length > 1) {
            const nextPosition = path[1]; // La siguiente posición en el camino
            const cells = document.querySelectorAll('.cell');
            const currentIndex = enemyPosition.y * map[0].length + enemyPosition.x;
            cells[currentIndex].classList.remove('enemy');
            // Actualizar posición del primer enemigo
            enemyPosition.x = nextPosition.x;
            enemyPosition.y = nextPosition.y;
            // Dibujar al primer enemigo en la nueva posición
            drawEnemy();
        }

        // Mover el segundo enemigo si ha aparecido
        if (secondEnemyAppeared) {
            const secondPath = findPath(secondEnemyPosition, pacmanPosition); // Encontrar el camino para el segundo enemigo
            if (secondPath.length > 1) {
                const secondNextPosition = secondPath[1]; // La siguiente posición en el camino
                const cells = document.querySelectorAll('.cell');
                const secondCurrentIndex = secondEnemyPosition.y * map[0].length + secondEnemyPosition.x;
                cells[secondCurrentIndex].classList.remove('enemy');

                // Comprobar si ambos enemigos se moverían a la misma casilla
                if (secondNextPosition.x === enemyPosition.x && secondNextPosition.y === enemyPosition.y) {
                    // Si se juntarían, mueve el segundo enemigo a la siguiente posición disponible (path[2])
                    if (secondPath.length > 2) {
                        const alternativePosition = secondPath[2]; // Tomar el siguiente paso como alternativa
                        secondEnemyPosition.x = alternativePosition.x;
                        secondEnemyPosition.y = alternativePosition.y;
                    } else {
                        // Si no hay pasos alternativos, se mantiene en su lugar
                        secondEnemyPosition.x = secondPath[1].x;
                        secondEnemyPosition.y = secondPath[1].y;
                    }
                } else {
                    // Si no están en la misma casilla, mueve al segundo enemigo a la siguiente posición
                    secondEnemyPosition.x = secondNextPosition.x;
                    secondEnemyPosition.y = secondNextPosition.y;
                }

                // Dibujar al segundo enemigo en la nueva posición
                drawSecondEnemy(); // Aquí asumimos que tienes una función drawSecondEnemy() para el segundo enemigo
            }
        }
        checkCollision();  // Comprobar las colisiones después de mover los enemigos
    }
}
// Encuentra el camino utilizando BFS
function findPath(start, goal) {
    const queue = [{ position: start, path: [] }];
    const visited = new Set();
    const directions = [
        { dx: 0, dy: -1 }, // Arriba
        { dx: 0, dy: 1 },  // Abajo
        { dx: -1, dy: 0 }, // Izquierda
        { dx: 1, dy: 0 }   // Derecha
    ];
    while (queue.length > 0) {
        const { position, path } = queue.shift();
        const posKey = `${position.x},${position.y}`;
        // Evitar visitar posiciones ya exploradas
        if (visited.has(posKey)) continue;
        visited.add(posKey);
        // Si hemos llegado a la posición objetivo, devolvemos el camino
        if (position.x === goal.x && position.y === goal.y) {
            return [...path, goal];
        }
        // Explorar las celdas vecinas
        for (const { dx, dy } of directions) {
            const newX = position.x + dx;
            const newY = position.y + dy;
            // Asegurarnos de que estamos dentro de los límites del mapa
            if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length) {
                // Permitir que el enemigo pase por las celdas vacías (0) y los puntos (3)
                if (map[newY][newX] === 0 || map[newY][newX] === 3 || map[newY][newX] === 4 || map[newY][newX] === 5) {
                    queue.push({ position: { x: newX, y: newY }, path: [...path, position] });
                }
            }
        }
    }
    // Si no se encuentra un camino, devolvemos una lista vacía
    return [];
}
function checkCollision() {
    const cells = document.querySelectorAll('.cell');
    const index = pacmanPosition.y * map[0].length + pacmanPosition.x;
    // Comprobar colisión con el primer enemigo
    if (pacmanPosition.x === enemyPosition.x && pacmanPosition.y === enemyPosition.y) {
        if (vidas === 1) {
            showGameOverPopup();
        } else {
            vidas--;
            updateLivesDisplay();
            resetPositions();
        }
    }
    // Comprobar colisión con el segundo enemigo si ha aparecido
    if (secondEnemyAppeared && pacmanPosition.x === secondEnemyPosition.x && pacmanPosition.y === secondEnemyPosition.y) {
        if (vidas === 1) {
            showGameOverPopup();
        } else {
            vidas--;
            updateLivesDisplay();
            resetPositions();
        }
    }
    // Comprobar si Pac-Man recoge un punto
    if (map[pacmanPosition.y][pacmanPosition.x] === 3) {
        score++;
        updateScoreDisplay();
        map[pacmanPosition.y][pacmanPosition.x] = 0;
        cells[index].classList.remove('point');
        if (score === 9) {
            DesbloquearMuro();
        }else if(score === 10){
            secondEnemyAppeared = true;  // El segundo enemigo aparece después de 9 puntos
            drawSecondEnemy();
            DesbloquearMuro();
        }
    } else if (map[pacmanPosition.y][pacmanPosition.x] === 4) {
        map[pacmanPosition.y][pacmanPosition.x] = 0;
        cells[index].classList.remove('SpeedBoost');
        activateSpeedBoost();
    }else if(map[pacmanPosition.y][pacmanPosition.x] === 5){
        map[pacmanPosition.y][pacmanPosition.x] = 0;
        cells[index].classList.remove('The_World');
        StopTime();
    } else if (map[pacmanPosition.y][pacmanPosition.x] === 2) {
        if (score >= 6) {
            showWinPopup();
        }
    }
}
function drawSecondEnemy() {
    const cells = document.querySelectorAll('.cell');
    const index = secondEnemyPosition.y * map[0].length + secondEnemyPosition.x;
    if (cells[index]) {
        cells[index].classList.add('enemy'); // Dibujar al segundo enemigo en el mapa
    }
}
function DesbloquearMuro() {  
    const Muros = [
        [15, 32], [16,32],[17,32],[14,31],[14,33],[15,33],[15,31]
    ];
    const Muros2 =[
        [4,39],[5,39],[9,12],[7,23],[7,22]
    ];
    Muros.forEach(([fila, columna]) => {
        const index = fila * map[0].length + columna;
        map[fila][columna] = 0; // Cambia el valor en el mapa a un espacio vacío (0)
        // Actualiza la celda en el DOM para que se muestre como un espacio vacío
        const cell = document.querySelectorAll('.cell')[index];
        if (cell) {
            cell.className = 'cell'; // Remueve cualquier clase adicional para que se muestre como vacío
        }
    });
    if(score === 10){
        Muros2.forEach(([fila, columna]) => {
            const index = fila * map[0].length + columna;
            map[fila][columna] = 0; // Cambia el valor en el mapa a un espacio vacío (0)
            // Actualiza la celda en el DOM para que se muestre como un espacio vacío
            const cell = document.querySelectorAll('.cell')[index];
            if (cell) {
                cell.className = 'cell'; // Remueve cualquier clase adicional para que se muestre como vacío
            }
        });
    }
}
function showWinPopup() {
    isPaused = true; // Pausar el juego
    // Mostrar el popup de victoria y actualizar el puntaje final
    document.getElementById('winPopup').style.display = 'flex';
    document.getElementById('finalWinScore').innerText = score;
    // Botón de reiniciar
    document.getElementById('winRestartButton').addEventListener('click', () => {
        document.getElementById('winPopup').style.display = 'none';
        resetGame(); // Reiniciar el juego
    });
    // Botón de salir
    document.getElementById('winExitButton').addEventListener('click', () => {
        window.location.href = 'index.html'; // Cambia 'index.html' a la página de salida deseada
    });
}
function showGameOverPopup() {
    isPaused = true; // Pausar el juego
    // Mostrar el popup y actualizar el puntaje final
    document.getElementById('gameOverPopup').style.display = 'flex';
    document.getElementById('finalScore').innerText = score;
    // Botón de reiniciar
    document.getElementById('restartButton').addEventListener('click', () => {
        document.getElementById('gameOverPopup').style.display = 'none';
        resetGame(); // Reiniciar el juego
    });
    // Botón de salir
    document.getElementById('exitButton').addEventListener('click', () => {
        window.location.href = 'index.html'; // Cambia 'index.html' a la página de salida deseada
    });
}
function StopTime() {
    // Detiene el movimiento del enemigo
    clearInterval(enemyMovementInterval);
    // Después de 5 segundos, vuelve a iniciar el movimiento del enemigo
    setTimeout(() => {
        startEnemyMovement(); // Reactiva el movimiento del enemigo
    }, 5000); // 5 segundos
}
function activateSpeedBoost() {
    currentSpeed = 25; // Cambia a velocidad aumentada
    clearTimeout(boostTimeout); // Limpia cualquier boost anterior

    boostTimeout = setTimeout(() => {
        currentSpeed = 200; // Vuelve a la velocidad normal después de 5 segundos
    }, 5000);
}
function updateLivesDisplay() {
    const hearts = document.querySelectorAll('#vida img'); // Asegúrate de seleccionar las imágenes de los corazones
    hearts.forEach((heart, index) => {
        if (index < vidas) {
            heart.src = './ImagenJuego/heartPablo.png'; // Imagen de corazón
            heart.classList.remove('heart-lost');
        } else {
            heart.src = './ImagenJuego/brokenHeart.png'; // Imagen de vida perdida
            heart.classList.add('heart-lost');
        }
    });
}
function resetPositions() {
    // Reiniciar las posiciones de Pac-Man y los enemigos
    pacmanPosition = { x: 1, y: 18 };
    enemyPosition = { x: 47, y: 18 };
    secondEnemyPosition = { x: 32, y: 10 }; // Posición inicial del segundo enemigo
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('pacman');
        cell.classList.remove('enemy');
    });
    drawPacman();
    drawEnemy(); // Dibuja al primer enemigo
    // Si el segundo enemigo ha aparecido, dibújalo en su posición inicial
    if (secondEnemyAppeared) {
        drawSecondEnemy(); // Función que dibuja al segundo enemigo
    }
}
function resetGame() {
    // Ocultar popups de fin de juego y victoria
    document.getElementById('gameOverPopup').style.display = 'none';
    document.getElementById('winPopup').style.display = 'none'; // Ocultar el popup de victoria
    // Reiniciar puntos, vidas y mostrar actualizaciones
    ResetGamePoint();
    updateLivesDisplay();
    updateScoreDisplay();
    // Detener el temporizador y reiniciarlo
    clearInterval(timerInterval);  // Detener el temporizador anterior
    timeLeft = 300;  // Reiniciar el tiempo a 300 segundos (5 minutos)
    updateTimer();  // Mostrar el tiempo reiniciado
    startTimer();  // Iniciar el temporizador nuevamente
    // Limpiar el contenedor del juego
    gameContainer.innerHTML = ''; 
    // Crear el mapa y restablecer las posiciones de Pac-Man y el enemigo
    createMap();
    resetPositions();
    // Asegurarse de que el segundo enemigo desaparezca si está en el mapa
    if (secondEnemyAppeared) {
        removeSecondEnemy(); // Función que elimina el segundo enemigo
        secondEnemyAppeared = false; // Restablecer el estado
    }
    isPaused = false;
}
function ResetGamePoint() {
    vidas = 3; // Restablecer vidas al valor inicial
    score = 0; // Reiniciar la puntuación a cero
    const puntosIniciales = [
        [13, 8], [4, 6], [3, 18], [11, 20], [15, 20],
        [18, 20], [4, 27], [2, 34], [12, 32], [2, 48] //[27, 46] no funciona la posicion?
    ];
    const puntosIniciales2 = [
        [9,1],[1,21],[4,48],[14, 32],[16,48]
    ]
    const murosIniciales = [
        [15, 32], [16,32],[17,32],[14,31],[14,33],[15,33]
    ];
    const murosIniciales2 =[
        [15,31],[4,39],[5,39],[9,12],[7,23],[7,22]
    ]   
    puntosIniciales.forEach(([fila, columna]) => {
        map[fila][columna] = 3;
    });
    puntosIniciales2.forEach(([fila, columna]) => {
        map[fila][columna] = 3;
    });
    murosIniciales.forEach(([fila, columna]) => {
        map[fila][columna] = 1; // Establece el valor del muro en el mapa (1)
    });
    murosIniciales2.forEach(([fila, columna]) => {
        map[fila][columna] = 1; // Establece el valor del muro en el mapa (1)
    });
}
function removeSecondEnemy() {
    const cells = document.querySelectorAll('.cell');
    const index = secondEnemyPosition.y * map[0].length + secondEnemyPosition.x;
    if (cells[index]) {
        cells[index].classList.remove('enemy'); // Eliminar la clase 'enemy' para el segundo enemigo
    }
}
// Manejo de las teclas presionadas
document.addEventListener('keydown', (event) => {
    if (!canMove) return; // Si no puede moverse, salimos de la función
    switch (event.key) {
        case 'w':
            movePacman(0, -1);
            break;
        case 's':
            movePacman(0, 1);
            break;
        case 'a':
            movePacman(-1, 0);
            break;
        case 'd':
            movePacman(1, 0);
            break;
    }
    // Desactiva el movimiento temporalmente
    canMove = false;
    // Activa el movimiento nuevamente después de 250 ms
    setTimeout(() => {
        canMove = true;
    }, currentSpeed);
});
// Actualiza el temporizador
function updateTimer() {
    if (!isPaused) {
        // Actualiza el temporizador en el DOM
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Detener el temporizador cuando se acabe el tiempo
            canMove = false; // Deshabilitar movimiento
            alert("¡Se acabó el tiempo!"); // Mostrar mensaje de fin de tiempo
            resetGame(); // Llamar a la función para reiniciar el juego
            return;
        }
        timeLeft--; // Disminuir el tiempo cada segundo
    }
}
// Inicia el temporizador
function startTimer() {
    timeLeft = 300; // Reiniciar el tiempo al valor inicial (5 minutos)
    updateTimer(); // Mostrar el tiempo actualizado
    clearInterval(timerInterval); // Limpiar cualquier temporizador anterior
    timerInterval = setInterval(updateTimer, 1000); // Iniciar el temporizador cada 1 segundo
}
// Inicializa el mapa y dibuja Pac-Man y el enemigo
function initializeGame() {
    createMap();  // Crear el mapa del juego
    drawPacman(); // Dibujar Pac-Man
    drawEnemy();  // Dibujar el enemigo
    startTimer(); // Iniciar el temporizador
}
function updateScoreDisplay() {
    document.getElementById('puntuaje').innerText = score; // Actualiza el texto del elemento de puntuación
}
// Mueve el enemigo cada 500 ms
function startEnemyMovement() {
    enemyMovementInterval = setInterval(moveEnemy, 500); // Mueve al enemigo cada 500ms
}
startEnemyMovement();
initializeGame();
