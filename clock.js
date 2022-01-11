let hoursIndicator = document.getElementById('hours-indicator-holder')
let clockWall = document.getElementById('stop-watch')
let secIndicator = document.getElementById('sec-indicator-holder')
let minIndicator = document.getElementById('min-indicator-holder')
let hoursInput = document.getElementById('hours-input')
let minInput = document.getElementById('min-input')
let secInput = document.getElementById('sec-input')
let setBtn = document.getElementById('input-button')
let hoursTicker = document.getElementById('hours-indicator')
let minTicker = document.getElementById('min-indicator')
let secTicker = document.getElementById('sec-indicator')

let secTick = 0
let hoursTick = 0
let minTick = 0
let time = 1000
let clockSpeed = time * 10

let date = new Date()
function amOrPm(){
    if (date.getHours()>12) {
        document.getElementById('am-pm').innerText = 'PM'
    }
    if (date.getHours()<12) {
        document.getElementById('am-pm').innerText = 'AM'
    }
}


clockWall.addEventListener('mouseover', ()=>{
    clockWall.style.backgroundColor= 'yellowGreen'
})
clockWall.addEventListener('mouseout', ()=>{
    clockWall.style.backgroundColor= 'black'
})
function setTime(hours,minutes,secconds){
    let ampm = document.getElementById('am-pm')
    for(let arg in arguments){
        if (!arg/3) {
            arg = 0
        }
    }
    if (hours>12) {
        hours = hours%12 
    }
    if (hours ==12 && ampm.innerText == 'AM') {
        hours = 0
    }
    let s = 360/60
    let m = s
    let h = 360/12
    hoursTick = hours*h-360/24
    minTick = minutes*m
    secTick = secconds*s
    hoursIndicator.style.transform = `rotate(${hours*h}deg)`
    minIndicator.style.transform = `rotate(${minutes*m}deg)`
    secIndicator.style.transform = `rotate(${secconds*s}deg)` 
}
function action(){
    secTick += 6
    minTick += 0.1
    hoursTick += 0.00833333
    if (secTick >=360) {
        secTick = 0
    }
    if (minTick >360) {
        minTick = 0
    }
    if (hoursTick >360) {
        hoursTick = 0
    }



}
/* function currentTime(ch,cm,cs){
    secTick = (360/60)*cs
    minTick = (360/60)*cm
    hoursTick = (360/60)*ch
    hoursIndicator.style.transform = `rotate(${hoursTick}deg)`
    minIndicator.style.transform = `rotate(${minTick}deg)`
    secIndicator.style.transform = `rotate(${secTick}deg)` 

} */
setTime(date.getHours(),date.getMinutes(),date.getSeconds())
//currentTime(date.getHours(),date.getMinutes(),date.getSeconds())
setBtn.onclick= ()=>{setTime(hoursInput.value,minInput.value,secInput.value)
console.log(true)
}
amOrPm()

setInterval(() => {
    amOrPm()
    action()
    hoursIndicator.style.transform = `rotate(${hoursTick}deg)`
    minIndicator.style.transform = `rotate(${minTick}deg)`
    secIndicator.style.transform = `rotate(${secTick}deg)`
    console.log(Math.floor(hoursTick/24) , Math.floor(minTick/6) , secTick/6)
    console.log(date.getHours())




}, 1000);

/* setBtn.onclick = function (){

    let sec = parseInt(secInput.value)
    let min = parseInt(minInput.value)
    let hours = parseInt(hoursInput.value)

    setInitTime(sec,min,hours)

     setInterval(() => {
         clockAction()
         if (secInput.value == 59) {
             secInput.value = 0
             minInput.value = parseInt(minInput.value)+1
         }
         if (minInput.value == 59 ) {
            minInput.value = 0
            hoursInput.value = parseInt(hoursInput.value)+1
         }
         if (hoursInput.value  == 12) {
            hoursInput.value = 0
         }
        secInput.value = parseInt(secInput.value) + 1
        
    }, 1000);

}    */ 







