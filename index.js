const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        setInterval(() => {
            let timeS = seconds % 60;
            let timeM = seconds / 60 % 60;
            let timeH = seconds / 60 / 60 % 60;

            timeS <= 0
                ? clearInterval()
                : timerEl.textContent = `${Math.floor(timeH)} : ${Math.floor(timeM)} : ${timeS}`;

            --seconds;

            if(seconds < 0) {
                location.reload();
            }

        }, 1000);
    };
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = parseInt(inputEl.value) * 60;

    animateTimer(seconds);
    
    inputEl.value = '';
    inputEl.disabled = true;
});
