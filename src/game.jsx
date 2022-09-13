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
    const [isAlive, setIsAlive] = useState(false)
    console.log(isAlive)

    return (
        <div>
            <h1>The Grid!</h1>
            {board.map((row, i) => {
                return (
                    <ul key={i}>{row.map((cell, i) => {
                        return (
                            <p key={i} onClick={() => setIsAlive(!isAlive)}>{cell}</p>
                        )
                    })}</ul>
                )
            } )}
        </div>
    )
}

export default Game;