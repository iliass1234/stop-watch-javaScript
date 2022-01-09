
let hoursIndicator = document.getElementById('hours-indicator-holder')
let clockWall = document.getElementById('stop-watch')
let secIndicator = document.getElementById('sec-indicator-holder')
let minIndicator = document.getElementById('min-indicator-holder')
let hoursInput = document.getElementById('hours-input')
let minInput = document.getElementById('min-input')
let secInput = document.getElementById('sec-input')
let setBtn = document.getElementById('input-button')

let secTick = 0
let hoursTick = 0
let minTick = 0
let time = 1000
let clockSpeed = time * 10

 function setInitTime(seccond , minute , hour){
     if(seccond>60 || minute>60 || hour>12){
        seccond = 0
        minute = 0
        hour = 0
         setBtn.innerText = 'invalid time'
         clockWall.style.backgroundColor = 'red'

        setTimeout(() => {
            setBtn.innerText = 'set time'
            clockWall.style.backgroundColor = 'black'
        }, 2000);
     }
     if(seccond<0 || minute<0 || hour<0){
        seccond = 0
        minute = 0
        hour = 0
         setBtn.innerText = 'invalid time'
         clockWall.style.backgroundColor = 'red'

        setTimeout(() => {
            setBtn.innerText = 'set time'
            clockWall.style.backgroundColor = 'black'
        }, 2000);
     }
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



hoursInput.onblur = function(){
    let h = hoursInput.value 
    hoursTick = h * (360/12)
    hoursIndicator.style.transform = `rotate(${hoursTick}deg)`

}
minInput.onblur = function(){
    let h = minInput.value 
    minTick = h * (360/12)
    minIndicator.style.transform = `rotate(${minTick}deg)`

}
secInput.onblur = function(){
    let h = secInput.value 
    secTick = h * (360/12)
    secIndicator.style.transform = `rotate(${secTick}deg)`

}


setBtn.onclick = function (){

    let sec = parseInt(secInput.value)
    let min = parseInt(minInput.value)
    let hours = parseInt(hoursInput.value)


    setInitTime(sec,min,hours)
}



/* setInterval(() => {
    clockAction()
    
}, 10);

 */


