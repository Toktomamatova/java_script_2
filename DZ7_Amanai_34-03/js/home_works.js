// HomeWork 1 (PART 1) ✉✉✉
const validateGmail = (gmail) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(gmail);
}

const gmailInput = document.getElementById('gmail_input');
const gmailResult = document.getElementById('gmail_result');
const gmailButton = document.getElementById('gmail_button');

gmailButton.addEventListener('click', () => {
    const gmail = gmailInput.value.trim();
    if (validateGmail(gmail)) {
        gmailResult.textContent = 'Gmail is correct';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Gmail is incorrect';
        gmailResult.style.color = 'red';
    }
});

//HomeWork 1 (PART 2) ✦✦✦
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
let currentPositionX = 0, currentPositionY = 0, isMoving = false, direction = 0;

const moveBlock = () => {
    const step = 5, maxX = parentBlock.offsetWidth - childBlock.offsetWidth, maxY = parentBlock.offsetHeight - childBlock.offsetHeight;
    if (!isMoving) {
        isMoving = true;
        currentPositionX += (direction === 0) ? step : (direction === 2) ? -step : 0;
        currentPositionY += (direction === 1) ? step : (direction === 3) ? -step : 0;
        if (currentPositionX >= maxX || currentPositionX <= 0 || currentPositionY >= maxY || currentPositionY <= 0) direction = (direction + 1) % 4;
        childBlock.style.left = currentPositionX + 'px';
        childBlock.style.top = currentPositionY + 'px';
        setTimeout(() => { isMoving = false; moveBlock(); }, 8);
    }
};

document.addEventListener('DOMContentLoaded', moveBlock);

//HomeWork 2 ↺↺↺
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let intervalId;
let seconds = 0;

function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        seconds++;
        secondsDisplay.textContent = seconds;
    }, 250);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    secondsDisplay.textContent = seconds;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

