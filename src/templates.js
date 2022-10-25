export const block = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[19][48] = 1
    twoD[19][49] = 1
    twoD[20][48] = 1
    twoD[20][49] = 1
    return twoD
}

export const blinker = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[19][49] = 1
    twoD[20][49] = 1
    twoD[21][49] = 1
    return twoD
}

export const glider = () => {
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

export const hammerhead = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[9][80] = 1
    twoD[9][81] = 1
    twoD[9][82] = 1
    twoD[9][83] = 1
    twoD[9][84] = 1
    twoD[10][80] = 1
    twoD[10][85] = 1
    twoD[10][93] = 1
    twoD[10][94] = 1
    twoD[11][80] = 1
    twoD[11][92] = 1
    twoD[11][93] = 1
    twoD[11][95] = 1
    twoD[11][96] = 1
    twoD[11][97] = 1
    twoD[12][81] = 1
    twoD[12][91] = 1
    twoD[12][92] = 1
    twoD[12][94] = 1
    twoD[12][95] = 1
    twoD[12][96] = 1
    twoD[12][97] = 1
    twoD[13][83] = 1
    twoD[13][84] = 1
    twoD[13][88] = 1
    twoD[13][89] = 1
    twoD[13][91] = 1
    twoD[13][92] = 1
    twoD[13][95] = 1
    twoD[13][96] = 1
    twoD[14][85] = 1
    twoD[14][90] = 1
    twoD[14][93] = 1
    twoD[15][86] = 1
    twoD[15][88] = 1
    twoD[15][90] = 1
    twoD[15][92] = 1
    twoD[16][87] = 1
    twoD[17][87] = 1
    twoD[18][86] = 1
    twoD[18][88] = 1
    twoD[18][90] = 1
    twoD[18][92] = 1
    twoD[19][85] = 1
    twoD[19][90] = 1
    twoD[19][93] = 1
    twoD[20][83] = 1
    twoD[20][84] = 1
    twoD[20][88] = 1
    twoD[20][89] = 1
    twoD[20][91] = 1
    twoD[20][92] = 1
    twoD[20][95] = 1
    twoD[20][96] = 1
    twoD[21][81] = 1
    twoD[21][91] = 1
    twoD[21][92] = 1
    twoD[21][94] = 1
    twoD[21][95] = 1
    twoD[21][96] = 1
    twoD[21][97] = 1
    twoD[22][80] = 1
    twoD[22][92] = 1
    twoD[22][93] = 1
    twoD[22][95] = 1
    twoD[22][96] = 1
    twoD[22][97] = 1
    twoD[23][80] = 1
    twoD[23][85] = 1
    twoD[23][93] = 1
    twoD[23][94] = 1
    twoD[24][80] = 1
    twoD[24][81] = 1
    twoD[24][82] = 1
    twoD[24][83] = 1
    twoD[24][84] = 1
    return twoD
}

export const gosper = () => {
    const twoD = Array.from(Array(36), () => new Array(100).fill())
    twoD[13][56] = 1
    twoD[14][54] = 1
    twoD[14][56] = 1
    twoD[15][44] = 1
    twoD[15][45] = 1
    twoD[15][52] = 1
    twoD[15][53] = 1
    twoD[15][66] = 1
    twoD[15][67] = 1
    twoD[16][43] = 1
    twoD[16][47] = 1
    twoD[16][52] = 1
    twoD[16][53] = 1
    twoD[16][66] = 1
    twoD[16][67] = 1
    twoD[17][32] = 1
    twoD[17][33] = 1
    twoD[17][42] = 1
    twoD[17][48] = 1
    twoD[17][52] = 1
    twoD[17][53] = 1
    twoD[18][32] = 1
    twoD[18][33] = 1
    twoD[18][42] = 1
    twoD[18][46] = 1
    twoD[18][48] = 1
    twoD[18][49] = 1
    twoD[18][54] = 1
    twoD[18][56] = 1
    twoD[19][42] = 1
    twoD[19][48] = 1
    twoD[19][56] = 1
    twoD[20][43] = 1
    twoD[20][47] = 1
    twoD[21][44] = 1
    twoD[21][45] = 1
    return twoD
}