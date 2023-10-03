let name="GHulam Nabi"
age=29
location="karachi"

console.log(`hello my name is ${name} and i am ${age} year old living in ${location}`)

 
 const gameName=new String('Pakistan')
console.log(gameName)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('d'))

// const newstring=gameName.substring(4,7)
// console.log(newstring)

const newstring=gameName.slice(-1,5)

console.log(newstring)

const str='    Hellow    '
console.log(str)
console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.trim())