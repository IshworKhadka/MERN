
///*****Conditional operator
let n = 10

if(n > 10){
    console.log('Greater')
}
//skips checking for others if one condition is met
else if (n < 10){
    console.log('Lesser')
}
else{               //else is optional
    console.log('Equals')
}

///*****Logic operators -->  && || ?:
let m = 14

if(m > 10 && m % 2 == 0){
    console.log('Yes')
}   
else{
    console.log('No')
}

console.log(m % 2 == 0 ? 'Even' : 'Odd' )

console.log('After condition')


///*****Switch Case

let color = 'red'
switch(color){
    case 'red':
        console.log('Apple')
        //break             //If this is commented, The behavior of swith case
                            //(stop checking conditions once one condition is met) 
                            //will continue until the end or the break is met

    case 'yellow':
        console.log('Banana')
        break

    case 'green':
        console.log('Grapes')
        break

    case 'purple':
        console.log('Beetroot')
        break

    default:
        console.log('No fruit found')
}