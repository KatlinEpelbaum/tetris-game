class Block {
    y = 1;
    x = 5;

    shapeIndex = 0;
    
    moveDown() {
        this.y++;
    }
    
    canMoveDown(gameBoard) {
        let ret = true;
        
        if (this.y + this.shapes[this.shapeIndex].height == gameBoard.height) {
            return false;
        }
        
        this.shapes[this.shapeIndex].shape.forEach(el => {
            const y = el[0] + this.y + 1;
            const x = el[1] + this.x;
            
            if (gameBoard.state[y][x]) {
                ret = false;
            }
        });
        
        return ret;
    }
    
    stop(gameBoard) {
        this.shapes[this.shapeIndex].shape.forEach(el => {
            const y = el[0] + this.y;
            const x = el[1] + this.x;
            
            gameBoard.state[y][x] = this.class;
        });
    }
}

export { Block }