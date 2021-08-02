const os = require('os')
const fs = require('fs')
const random = require('random')
// fayli mijiny chisht a anum, bayc fayli anuny 8anish tiv chi dnum
const name = random.integer(10^7,10^8)
fs.writeFile(name + '.txt', os.cpus().length.toString(),(err) => {
    if (err){
        console.log(err.code)
    }
    console.log('OK')
})
