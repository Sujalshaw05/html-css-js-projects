

const start=document.getElementById("start")
const reset=document.getElementById("reset")
const stop=document.getElementById("stop")
const timer=document.getElementById("timer")

let interval
let timeleft=1500;
function updateTimer() {
    let minutes=Math.floor(timeleft/60);
    let second= timeleft%60;
    let formateedtime =`${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`;
    timer.innerHTML=formateedtime;
}
function startTimer() {
    interval=setInterval(()=>{
         timeleft--;
         updateTimer();
         if(timeleft==0){
            clearInterval(interval)
            alert("time's up");
            timeleft=1500
            updateTimer();
         }
    },1000)
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    clearInterval(interval)
    timeleft=1500
    updateTimer()
}
start.addEventListener("click",startTimer)
stop.addEventListener("click",stopTimer)
reset.addEventListener("click",resetTimer)