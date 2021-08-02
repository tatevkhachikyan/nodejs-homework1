const config = require('./config.json')
const http = require("http");
const server = http.createServer((req,res) =>{
    res.end(JSON.stringify({girlName: 'Tatev', boyName: 'Edgar'}))
})
server.listen(config.port,config.host)