import React from 'react';
import {useState, useEffect} from 'react';
import { getNextGeneration } from './gol';
import Cell from './cell'
import './game.css'

function Game() {
    // initialize grid to 40 x 100 2d array with undefined values
    const grid = Array.from(Array(36), () => new Array(100).fill())
    
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
        const twoD = Array.from(Array(36), () => new Array(100).fill())
        for (let row in object) { // 8
            // if (!twoD[row]) twoD[row] = new Array(10).fill() // ** this code makes the grid expand as the coordinates grow beyong the existing rows
            if (twoD[row]) { // this code stops the board from expanding beyong the existing parameters
            const cols = object[row] 
            if (cols.length) {
                for (let i=0; i<cols.length; i++) {
                    if (cols[i] <=99) { 
                        twoD[row][cols[i]] = 1
                    }
                }
            }
        }
        }
        return twoD
    }

    const blinker = () => {
        const twoD = Array.from(Array(36), () => new Array(100).fill())
        twoD[19][49] = 1
        twoD[20][49] = 1
        twoD[21][49] = 1
        return twoD
    }
    const spaceShip = () => {
        const twoD = Array.from(Array(36), () => new Array(100).fill())
        twoD[19][48] = 1
        twoD[20][49] = 1
        twoD[21][47] = 1
        twoD[21][48] = 1
        twoD[21][49] = 1
        return twoD
    }

    const pulsar = () => {
        const twoD = Array.from(Array(36), () => new Array(100).fill())
        twoD[10][43+2] = 1
        twoD[10][43+3] = 1
        twoD[10][43+4] = 1
        twoD[10][43+8] = 1
        twoD[10][43+9] = 1
        twoD[10][43+10] = 1
        twoD[12][43+0] = 1
        twoD[12][43+5] = 1
        twoD[12][43+7] = 1
        twoD[12][43+12] = 1
        twoD[13][43+0] = 1
        twoD[13][43+5] = 1
        twoD[13][43+7] = 1
        twoD[13][43+12] = 1
        twoD[14][43+0] = 1
        twoD[14][43+5] = 1
        twoD[14][43+7] = 1
        twoD[14][43+12] = 1
        twoD[15][43+2] = 1
        twoD[15][43+3] = 1
        twoD[15][43+4] = 1
        twoD[15][43+8] = 1
        twoD[15][43+9] = 1
        twoD[15][43+10] = 1
        twoD[17][43+2] = 1
        twoD[17][43+3] = 1
        twoD[17][43+4] = 1
        twoD[17][43+8] = 1
        twoD[17][43+9] = 1
        twoD[17][43+10] = 1
        twoD[18][43+0] = 1
        twoD[18][43+5] = 1
        twoD[18][43+7] = 1
        twoD[18][43+12] = 1
        twoD[19][43+0] = 1
        twoD[19][43+5] = 1
        twoD[19][43+7] = 1
        twoD[19][43+12] = 1
        twoD[20][43+0] = 1
        twoD[20][43+5] = 1
        twoD[20][43+7] = 1
        twoD[20][43+12] = 1
        twoD[22][43+2] = 1
        twoD[22][43+3] = 1
        twoD[22][43+4] = 1
        twoD[22][43+8] = 1
        twoD[22][43+9] = 1
        twoD[22][43+10] = 1
        return twoD        
    }

    const [board, setBoard] = useState(grid)
    const [gameRunning, setGamerunning] = useState(false)
    const [newObj, setNewObj] = useState({})
    const [generation, setGeneration] = useState(0)

    const handleStart = () => {
        setNewObj(convertGrid(board))
        setGamerunning(true)
    }
    console.log(board)
    console.log(newObj)

    useEffect(() => {
        if (gameRunning) {
        const newIntervalId = setInterval(() => {
            const nextGeneration = getNextGeneration(newObj) // pass object to function and get next version of object
            console.log(nextGeneration)
            const nextBoard = convertObject(nextGeneration) // pass new object to convertObject function, return a 2d board
            console.log(nextBoard)
            setBoard(nextBoard)
            setGeneration(prevGeneration => prevGeneration + 1)
            setNewObj(nextGeneration)
        }, 500);
        return (()=> clearInterval(newIntervalId))
    }
    })

    const handleStop = () => {
        setGamerunning(false)
    }

    const handleReset = () => {
        setGamerunning(false)
        setBoard(grid)
        setGeneration(0)
        setNewObj({})
        const selectbox = document.getElementById('temp')
        selectbox.selectedIndex = 0
        
    }

    const handleNext = () => { // why won't this work unless I have alredy started and stopped the useEffect/setInterval function?
        // const newestObj = convertGrid(board)
        // setNewObj(newestObj)
        setNewObj(convertGrid(board))
        const nextGeneration = getNextGeneration(newObj) 
        console.log(nextGeneration)
        const nextBoard = convertObject(nextGeneration)
        console.log(nextBoard)
        setBoard(nextBoard)
        setGeneration(prevGeneration => prevGeneration + 1)
        setNewObj(nextGeneration)
    }

    const handleInput = (e) => {
        if (gameRunning) {
            setGamerunning(false)
            setGeneration(0)
        }
        const obj = {"grid": grid, "blinker": blinker, "spaceship": spaceShip, "pulsar": pulsar}
        const boardType = e===null ? "grid" : e.target.value
        const variableVersion = obj[boardType]
        setBoard(variableVersion)
    }


    return (
        <div>
            {/* <h1>The Grid!</h1> */}
            <div>
                <label>Templates</label>
                <select id='temp' onChange={handleInput}>
                <option value='grid'>--Please Select--</option>
                <option value='blinker'>Blinker</option>
                <option value='spaceship'>Spaceship</option>
                <option value='pulsar'>Pulsar</option>
                </select>
            </div>
            <div>
            <ul className='grid'>
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
           <br />
           {!gameRunning ?
            <button className='start-off' onClick={handleStart}>Start</button> :
            <button className='start-on' onClick={handleStart}>Start</button>
           }
           {gameRunning ?
            <button className='stop-off' onClick={handleStop}>Stop</button> :
            <button className='stop-on' onClick={handleStop}>Stop</button> 
            }
            {!gameRunning ?
            <button className='reset-off' onClick={handleReset}>Reset</button> :
            <button className='reset-on' onClick={handleReset}>Reset</button>
            }
            <button onClick={handleNext}>Next</button>
            <div>Generations: {generation}</div>
        </div>
    )
   
}

export default Game;

