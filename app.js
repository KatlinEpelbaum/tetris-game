import { GameBoard } from "./src/GameBoard.js";
import { SBlock } from ".src/SBlock.js";

const gameBoard = new GameBoard();
const currentBlock = new SBlock();


gameBoard.draw(currentBlock)
