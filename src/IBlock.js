import { Block } from "./Block.js";

class IBlock extends Block {
    shapes = [
        {
            height: 1,
            width: 4,
            shape: [
                [0, 0], [0, 1], [0, 2], [0, 3]
            ]
        }
    ];
    
    class = 'i-block';
}

export { IBlock }