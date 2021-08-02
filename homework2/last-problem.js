//Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո
// պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը
// output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await
const fs = require('fs/promises')

async function readInput() {
    const data = await fs.readFile('./input.txt')
    const dataToString = data.toString()
    await Promise.all( [
        fs.writeFile('output1.txt', dataToString.slice(0,dataToString.length/2)),
        fs.writeFile('output2.txt', dataToString.slice(dataToString.length/2,0))
    ])
}
readInput().then().catch()