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
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let TutorialMusic = new Audio('proyecto-cientifiks/Juegos/DeltaDeLlobregat_JuegoPablo/Audio/Undertale OST_ 015 - sans..mp3')
    let konamiInput = [];
    let vidas = 3;
    let timeLeft = 500;
    let pacmanPosition = { x: 1, y: 18 };
    let enemyPosition = { x: 47, y: 18 };
    let secondEnemyPosition = { x: 32, y: 9 };  
    let score = 1300;
    let canMove = true;
    let timerInterval;
    let currentSpeed = 200;
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
                }else if(map[row][col] === 6){
                    cell.classList.add('BIG');
                }
                gameContainer.appendChild(cell);
            }
        }
    }
    let enemyDirection = 'right';  // Dirección inicial del primer enemigo
    let secondEnemyDirection = 'down';  // Dirección inicial del segundo enemig
    function drawEnemy() {
        const cells = document.querySelectorAll('.cell');
        const index = enemyPosition.y * map[0].length + enemyPosition.x;
        
        // Solo agregar la clase 'enemy' si la celda no tiene un '1' (muro) ni la clase 'pacman'
        const cell = cells[index];
        if (map[enemyPosition.y][enemyPosition.x] !== 3 && !cell.classList.contains('pacman')) {
            cell.classList.add('enemy', `enemy-${enemyDirection}`);
        }
    }
    
    
    function drawSecondEnemy() {
        const cells = document.querySelectorAll('.cell');
        const index = secondEnemyPosition.y * map[0].length + secondEnemyPosition.x;
        // Solo agregar la clase 'enemy' si la celda no tiene un '1'
        const cell = cells[index];
        if (map[secondEnemyPosition.y][secondEnemyPosition.x] !== 3 && !cell.classList.contains('pacman')) {
            cells[index].classList.add('enemy', `enemy-${secondEnemyDirection}`);
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
        // Comprobar colisión con el primer enemigo
        function checkCollisionWithEnemy(enemyPosition) {
            if (pacmanPosition.x === enemyPosition.x && pacmanPosition.y === enemyPosition.y) {
                if (vidas === 1) {
                    showGameOverPopup();
                } else {
                    vidas--;
                    updateLivesDisplay();
                    resetPositions();
                }
            }
        }
        // Comprobar colisión con el primer enemigo
        checkCollisionWithEnemy(enemyPosition);
        // Comprobar colisión con el segundo enemigo si ha aparecido
        if (secondEnemyAppeared) {
            checkCollisionWithEnemy(secondEnemyPosition);
        }
        // Comprobar si Pac-Man recoge un punto
        if (map[pacmanPosition.y][pacmanPosition.x] === 3 ||map[pacmanPosition.y][pacmanPosition.x] === 6) {
            if (map[pacmanPosition.y][pacmanPosition.x] === 3) {
                score += 100; // Aumenta 1 punto
                cells[index].classList.remove('point');
            }
            else if (map[pacmanPosition.y][pacmanPosition.x] === 6) {
                score += 1000; // Aumenta 10 puntos
                cells[index].classList.remove('BIG');
            }
            updateScoreDisplay();
            map[pacmanPosition.y][pacmanPosition.x] = 0;
            if (score >= 1000) {
                DesbloquearMuro();
            }
            if(score >= 1100){
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
            if (score >= 1400) {
                showWinPopup();
            }
        }
    }
    function actualizarMapa(celdas, valor) {
        celdas.forEach(([fila, columna]) => {
            map[fila][columna] = valor;
        });
    }
    function DesbloquearMuro() {  
        const Muros = [
            [15, 32], [16,32],[17,32],[14,31],[14,33],[15,33],[15,31]
        ];
        const Muros2 =[
            [4,39],[5,39],[9,12],[7,23],[7,22]
        ];
        const Muros3 = [
            [4,15],[4,14],[4,13],[4,12]
        ]
        const MegaPremio =[
            [4,11]
        ]
        Muros.forEach(([fila, columna]) => {
            const index = fila * map[0].length + columna;
            map[fila][columna] = 0; // Cambia el valor en el mapa a un espacio vacío (0)
            // Actualiza la celda en el DOM para que se muestre como un espacio vacío
            const cell = document.querySelectorAll('.cell')[index];
            if (cell) {
                cell.className = 'cell'; // Remueve cualquier clase adicional para que se muestre como vacío
            }
        });
        if(score >= 1100){
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
        if(score >= 1400 && konamiInput.toString() === konamiCode.toString()){
            Muros3.forEach(([fila, columna]) => {
                const index = fila * map[0].length + columna;
                map[fila][columna] = 0; // Cambia el valor en el mapa a un espacio vacío (0)
                // Actualiza la celda en el DOM para que se muestre como un espacio vacío
                const cell = document.querySelectorAll('.cell')[index];
                if (cell) {
                    cell.className = 'cell'; // Remueve cualquier clase adicional para que se muestre como vacío
                }
            });
            MegaPremio.forEach(([fila, columna]) => {
                const index = fila * map[0].length + columna;
                map[fila][columna] = 6; // Cambia el valor en el mapa a BIG (6)
                // Actualiza la celda en el DOM para que se muestre con la clase BIG
                const cell = document.querySelectorAll('.cell')[index];
                if (cell) {
                    cell.className = 'cell BIG'; // Asigna las clases 'cell' y 'BIG' para que se muestre con el fondo
                }
            });
        } 
    };
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
    function showWinPopup() {
        isPaused = true; // Pausar el juego
        FinalScore = CalcularScore();
        document.getElementById('winPopup').style.display = 'flex';
        document.getElementById('finalWinScore').innerText = FinalScore;
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
        FinalScore = CalcularScore();
        // Mostrar el popup y actualizar el puntaje final
        document.getElementById('gameOverPopup').style.display = 'flex';
        document.getElementById('finalScore').innerText = FinalScore;
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
        secondEnemyPosition = { x: 32, y: 9 }; // Posición inicial del segundo enemigo
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
        document.getElementById('gameOverPopup').style.display = 'none';
        document.getElementById('winPopup').style.display = 'none';
        ResetGamePoint();
        updateLivesDisplay();
        updateScoreDisplay();
        clearInterval(timerInterval);  // Detener el temporizador anterior
        timeLeft = 500;  // Reiniciar el tiempo a 300 segundos (5 minutos)
        updateTimer();  // Mostrar el tiempo reiniciado
        startTimer();  // Iniciar el temporizador nuevamente
        gameContainer.innerHTML = ''; 
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
                [4,15],[4,14],[4,13],[4,12],[4,11]
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
        actualizarMapa(initialConfig.MasMuros,1)
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
            DesbloquearMuro();
        }
    });
    
    function drawPacman() {
        const cells = document.querySelectorAll('.cell');
        const index = pacmanPosition.y * map[0].length + pacmanPosition.x;
        cells[index].classList.add('pacman');
    }
    
    function movePacman(dx, dy, direction) {
        if (!isPaused) {
            const newX = pacmanPosition.x + dx;
            const newY = pacmanPosition.y + dy;    
    
            // Verifica si la posición se puede mover
            if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length && (map[newY][newX] === 0 || map[newY][newX] === 2 || map[newY][newX] === 3 || map[newY][newX] === 4 || map[newY][newX] === 5) || map[newY][newX] === 6) {
                
                // Eliminar las clases de movimiento de todas las celdas antes de mover
                const cells = document.querySelectorAll('.cell');
                cells.forEach(cell => {
                    cell.classList.remove('pacman_up', 'pacman_down', 'pacman_left', 'pacman_right');
                });
                // Agregar el rastro a la celda anterior
                const currentIndex = pacmanPosition.y * map[0].length + pacmanPosition.x;
                const currentCell = cells[currentIndex];
                if (direction === 'up' || direction === 'down') {
                    currentCell.classList.add('rastro-horizontal');  // Rastro vertical (arriba/abajo)
                } else if (direction === 'left' || direction === 'right') {
                    currentCell.classList.add('rastro-vertical');  // Rastro horizontal (izquierda/derecha)
                }
                setTimeout(() => {
                    currentCell.classList.remove('rastro-vertical', 'rastro-horizontal');
                }, 250);
                // Quitar la posición anterior de Pac-Man
                cells[currentIndex].classList.remove('pacman');
                // Actualizar posición
                pacmanPosition.x = newX;
                pacmanPosition.y = newY;
                // Dibujar en la nueva posición
                drawPacman();
                // Añadir la clase de dirección correcta con el nuevo formato
                const newIndex = pacmanPosition.y * map[0].length + pacmanPosition.x;
                const newCell = cells[newIndex];
                newCell.classList.add('pacman', `pacman_${direction}`); // Cambiado de 'up' a 'pacman-up'
                // Verificar colisión con el enemigo
                checkCollision();
            }
        }
    }
    // Actualiza el temporizador
    function updateTimer() {
        if (!isPaused) {
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
        updateTimer(); // Mostrar el tiempo actualizado
        clearInterval(timerInterval); // Limpiar cualquier temporizador anterior
        timerInterval = setInterval(updateTimer, 750); // Iniciar el temporizador cada 1 segundo
    }
    function updateScoreDisplay() {
        document.getElementById('puntuaje').innerText = `Score: ${score}`;  // Actualiza el texto del elemento de puntuación
    }
    // Mueve el enemigo cada 500 ms
    function startEnemyMovement() {
        enemyMovementInterval = setInterval(moveEnemy, 520); // Mueve al enemigo cada 400ms
    }
    // Inicializa el mapa y dibuja Pac-Man y el enemigo
    function initializeGame() {
        startTimer(); // Iniciar el temporizador
        createMap();  // Crear el mapa del juego
        drawPacman(); // Dibujar Pac-Man
        drawEnemy();  // Dibujar el enemigo
    }
    // Muestra la pantalla de tutorial
    function showTutorial() {
        const tutorialScreen = document.getElementById('tutorialScreen');
        tutorialScreen.style.visibility = 'visible';
        tutorialScreen.style.opacity = '1';
    }
    // Oculta la pantalla de tutorial y comienza el juego
    function startGame() {
        const tutorialScreen = document.getElementById('tutorialScreen');
        tutorialScreen.style.visibility = 'hidden';
        tutorialScreen.style.opacity = '0';
        startEnemyMovement();  // Comienza el movimiento del enemigo
        initializeGame();      // Inicializa el juego
    }
    const music = document.getElementById('background-music');

    // Intenta reproducir sin sonido
    music.volume = 0; // Inicia con volumen 0
    music.play().then(() => {
        // Una vez que se reproduce, sube el volumen
        music.volume = 1; // Cambia el volumen a normal
        console.log('Música reproduciéndose.');
    }).catch(error => {
        console.log('Reproducción automática bloqueada:', error);
    });
    // Agrega el evento para iniciar el juego
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    showTutorial();
});