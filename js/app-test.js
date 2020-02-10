// DOM References for canvas
let game = document.getElementById("game");
let ctx = game.getContext("2d");

// Set game canvas width and height
game.setAttribute("width", getComputedStyle(game).width);
game.setAttribute("height", getComputedStyle(game).height);

// creates an array to represent a gameboard that is 800/20=40 blocks wide
let gameBoard = new Array(game.width/20);
for (let i=0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(game.height/20);
    gameBoard[i] = gameBoard[i].map(i =>"");
}

// define things to draw blocks
function renderBlock(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 20, 20);
}
let treasureDesc = "red";
let stoneDesc = "gray";
let mudDesc = "brown";
let leafDesc = "green";


function newTerrain() {
    // DRAW TREASURE CHEST
    let treasureX = Math.floor(Math.random()*game.width/20)*20;
    let treasureY = game.height - 20;
    renderBlock(treasureDesc, treasureX, treasureY);
    // add treasure chest to the gameboard;
    gameBoard[treasureX/20][treasureY/20] = "treasure";
    
    // DRAW STONES
    // draw first two layers
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i][gameBoard[i].length-1] != "treasure") {
            renderBlock(stoneDesc, i*20, game.height-20);
            gameBoard[i][gameBoard[i].length-1] = "stone";
        }
        renderBlock(stoneDesc, i*20, game.height-40);
        gameBoard[i][gameBoard[i].length-2] = "stone";
    }
    // draw random layer of stone: draw three hills
    for (let i = 0; i < 3; i++) {
        hill = 4 + Math.floor(Math.random() * 4);
        leftBank = Math.floor(Math.random() * 10) + i*10;
        for (let j = leftBank; j < leftBank + hill; j++) {
            console.log("index", j, gameBoard[j]);
            if(gameBoard[j][gameBoard[j].length-3] != "stone") {
                renderBlock(stoneDesc, j*20, game.height-60);
                gameBoard[j][gameBoard[j].length-3] = "stone";
            }
        }
    }
    
    // DRAW MUD
    // draw 2 blocks of mud on top of every stone block
    for (let i = 0; i < gameBoard.length; i++) {
        
    }
    
    // console.log(gameBoard);

    // DRAW LEAVES
    // draw leaves somewhere on top of mud
}

newTerrain();
function gameLoop() {
    
}