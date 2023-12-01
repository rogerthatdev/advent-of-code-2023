

// const fs = require('fs').promises;
import { promises as fs } from 'fs';

async function main() {
    try {
        const data = await fs.readFile('./input.txt', 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

main()
.then((data) => {


    function replaceStrings(str) {

        return str.replace(/one/g, 'one1one')
        .replace(/two/g, 'two2two')
        .replace(/three/g, 'three3three')
        .replace(/four/g, 'four4four')
        .replace(/five/g, 'fi5ive')
        .replace(/six/g, 'si6ix')
        .replace(/seven/g, 'sev7en')
        .replace(/eight/g, 'eigh8ht')
        .replace(/nine/g, 'ni9ne')
    }

    function getFirstAndLastNumber(str) {
        str = replaceStrings(str)
        console.log(str)
        const numbers = str.replace(/\D/g, "");
        // console.log(numbers)
        return numbers.slice(0, 1) + numbers.slice(numbers.length - 1)
    }

    const dataArray = data.split('\n');
    const scoreArray = dataArray.map(x => {
        if (!x) return 
        return getFirstAndLastNumber(x)
    }
        );
    console.log(scoreArray)
    console.log(scoreArray.reduce((a, b) => {
        if (!b) return parseInt(a)
        return parseInt(a) + parseInt(b)
    }, 0))

    // const test = "233234five3"
    // console.log(replaceStrings(test))
})
.catch((err) => {
        console.error(err);
    });


const sample = '3'
const sample2 = 'ffwoeiweonefjdoifjdsf'

