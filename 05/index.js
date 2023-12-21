

// destination range start, the source range start, and the range length
// seed-to-soil map:
// 50 98 2  << this means 50 to 98, 51 to 99
// 52 50 48 << etc
// if not covered in a map correspond to the same number

import { promises as fs } from 'fs';

// Parse input
const parseInput = async input => {
    try {
        const rawData = await fs.readFile(input, 'utf8');
        const sections = rawData.split('\n\n');


        const seeds = sections.shift().split(': ')[1].split(' ')
// d-range start, s-range start, range length



        const maps = sections.map(section=> {
            const name = section.split(' map:\n')[0]
            const values = section.split(' map:\n')[1]
            const valuesAsArrays = values.split('\n').map(group => {
                return group.split(' ')
            })
            const destination = name.split('-to-')[1]
            const source = name.split('-to-')[0]
            // return valuesAsArrays
            return {'source': source, 'dest': destination, 'maps': valuesAsArrays}
        })


        return maps

    } catch (err) {
        console.error(err);
    }
}


parseInput('./test.txt').then(data => {
    console.log(data)
})