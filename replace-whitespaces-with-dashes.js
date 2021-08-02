//Գրել ծրագիր որ աշխատացնելիս input.txt կկարդա պարունակությունը , որից
// հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով: Այնուհետև
// գծիկներով տեքստ գրել write.txt ֆայլում:
const fs = require('fs')
fs.readFile('./input.txt',  (err,data) => {
    if (err){
        console.log(err.code)
    }
    ///\s+/g chgitem esi inch a nshanakum documentation-i mej em nayel te vonc replace anem
    fs.writeFile('write.txt',data.toString().replace(/\s+/g, '-'), (err) => {
        if (err){
            console.log(err.code)
        }
        console.log('OK')
    })
})