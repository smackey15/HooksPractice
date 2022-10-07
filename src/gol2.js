
function getNextGeneration(inputBoard) { // {14: [2], 15: [2], 16: [2]}
    const outputBoard = JSON.parse(JSON.stringify(inputBoard)) 

    for (let row in inputBoard) {  // 15
        const cols = inputBoard[row] // [2]
        for (let col of cols) { 
           const i = Number(row) // 15
           const j = col // 2
           const neighbors = [
            [i, j + 1], // 15, 3
            [i, j - 1], // 15, 1
            [i + 1, j], // 16, 2
            [i - 1, j], // 14, 2
            [i + 1, j + 1], // 16, 3
            [i - 1, j - 1], // 14, 1
            [i + 1, j - 1], // 16, 1
            [i - 1, j + 1], // 14, 3
        ]
        let count = 0 // 1
            for (let neighbor of neighbors) { // [15,3]
                const [newI, newJ] = neighbor // 15, 3
                console.log(neighbor)
                if (!(newI in outputBoard)) outputBoard[newI] = [] // 
                if (!(newI in inputBoard)) inputBoard[newI] = [] // 
                const bool = inputBoard[newI].indexOf(newJ)
                console.log(bool)
                if (inputBoard[newI][bool]) {
                    count += 1
                }
            }
            console.log(count)
            if (count < 2 || count > 3) {
                const index = outputBoard[i].indexOf(j) // 0
                if (index !== -1) outputBoard[i].splice(index, 1)    
            }
            if (count === 3) {
                if (!outputBoard[i].includes(j)) outputBoard[i].push(j)
            }
            outputBoard[i].sort((a,b) => a-b)
            count = 0
        }
    }
    return outputBoard
}
console.log(getNextGeneration({14: [2], 15: [2], 16: [2]}))

// console.log(getNextGeneration({14: [], 15: [2], 16: []}))

// const helper = (i, j, inBoard, outBoard) => {
//     const neighbors = [
//         [i, j + 1], // "15, 3": 1
//         [i, j - 1], // 15, 1
//         [i + 1, j], // 16, 2
//         [i - 1, j], // 14, 2
//         [i + 1, j + 1], // 16, 3
//         [i - 1, j - 1], // 14, 1
//         [i + 1, j - 1], // 16, 1
//         [i - 1, j + 1], // 14, 3
//     ]
//     let count = 0
//     for (let neighbor of neighbors) {
//         // check if each neighbor is alive and increment count, then apply game logic, then reset the count for the next cell
//         const [newI, newJ] = neighbor 
//         if (inBoard[newI][newJ]) count += 1
//     }
//     if (count === 0) {
//         const index = outBoard[i].indexOf(j) // 
//         if (index !== -1) outBoard[i].splice(index, 1)
//         count = 0
//     }
//     return outBoard
// }