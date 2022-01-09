let hoursIndicator = document.getElementById('hours-indicator-holder')
let secIndicator = document.getElementById('sec-indicator-holder')
let minIndicator = document.getElementById('min-indicator-holder')
let time = new Date()
hoursIndicator.style.transform = 'rotate(1deg)'

let secTick = 0
let hoursTick = 0
let minTick = 0

secIndicator.addEventListener("click" , function(event){
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
console.log("     -    ",hoursTick)
})



















