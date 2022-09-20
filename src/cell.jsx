import React from 'react';
import {useState} from 'react';

function Cell(props) {

const [isAlive, setIsAlive] = useState(false)
// const [board, setBoard] = useState(props.board)
// const [change, setChange] = useState([])
const [count, setCount] = useState(0)


function handleAlive(pos) {
    setIsAlive(!isAlive)
    setCount(prevCount => prevCount += 1)
    // const newChange = []
    // newChange.push([pos])
    // setChange(prevChange => setChange(prevChange.push([pos])))
    // const newBoard = board.map((arr) => arr.slice());
    // newBoard[props.r][props.c] = 1
    // setBoard(newBoard)
    // setBoard(prevBoard => setBoard(prevBoard[props.r][props.c] = 1))
    // setBoard((prevBoard) => setBoard(prevBoard[props.r][props.c] = 1))
}

console.log(isAlive)
// console.log(count)
// console.log(change)
// console.log(props.pos)
// console.log(board)

return (
    <div>
        {!isAlive ?
            <p style={{background:"red", height:"10px", width:"10px", cursor:"pointer"}} onClick={() => handleAlive([props.r, props.c])}>{props.pos}</p> :
            <p style={{background:"black", height:"10px", width:"10px", cursor:"pointer"}} onClick={handleAlive}>{props.pos}</p>
        }
    </div>
)

}

export default Cell;

// how do I, upon cell click, change the value of that cell in the board to '1' (or back to '0' if clicked again)
// and have the board update each time and previous clicks/updates persist until I'm read to press start.

// how do I get the function to return something that appears on the broswer