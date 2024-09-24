// primary operator

function PyramidMaker(num){

    for(let i = 1; i <= num; i++){
        var row = '';
        for (let j = 1; j <= i; j++) {
            row += `${j} `
        }
        console.log(row)
    }
}

var ReversePyramidMaker = function(num){
    for (let i = num; i > 0; i--) {
        var row = '';
        for (let j = i; j > 0 ; j--) {
             row += `${j} `
        }
        console.log(row)
    }
}



PyramidMaker(10)
ReversePyramidMaker(10)


