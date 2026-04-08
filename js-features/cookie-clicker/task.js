const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let count = +counter.textContent;
let isBig = false;
let lastClickTime = null;
cookie.onclick = () => {
    count++;
    counter.textContent = count;

    if (isBig) {
        cookie.width -= 50;
        cookie.height -= 50;
    } else {
        cookie.width += 50;
        cookie.height += 50;
    }

    isBig = !isBig;

    const now = new Date();
    if (!lastClickTime) {
        lastClickTime = now;
        return;
    }
    const diff = now - lastClickTime;
    speed.textContent = (1000 / diff).toFixed(2);

    lastClickTime = now;

}

