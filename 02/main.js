// // import { promises as fs } from 'fs';
// const fs = require('fs').promises;

// const testFunction = () => { return 'test' }
// module.exports = testFunction;
// // Parse input
// const parseInput = async input => {
//     try {
//         const rawData = await fs.readFile(input, 'utf8');
//         const cubeSetObjectify = set => {
//             const setArray = set.split(', ')
//             const objectifySetArray = setArray => {
//                 let obj = {};
//                 setArray.forEach(item => {
//                     let [value, key] = item.split(' ')
//                     obj[key] = parseInt(value);
//                 })
//                 return obj
//             }
//             return objectifySetArray(setArray)
//         }
//         const gameArrayToMap = gameArray => {
//             let newMap = new Map();
//             gameArray.forEach(game => {
//                 const gameTitle = game.split(':')[0];
//                 const gameMatches = game.split(': ')[1].split('; ').map(x=> cubeSetObjectify(x));
//                 newMap.set(gameTitle, gameMatches)
//             })
//             return newMap
//         }


//         const parsed = gameArrayToMap(rawData.split('\n'))
//         return parsed
        

//     } catch (err) {
//         console.error(err);
//     }
// }




// // async function main() {
// //     // Parse input
// //     const parseInput = async input => {
// //         try {
// //             const rawData = await fs.readFile(input, 'utf8');
// //             const cubeSetObjectify = set => {
// //                 const setArray = set.split(', ')
// //                 const objectifySetArray = setArray => {
// //                     let obj = {};
// //                     setArray.forEach(item => {
// //                         let [value, key] = item.split(' ')
// //                         obj[key] = parseInt(value);
// //                     })
// //                     return obj
// //                 }
// //                 return objectifySetArray(setArray)
// //             }
// //             const gameArrayToMap = gameArray => {
// //                 let newMap = new Map();
// //                 gameArray.forEach(game => {
// //                     const gameTitle = game.split(':')[0];
// //                     const gameMatches = game.split(': ')[1].split('; ').map(x=> cubeSetObjectify(x));
// //                     newMap.set(gameTitle, gameMatches)
// //                 })
// //                 return newMap
// //             }
 

// //             const parsed = gameArrayToMap(rawData.split('\n'))
// //             return parsed
         

// //         } catch (err) {
// //             console.error(err);
// //         }
// //     }
// //     return parseInput('./input.txt')
// // }

// // main()
// // .then((data) => {
// //     console.log(data);

// //     const checkForLimits = (cubeSet) => {
// //         const limits = {red: 12, green: 13, blue: 14}
// //         for (let [key, value] of Object.entries(cubeSet)) {
// //             if (value > limits[key]) return false
// //         }
// //         return true
// //     }

// //     const possibleGames = new Map();

// //     for (let [key, value] of data) {
        
// //         if (value.map(set => checkForLimits(set)).reduce((a,b)=> a && b)) {
// //             possibleGames.set(key, value)
// //         }
// //     }

// //     let count = 0;
// //     for (let [key, value] of possibleGames) {
// //         let id = parseInt(key.split(' ')[1])
// //         count += id
// //     }
// //     console.log(count)
// //     // PART II

// //     console.log(data)
// //     const game1 = data.get('Game 1')

// //     console.log(game1)
// //     const game1Set = game1[0]
// //     console.log(game1Set)

// //     const getMins = game => {
// //         let mins = {red: 0, green: 0, blue: 0};
// //         game.forEach(set => {
// //             if (set.red > mins.red) mins.red = set.red
// //             if (set.blue > mins.blue) mins.blue = set.blue
// //             if (set.green > mins.green) mins.green = set.green
// //         })
// //         return mins
// //     }
// //     const minMap = new Map();
// //     for (let [key, value] of data) {
// //         minMap.set(key, getMins(value))
// //     }

// //     const multiplyMap = new Map();

// //     for (let [key, value] of minMap) {
// //         // console.log(`mINS`, key, getMins(value))
// //         // minMap.set(key, getMins(value))
// //         console.log(`value`, key)
// //         let multiplier = 1;
// //         // if (value.red > 0) multiplier *= value.red
// //         multiplyMap.set(key, value.red * value.blue * value.green)
// //     }
    
// //     console.log(multiplyMap)

// //     let sumOfMultipliers = 0;

// //     for (let [key, value] of multiplyMap) {
// //         sumOfMultipliers += value
// //     }
// //     console.log(sumOfMultipliers)
// // })
// // .catch((err) => {
// //         console.error(err);
// //     });


function sum(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

module.exports = {
    sum,
    multi
};
