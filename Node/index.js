// //importing using Common JS
// const User = require('./user.js')
// const Person = require('./user.js')  //creating alias for User class

// //importing multiple properties, and creating alias for funcE
// const { funcA, funcB, funcC, funcE : fxE } = require('./functions.js') 

//importing using ES Module or ESM  for single property
import User from './user.js'
import Person from './user.js'  // create alias for User class
//example of importing multiple properties, and alias using ES Module or ESM 
import { funcA, funcB, funcF as fxF } from './functions.js'



const user = new User('User A', 22, 'Location A')

const person = new Person('Person A', 23, 'Location B')

console.log(user)
console.log(person)

console.log(funcA())
console.log(funcB())
// console.log(funcC())
// console.log(fxE())
console.log(fxF())


//import ES module in project -> npm init -y