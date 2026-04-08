// const timer = document.getElementById('timer');
// const interval =  setInterval(() => {
//     timer.textContent = +timer.textContent - 1;
//     if (+timer.textContent === 0) {
//             clearInterval(interval);
//             alert("Вы победили в конкурсе!");
//     }
//     }, 1000)


const timer = document.getElementById('timer');
const link = document.getElementById('downloadLink');
let [hours, minutes, seconds] = timer.textContent.split(':').map((el) => +el);
const format = (num) => {
    return num < 10 ? '0' + num : num;
};
const interval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
        minutes--;
        seconds = 59;
    };
    if (minutes < 0) {
        hours--;
        minutes = 59;
    };

    timer.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
        link.click();
    };
}, 1000)
