const os = require('os')
const network = os.networkInterfaces()
network['Ethernet'].forEach(item =>{
    if (item.family === 'IPv4'){
        console.log(item.address)
    }
})
