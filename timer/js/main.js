// timer

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let showTime = document.getElementById('showTime');

startBtn.addEventListener('click', beginCounter);
stopBtn.addEventListener('click', stopCounter);
resetBtn.addEventListener('click', resetCounter);

let sec = 0;
let min = 0;
let interval;

function beginCounter() {
  interval = setInterval(count, 1000);
  
  function count(){
    if (sec < 59){
      sec++
    }else{
      sec = 0
      min++
    };
    if (sec <= 9){
        showTime.innerHTML = min+":0"+sec;
    }else{
        showTime.innerHTML = min+":"+sec;
    }
    
  }
}

function stopCounter() {
  clearInterval(interval);
}

function resetCounter() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  showTime.innerHTML = min+":0"+sec;
}

// slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value/10;

slider.oninput = function () {
    output.innerHTML = this.value/10;
}