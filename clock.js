let hoursIndicator = document.getElementById('hours-indicator-holder')
let secIndicator = document.getElementById('sec-indicator-holder')
let minIndicator = document.getElementById('min-indicator-holder')

let secTick = 0
let hoursTick = 0
let minTick = 0
let time = 1000
let clockSpeed = time * 10

function setInitTime(seccond , minute , hour){
    secTick = seccond * (360/60)
    minTick = minute * (360/60)
    hoursTick = hour * (360/12)
    hoursIndicator.style.transform = `rotate(${hoursTick}deg)`
    minIndicator.style.transform = `rotate(${minTick}deg)`
    secIndicator.style.transform = `rotate(${secTick}deg)`
}

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



setInitTime(15,45,13)
setInterval(() => {
    clockAction()
    
}, 1000);



















