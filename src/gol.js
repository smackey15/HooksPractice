
export function getNextGeneration(inputBoard) {
    const outputBoard = JSON.parse(JSON.stringify(inputBoard)) // {0: [0, 1, 2], 1: []}
    const hash = {}

    for (let row in inputBoard) {  // 0
        const cols = inputBoard[row] // [0, 1, 2]
        for (let col of cols) { 
           const i = Number(row) // 0
           const j = col // 0
           const neighbors = [
            [i, j + 1], // 0, 1
            [i, j - 1], // 0, -1
            [i + 1, j], // 1, 0
            [i - 1, j], // -1, 0
            [i + 1, j + 1], // 1, 1
            [i - 1, j - 1], // -1, -1
            [i + 1, j - 1], // 1, -1
            [i - 1, j + 1], // -1, 1
        ]
            for (let neighbor of neighbors) {
                const [newI, newJ] = neighbor 
                if (newI >= 0 && newJ >= 0) {  // ** NEW CODE **
                if(`${newI} ${newJ}` in hash) {
                    hash[`${newI} ${newJ}`] += 1
                } else {
                    hash[`${newI} ${newJ}`] = 1
                }
            }
            }
        }
    }
    for (let pos in hash) { 
        const arrPos = pos.split(' ')
        const r = arrPos[0] 
        const c = arrPos[1] 
        if (!(r in outputBoard)) outputBoard[r] = [] // ** NEW CODE **
        if(hash[pos] === 3) { 
            if (!outputBoard[r].includes(Number(c))) outputBoard[r].push(Number(c))
        }
        if(hash[pos] < 2 || hash[pos] > 3) {
            // if (!(r in outputBoard)) outputBoard[r] = []
            const index = outputBoard[r].indexOf(Number(c))
            if (index !== -1) outputBoard[r].splice(index, 1)
        }
        outputBoard[r].sort((a,b) => a-b)
    }   
    return outputBoard
}

// function checkNeighbors(i, j) { // 1, 2
//     const hash = {}
    
//     const neighbors = [
//         [i, j + 1], // 1, 3
// 		[i, j - 1], // 1, 1
// 		[i + 1, j], // 2, 2
// 		[i - 1, j], // 0, 2
// 		[i + 1, j + 1], // 2, 3
// 		[i - 1, j - 1], // 0, 1
// 		[i + 1, j - 1], // 2, 1
// 		[i - 1, j + 1], // 0, 3
//     ]

//     for (let neighbor of neighbors) {
//         const [newI, newJ] = neighbor // 1,3
//         if(`${newI}, ${newJ}` in hash) {
//             hash[`${newI}, ${newJ}`] += 1
//         } else {
//             hash[`${newI}, ${newJ}`] = 1
//         }    
//     }
//     console.log(hash)
// }

// const beacon = {
//     0: [],
//     1: [1, 2],
//     2: [1, 2],
//     3: [3, 4],
//     4: [3, 4],
//     5: []
// }
// console.log(getNextGeneration(beacon))
// console.log(getNextGeneration({
//     '0': [],
//     '1': [ 1, 2 ],
//     '2': [ 1 ],
//     '3': [ 4 ],
//     '4': [ 3, 4 ],
//     '5': []
//   }))

// const pulsar1 = {
// 	0: [],
//     1: [],
// 	2: [4, 5, 6, 10, 11, 12],
// 	3: [],
// 	4: [2, 7, 9, 14],
// 	5: [2, 7, 9, 14],
// 	6: [2, 7, 9, 14],
// 	7: [4, 5, 6, 10, 11, 12],
//     8: [],
//     9: [4, 5, 6, 10, 11, 12],
// 	10: [2, 7, 9, 14],
// 	11: [2, 7, 9, 14],
// 	12: [2, 7, 9, 14],
//     13: [],
// 	14: [4, 5, 6, 10, 11, 12],
// 	15: [],
//     16: []
// }
// console.log(getNextGeneration(pulsar1))

// const pulsar2 = {
    
//   }
//   console.log(getNextGeneration(pulsar2))

//   const pulsar3 = {
    
//   }
//   console.log(getNextGeneration(pulsar3))

//   const pulsar4 = {
    
//   }
//   console.log(getNextGeneration(pulsar4))


// const blinker = {
// 	0: [],
// 	1: [2],
// 	2: [2],
// 	3: [2],
// 	4: [],
// };
// console.log(getNextGeneration(blinker))

// const blinker2 = {
// 0: [],
// 1: [],
// 2: [1, 2, 3],
// 3: [],
// 4: [],
// }
// console.log(getNextGeneration(blinker2))

// const blinker3 = {
// 	0: [],
// 	1: [2],
// 	2: [2],
// 	3: [2],
// 	4: [],
// };
// console.log(getNextGeneration(blinker3))


// const block = {
//     0: [],
//     1: [1, 2],
//     2: [1, 2],
//     3: []
// }
// console.log(getNextGeneration(block))

// console.log(getNextGeneration({ '0': [], '1': [ 1, 2 ], '2': [ 1, 2 ], '3': [] }))

// const glider1 = {
//     0: [],
//     1: [1],
//     2: [2],
//     3: [0, 1, 2],
//     4: []
// }
// console.log(getNextGeneration(glider1))

// const glider2 = {
//      '0': [], '1': [], '2': [ 0, 2 ], '3': [ 1, 2 ], '4': [ 1 ] 
// }
// console.log(getNextGeneration(glider2))

// const glider3 = { '0': [], '1': [], '2': [ 2 ], '3': [ 0, 2 ], '4': [ 1, 2 ], '5': [] }
// console.log(getNextGeneration(glider3))

// const glider4 = { '0': [], '1': [], '2': [ 1 ], '3': [ 2, 3 ], '4': [ 1, 2 ], '5': [] }
// console.log(getNextGeneration(glider4))

// const glider5 = { '0': [], '1': [], '2': [ 2 ], '3': [ 3 ], '4': [ 1, 2, 3 ], '5': [] }
// console.log(getNextGeneration(glider5))

// const glider6 = { '0': [], '1': [], '2': [], '3': [ 1, 3 ], '4': [ 2, 3 ], '5': [ 2 ] }
// console.log(getNextGeneration(glider6))
// console.log(getNextGeneration(blinker))
// const blinker = { 0: [], 1: [], 2: [1, 2, 3], 3: [], 4: [] }
