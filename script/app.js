// get canvas
let canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d');

    //background for game
const ground = new Image(608, 608);
ground.src = 'https://cdna.artstation.com/p/assets/images/images/016/144/868/large/cgshare-book-ground-floor-002.jpg?1551084447';
ground.alt = 'ground';
//food title for snake
const food = new Image();
food.src = '../image/food-snake.png';

//grid title 
let box = 32;
//score game
let score = 0;

//load backgorund for canvas
const drawGame = () => {
    context.drawImage(ground, 0,0);
    
}
let game = setInterval(drawGame ,100)