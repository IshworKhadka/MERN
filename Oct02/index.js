
var ticket = false
const getTicket = () => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            ticket = true;
            console.log('Got ticket')
        }
        else{
            ticket = false;
            console.log('Housefull')
        }
    }, 5000);
}

const enterCinema = () => {
    if(ticket){
        console.log('Watching movie')
    } else{
        console.log('No Entry')
    }

    console.log('Movie Ended')
}

getTicket()
enterCinema()

//LESSION: CALLBACK FUNCTION OR CLOSURE
//One of many usage is to synchronise the code

const getMovieTicket = closure => {
     setTimeout(() => {
        if(Math.random() > 0.5){
            ticket = true;
            console.log('Got Movie ticket')
        }
        else{
            ticket = false;
            console.log('Movie Housefull')
        }

        closure()

    }, 5000);

}

getMovieTicket(enterCinema)  //LESSION: can pass named function or anonymous function 
/* 
    Not getMovieTicket(enterCinema()) because this will RUN the enterCinema 
    function first and then pass its result to getMovieTicket function as param   
*/