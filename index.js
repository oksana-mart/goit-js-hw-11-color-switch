const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.body;
const startButton = document.querySelector('button[data-action=start]');
const stopButton = document.querySelector('button[data-action=stop]');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBodyBackgColor() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(1, colors.length)];
}; 

startButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (intervalId) {
    return;   
  };
  startButton.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    setBodyBackgColor() 
  }, 1000);
};
function onStopBtnClick() {
  clearInterval(intervalId);
  intervalId = null;
  startButton.removeAttribute('disabled');
};