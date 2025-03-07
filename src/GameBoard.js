    class GameBoard {
    
    gameBoardDiv = document.getElementById('game-board');
    width = 12;
    height = 24;

    constructor () {

        this.gameBoardDiv.style.gridTemplateColumns = `repeat(${this.width}, 24px)`;
        this.gameBoardDiv.style.gridTemplateRows = `repeat(${this.height}, 24px)`;
    
    }

    draw ( shape, blockY, blockX ) {

        this.gameBoardDiv.innerHTML = '';
        
        for ( let y = 0; y < this.height; y++ ) {
        
            for ( let x = 0; x < this.width; x++ ) {
        
                const cellDiv = document.createElement('div');

                const shape = block.shapes[block.shapeIndex]

                shape.forEach(el => {
                    if ( y == el[0] + block.y && x == el[1] + block.x){
                        cellDiv.classList.add()
                    }
                });
                
                this.gameBoardDiv.appendChild(cellDiv);
        
            }
        
        }
        
    }
}
export { GameBoard }