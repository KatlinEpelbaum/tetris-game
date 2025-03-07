class SBlock {

    y = 0;
    x = 5;

    shapeIndex = 0;

    height = 2;

    shapes = [
        {
            height: 2,
            shape: [
                [0, 1], [0, 2], [1, 0], [1, 1]
            ]
        }
    ];

    class = 's-block';

    moveDown() {
        this.y++;   
    }

    canMoveDown (gameBoardHeight) {
        if (this.y + this.shapes[this.shapeIndex].height == gameBoardHeight) {
            return false;
        }

        return true
    }
}

export { SBlock }