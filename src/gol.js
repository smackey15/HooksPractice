
export function getNextGeneration(inputBoard) {
    const outputBoard = JSON.parse(JSON.stringify(inputBoard)) 
    const hash = {}

    for (let row in inputBoard) {
        const cols = inputBoard[row]
        for (let col of cols) { 
           const i = Number(row) 
           const j = col 
           const idx = outputBoard[row].indexOf(col) 
           if(!hasNeighbors(inputBoard, i, j)) {
            outputBoard[row].splice(idx, 1)
           }
           const neighbors = [
            [i, j + 1], 
            [i, j - 1], 
            [i + 1, j], 
            [i - 1, j], 
            [i + 1, j + 1], 
            [i - 1, j - 1], 
            [i + 1, j - 1], 
            [i - 1, j + 1], 
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

    for (let pos in hash) { 
        const arrPos = pos.split(' ') 
        const r = arrPos[0] 
        const c = arrPos[1] 
        if (!(r in outputBoard)) outputBoard[r] = [] 
        if(hash[pos] === 3) { 
            if (!outputBoard[r].includes(Number(c))) outputBoard[r].push(Number(c))
        }
        if(hash[pos] < 2 || hash[pos] > 3) {
            const index = outputBoard[r].indexOf(Number(c)) 
            if (index !== -1) outputBoard[r].splice(index, 1)
        }
        outputBoard[r].sort((a,b) => a-b)
    }   
    return outputBoard
}

const hasNeighbors = (board, r, c) => { 
    const neighbors = [
        [r, c + 1],
        [r, c - 1], 
        [r + 1, c], 
        [r - 1, c], 
        [r + 1, c + 1], 
        [r - 1, c - 1], 
        [r + 1, c - 1], 
        [r - 1, c + 1], 
    ]
    
    for (let neighbor of neighbors) {
        const [i, j] = neighbor 
        if (!(i in board)) board[i] = []  
        const idx = board[i].indexOf(j) 
        if (board[i][idx] || board[i][idx] === 0) return true  
    }
    return false
}

