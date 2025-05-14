
/* 
LESSION
JS Standards: CommonJS or CJS & ESModule (EcmaScript Module)

CJS used in node js ONLY
ESModule used BOTH in browser and node js

index.js -> default file. Can run with (node .) instead of node index.js
. means current folder in node . command


*/

//LESSON: Import using CJS
console.log(`-----Import using Common JS-----------`)
const User = require('./user.js')
const user = new User('Ishwor', 34, 'Galkot')
console.log(user)

//Or can have different variable name that can be used to create object. 
// For example
const Person = require('./user.js')
const user2 = new Person('Person A', 16, 'Kathmandu')
console.log(user2)


//Import functions as required. Note multiple functions are exported.
const { funcA, funcD } = require('./function.js')
console.log(funcA())
console.log(funcD())
//In this case, different variable name cannot be used atleast directly.
//const { funcA, fxD } = require('./function.js') doesnt not know which function
//fxD referring to. However,
const { funcB, funcD : fxD } = require('./function.js')
//can be used 
console.log(fxD())



//LESSON: Import using ESModule standard
console.log(`-----Import using EcmaScript-----------`)
import User from './user.js'
const ecmaUser = new User('ECMA User', 25, 'Location A');
console.log(ecmaUser)

//can have different variable name that can be used to create object. 
import Teacher from './user.js'
const teacherA = new Teacher('MERN Teacher', 40, 'Lalitpur')
console.log(teacherA)

//importing for multiples. Also renaming objects
import { funcC, funcD as fxD } from './function.js'
console.log((funcC()))
console.log(fxD())


//LESSON: Enable support for ESModule
/*
  Command: npm init -y
  It generates the configuration file
  Set the type to module. By default it is commonjs
*/

