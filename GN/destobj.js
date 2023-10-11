const course={
coursename:'js in urdu',
courseFee:999,
coursetime:'5days',
}
//you can print any property by following two methods
//  console.log(course.coursename)
//  console.log(course['coursename'])


//if a value is multiple time is need to be used then you have to use different methods make lengthy propety name syntactic sugar
//  console.log(course.coursename)
// const{courseFee:fee}=course
// console.log(fee)


//example#2

vehicle={name:'lancruiser',
model:2009,
manufacturername:'Toyota'}
// console.log(vehicle.manufacturername)

const{manufacturername:maker}=vehicle
// console.log(maker)


//example#3
studentRecord={
name:'imaaan',
class:'9th',
score:98,
ssudentstaus:'pass'

// }
// console.log(studentRecord.class)

//const{ssudentstaus:st}=studentRecord
// console.log(st)

