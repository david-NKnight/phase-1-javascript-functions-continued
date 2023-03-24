function saturdayFun(activity = "roller-skate") {  
    return `This Saturday, I want to ${activity}!`;    
}
console.log(saturdayFun());

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork("This Saturday, I want to bathe my dog!"));

function wrapAdjective(symbol = "*") {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }

}