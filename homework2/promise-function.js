const random = require('random')
let returnedPromise = new Promise((resolve,reject) => {
         const randomNumber = random.int(0,10)
         if (randomNumber < 5){
             reject(new Error('Number is less than 5'))
         }else {
             resolve(randomNumber)
         }
     })


returnedPromise.then((number) => {
     console.log(number)
 }).catch((err) => {
     console.log(err.code)
 })