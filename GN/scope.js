// Scope in JavaScript refers to the visibility of variables and functions and denoted by {}. The scope of a variable or function determines where in your code it can be accessed.like we take following three variables with different style each has its pros and cosn
//if we declare a variable with var then it will create problems outeside the scope 

// let a=20
// const b=10
// var c=100
// console.log(a)
// console.log(b)
// console.log(c)

// suppose we  have two values of same variable but one value is 20 which is outside of scope (global scope) that we can print inside scope as well outside of scope{}
// as shown below and other is 30 which is inside the scope which can only be acccessed from inside of scope{} by console.log when attempted to access from outside of scope it willl print "a is not defined"
//let a=20
if(true){

    // let a=30
    console.log(a)
}
// console.log(a)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//
if(true){

    let a=30
   // console.log(a)
}
console.log(a)
