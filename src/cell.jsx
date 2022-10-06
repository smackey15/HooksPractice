import React from 'react';

function Cell(props) {

    function handleAlive() {
        const newBoard = props.board.map((arr) => arr.slice());
        if (props.pos !== 1) {
            newBoard[props.r][props.c] = 1
         } else {
            newBoard[props.r][props.c] = undefined
         }
        props.setBoard(newBoard)
    }

    return (
        <div>
            {props.pos !== 1 ?
                <div style={{background:"gray", height:"15px", width:"15px", border: '1px solid lightgrey', cursor:"pointer"}} onClick={handleAlive}>{[props.r, props.c]}</div> :
                <div style={{background:"black", height: "15px", width:"15px",border: '1px solid lightgrey',  cursor:"pointer"}} onClick={handleAlive}>{}</div>
            }
        </div>
    )
}

export default Cell;

