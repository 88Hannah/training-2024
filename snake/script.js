// Define the HTML elements
const board = document.querySelector('.game-board');
const currentScoreDisplay = document.querySelector('.current-score');
const highScoreDisplay = document.querySelector('.high-score');

// Define the game variables
const gridSize = 20;

let snake = [
    {
        x: Math.floor(gridSize / 2),
        y: Math.floor(gridSize / 2)
    }
];

let food = generateFoodPosition();


let direction = 'right';

let gameInterval;

let gameSpeedDelay = 200;

let gameStarted = false;

let currentScore = 0;

let highScore = 0;


// Set up functions 

function randomPosition() {
    return Math.ceil(Math.random() * gridSize);
}

function generateFoodPosition() {
    let newFoodPosition = {
        x: randomPosition(),
        y: randomPosition()
    };

    // if (bumpCheck()) {
    //     return newFoodPosition;
    // } else {

    // }

    return newFoodPosition;
    

}


function bumpCheck() {
    let clear = true;
    for(i=0; i < snake.length; i++) {
        if(newFoodPosition.x === snake[i].x && newFoodPosition.y === snake[i].y) {
            console.log('That would have bumped!')
            clear = false;
            break
        }
    }

    return clear;
}

// Draw the game map, snake and food

function draw() {
    board.innerHTML = '';
    drawSnake();
    makeFood();
}

function drawSnake() {
    snake.forEach(segment => {
        const snakeElement = createGameElement('div', 'snake');
        setElementPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })
}

function createGameElement(tag, elementClass) {
    const element = document.createElement(tag);
    element.classList.add(elementClass);
    return element;
}

function setElementPosition(element, position) {
    element.style.gridColumnStart = position.x;
    element.style.gridRowStart = position.y;
}


function makeFood() {
   let foodElement = createGameElement('div', 'food');
   setElementPosition(foodElement, food);
   board.appendChild(foodElement);
}


function moveSnake() {
    const snakeHead = { ...snake[0] };

    switch (direction) {
        case 'right':
            snakeHead.x++;
            break;
        case 'left':
            snakeHead.x--;
            break;
        case 'up':
            snakeHead.y--;
            break;
        case 'down':
            snakeHead.y++;
            break;
        default:
            break;
    }

    snake.unshift(snakeHead);

    if (snakeHead.x != food.x || snakeHead.y != food.y) {
        snake.pop();
    }
    else {
        food = generateFoodPosition();
        increaseGameSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            moveSnake();
            checkCollision(snake[0]);
            draw();
        }, gameSpeedDelay);
        currentScore ++;
        updateScore(currentScoreDisplay, currentScore);
    }
}

function startGame() {
    gameStarted = true;
    // Hide the instruction text when it is here ...
    gameInterval = setInterval(() => {
        moveSnake();
        checkCollision(snake[0]);
        draw();
    }, gameSpeedDelay);
}

// Keypress event listener

function handleKeyPress(event) {

    if(
        (!gameStarted && event.code === 'Space') ||
        (!gameStarted && event.key === ' ')
    ) {
        startGame();
    }

    switch (event.code) {
        case "KeyS":
        case "ArrowDown":
            // Handle "back"
            direction = 'down';
            break;
        case "KeyW":
        case "ArrowUp":
            // Handle "forward"
            direction = 'up';
            break;
        case "KeyA":
        case "ArrowLeft":
            // Handle "turn left"
            direction = 'left';
            break;
        case "KeyD":
        case "ArrowRight":
            // Handle "turn right"
            direction = 'right';
            break;
    }

    if (event.code !== "Tab") {
        // Consume the event so it doesn't get handled twice,
        // as long as the user isn't trying to move focus away
        event.preventDefault();
    }
}

function checkCollision(currentPosition) {
    if(currentPosition.x < 1 || currentPosition.x > gridSize || currentPosition.y < 1 || currentPosition.y > gridSize) {
        restartGame()
    }

    for(i=1; i < snake.length; i++) {
        if(currentPosition.x === snake[i].x && currentPosition.y === snake[i].y) {
            restartGame();
            return;
        }
    }
}

document.addEventListener("keydown", handleKeyPress)

function increaseGameSpeed() {
    console.log(gameSpeedDelay);
    if(gameSpeedDelay > 150) {
        gameSpeedDelay -= 10;
    } else if(gameSpeedDelay > 100) {
        gameSpeedDelay -= 5;
    } else if(gameSpeedDelay > 75) {
        gameSpeedDelay -= 3;
    } else if(gameSpeedDelay > 60) {
        gameSpeedDelay -= 2;
    } else {
        gameSpeedDelay -= 1;
    }
}


function restartGame() {

    if (currentScore > highScore) {
        highScore = currentScore;
        updateScore(highScoreDisplay, highScore);
    }

    currentScore = 0;
    updateScore(currentScoreDisplay, currentScore);

    snake = [
        {
            x: Math.floor(gridSize / 2),
            y: Math.floor(gridSize / 2)
        }
    ];
    
    food = generateFoodPosition();
    
    
    direction = 'right';
    
    gameSpeedDelay = 200;
    
    gameStarted = false;

    clearInterval(gameInterval);
}


function recordHighScore() {
    
}

function updateScore(scoreType, value) {
    scoreType.innerHTML = String(value).padStart(3, '0');
}


// Don't let food generate on the snake! 