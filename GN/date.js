let myDate=new Date()
//console.log(myDate)

//convert date to readible string format.Note that month start from zero 

/*
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())
console.log(myDate.getTimezoneOffset())

*/
//how to know what is type of date method

//console.log(typeof(myDate))

//how to write specific date 

let myCreatedDate=new Date(2023,2-13);
console.log(myCreatedDate)
//convert above date into readible format

console.log(myCreatedDate.toLocaleString()) 
console.log(myCreatedDate.toDateString())


//try in different format like [DD:MM:YYYY]

let newCreatedDate=new Date('12-02-2023');
console.log(newCreatedDate.toLocaleString())
console.log(newCreatedDate.toDateString())

console.log(newCreatedDate.getDay())
console.log(newCreatedDate.getHours())
console.log(newCreatedDate.getFullYear())

console.log(newCreatedDate.toLocaleString('default',{weekday:"long"
}))