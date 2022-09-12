import React from 'react';
import {useState} from 'react';

function Game() {
    const grid = [
        [0,0,0,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,0,0]
    ]

    const [board, setBoard] = useState(grid)

    return (
        <div>
            <h1>The Grid!</h1>
            <ul>{board.map((row) => 
                <p>{row}</p>
            )}</ul>
        </div>
    )
}

export default Game;