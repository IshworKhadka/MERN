

// --------------Traditional way---------------------

function sum(){
    let sum = 10 + 20
    console.log(sum)  
}

sum()        

function dynamicSum(n1, n2){
    console.log(n1 + n2)
}

dynamicSum(20, 20)  //---2


//NaN- result of numerical operation on non number variable(s)

//Hoisting - Use before defining

// --------------Second way---------------------
//Prefer const over let, var
let secondSum = function(n1, n2 = 5){
    console.log(n1 + n2)
}

secondSum(3)   //---3

// --------------Arrow functions---------------------

const sumArrow = (n1, n2 = 5) => {
    return n1 + n2
}
console.log("Adding using arrow function: " + sumArrow(5))     //----4
// const sum = n1 => {}
// const sum = (n1 + n2) => n1 + n2


// -------SUBSTRACTION 

function substraction(num1, num2){
    return num2 - num1
}

console.log("Substraction using Method 1: " + substraction(3,10))   //----5

//-----MULTIPLICATION

let multiply = function(num1, num2){
    return num1 * num2
}

console.log("Multiplication using Method 2: " + multiply(2 , 5))  //-----6

//-----Division

const division = (num1, num2) => console.log("Division using Arrow function: " + num2 / num1)

division(7, 14)   //-----7




