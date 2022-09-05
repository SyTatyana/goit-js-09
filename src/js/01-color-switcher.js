const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timeId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', changingColor);
function changingColor(e) {
  timeId = setInterval(() => {
    console.log(timeId);
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (timeId) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

stopBtn.addEventListener('click', stopChangingColor);

function stopChangingColor(e) {
  clearInterval(timeId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  stopBtn.style.backgroundColor = '';
}
