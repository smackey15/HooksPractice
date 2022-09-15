import React from 'react';
import {useState} from 'react';

function Cell() {

const grid = Array.from(Array(10), () => new Array(10).fill())
console.log(grid)

const returnCells = (grid) => {
    const cells = []

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            cells.push([i,j])
        }
    }
    return cells
}

let banana = returnCells(grid)
console.log(banana)

const [pos, setPos] = useState(banana)

return (
    <div>
        {pos.map((ele, i) =>
        <div>{ele}</div>
        )}
    </div>
)


}

export default Cell;