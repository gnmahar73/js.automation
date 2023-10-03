/*const score=400
console.log(score)
const balance=new Number(400)
console.log(balance)
console.log(balance.toFixed(3))
*/

const amount=new Number(152.9195)

//console.log(amount.toPrecision(3))

//console.log(amount.toFixed(2))

const salary=new Number(22/7)
//console.log(salary.toPrecision(3))
//console.log(salary.toExponential(3))

//+++++++++++++++++++++++++  MATH  ***************************

/*console.log(Math.PI)
console.log(Math.round(2.3356))
console.log(Math.floor(20.98))
console.log(Math.ceil(20.98))
console.log(Math.abs(-58))
console.log(Math.pow(3,2))

let a=8
let b=2
let c=15
console.log(Math.pow(a,b))
console.log(Math.cbrt(a))
console.log(Math.min(a,b,c))
console.log(Math.max(a,b,c))
console.log(Math.random())*/

//+++++++++++++++ create Random number with ceil(rounded to upper value like 3.02 will become 4 and decimal will be removed) and floor(value will be rounded to lower value like 20.98 will become 20 ) function ++++++++++++++++

/*console.log(Math.ceil( Math.random()))
console.log(Math.floor( Math.random()))
*/

// random function generate random number btw 0 and 1 to add any number you can generate bigger number
console.log(Math.random()+12)


// if you want to generate a bigger number then create a formula as below


let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))
