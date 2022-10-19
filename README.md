# Conway's Game of Life

Visit the live site [here!](https://github.com/facebook/create-react-app) NEED TO UPDATE URL AFTER DEPLOYED

## Description

This app is my implementation of Conway's Game of Life. 

'The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.' [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

The game is played on an infinite two-dimensional grid. The grid is transformed according to these rules:
- Any dead cell with exactly three alive neighbors becomes alive (reproduction)
- Any alive cell with exactly two or three alive neighbors remains alive
- Any alive cell with less than two or more than three alive neighbors becomes dead (underpopulation or overpopulation)

These rules are applied simultaneously to every cell on the grid, dead or alive.
This produces a new grid and the rules are then applied to this new grid, and so on.

## Technologies
- Javascript for the function that transforms the grid and the sample board configurations
- React (implemented only with hooks) for rendering and updating a version of the grid in the browser and creating an interactive UI
- CSS for styling the game for display in the browser

## Features

## Coding Challenges 

## Future Implementations

