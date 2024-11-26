let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedTime % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.onclick = () => {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;

        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
};

stopButton.onclick = () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
};

resetButton.onclick = () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
};