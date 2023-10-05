const array=[0,1,2,3]
const array2=['imm',1,6,true]
/*console.log(array2)
array2.push('ikram')
console.log(array2)
array2.pop()
console.log(array2)
array2.reduce()
*/

//console.log(array2.indexOf(6))
//console.log(array2.includes('imm'))

masterarray=array2.concat(array)
array2.push(array)
//console.log(masterarray)


heroes=['imran','qadirkhan']
worldheroes=['mandela','kingluther']
//worldheroes.push(heroes)
//console.log(worldheroes)

myheroes=worldheroes.concat(heroes)
//console.log(myheroes)

//topheroes=[...heroes,...worldheroes]
//console.log(topheroes)


const student=['immman','mali','sohail']
const teacher=['zaman','zaka']
const subject=['math','english','physics']

const all=[...subject,...teacher,...student]
//console.log(all)


//+++++++++ how to concatenated all nested into single array how many sub array you want to concatenate into main array define depth or simple write infinity which concatenated all arrays++++++++++++
const score=[22,33,55,[15,6,[19,18,22,[99]]]]
const tota=score.flat(Infinity)
//console.log(tota)

//+++++++++++++++++++++++convert other data types into arrays +++++++++++++++

//console.log(Array.isArray('karachi'))

console.log(Array.from('karachi',))