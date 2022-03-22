// get canvas
let canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d');

    //background for game
const ground = new Image(608, 608);
ground.src = 'https://cdna.artstation.com/p/assets/images/images/016/144/868/large/cgshare-book-ground-floor-002.jpg?1551084447';
ground.alt = 'ground';
//food title for snake
const food = new Image(32,32);
food.src = 'image/food-snake.png';
food.alt = 'food'
//
let snakeHead = new Image();
snakeHead.src = 'image/head-snake.png'
//grid title 
let box = 32;
// decor stroke



//score game
let score = 0;
//create title food random
let createFood = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}
//create snake
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}
// key function
document.addEventListener('keydown', direction)
//box for crossing moving snake
let dir;
//
function direction(e) {
    
    if (e.keyCode == 37 || e.keyCode == 65 && dir != 'right') {
        dir = 'left'
    } else if (e.keyCode == 38 || e.keyCode == 87 && dir != 'down') {
        dir = 'up'
    } else if (e.keyCode == 68 || e.keyCode == 39 && dir != 'left') {
        dir = 'right'
    } else if (e.keyCode == 83 || e.keyCode == 40 && dir != 'up') {
        dir = 'down'
    }
}
//load backgorund for canvas
const drawGame = () => {
    context.drawImage(ground, 0, 0);
    context.drawImage(food, createFood.x, createFood.y)
    for (let i = 0; i < snake.length; i++) {
        if (i == 0) {
            context.drawImage(snakeHead, snake[i].x ,snake[i].y)
        } else {
            context.fillStyle = 'green';
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
        
    }
    //function if anake touch snake head or snake tile game over
    function eatTile(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game)
                //
                context.fillStyle = 'white';
                context.font = '50px Arial';
                context.fillText('Game Over', box * 5, box * 10)
            } 
            
        }
        
    }

    //decor background for score 
    context.fillStyle = 'magenta';
    context.fillRect(0, 0, box * 19, box * 2);
    //text score
    context.fillStyle = 'white';
    context.font = '50px Arial';
    context.fillText(`SCORE: ${score}`, box * 2.5, box * 1.7)
    
    let coordsX = snake[0].x,
        coordsY = snake[0].y;
    
    if (coordsX == createFood.x && coordsY == createFood.y) {
        score++;
        createFood = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}
    } else {
      snake.pop();  
    }
    
    if(coordsX < box - 32 || coordsX > box * 18 || coordsY < 2 * box || coordsY > box * 18) clearInterval (game)
    //
    if (dir === 'left')coordsX -= box;
    if (dir === 'right') coordsX += box;
    if (dir === 'up') coordsY -= box;
    if (dir === 'down') coordsY += box;

    let newHead = {
        x: coordsX,
        y: coordsY
    };

    eatTile(newHead, snake)
    snake.unshift(newHead)
}

let game = setInterval(drawGame, 100)
