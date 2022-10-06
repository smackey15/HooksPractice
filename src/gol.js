
export function getNextGeneration(inputBoard) { // {14: [], 15: [2], 16: []}
    const outputBoard = JSON.parse(JSON.stringify(inputBoard)) 
    const hash = {}

    for (let row in inputBoard) {  // 15
        console.log(row)
        const cols = inputBoard[row] // [2]
        console.log(cols)
        for (let col of cols) { 
           const i = Number(row) // 15
           const j = col // 2
           console.log(col)
           const neighbors = [
            // inputBoard[i+1].length === 0 || inputBoard[i-1].length === 0 ? [i, j] : [],
            [i, j + 1], // 15, 3
            [i, j - 1], // 15, 1
            [i + 1, j], // 16, 2
            [i - 1, j], // 14, 2
            [i + 1, j + 1], // 16, 3
            [i - 1, j - 1], // 14, 1
            [i + 1, j - 1], // 16, 1
            [i - 1, j + 1], // 14, 3
        ]
            for (let neighbor of neighbors) {
                const [newI, newJ] = neighbor 
                if(`${newI} ${newJ}` in hash) {
                    hash[`${newI} ${newJ}`] += 1
                } else {
                    hash[`${newI} ${newJ}`] = 1
                }
            }
        }
    }
    console.log(hash)
    for (let pos in hash) { 
        const arrPos = pos.split(' ') // [15,3]
        const r = arrPos[0] // 15
        const c = arrPos[1] // 3
        if (!(r in outputBoard)) outputBoard[r] = [] // ** NEW CODE **
        if(hash[pos] === 3) { 
            if (!outputBoard[r].includes(Number(c))) outputBoard[r].push(Number(c))
        }
        if(hash[pos] < 2 || hash[pos] > 3) {
            // if (!(r in outputBoard)) outputBoard[r] = []
            const index = outputBoard[r].indexOf(Number(c)) // 
            if (index !== -1) outputBoard[r].splice(index, 1)
        }
        outputBoard[r].sort((a,b) => a-b)
    }   
    return outputBoard
}

// console.log(getNextGeneration({14: [2], 15: [2], 16: [2]}))