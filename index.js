const minutesTextElement = document.getElementById('minutes');
const secondsTextElement = document.getElementById('seconds');
const decimalsTextElement = document.getElementById('decimals');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let decimals = 00;
let seconds = 00;
let minutes = 00;
let interval;

decimalsTextElement.innerHTML = '0' + decimals;
secondsTextElement.innerHTML = '0' + seconds;
minutesTextElement.innerHTML = '0' + minutes;

startButton.onclick = function() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

stopButton.onclick = function() {
  clearInterval(interval);
}

resetButton.onclick = function() {
  clearInterval(interval);
  decimals = '00';
  seconds = '00';
  minutes = '00';
  decimalsTextElement.innerHTML = decimals;
  secondsTextElement.innerHTML = seconds;
  minutesTextElement.innerHTML = minutes;
  stopButton.classList.add('disabled');
  resetButton.classList.add('disabled');
}

function startTimer() {
  stopButton.classList.remove('disabled');
  resetButton.classList.remove('disabled');
  decimals++;
  if (decimals < 9) {
    decimalsTextElement.innerHTML = '0' + decimals;
  }
  if (decimals > 9) {
    decimalsTextElement.innerHTML = decimals;
  }
  if (decimals > 99) {
    seconds++;
    secondsTextElement.innerHTML = '0' + seconds;
    decimals = 0;
    decimalsTextElement.innerHTML = '0' + decimals;
  }
  if (seconds > 9) {
    secondsTextElement.innerHTML = seconds;
  }
  if (seconds > 60) {
    minutes++;
    minutesTextElement.innerHTML = '0' + minutes;
    seconds = 0;
    secondsTextElement.innerHTML = '0' + seconds;
  }
  if (minutes > 9) {
    minutesTextElement.innerHTML = '0' + minutes;
  }
}

