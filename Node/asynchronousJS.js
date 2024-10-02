

var ticket = false

// const getTicket = () => {
//     setTimeout(() => {
//         if(Math.random() > 0.5){
//             ticket = true
//             console.log('Got Ticket')
//         } else {
//             ticket = false
//             console.log('Housefull')
//         }
//     },  2000);
// }

const enterCinema = () => {
    if(ticket){
        console.log('Watching Movie')
    } else { 
        console.log('No Entry')
    }

    console.log('Movie Ended')
}

// getTicket()
// enterCinema()


//to handle asynchronous javascript -> callback function (closure), Promise

const getTicket = callback => {
       setTimeout(() => {
        if(Math.random() > 0.5){
            ticket = true
            console.log('Got Ticket')
        } else {
            ticket = false
            console.log('Housefull')
        }

        callback()
    },  2000);
}

getTicket(enterCinema) //named function, used in resuable case
            //anonymous function, used when it is used only once instead of creating a named function

