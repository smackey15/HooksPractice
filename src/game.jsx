import React from 'react';
import {useState} from 'react';
import { getNextGeneration } from './gol';

function Game() {
    // const grid = [
    //     [0,0,0,0],
    //     [0,0,1,0],
    //     [0,0,1,0],
    //     [0,0,1,0],
    //     [0,0,0,0]
    // ]

    const grid = Array.from(Array(10), () => new Array(10).fill())
    console.log(grid)

// converts 2d array into object that can be passed into 'getNextGeneration' function
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

    const blinker = {
        0: [],
        1: [2],
        2: [2],
        3: [2],
        4: [],
    };    

    const [board, setBoard] = useState(grid)
    const [cellAlive, setCellAlive] = useState(false)
    // const [isAlive, setIsAlive] = useState(false)
    const [generation, setGeneration] = useState(blinker)
    const [intervalId, setIntervalId] = useState(0)
    console.log(cellAlive)
    console.log(generation)
    console.log(intervalId)

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

// iterate over board and display each cell as a unique component(?).
// clicking each cell should flip isAlive back and forth from false to true to false to true, etc.
// it should be white if isAlive is false and black if isAlive is true
// something doesn't fully work on line 68
    return (
        <div>
            <h1>The Grid!</h1>
            {board.map((row, i) => {
                return (
                    <ul key={i}>{row.map((cell, j) => {
                        return !cellAlive ? (
                            <input style={{background:"red", height:"10px", width:"10px"}} key={j} onClick={() => setBoard(!cellAlive)}>{board[i][j]}</input>
                        ) : (<input style={{background:"black", height:"10px", width:"10px"}} key={j} onClick={() => setCellAlive(!cellAlive)}>{board[i][j]}</input>)
                    })}</ul>
                )
            } )}
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Game;