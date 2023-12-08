import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        return rawData.split('\n').map(x => x.split(''))

    } catch (err) {
        console.error(err);
    }
}

const findSymbols = x => {
    const symbolIndexes = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] == '=') {
            symbolIndexes.push(i)
        }

    }
    return symbolIndexes
}

// parseInput('./input.txt')
// .then(data => {
//     console.log(data[0])
// })

console.log(findSymbols(['.', '.', '=', '.']))

export { parseInput, findSymbols }
