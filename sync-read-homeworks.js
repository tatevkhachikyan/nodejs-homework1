//Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների
// ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js,
// homework4.js):
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն
// համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը
const fs = require('fs')
const os = require('os')

const dateNow = new Date()
const nameOfFile = `${os.platform()}_${dateNow.getMinutes()}_${dateNow.getSeconds()}`

const total_amount = fs.readFileSync('./total-amount.js')
const ipv4_ip_address = fs.readFileSync('./ipv4-ip-address.js')
const cpu = fs.readFileSync('./cpu.js')
const replace_whitespaces_with_dashes = fs.readFileSync('./replace-whitespaces-with-dashes.js')

fs.writeFileSync(nameOfFile,total_amount + ipv4_ip_address + cpu + replace_whitespaces_with_dashes )
