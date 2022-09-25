import React from 'react';
import {useState} from 'react';

function Cell(props) {

    // const [isAlive, setIsAlive] = useState(props.pos)

    function handleAlive() {
        const newBoard = props.board.map((arr) => arr.slice());
        if (props.pos !== 1) {
            newBoard[props.r][props.c] = 1
         } else {
            newBoard[props.r][props.c] = undefined
         }
        props.setBoard(newBoard)
    }

    // console.log(isAlive)

    return (
        <div>
            {props.pos !== 1 ?
                <div style={{background:"gray", height:"40px", width:"40px", border: '1px solid white', cursor:"pointer"}} onClick={handleAlive}>{[props.r, props.c]}</div> :
                <div style={{background:"black", height: "40px", width:"40px",border: '1px solid white',  cursor:"pointer"}} onClick={handleAlive}>{[props.r, props.c]}</div>
            }
        </div>
    )
}

export default Cell;

