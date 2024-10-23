//------------TASk -> BUS TICKET ---------------------------

var gotTicket = false

const buyTicket = (callMeAfterBuyingTicket) => {
    console.log('Purchasing ticket. Please hold for a while......')
    setTimeout(() => {
        if(Math.random() > 0.5){
            gotTicket = true
            console.log('You have purchased ticket')
        } else{
            gotTicket = false
            console.log('Sorry, No ticket available at the moment')
        }
        callMeAfterBuyingTicket()
    }, 3000);
}

const boardOnBus = () => {
    console.log('Checking Ticket.........')
    if(gotTicket){
        console.log('You are welcome onboard')
    } else{
        console.log('You are not allowed to board on bus')
    }
    console.log('Bus started')
}

buyTicket(boardOnBus)