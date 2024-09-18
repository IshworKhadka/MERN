

// --------------Traditional way---------------------

function sum(){
    let sum = 10 + 20
    console.log(sum)
    console.log(10 + 20)
}

function dynamicSum(n1, n2){
    console.log(n1 + n2)
}

dynamicSum(20, 20)

sum()

//NaN- result of numerical operation on non number variable(s)

//Hoisting - Use before defining


// --------------Second way---------------------
//Prefer const over let, var
let sum = function(n1, n2 = 5){
    console.log(n1 + n2)
}

console.log(5)

// --------------Arrow functions---------------------

const sum = (n1, n2 = 5) => {
    return n1 + n2
}
console.log(5)
// const sum = n1 => {}
// const sum = (n1 + n2) => n1 + n2
