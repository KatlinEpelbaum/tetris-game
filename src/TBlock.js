import { Block } from "./Block.js";

class TBlock extends Block {

    shapes = [
        {   
            'height': 2,
            'width': 3,
            'shape': [[0, 0], [0, 1], [0, 2], [1, 1]]
        },
        {   
            'height': 3,
            'width': 2,
            'shape': [[0, 1], [1, 0], [1, 1], [2, 1]]
        },
        {   
            'height': 2,
            'width': 3,
            'shape': [[0, 1], [1, 0], [1, 1], [1, 2]]
        },
        {   
            'height': 3,
            'width': 2,
            'shape': [[0, 0], [1, 0], [1, 1], [2, 0]]
        },
    ];

    class = 't-block';

}

export { TBlock }