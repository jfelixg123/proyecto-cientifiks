document.addEventListener('DOMContentLoaded', () => {
    const map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 3, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 4, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 5, 1, 0, 0, 0, 3, 1],
        [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 5, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 5, 3, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    const gameContainer = document.getElementById('game');
    const music = document.getElementById('background-music');
    const SpeedSound = document.getElementById('SpeedUPSound');
    const ShatterHEart = document.getElementById('brokenHeart');
    const GameOverSound = document.getElementById('dead');
    const ComicSans = document.getElementById('comicsans');
    const SecondEnemySound = document.getElementById('Secondboss');
    const PickUpSound = document.getElementById('PickUP');
    const BIGONE = document.getElementById('BIGONE');
    const SecretRoom = document.getElementById('SECRETROOM');
    const StoptheTimeSound = document.getElementById('StopTheTime')
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiInput = [];
    let vidas = 3;
    let timeLeft = 500;
    let pacmanPosition = { x: 1, y: 18 };
    let enemyPosition = { x: 47, y: 18 };
    let secondEnemyPosition = { x: 32, y: 9 };
    let score = 0;
    let canMove = true;
    let timerInterval;
    let currentSpeed = 200;
    let boostTimeout;
    let secondEnemyAppeared = false;
    let isPaused = false;
    let enemyMovementInterval;

    // Crear el mapa
    function createMap() {
        const classMap = {
            1: 'wall',
            2: 'exit',
            3: 'point',
            4: 'SpeedBoost',
            5: 'The_World',
            6: 'BIG'
        };
        for (let row = 0; row < map.length; row++) {
            for (let col = 0; col < map[row].length; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                const cellType = map[row][col];

                // Añadir la clase correspondiente si existe en classMap
                if (classMap[cellType]) {
                    cell.classList.add(classMap[cellType]);
                }

                gameContainer.appendChild(cell);
            }
        }
        music.play();
    }
    let enemyDirection = 'right';  // Dirección inicial del primer enemigo
    let secondEnemyDirection = 'down';  // Dirección inicial del segundo enemig
    function drawEnemyGeneric(position, direction) {
        const cells = document.querySelectorAll('.cell');
        const index = position.y * map[0].length + position.x;
        const cell = cells[index];

        // Agregar la clase 'enemy' si la celda no tiene un '3' (punto) ni la clase 'pacman'
        if (map[position.y][position.x] !== 3 && !cell.classList.contains('pacman')) {
            cell.classList.add('enemy', `enemy-${direction}`);
        }
    }

    // Llamadas específicas para cada enemigo
    function drawEnemy() {
        drawEnemyGeneric(enemyPosition, enemyDirection);
    }

    function drawSecondEnemy() {
        drawEnemyGeneric(secondEnemyPosition, secondEnemyDirection);
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

                // Eliminar la clase 'enemy' de la celda anterior
                cells[currentIndex].classList.remove('enemy', `enemy-${enemyDirection}`);

                if (nextPosition.x > enemyPosition.x) {
                    enemyDirection = 'right';
                } else if (nextPosition.x < enemyPosition.x) {
                    enemyDirection = 'left';
                } else if (nextPosition.y > enemyPosition.y) {
                    enemyDirection = 'down';
                } else if (nextPosition.y < enemyPosition.y) {
                    enemyDirection = 'up';
                }

                // Actualizar posición del primer enemigo
                enemyPosition.x = nextPosition.x;
                enemyPosition.y = nextPosition.y;

                // Dibujar al primer enemigo con la dirección correcta
                drawEnemy();
            }

            // Mover el segundo enemigo si ha aparecido
            if (secondEnemyAppeared) {
                const secondPath = findPath(secondEnemyPosition, pacmanPosition); // Encontrar el camino para el segundo enemigo
                if (secondPath.length > 1) {
                    const secondNextPosition = secondPath[1]; // La siguiente posición en el camino
                    const cells = document.querySelectorAll('.cell');
                    const secondCurrentIndex = secondEnemyPosition.y * map[0].length + secondEnemyPosition.x;

                    // Eliminar la clase 'enemy' de la celda anterior del segundo enemigo
                    cells[secondCurrentIndex].classList.remove('enemy', `enemy-${secondEnemyDirection}`);

                    if (secondNextPosition.x > secondEnemyPosition.x) {
                        secondEnemyDirection = 'right';
                    } else if (secondNextPosition.x < secondEnemyPosition.x) {
                        secondEnemyDirection = 'left';
                    } else if (secondNextPosition.y > secondEnemyPosition.y) {
                        secondEnemyDirection = 'down';
                    } else if (secondNextPosition.y < secondEnemyPosition.y) {
                        secondEnemyDirection = 'up';
                    }

                    // Actualizar posición del segundo enemigo
                    secondEnemyPosition.x = secondNextPosition.x;
                    secondEnemyPosition.y = secondNextPosition.y;

                    // Dibujar al segundo enemigo con la dirección correcta
                    drawSecondEnemy();
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

        // Comprobar colisión con enemigos
        function checkCollisionWithEnemy(enemyPosition) {
            if (pacmanPosition.x === enemyPosition.x && pacmanPosition.y === enemyPosition.y) {
                if (vidas === 1) {
                    showPopup('gameOver');
                } else {
                    ShatterHEart.play();
                    vidas--;
                    updateLivesDisplay();
                    resetPositions();
                }
            }
        }
        checkCollisionWithEnemy(enemyPosition);
        if (secondEnemyAppeared) {
            checkCollisionWithEnemy(secondEnemyPosition);
        }

        // Comprobar interacción con elementos del mapa
        const cellValue = map[pacmanPosition.y][pacmanPosition.x];
        if (cellValue === 3 || cellValue === 6) {
            if (cellValue === 3) {
                PickUpSound.play();
                score += 100;
                cells[index].classList.remove('point');
            } else {
                BIGONE.play();
                score += 1000;
                cells[index].classList.remove('BIG');
            }
            updateScoreDisplay();
            map[pacmanPosition.y][pacmanPosition.x] = 0;

            if (score === 1000) {
                DesbloquearMuroCoordenadas();
            } else if (score === 1100) {
                SecondEnemySound.play();
                secondEnemyAppeared = true;
                drawSecondEnemy();
                DesbloquearMuroCoordenadas();
            } else if (score === 1400) {
                // Mostrar el mensaje secreto cuando se alcanzan 1400 puntos
                const secretMessage = document.getElementById("SecretMessage");
                secretMessage.style.display = "flex";  // Mostrar el mensaje
                // Ocultar el mensaje después de 5 segundos
                setTimeout(function () {
                    secretMessage.style.display = "none";  // Ocultar el mensaje después de 5 segundos
                }, 5000);
            }
        } else if (cellValue === 4) {
            map[pacmanPosition.y][pacmanPosition.x] = 0;
            cells[index].classList.remove('SpeedBoost');
            activateSpeedBoost();
        } else if (cellValue === 5) {
            map[pacmanPosition.y][pacmanPosition.x] = 0;
            cells[index].classList.remove('The_World');
            StopTime();
        } else if (cellValue === 2 && score >= 1400) {
            showPopup('win');
        }
    }
    function actualizarMapa(celdas, valor) {
        celdas.forEach(([fila, columna]) => {
            map[fila][columna] = valor;
        });
    }
    function desbloquearMuro(muros, score) {
        muros.forEach(({ coordenadas, scoreRequerido, premio }) => {
            if (score >= scoreRequerido) {
                coordenadas.forEach(([fila, columna]) => {
                    const index = fila * map[0].length + columna;
                    map[fila][columna] = 0; // Cambia el valor en el mapa a un espacio vacío (0)

                    // Actualiza la celda en el DOM para que se muestre como vacío
                    const cell = document.querySelectorAll('.cell')[index];
                    if (cell) {
                        cell.className = 'cell'; // Remueve cualquier clase adicional
                    }
                });

                // Si hay un premio asociado, lo coloca en el mapa
                if (premio) {
                    premio.forEach(([fila, columna]) => {
                        const index = fila * map[0].length + columna;
                        map[fila][columna] = 6; // Cambia el valor en el mapa a BIG (6)

                        // Actualiza la celda en el DOM para que se muestre con la clase BIG
                        const cell = document.querySelectorAll('.cell')[index];
                        if (cell) {
                            cell.className = 'cell BIG'; // Asigna las clases 'cell' y 'BIG'
                        }
                    });
                }
            }
        });
    }

    function DesbloquearMuroCoordenadas() {
        const muros = [
            { coordenadas: [[15, 32], [16, 32], [17, 32], [14, 31], [14, 33], [15, 33], [15, 31]], scoreRequerido: 0 },
            { coordenadas: [[4, 39], [5, 39], [9, 12], [7, 23], [7, 22]], scoreRequerido: 1100 },
            { coordenadas: [[4, 15], [4, 14], [4, 13], [4, 12]], scoreRequerido: 1400, premio: [[4, 11]] }
        ];

        desbloquearMuro(muros, score);
    }

    function CalcularScore() {
        const puntosTotales = score; // Usamos la variable score que ya tienes

        // Puntaje por vidas restantes (por ejemplo, 100 puntos por cada vida)
        const puntajePorVidas = vidas * 100;

        // Puntaje por tiempo (el puntaje disminuye si se tarda más tiempo, aquí puedes ajustarlo como desees)
        const puntajePorTiempo = Math.max(0, (500 - timeLeft)); // Aquí 300 es el tiempo límite en segundos, ajustable según tus necesidades

        // Calcular el puntaje total
        let totalScore = puntosTotales + puntajePorVidas + puntajePorTiempo;

        // Redondeamos el puntaje final a un número entero
        totalScore = Math.round(totalScore);

        return totalScore;

    };
    function resetMusic() {
        music.pause();
        music.currentTime = 0;
    }
    function showPopup(type) {
        const isWin = type === 'win';
        const popupId = isWin ? 'winPopup' : 'gameOverPopup';
        const scoreId = isWin ? 'finalWinScore' : 'finalScore';
        const restartButtonId = isWin ? 'winRestartButton' : 'restartButton';
        const exitButtonId = isWin ? 'winExitButton' : 'exitButton';
        const sound = isWin ? ComicSans : GameOverSound;

        // Reproducir sonido
        sound.play();
        sound.volume = 0.3;
        resetMusic();

        isPaused = true; // Pausar el juego
        FinalScore = CalcularScore(); // Calcular puntaje final
        // Mostrar popup y puntaje final
        document.getElementById(popupId).style.display = 'flex';
        document.getElementById(scoreId).innerText = FinalScore;
        // Configurar botones
        document.getElementById(restartButtonId).addEventListener('click', () => {
            sound.pause();
            sound.currentTime = 0;
            document.getElementById(popupId).style.display = 'none';
            resetGame(); // Reiniciar el juego
        });

        document.getElementById(exitButtonId).addEventListener('click', () => {
            window.location.href = '../../../index.php';
        });
        guardarScore();
    }
    function StopTime() {
        // Detiene el movimiento del enemigo
        clearInterval(enemyMovementInterval);
        // Después de 5 segundos, vuelve a iniciar el movimiento del enemigo
        setTimeout(() => {
            startEnemyMovement(); // Reactiva el movimiento del enemigo
        }, 5000); // 5 segundos
        StoptheTimeSound.play();
    }
    function activateSpeedBoost() {
        SpeedSound.play();
        SpeedSound.volume = 0.5;
        currentSpeed = 40; // Cambia a velocidad aumentada
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
        secondEnemyPosition = { x: 32, y: 9 };

        // Eliminar las clases anteriores de todas las celdas
        document.querySelectorAll('.cell').forEach(cell =>
            cell.classList.remove('pacman', 'enemy')
        );

        drawPacman();
        drawEnemy();

        // Dibujar el segundo enemigo si es necesario
        if (secondEnemyAppeared) drawSecondEnemy();
    }
    function resetGame() {
        music.pause();
        // Ocultar los popups
        ['gameOverPopup', 'winPopup'].forEach(id =>
            document.getElementById(id).style.display = 'none'
        );
        ResetGamePoint();
        updateLivesDisplay();
        updateScoreDisplay();
        // Reiniciar el temporizador
        clearInterval(timerInterval);
        timeLeft = 500;
        updateTimer();
        startTimer();
        // Reiniciar el mapa
        gameContainer.innerHTML = '';
        createMap();

        // Restablecer posiciones y estado del segundo enemigo
        resetPositions();
        if (secondEnemyAppeared) {
            removeSecondEnemy();
            secondEnemyAppeared = false;
        }

        isPaused = false;
    }


    function ResetGamePoint() {
        vidas = 3; // Restablecer vidas al valor inicial
        score = 0; // Reiniciar la puntuación a cero
        const initialConfig = {
            puntos: [
                [13, 8], [4, 6], [3, 18], [11, 20], [15, 20],
                [18, 20], [4, 27], [2, 34], [12, 32], [2, 48]
            ],
            puntosExtra: [
                [9, 1], [1, 21], [4, 48], [16, 48]
            ],
            muros: [
                [15, 32], [16, 32], [17, 32], [14, 31], [14, 33], [15, 33]
            ],
            murosExtra: [
                [15, 31], [4, 39], [5, 39], [9, 12], [7, 23], [7, 22]
            ],
            MasMuros: [
                [4, 15], [4, 14], [4, 13], [4, 12], [4, 11]
            ],
            speedBoosts: [
                [5, 1], [11, 8], [17, 8], [3, 30]
            ],
            timerStops: [
                [6, 24], [4, 43], [16, 47]
            ]
        };
        // Aplicar configuraciones al mapa
        actualizarMapa(initialConfig.puntos, 3);
        actualizarMapa(initialConfig.puntosExtra, 3);
        actualizarMapa(initialConfig.muros, 1);
        actualizarMapa(initialConfig.murosExtra, 1);
        actualizarMapa(initialConfig.speedBoosts, 4);
        actualizarMapa(initialConfig.timerStops, 5);
        actualizarMapa(initialConfig.MasMuros, 1)
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
                movePacman(0, -1, 'up');
                break;
            case 's':
                movePacman(0, 1, 'down');
                break;
            case 'a':
                movePacman(-1, 0, 'left');
                break;
            case 'd':
                movePacman(1, 0, 'right');
                break;
        }
        // Desactiva el movimiento temporalmente
        canMove = false;
        // Activa el movimiento nuevamente después de 250 ms
        setTimeout(() => {
            canMove = true;
        }, currentSpeed);

        konamiInput.push(event.key);
        if (konamiInput.length > konamiCode.length) {
            konamiInput.shift();
        }

        if (konamiInput.toString() === konamiCode.toString()) {
            SecretRoom.play();
            DesbloquearMuroCoordenadas();
        }
    });

    function drawPacman() {
        const cells = document.querySelectorAll('.cell');
        const index = pacmanPosition.y * map[0].length + pacmanPosition.x;
        cells[index].classList.add('pacman');
    }

    function movePacman(dx, dy, direction) {
        if (isPaused) return;
        const newX = pacmanPosition.x + dx;
        const newY = pacmanPosition.y + dy;
        // Verifica si la nueva posición es válida
        const validMove = [0, 2, 3, 4, 5, 6].includes(map[newY]?.[newX]);
        if (!validMove) return;
        // Eliminar clases de movimiento previas
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('pacman_up', 'pacman_down', 'pacman_left', 'pacman_right'));
        // Agregar rastro a la celda anterior
        const currentIndex = pacmanPosition.y * map[0].length + pacmanPosition.x;
        const currentCell = cells[currentIndex];
        const rastroClass = (direction === 'up' || direction === 'down') ? 'rastro-horizontal' : 'rastro-vertical';
        currentCell.classList.add(rastroClass);
        setTimeout(() => currentCell.classList.remove(rastroClass), 250);
        // Quitar la posición anterior de Pac-Man
        currentCell.classList.remove('pacman');
        // Actualizar posición y dibujar en la nueva posición
        pacmanPosition = { x: newX, y: newY };
        drawPacman();
        // Añadir clase de dirección correcta
        const newIndex = pacmanPosition.y * map[0].length + pacmanPosition.x;
        const newCell = cells[newIndex];
        newCell.classList.add('pacman', `pacman_${direction}`);
        // Verificar colisión con el enemigo
        checkCollision();
    }

    // Función para actualizar el temporizador
    function updateTimer() {
        if (isPaused) return;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            canMove = false;
            FinalScore = CalcularScore();
            alert("¡Se acabó el tiempo!");
            guardarScore();
            resetGame();
            return;
        }
        timeLeft--;
    }

    // Función para iniciar el temporizador
    function startTimer() {
        updateTimer();
        clearInterval(timerInterval); // Limpiar intervalos previos
        timerInterval = setInterval(updateTimer, 750); // Iniciar temporizador cada 750ms
    }

    // Función para actualizar la puntuación en pantalla
    function updateScoreDisplay() {
        document.getElementById('puntuaje').innerText = `Score: ${score}`;
    }

    // Función para iniciar el movimiento del enemigo
    function startEnemyMovement() {
        enemyMovementInterval = setInterval(moveEnemy, 520);
    }

    // Función para iniciar y configurar el juego
    function initializeGame() {
        startTimer();
        createMap();
        drawPacman();
        drawEnemy();
    }

    // Función para mostrar el tutorial
    function showTutorial() {
        const tutorialScreen = document.getElementById('tutorialScreen');
        tutorialScreen.style.visibility = 'visible';
        tutorialScreen.style.opacity = '1';
    }

    // Función para comenzar el juego después del tutorial
    function startGame() {
        music.play();
        music.volume = 0.2;
        const tutorialScreen = document.getElementById('tutorialScreen');
        tutorialScreen.style.visibility = 'hidden';
        tutorialScreen.style.opacity = '0';
        startEnemyMovement();
        initializeGame();
    }
    function guardarScore() {
        //debugger;
        fetch('../../../php/Obtenerscore.php?id_videojuego=2&puntuacion=' + FinalScore)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.statusText);
                }
                return response.text(); // Esperamos un texto plano como respuesta
            })
            .then(data => {
                console.log(data); // Mostrar el mensaje de confirmación o error del servidor
                // Puedes mostrar un mensaje al usuario aquí, por ejemplo, usando un alert o actualizando el DOM
            })
            .catch(error => {
                console.error('Error:', error);
                // Mostrar un mensaje de error genérico al usuario
            });
    }
    // Evento para iniciar el juego
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    // Mostrar tutorial al inicio
    showTutorial();
});