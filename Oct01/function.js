
const funcA = () => 'in A'
const funcB = () => 'in B'
const funcC = () => 'in C'
const funcD = () => 'in D'

//LESSION: Export using CJS 
//Exports in a single statement
module .exports  = { funcA, funcB, funcC, funcD }

//LESSION: Exports using ESmodule
//1st approach FOR named export (multiple export)
export {funcA, funcB, funcC, funcD}



