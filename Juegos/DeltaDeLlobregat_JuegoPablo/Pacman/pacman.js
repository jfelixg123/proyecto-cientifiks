const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
    
const gameContainer = document.getElementById('game');
let vidas = 3;
let pacmanPosition = { x: 1, y: 18 };
let enemyPosition = { x: 47, y: 18 }; // Posición inicial del enemigo

// Crear el mapa
function createMap() {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (map[row][col] === 1) {
                cell.classList.add('wall');
            }
            if(map[row][col] === 2){
                cell.classList.add('exit');
            }
            gameContainer.appendChild(cell);
        }
    }
}
// Dibujar Pac-Man
function drawPacman() {
    const cells = document.querySelectorAll('.cell');
    const index = pacmanPosition.y * map[0].length + pacmanPosition.x;
    cells[index].classList.add('pacman');
}
// Dibujar enemigo
function drawEnemy() {
    const cells = document.querySelectorAll('.cell');
    const index = enemyPosition.y * map[0].length + enemyPosition.x;
    cells[index].classList.add('enemy');
}
// Mover Pac-Man
function movePacman(dx, dy) {
    const newX = pacmanPosition.x + dx;
    const newY = pacmanPosition.y + dy;

    // Verificar si la nueva posición es válida (0 para espacios vacíos y 2 para la salida)
    if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length && (map[newY][newX] === 0 || map[newY][newX] === 2)) {
        // Limpiar la posición actual de Pac-Man
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
// Mover el enemigo utilizando BFS
function moveEnemy() {
    const path = findPath(enemyPosition, pacmanPosition);
    if (path.length > 1) {
        const nextPosition = path[1]; // La siguiente posición en el camino
        // Limpiar la posición actual del enemigo
        const cells = document.querySelectorAll('.cell');
        const currentIndex = enemyPosition.y * map[0].length + enemyPosition.x;
        cells[currentIndex].classList.remove('enemy');

        // Actualizar posición
        enemyPosition.x = nextPosition.x;
        enemyPosition.y = nextPosition.y;

        // Dibujar en la nueva posición
        drawEnemy();
    }

    // Verificar colisión con Pac-Man después de mover el enemigo
    checkCollision();
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
        if (visited.has(posKey)) continue;
        visited.add(posKey);

        if (position.x === goal.x && position.y === goal.y) {
            return [...path, goal];
        }

        for (const { dx, dy } of directions) {
            const newX = position.x + dx;
            const newY = position.y + dy;

            if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length && map[newY][newX] === 0) {
                queue.push({ position: { x: newX, y: newY }, path: [...path, position] });
            }
        }
    }
    return []; // Si no hay camino
}
// Comprobar colisión entre Pac-Man y el enemigo
function checkCollision() {
    if (pacmanPosition.x === enemyPosition.x && pacmanPosition.y === enemyPosition.y) {
        if (vidas === 0) {
            alert('Game Over! Has sido atrapado por el enemigo.');
            resetGame(); // Reiniciar el juego o implementar una lógica diferente
        } else {
            vidas--;
            updateLivesDisplay(); // Actualizar el display de vidas
            showCollisionAnimation(); // Mostrar la animación de colisión
            resetGame();
        }
    }
}

function updateLivesDisplay() {
    const hearts = document.querySelectorAll('.corazon');
    hearts.forEach((heart, index) => {
        if (index >= vidas) {
            heart.style.display = 'none'; // Ocultar corazones según las vidas restantes
        }
    });
}

function showCollisionAnimation() {
    // Seleccionar el corazón correspondiente
    const hearts = document.querySelectorAll('#vida img');
    const heartToRemove = hearts[vidas]; // Corazón correspondiente a la vida restante

    // Crear el GIF de colisión
    const collisionGif = document.createElement('img');
    collisionGif.src = './ImagenJuego/undertale-heart.gif'; // Asegúrate de que la ruta sea correcta
    collisionGif.style.position = 'absolute';
    collisionGif.style.zIndex = 2; // Asegurarse de que esté encima

    // Obtener las posiciones del corazón
    const heartRect = heartToRemove.getBoundingClientRect();
    const gameContainerRect = document.getElementById('game-container').getBoundingClientRect();

    // Calcular la posición en el contenedor del juego
    collisionGif.style.top = `${heartRect.top - gameContainerRect.top}px`;
    collisionGif.style.left = `${heartRect.left - gameContainerRect.left}px`;

    document.body.appendChild(collisionGif);

    // Esperar el tiempo que dura el GIF (ajusta este tiempo según la duración del GIF)
    setTimeout(() => {
        heartToRemove.style.display = 'none'; // Ocultar el corazón
        document.body.removeChild(collisionGif); // Eliminar el GIF
    }, 2000); // Cambia 2000 a la duración real del GIF en milisegundos
}

// Reiniciar el juego
function resetGame() {
    pacmanPosition = { x: 1, y: 18 };
    enemyPosition = { x: 47, y: 18 };
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('pacman');
        cell.classList.remove('enemy');
    });
    drawPacman();
    drawEnemy();
}


// Eventos de teclado para mover Pac-Man
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePacman(0, -1);
            break;
        case 'ArrowDown':
            movePacman(0, 1);
            break;
        case 'ArrowLeft':
            movePacman(-1, 0);
            break;
        case 'ArrowRight':
            movePacman(1, 0);
            break;
    }
});

// Crear el mapa y dibujar Pac-Man y el enemigo
createMap();
drawPacman();
drawEnemy();

// Actualizar la posición del enemigo cada segundo
setInterval(moveEnemy, 500);
