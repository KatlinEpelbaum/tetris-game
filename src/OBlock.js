import { Block } from "./Block.js";

class OBlock extends Block {

    shapes = [
        {   
            'height': 2,
            'width': 2,
            'shape': [[0, 0], [0, 1], [1, 0], [1, 1]]
        },
    ];

    class = 'o-block';

}

export { OBlock }