import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        return rawData.split('\n')

    } catch (err) {
        console.error(err);
    }
}

const secondFunction = async x => {
    try {
        return x

    } catch (err) {
        console.error(err);
    } 
}


export { parseInput, secondFunction }
