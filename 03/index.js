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
    const exceptions = ['.'];
    for (let i = 0; i < x.length; i++) {
        if (!/^[a-zA-Z0-9]+$/.test(x[i]) && !exceptions.includes(x[i])) {
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
        let latest = acc.length > 0 ? acc[acc.length - 1] : null;

        if (!latest) {
            acc.push([currentValue])
        } else {
            if (latest[latest.length - 1] == currentValue - 1) {
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
    anArray = anArray.map(x => !/^[0-9]+$/.test(x) ? '.' : x)
    const numbers = anArray.join('').split(/\.+/).filter(x => x.length > 0).map(x => parseInt(x))

    for (let i = 0; i < groups.length; i++) {
        numberObjectList.push({
            indexes: groups[i],
            value: numbers[i]
        })
    }
    return numberObjectList
}


// TODO: put it all together and get the answer
// use checkIndexForSymbol on: 
//   - current line, indexes[0]-1
//   - current line, indexes[indexes.length]
//   - previous line, indexes[0]-1, indexes[indexes.length], rest of indexes
//   - proceeding line, indexes[0]-1, indexes[indexes.length], rest of indexes
const checkForCommonItems = (array1, array2) => {
    return array1.some(item => array2.includes(item))
}

const answerPart1 = async () => {
    const parsedData = await parseInput('./input.txt')

    let count = 0;

    // parsedData.forEach(line => {
    //     const numbersObjects =  findNumbersInArray(line)
    //     numbersObjects.forEach(number => {
    //         let numberValue = number.value
    //         let indexes = number.indexes
    //         let leftOf = indexes[0] > 0 ? indexes[0]-1 : null;
    //         let rightOf = indexes[indexes.length-1] == parsedData[0].length-1 ? 'null' : indexes[indexes.length-1]+1;
    //         if(checkIndexForSymbol(line, leftOf) || checkIndexForSymbol(line,rightOf)){
    //             count+=numberValue
    //         }
    //     })
    // })
    // console.log('only numbers with left right symbols: ', count)

    parsedData.forEach((line, index) => {
        const currentLineSymbols = findSymbols(line);

        const precedingLine = index > 0 ? parsedData[index - 1] : null;
        const precedingLineSymbols = precedingLine ? findSymbols(precedingLine) : [];

        const proceedingLine = index < parsedData.length - 1 ? parsedData[index + 1] : null;
        const proceedingLineSymbols = proceedingLine ? findSymbols(proceedingLine) : [];

        const currentLineNumbersObjects = findNumbersInArray(line)

        currentLineNumbersObjects.forEach(numberObject => {
            console.log(numberObject)
            let indexes = numberObject.indexes
            let leftOf = indexes[0] > 0 ? indexes[0] - 1 : null;
            let rightOf = indexes[indexes.length - 1] == parsedData[0].length - 1 ? null : indexes[indexes.length - 1] + 1;
            if (checkForCommonItems(currentLineSymbols, [leftOf, rightOf])) {
                count += numberObject.value
                // console.log('found in line', numberObject.value)
            } else if (checkForCommonItems(precedingLineSymbols, [leftOf, ...numberObject.indexes, rightOf])) {
                count += numberObject.value
                // console.log('found above', numberObject.value)
            } else if (checkForCommonItems(proceedingLineSymbols, [leftOf,...numberObject.indexes, rightOf])) {
                count += numberObject.value
                console.log('found below', numberObject.value)
            } else {
                console.log(precedingLineSymbols)
                console.log(proceedingLineSymbols)
                // console.log(numberObject)
                console.log('loser', numberObject.value)}
        })
    })
    console.log(count)
}

answerPart1()

export { parseInput, findSymbols, checkIndexForSymbol, findNumericalIndexes, groupConsecutiveNumbers, findNumbersInArray }
