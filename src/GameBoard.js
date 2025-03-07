class GameBoard {
    
    gameBoardDiv = document.getElementById('game-board');
    width = 12;
    height = 24;

    constructor () {

        this.gameBoardDiv.style.gridTemplateColumns = `repeat(${this.width}, 24px)`;
        this.gameBoardDiv.style.gridTemplateRows = `repeat(${this.height}, 24px)`;
    
    }

    draw () {

        this.gameBoardDiv.innerHTML = '';
        
        for ( let y = 0; y < this.height; y++ ) {
        
            for ( let x = 0; x < this.width; x++ ) {
        
                const cellDiv = document.createElement('div');
                
                this.gameBoardDiv.appendChild(cellDiv);
        
            }
        
        }
        
    }
}
export { GameBoard }