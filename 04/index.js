import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        const lineSplit = rawData.split('\n');
        // make this return an array of game maps [ { 'game 1': '41 48 83 | 83 86 6' }]
        const cardMapArray = lineSplit.map(card => {
            const split1 = card.split(':');
            // split1[1].split('|') 
            // [0] = winners, [1] mine 

            const numbers = split1[1]

            const winners = numbers.split('|')[0].split(' ').filter(x => x != '')
            const yourNumbers = numbers.split('|')[1].split(' ').filter(x => x != '')
            console.log(yourNumbers)
            const matches = yourNumbers.filter(number => {
                console.log(`checking`, number)
                return winners.includes(number) 
            }).length

            

            // 1 match = 1 point, 2 match = 2 points, 3 match = 4 points, 4 match = 8 points...
            // cardscore = 2 ^ (matches-1)
            if (matches === 0) return 0
            return 2**(matches-1)
        })


        console.log(`scoreArray:`, cardMapArray)
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

parseInput('input.txt').then(data => console.log(`answer`, data.reduce((a,b)=> a+b, 0)))

export { parseInput, secondFunction }
