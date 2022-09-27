import React from 'react';
import {useState, useEffect} from 'react';
import { getNextGeneration } from './gol';
import Cell from './cell'
import './game.css'

function Game() {
    // initialize grid to 10 x 10 2d array with undefined values
    const grid = Array.from(Array(10), () => new Array(10).fill())
    
    // converts 2d array into object that can be passed into 'getNextGeneration' function
    const convertGrid = (twoD) => {
        const obj = {}
        for (let i=0; i<twoD.length; i++) {
            obj[i] = []
            for (let j=0; j<twoD[i].length; j++) {
                if (twoD[i][j] !== undefined) {
                    obj[i].push(j)
                } 
            }
        }
        return obj
    }

    // converts object back into 2D array that can be rendered on the browser
    const convertObject = (object) => {
        const twoD = Array.from(Array(10), () => new Array(10).fill())
        for (let row in object) { // 8
            // if (!twoD[row]) twoD[row] = new Array(10).fill() // ** this code makes the grid expand as the coordinates grow beyong the existing rows
            if (twoD[row]) { // this code stops the board from expanding beyong the existing parameters
            const cols = object[row] // 8
            if (cols.length) {
                for (let i=0; i<cols.length; i++) {
                    if (cols[i] <=9) { // ** not dynamic **
                        twoD[row][cols[i]] = 1
                    }
                }
            }
        }
        }
        return twoD
    }

    const [board, setBoard] = useState(grid)
    const [gameRunning, setGamerunning] = useState(false)

    const handleStart = () => {
        setGamerunning(true)
    }
    console.log(board)

    useEffect(() => {
        if (gameRunning) {
        const newIntervalId = setInterval(() => {
            console.log(board)
            const converted = convertGrid(board) // pass 2d board to convertgrid function, return an object
            console.log(converted)
            const nextGeneration = getNextGeneration(converted) // pass object to function and get next version of object
            console.log(nextGeneration)
            const nextBoard = convertObject(nextGeneration) // pass new object to convertObject function, return a 2d board
            console.log(nextBoard)
            setBoard(nextBoard)
        }, 1000);
        return (()=> clearInterval(newIntervalId))
    }
    })

    const handleStop = () => {
        setGamerunning(false)
    }

    const handleReset = () => {
        setGamerunning(false)
        setBoard(grid)
    }

    return (
        <div>
            {/* <h1>The Grid!</h1> */}
            <div>
           <ul className='test'>
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
           </div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
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

            // const newIntervalId = setInterval(() => {
        //     console.log(board)
        //     const converted = convertGrid(board) // pass 2d board to convertgrid function, return an object, set "converted" to that object
        //     console.log(converted)
        //     const nextGeneration = getNextGeneration(converted)
        //     console.log(nextGeneration)
        //     const nextBoard = convertObject(nextGeneration)
        //     console.log(nextBoard)
        // }, 2000);
        // setIntervalId(newIntervalId)

        // if (intervalId) {
        //     clearInterval(intervalId)
        //     setIntervalId(0)
        // }
