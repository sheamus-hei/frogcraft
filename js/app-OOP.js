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
}

// makes a new block
function Block(x, y, color, width, height, type) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.type = type;
    // console.log(this.x, this.y, this.color, this.width, this.height, this.type);
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function newTerrain() {
    // DRAW TREASURE CHEST
    let treasure =  new Block(Math.floor(Math.random()*game.width/20)*20,
    game.height-20, "red", 20, 20, "treasure");
    treasure.render();
    // console.log(treasure.x/20, treasure.y/20, treasure.type);
    // add treasure chest to the gameboard;
    gameBoard[treasure.x/20][treasure.y/20] = treasure;
    
    // DRAW STONES
    // draw first two layers
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i][gameBoard[i].length-1] == undefined) {
            let stone = new Block(i*20, game.height-20, "gray", 20, 20, "stone");
            stone.render();
            gameBoard[i][gameBoard[i].length-1] = stone;
        }
        let stone2 = new Block(i*20, game.height-40, "gray", 20, 20, "stone");
        stone2.render();
        gameBoard[i][gameBoard[i].length-2] = stone2;
    }
    // draw random layer of stone: draw three hills
    for (let i = 0; i < 3; i++) {
        hill = 4 + Math.floor(Math.random() * 4);
        leftBank = Math.floor(Math.random() * 10) + i*7;
        console.log(hill, "at", leftBank);
        for(let j = leftBank; j < hill; j++) {
            console.log("index", j, gameBoard[j][gameBoard[j].length-3]);
            if(gameBoard[j][gameBoard[j].length-3] == undefined) {
                let stone = new Block(j*20, game.height-60, "gray", 20, 20, "stone");
                console.log(stone);
                stone.render();
            }
        }
    }
    // console.log(gameBoard);

    // DRAW MUD
    // draw 2 blocks of mud on top of every stone block
    
    // DRAW LEAVES
    // draw leaves somewhere on top of mud
}

newTerrain();
function gameLoop() {
    
}