

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let speed = 7;

let tileCOunt = 20;
let tileSize = canvas.width / tileCount 
let headX = 10;
let headY = 10;

// game loop
function drawGame() {
    clearScreen();
    setTimeout(drawGame, 1000/ speed);
}

function clearScreen(){
    ctx.fillStyle = 'white';
    ctx.fillRect(o,o,canvas.clientWidth,canvas.clientWidth,canvas.height);

}

drawGame()