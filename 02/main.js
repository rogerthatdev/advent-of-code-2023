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
    console.log(data.get('Game 1'));
})
.catch((err) => {
        console.error(err);
    });


const sample = '3'
const sample2 = 'ffwoeiweonefjdoifjdsf'

