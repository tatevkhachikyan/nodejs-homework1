const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res) =>{
    res.end(JSON.stringify({girlName: 'Tatev', boyName: 'Edgar'}))
})
fs.readFile('./config.json').then(function (configBuffer){
    const config = JSON.parse(configBuffer.toString())
    server.listen(config.port,config.host)
}).catch((err) => {
    console.log(err.code)
})
