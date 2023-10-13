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

//now you can call/execute code by write function name which is "myName" in our case 
// myName()
//remember only "myName" text is called function reference, and it will not execute as shown below .but when we add bracketes "()"" then it will be called as shown above
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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>>>>>>>>>
//method#1
function addTwoNumbers(number1,number2){
     //console.log(number1+number2)
     let result=number1+number2
     return result
    }
    
    //const result=addTwoNumbers(10,3)
    // console.log('Result:',result)

// we can return values without declaring variable "result"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>>>>>>>>>
//method#2
function addTwoNumbers(number1,number2){
    //console.log(number1+number2)
    //let result=number1+number2
    return result=number1+number2
   }
   
   const result1=addTwoNumbers(13,5)
//    console.log('Result:',result,'of two number')

//-------------------------------------------------------------------------------->>>>
//example#2

function userloggedinmessage(user){
    return`${user} just logged in`
}
// console.log(userloggedinmessage('Ghulam Nabi'))

 function display (error){
    return`server is not resoonding due to ${error}`
 }
//  console.log(display('link down'))

 function display (error){
    if(error===undefined){
        console.log('please define veriable first')
        return('---');
    }
    return`${error} due to weather condition`}
    // console.log(display())

    //rest operator and 

   function calculateCartItems(...num1)
    {
        return num1
    }

// console.log (calculateCartItems(5,140,50,5000))     

const myprof={
    username:'Ghulam Nabi',
    userage:29
}
// console.log(typeof myprof)

function returnobje(objprofile)
{
    console.log(`the new username is ${objprofile.username} and he is ${objprofile.userage} old`)
}
// console.log(returnobje(myprof))
// returnobje(myprof)

ObjArray=[200,300,500]
console.log(ObjArray)

object1={
   
    name1:'GN',
    cellnumber:'03053258458',
    location:'karachi'
}
// console.log(object1)

function complaint(customerdata){
    console.log(`some customer complains about service ie ${customerdata.name1} and he lives in ${customerdata.location} contact him at ${customerdata.cellnumber} `)
}
//  complaint({name1:'GN',
//  cellnumber:'03053258458',
//  location1:'karachi',
//  location2:'lahore'})

// complaint(object1)


function arraycall(list){
    console.log(`the incorrect prices  are ${list} `)
}
arraycall(ObjArray)