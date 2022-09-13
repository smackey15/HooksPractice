import React from 'react';
import {useState} from 'react';
import { getNextGeneration } from './gol';

function Game() {
    const grid = [
        [0,0,0,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,0,0]
    ]

    const blinker = {
        0: [],
        1: [2],
        2: [2],
        3: [2],
        4: [],
    };    

    const [board, setBoard] = useState(grid)
    const [isAlive, setIsAlive] = useState(false)
    const [generation, setGeneration] = useState(blinker)
    console.log(isAlive)
    console.log(generation)

    const handleClick = () => {
        setInterval(() => {
            setGeneration(getNextGeneration(generation))
        }, 1000);
    }

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
            <button onClick={handleClick}>Start</button>
            <button>Stop</button>
        </div>
    )
}

export default Game;