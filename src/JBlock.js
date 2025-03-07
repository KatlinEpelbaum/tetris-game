import { Block } from "./Block.js";

class JBlock extends Block {

    shapes = [
        {
            'height': 3,
            'width': 2,
            'shape': [
                [0, 1], [1, 1], [2, 0], [1, 2]
            ]
        }
    ];
    
    class = 'j-block';
    
}

export { JBlock }