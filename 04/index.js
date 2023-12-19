import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        const lineSplit = rawData.split('\n');

        const cards = lineSplit.map(line => line.split(':')[1].split('|').map(set => set.split(' ').filter(x => x != '')))
        // console.log(cards)
        // cards is an array of arrays of arrays [[[winning numbers ],[your numbers ]]]
        return cards

    } catch (err) {
        console.error(err);
    }
}

const returnMatches = card => {
    const winners = card[0]
    const yourNumbers = card[1]
    const yourMatches = yourNumbers.filter(number => winners.includes(number))
    return yourMatches.filter(x => x.length != 0)
}

const caclulateScore = matches => {
    const reduced = matches.reduce((a, b)=> {
        if (b.length < 1) return a + 0
        return a + 2 ** (b.length - 1)
    },0)
    return reduced
}

parseInput('input.txt').then(data => {
    const matches =  data.map(returnMatches)
    const score = caclulateScore(matches)
    return score
})

export { parseInput, returnMatches, caclulateScore }
