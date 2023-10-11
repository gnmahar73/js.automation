// function helps us to package a big code into single word as given below
// console.log("g")
// console.log("h")
// console.log("u")
// console.log("l")
// console.log("a")
// console.log("m")
// console.log("n")
// console.log("abi")
// when u execute above code then yu have to write mulpilt time to print each letter but there is a way in which we can execute all lines in single code called function
function myName(){
    console.log("g")
console.log("h")
console.log("u")
console.log("l")
console.log("a")
console.log("m")
console.log("n")
console.log("abi")
}

//now you can call/execute code by write function name which is "myName" one our case 
// myName()
//remember only "myName" is called function reference and it will not execute as shown below ,but when we add bracketes "()"" then it will be called as shown above
myName

//example#1
function addTwoNumbers(number1,number2){
console.log(number1+number2)
}

addTwoNumbers()

//remember function will not show any result only show "NaN" because we have not given any values/arguments to our numbers/parameters i.e, number1 and number2
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
//     }
    
//     addTwoNumbers(10,3)
//now function will  show result "13" which is sum of both above numbers.there  are different way to  call a function as below
 
function addTwoNumbers(number1,number2){
     //console.log(number1+number2)
     let result=number1+number2
     return result
    }
    
    //const result=addTwoNumbers(10,3)
    // console.log('Result:',result)

// we can return values without declaring variable "result"

function addTwoNumbers(number1,number2){
    //console.log(number1+number2)
    //let result=number1+number2
    return result=number1+number2
   }
   
   const result1=addTwoNumbers(13,5)
//    console.log('Result:',result,'of two number')


//example#2

function userloggedinmessage(user){
    return`${user} just logged in`
}
console.log(userloggedinmessage('Ghulam Nabi'))