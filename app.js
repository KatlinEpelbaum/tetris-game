import { GameBoard } from "./src/GameBoard.js";
import { SBlock } from "./src/SBlock.js";
const allBlocks = [SBlock];

const gameBoard = new GameBoard();
let currentBlock = generateNewBlock();

const intervalId = setInterval(run, 700);

function run() {
    if (currentBlock.canMoveDown(gameBoard)) {
        currentBlock.moveDown();
    } else {
        currentBlock.stop(gameBoard)
        currentBlock = generateNewBlock();  
    }
    
    gameBoard.draw(currentBlock);
}

function generateNewBlock() {
    const i = Math.floor(Math.random() * allBlocks.length);
    return new allBlocks[i]();
}
