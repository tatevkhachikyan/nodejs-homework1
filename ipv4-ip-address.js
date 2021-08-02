//Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP
// հասցեն(os.networkInterfaces())
const os = require('os')
const network = os.networkInterfaces()
network['Ethernet'].forEach(item =>{
    if (item.family === 'IPv4'){
        console.log(item.address)
    }
})
