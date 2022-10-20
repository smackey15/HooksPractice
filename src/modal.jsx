import React from 'react';


function Modal() {
    return (
        <div>
            <p>Conway's Game of Life is played on an infinite two-dimensional grid. The grid is transformed according to these rules:</p>
                <ul>
                    <li>Any dead (grey) cell with exactly three alive (black) neighbors becomes alive</li>
                    <li>Any alive cell with exactly two or three alive neighbors remains alive</li>
                    <li>Any alive cell with less than two or more than three alive neighbors becomes dead</li>
                    <li>This produces a new grid and the rules are then applied to this new grid, and so on</li>
                </ul>
            <p>In this implementation all cells begin dead. You may click any combination of cells to turn them alive then press the "Start" button to watch the grid transform automatically.</p>
            <p>The "Next" button can be used to move through each transformation at your own pace rather than automatically.</p>
            <p>The "Stop" button pauses the automatic transformations.</p>
            <p>The "Reset" button stops the transformations and clears the grid, turning all cells back to dead.</p>
            <p>The "Generations" counter keeps track of how many times the grid has transformed.</p>
            <p>In addition to choosing your own pattern of alive cells you can choose from some popular configurations in the "Favorites" menu at the top of the page.</p>
                <ul>
                    <li>Block: a still life that never changes from one generation to the next</li>
                    <li>Blinker: a two generation oscillator that goes back and forth between two configurations</li>
                    <li>Pulsar: a three generation oscillator that cycles between three configurations</li>
                    <li>Glider: a spaceship that moves across the grid as it transforms. It will eventually move off the visible grid in the browser, but continue to transform infinitely</li>
                    <li>Gosper Glider Gun: a clever configuration that acts like a "gun". It produces then "shoots" off gliders that move down, right, and eventually off the visible grid</li>
                </ul>
            <p><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noreferrer" className='wiki-link'>Learn more here!</a></p>
        </div>
    )
}

export default Modal