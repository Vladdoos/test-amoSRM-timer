const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Анимация timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        let timer = setInterval(function () {
            // Получаем секунды
            let second = seconds % 60
            // Получаем минуты
            let minutes = seconds / 60 % 60
            // Получаем часы
            let hour = seconds / 60 / 60 % 60
            if (seconds === 0) {
                // Таймер удаляется
                clearInterval(timer);
                // Выводит сообщение, что время закончилось
                alert("Время вышло!");
                //Выводит нули
                timerEl.innerHTML = '0:0:0'
            } else {
                // Создаём строку с выводом времени
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${second}`;
                // Выводим строку в блок для показа таймера
                timerEl.innerHTML = strTimer;

            }
            // Уменьшаем таймер
            --seconds;
        }, 1000)

    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', function(e) {
    // Ввод в input только числа
    this.value = this.value.replace(/[^\d.]/g, '');

});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    animateTimer(seconds);
    inputEl.value = '';
});
