import { promises as fs } from 'fs';

async function main() {
    // Parse input
    const parseInput = async input => {
        try {
            const rawData = await fs.readFile(input, 'utf8');

            // Helpers
            const splitByLine = x => x.split('\n')

            // example in: '9 green, 2 blue, 12 red'
            // example out: {green: 9, blue: 2, red: 12}
            const stringToObject = x => {
                const anArray = x => x.split(', ') 
                let obj = {};
                anArray(x).forEach(item => {
                    let [value, key] = item.split(' ')
                    obj[key] = value;
                })
                return obj
            }


            const lineToMap = x => {
                let newMap = new Map();
                const gameTitle = x.split(':')[0];

                const gameMatches = x.split(': ')[1].split('; ').map(x=> stringToObject(x));
                newMap.set(gameTitle, gameMatches)
                return newMap;
            }

            console.log(lineToMap("Game 100: 9 green, 2 blue, 12 red; 2 blue, 14 red, 2 green; 14 red, 12 green"))


            // console.log(splitByLine(rawData))


        } catch (err) {
            console.error(err);
        }
    }
    return parseInput('./input.txt')
}

main()
.then((data) => {
    console.log(data);
})
.catch((err) => {
        console.error(err);
    });


const sample = '3'
const sample2 = 'ffwoeiweonefjdoifjdsf'

