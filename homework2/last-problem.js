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