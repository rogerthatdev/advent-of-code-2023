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

const calculateScore = matches => {
    const reduced = matches.reduce((a, b)=> {
        if (b.length < 1) return a + 0
        return a + 2 ** (b.length - 1)
    },0)
    return reduced
}

const part1 = await parseInput('input.txt').then(data => {
    const matches =  data.map(returnMatches)
    const score = calculateScore(matches)
    return score
})

const part2 = await parseInput('input.txt').then(data => {
    const cards = data.map(returnMatches)
    console.log(cards)

    // console.log(matches)
    const copies = []
    let count = 0
    const total = {}
    
    cards.forEach((val, index, array) => {
        const cardNumber = index+1
        total[cardNumber] = total[cardNumber] ? total[cardNumber]+1 : 1
    })
    console.log(total)
    Object.keys(total).forEach((val, index) => {
        const cardNo = parseInt(val)
        const current = cards[val-1]
        const matches = current.length
        console.log(`card #`,cardNo, `: `, current, `has`, matches,`matches`)
        
        console.log('xxxx', total[val-1])

        if (cardNo < 2){
            for (let i = 1; i <= matches; i++){
                console.log(`copy number`, cardNo+i)    
                total[cardNo+i]++
            }
        }
        else {
            for (let y = total[cardNo]; y > 0; y--){
                for (let i = 1; i <= matches; i++){
                    console.log(`copy number`, cardNo+i)    
                    total[cardNo+i]++
                }
            }

        }
        
        
        console.log(total)
        const prevCard = cardNo-1
        console.log(total[prevCard])

 

    })
    console.log(total)
    return Object.values(total).reduce((total, value) => total + value, 0); 

})

console.log({'part 1': part1, 'part 2': part2})

export { parseInput, returnMatches, calculateScore }
