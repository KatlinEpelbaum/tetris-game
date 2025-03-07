import { Block } from "./Block.js";

class LBlock extends Block {
    shapes = [
        {
            'height': 3,
            'width': 2,
            'shape': [
                [0, 0], [1, 0], [2, 0], [2, 1]
            ]
        }
    ];
    
    class = 'l-block';
}

export { LBlock }