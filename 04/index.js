import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        const lineSplit = rawData.split('\n');
        // make this return an array of game maps [ { 'game 1': '41 48 83 | 83 86 6' }]
        const cardMapArray = lineSplit.map(card => {
            const split1 = card.split(':');
            return split1
        })
        return cardMapArray

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

parseInput('test/test.txt').then(data => console.log(data))

export { parseInput, secondFunction }
