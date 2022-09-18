import React from 'react';
import {useState} from 'react';

function Cell(props) {

const [isAlive, setIsAlive] = useState(false)

function handleAlive() {
    setIsAlive(!isAlive)
}
console.log(isAlive)

return (
    <div>{!isAlive ?
        <p style={{background:"red", height:"10px", width:"10px", cursor:"pointer"}} onClick={handleAlive}>{props.pos}</p> :
        <p style={{background:"black", height:"10px", width:"10px", cursor:"pointer"}} onClick={() => setIsAlive(!isAlive)}>{props.pos}</p>}
    </div>
)

}

export default Cell;