import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        const lineSplit = rawData.split('\n');

        const cards = lineSplit.map(line => line.split(':')[1].split('|').map(set => set.split(' ').filter(x => x != '')))
        // console.log(cards)
        // cards is an array of arrays of arrays [[[winning numbers ],[your numbers ]]]

        const matches = cards.map(card => {
            const winners = card[0]
            const yourNumbers = card[1]
            const yourMatches = yourNumbers.filter(number => winners.includes(number))
            return yourMatches
        }).filter(x => x.length != 0)

        console.log(`matches`, matches)

        const score = matches.reduce((a, b) => {
            return a + 2 ** (b.length - 1)
        }, 0)
        return score

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

parseInput('input.txt').then(data => console.log(`answer`, data))

export { parseInput, secondFunction }
