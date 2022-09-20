import React from 'react';
import {useState, useEffect} from 'react';
import { getNextGeneration } from './gol';
import Cell from './cell'

function Game() {
    const grid = Array.from(Array(10), () => new Array(10).fill())
    
    // converts 2d array into object that can be passed into 'getNextGeneration' function
    const convertGrid = (twoD) => {
        const obj = {}
        for (let i=0; i<twoD.length; i++) {
            obj[i] = []
            for (let j=0; j<twoD[0].length; j++) {
                if (twoD[i][j] !== undefined) {
                    obj[i].push(j)
                } 
            }
        }
        return obj
    }

    // here for testing until react board works
    // const blinker = {
    //     0: [],
    //     1: [2],
    //     2: [2],
    //     3: [2],
    //     4: [],
    // }; 

    const [board, setBoard] = useState(grid)
    // here for testing until react board works
    const [converted, setConverted] = useState({})
    const [intervalId, setIntervalId] = useState(0)
    console.log(board)
    console.log(converted)
    console.log(intervalId)  

    const handleStart = () => {
        setConverted(convertGrid(board)) // converts 2d grid to object that can be passed into the getNextGeneration function //
        const newIntervalId = setInterval(() => {
            setConverted(prevConverted => getNextGeneration(prevConverted))
        }, 500);
        setIntervalId(newIntervalId)
    }

    const handleStop = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(0)
        }
    }

    // const handleAlive = (pos) => {  
    //     const newBoard = board.map((arr) => arr.slice());
    //     newBoard[pos[0]][pos[1]] = 1 
    //     setBoard(newBoard)
    // }

    // useEffect = () => {
    //     setBoard(board)
    // }

    return (
        <div>
            <h1>The Grid!</h1>
           <ul>
            {board.map((row,i) => 
                row.map((col,j) =>
                <Cell
                key={[i,j]}
                r={i}
                c={j}
                pos={board[i][j]}
                board={board}
                setBoard={setBoard}
            />))
            }
           </ul>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
   
}

export default Game;

    // return (
    //     <div>
    //         <h1>The Grid!</h1>
    //         {board.map((row, i) => {
    //             return (
    //                 <ul key={i}>{row.map((cell, j) => {
    //                     return !cellAlive ? (
    //                         <div style={{background:"red", height:"10px", width:"10px", cursor:"pointer"}} key={j} onClick={() => handleAlive([i,j])}>{null}</div>
    //                     ) : (<p style={{background:"black", height:"10px", width:"10px", cursor:"pointer"}} key={j} onClick={() => setCellAlive(!cellAlive)}>{null}</p>)
    //                 })}</ul>
    //             )
    //         } )}
    //         <button onClick={handleStart}>Start</button>
    //         <button onClick={handleStop}>Stop</button>
    //     </div>
    // )
