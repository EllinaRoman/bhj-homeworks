const deadCount = document.getElementById('dead');
const lostCount = document.getElementById('lost');
let dead = +deadCount.textContent;
let lost = +lostCount.textContent;

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            deadCount.textContent = dead;
            if (dead === 10) {
                alert("Вы победили!");
                dead = 0;
                deadCount.textContent = dead;
                lost = 0;
                lostCount.textContent = lost;
            };
        } else {
            lost++;
            lostCount.textContent = lost;
            if (lost === 5) {
                alert("Вы проиграли!");
                lost = 0;
                lostCount.textContent = lost;
                dead = 0;
                deadCount.textContent = dead;
            }
        };
    }
}