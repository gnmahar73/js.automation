
mysymbole=Symbol('my-symbol')

/*const myProfile={
    name:'gn',
    age:25,
    'lastname':'Mahar',
    email:'gnmahar@google.com',
    isActive:0,
    'muslim':'yes',
    [mysymbole]:'my-symbol'
}
//how to access object :by two ways you can access object 1.by dot(.) method and by 2. square brackets 
/*console.log(myProfile.lastname)
console.log(myProfile['email'])
console.log(myProfile.name)
console.log(myProfile.muslim)
console.log(typeof myProfile.isActive)
*/
//console.log( mysymbole)
//console.log(typeof myProfile[mysymbole])

myProfile['age']=35
//console.log(myProfile)

// we can freeze object so no one can change values in object

//Object.freeze(myProfile)
//myProfile.isActive=1
//console.log(myProfile)

// add greeting function in object

/*myProfile.greeting1=function greeting() {
    console.log('good morning')
    }

//console.log(myProfile.greeting1()) */

greeting2=function greeting(){
    this.name='Imran';
    this.age=36;
    this.email='imram@gmail.com'
    console.log(`hello i am ${this.name} and iam  ${this.age} old but you can contact me at ${this.email} to confirm my acrual profile `)
}


console.log(greeting2())



