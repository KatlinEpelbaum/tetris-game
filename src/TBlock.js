import { Block } from "./Block.js";

class TBlock extends Block {
    shapes = [
        {
            height: 3,
            width: 2,
            shape: [
                [0, 1], [1, 0], [1, 1], [1, 2]
            ]
        }
    ];
    
    class = 't-block';
}

export { TBlock }