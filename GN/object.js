
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

//myProfile['age']=35
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


//console.log(greeting2())


// declare object by two singleton and non singleton method

const mypr={
id:12,
userfullname:{
fullname:{first:'gn',
last:'mahar'
}

}


}

const activity={
    lastlog:'monday',
active:1}
const profile=Object.assign(mypr,activity)
//console.log(profile)

//************* */

hisName={}
//console.log(hisName)


//--------------------------------------object concatenated by spread methods ------------------

const obj1={
    id1:1,name:'a'
}
const obj2={
   id2:11,name:'b'
}
const obj3={
    id3:10,name:'c'
}

// const obj4={obj1,obj2,obj3}
// console.log(obj4)

const obj5={...obj1,...obj2,...obj3}
// console.log(obj5)

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color1: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//  console.log(myUpdatedVehicle)

P1={name:'b',age1:20}
P2={name1:'babcabdhvb',age2:55}
p3={name2:'dnfbad',age3:85}

pro=Object.assign({},P1,P2,p3)
// console.log(pro)
pro1={...{},...P1,...P2,...p3}
console.log(pro1)