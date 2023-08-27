//Random number generator with delay and progress indication

let delay=3
let waitTime =setInterval(numberGenerator,1000);
function numberGenerator(){
    console.log("time remaining: ",delay," seconds");
    delay--;
    if(delay<0){
        clearInterval(waitTime)
        let randomNumber=Math.floor(Math.random())+1
        console.log("Random number is",randomNumber);
    }
}