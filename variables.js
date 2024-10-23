
const num1 = 5
console.log(num1)


// var -> Unscoped variable. Not contained within any scope

//let -> Block Scoped variable. Contained within code block. 
//Scope is defined by {}, an opening bracket and closing bracket

var num2 = 15
let num3 = 25

console.log(num2)
console.log(num3)

{
    var num2 = 16 
    let num3 = 26

    console.log(num2)
    console.log(num3)
}

// var num2 = 16  //Two var can exist in same scope, can be redeclared
// let num3 = 26  //Two let cannot exist in same scope

console.log(num2)
console.log(num3)
