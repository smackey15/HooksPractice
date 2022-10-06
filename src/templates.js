export const blinker = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[19][49] = 1
    twoD[20][49] = 1
    twoD[21][49] = 1
    return twoD
}
export const spaceShip = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[19][48] = 1
    twoD[20][49] = 1
    twoD[21][47] = 1
    twoD[21][48] = 1
    twoD[21][49] = 1
    return twoD
}

export const pulsar = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[10][43+2] = 1
    twoD[10][43+3] = 1
    twoD[10][43+4] = 1
    twoD[10][43+8] = 1
    twoD[10][43+9] = 1
    twoD[10][43+10] = 1
    twoD[12][43+0] = 1
    twoD[12][43+5] = 1
    twoD[12][43+7] = 1
    twoD[12][43+12] = 1
    twoD[13][43+0] = 1
    twoD[13][43+5] = 1
    twoD[13][43+7] = 1
    twoD[13][43+12] = 1
    twoD[14][43+0] = 1
    twoD[14][43+5] = 1
    twoD[14][43+7] = 1
    twoD[14][43+12] = 1
    twoD[15][43+2] = 1
    twoD[15][43+3] = 1
    twoD[15][43+4] = 1
    twoD[15][43+8] = 1
    twoD[15][43+9] = 1
    twoD[15][43+10] = 1
    twoD[17][43+2] = 1
    twoD[17][43+3] = 1
    twoD[17][43+4] = 1
    twoD[17][43+8] = 1
    twoD[17][43+9] = 1
    twoD[17][43+10] = 1
    twoD[18][43+0] = 1
    twoD[18][43+5] = 1
    twoD[18][43+7] = 1
    twoD[18][43+12] = 1
    twoD[19][43+0] = 1
    twoD[19][43+5] = 1
    twoD[19][43+7] = 1
    twoD[19][43+12] = 1
    twoD[20][43+0] = 1
    twoD[20][43+5] = 1
    twoD[20][43+7] = 1
    twoD[20][43+12] = 1
    twoD[22][43+2] = 1
    twoD[22][43+3] = 1
    twoD[22][43+4] = 1
    twoD[22][43+8] = 1
    twoD[22][43+9] = 1
    twoD[22][43+10] = 1
    return twoD        
}