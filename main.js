let timer_el = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timer;
let sec = 0;
let min = 0;
let hor = 0;

startBtn.addEventListener('click', () => {
   timer = setInterval(timerHandler, 1000);
})

stopBtn.addEventListener('click', () => {
   timer = clearInterval(timer);
})

resetBtn.addEventListener('click', () => {
   stop();
   sec = 0;
   timer = clearInterval(timer);
   timer_el.innerText = "00:00:00";
})
function timerHandler() {
   sec++;
   if (sec == 60) {
      sec = 0;
      min++;
   }

   if (min == 60) {
      min = 0;
      hor++;
   }
   displayTime();
}

function displayTime() {
   let sec_el =sec;
   let min_el =min;
   let hour = hor;
   let time = document.getElementById("timer");
   if (sec< 10) {
      sec_el = "0" + sec;
   }
   if (min< 10) {
      min_el = "0" + min;
   }
   if (hor< 10) {
      hour = "0" + hor;
   }
   time.innerText = hour + ":" + min_el + ":" + sec_el;
}