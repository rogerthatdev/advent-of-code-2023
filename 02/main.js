import { promises as fs } from 'fs';

async function main() {
    // Parse input
    const parseInput = async input => {
        try {
            const rawData = await fs.readFile(input, 'utf8');
            const cubeSetObjectify = set => {
                const setArray = set.split(', ')
                const objectifySetArray = setArray => {
                    let obj = {};
                    setArray.forEach(item => {
                        let [value, key] = item.split(' ')
                        obj[key] = parseInt(value);
                    })
                    return obj
                }
                return objectifySetArray(setArray)
            }
            const gameArrayToMap = gameArray => {
                let newMap = new Map();
                gameArray.forEach(game => {
                    const gameTitle = game.split(':')[0];
                    const gameMatches = game.split(': ')[1].split('; ').map(x=> cubeSetObjectify(x));
                    newMap.set(gameTitle, gameMatches)
                })
                return newMap
            }
 

            const parsed = gameArrayToMap(rawData.split('\n'))
            return parsed
         

        } catch (err) {
            console.error(err);
        }
    }
    return parseInput('./input.txt')
}

main()
.then((data) => {
    console.log(data);

    const checkForLimits = (cubeSet) => {
        const limits = {red: 12, green: 13, blue: 14}
        for (let [key, value] of Object.entries(cubeSet)) {
            if (value > limits[key]) return false
        }
        return true
    }

    const possibleGames = new Map();

    for (let [key, value] of data) {
        
        if (value.map(set => checkForLimits(set)).reduce((a,b)=> a && b)) {
            possibleGames.set(key, value)
        }
    }

    let count = 0;
    for (let [key, value] of possibleGames) {
        let id = parseInt(key.split(' ')[1])
        count += id
    }
    console.log(count)
})
.catch((err) => {
        console.error(err);
    });

