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

const checkIndexForSymbol = (anArray, index) => {
    const exceptions = ['.'];
    return !/^[a-zA-Z0-9]+$/.test(anArray[index]) && !exceptions.includes(anArray[index]) ? true : false;
}

const findNumericalIndexes = anArray => {
    let indexes = [];
    for (let i = 0; i < anArray.length; i++) {
        if (/^[0-9]+$/.test(anArray[i])) {
            indexes.push(i)
        }
    }
    return indexes;
}

const findNumbersInArray = anArray => {
    return anArray.join('').split(/\.+/).filter(x => x.length > 0).map(x => parseInt(x))

}

export { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes, findNumbersInArray }
