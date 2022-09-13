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

    const convertGrid = (twoD) => {
        const obj = {}
        for (let i=0; i<twoD.length; i++) {
            obj[i] = []
            for (let j=0; j<twoD[0].length; j++) {
                if (twoD[i][j] !== 0) {
                    obj[i].push(j)
                } 
            }
        }
        return obj
    }

    console.log(convertGrid(grid))

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
    const [intervalId, setIntervalId] = useState(0)
    // console.log(isAlive)
    // console.log(generation)
    // console.log(intervalId)

    const handleStart = () => {
        const newIntervalId = setInterval(() => {
            setGeneration(prevGeneration => getNextGeneration(prevGeneration))
        }, 500);
        setIntervalId(newIntervalId)
    }

    const handleStop = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(0)
        }
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
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Game;