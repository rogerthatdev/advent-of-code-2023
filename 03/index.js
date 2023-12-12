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

const groupConsecutiveNumbers = anArray => {
    const reduced = anArray.reduce((acc, currentValue) => {
        let latest = acc.length > 0 ? acc[acc.length-1] : null;

        if (!latest) {
            acc.push([currentValue])
        } else {
            if (latest[latest.length-1] == currentValue - 1 ){
                latest.push(currentValue)
            } else {
                acc.push([currentValue])
            }
        }
        return acc
    }, [])

    return reduced
}

const findNumbersInArray = anArray => {
    let numberObjectList = [];
    const numericalIndexes = findNumericalIndexes(anArray);
    const groups = groupConsecutiveNumbers(numericalIndexes);
    const numbers = anArray.join('').split(/\.+/).filter(x => x.length > 0).map(x => parseInt(x))
    
    for (let i = 0; i < groups.length; i++){
        numberObjectList.push({
            indexes: groups[i],
            value: numbers[i]
        })
    }
    return numberObjectList
    
}

export { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes, groupConsecutiveNumbers, findNumbersInArray }
