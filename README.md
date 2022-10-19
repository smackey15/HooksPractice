# Conway's Game of Life

Visit the live site [here!](https://github.com/facebook/create-react-app) NEED TO UPDATE URL AFTER DEPLOYED

## Description

This app is my implementation of Conway's Game of Life. 

'The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.' -- [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

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

With this version of Conway's Game of Life, user's can:
- Arrive at an empty grid as a blank slate for their creation
- Click the `Instructions` button to view a pop-up modal outlining the rules and how to use this app
- Follow a link to Wikipedia at the bottom of the instructions to learn about the game in more depth
- Toggle any cells between dead (gray) and alive (black) via mouse click until they have their desired starting configuration
- Alternatively, they can select an existing configuration from the `Favorites` drop down menu and the grid will populate accordingly
- Click `Start` to see the grid transform automatically and continuously
- Click `Next` to move through each tranformation at their own pace rather than automatically
- Click `Stop` to pause the automatic transformations
- Click `Reset` to stop the transformations, clear the grid, and return all cells to dead (gray)
- View a 'Generations' counter that keeps track of how many times the grid has transformed

## Coding Challenges 

PROBLEM: The game is played on, and represented on the browwer by, a two dimensional grid. However, in the function that applies the game rules and transforms the grid accordingly, I did not want to use a 2-D array as the data structure to represent the board. One, using a 2-D array means that every cell coordinate has to be represented as either dead or alive and iterated over. This is especially wasteful if you consider the number of dead cells on the grid that are nowhere near a live cell and have no chance of becoming alive in the transformation. Two, the grid is meant to be infinite but a 2-D array has boundaries. As the configurations approach the edges you could add rows and columns, but this is costly, especially if you reach the top or left of the grid. You would have to use expensive unshift operations to place new rows/columns at the beginning and essentially re-index the entire 2-D array.

SOLUTION: Use a Javascript Object as the data structure to reprsent the board in the funciton that applies the game rules. This object holds only the coordinates of the live cells, because transformations only happen in proximity to live cells. The keys of the object are the indices of the rows and the values are arrays of numbers representing the indices of the columns. For example, the spaceship glider looks like this:
```javascript
const glider = {
    0: [],
    1: [1],
    2: [2],
    3: [0, 1, 2],
    4: []
}
```

## Future Implementations
- Play music while the transformations are occuring automatically
- Allow users to select their own colors for dead and alive cells

