import React from 'react';

function Modal() {
    return (
        <div>
            <p>Conway's Game of Life is played on an infinite two-dimenstional grid. The grid is transformed according to these rules:</p>
                <ul>
                    <li>Any dead (grey) cell with exactly three live (black) neighbors becomes live</li>
                    <li>Any live cell with exactly two or three live neighbors remains alive</li>
                    <li>Any live cell with less than two or more than three live neighbors becomes dead</li>
                    <li>This produces a new grid and the rules are then applied to this new grid, and so on</li>
                </ul>
            <p>In this implemenation all cells begin dead. You may click any combination of cells to turn them live then press the "play" button to watch the grid transform continuously and automatically.</p>
            <p>The "Generations" counter keeps track of how many times the grid has transformed.</p>
            <p>The "stop" button pauses the automatic transformations.</p>
            <p>The "next" button can be clicked to move through each transformation at your own pace rather than automatically.</p>
            <p>The "reset" button stops the transformations, clears the grid, and turns all cells back to dead</p>
            <p>In addition to choosing your own live cells you can choose from some popular patterns in the "Templates" menu at the top of the page.</p>
                <ul>
                    <li>Blinker: a two generation oscillator that goes back and forth between two positions</li>
                    <li>Pulsar: a three generation oscillator that cycles between three positions</li>
                    <li>Glider: a spaceship that moves across the grid as it transforms. It will eventually move off the visible grid in the browser, but continues to transform infinitely</li>
                    <li>Gosper Glider Gun: a famous shape that acts like a "gun", producing then shooting off gliders that move down and right across the grid</li>
                </ul>
            <p><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" style={{color: 'lightblue'}}>Learn more here!</a></p>
        </div>
    )
}

export default Modal