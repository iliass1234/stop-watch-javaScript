let hoursIndicator = document.getElementById('hours-indicator-holder')
let secIndicator = document.getElementById('sec-indicator-holder')
let minIndicator = document.getElementById('min-indicator-holder')
hoursIndicator.style.transform = 'rotate(1deg)'

let secTick = 0
let hoursTick = 0
let minTick = 0
let time = 1000
let clockSpeed = 1
function clockAction(){    
    hoursTick += 0.0083333
    secTick += 6
    minTick += 0.1

    if(hoursTick===-360){
        hoursTick = 0
    }
    if(minTick===-360){
        minTick = 0
    }
    if(secTick===-360){
        secTick = 0
    }
    hoursIndicator.style.transform = `rotate(${hoursTick}deg)`
    minIndicator.style.transform = `rotate(${minTick}deg)`
    secIndicator.style.transform = `rotate(${secTick}deg)`
}
console.log(Date.prototype)


setInterval(() => {
    clockAction()
    
}, clockSpeed * time);



















