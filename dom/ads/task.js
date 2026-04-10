const cards = Array.from(document.querySelectorAll('.card'));

cards.forEach((card) => {
    const rotatorCase = Array.from(card.querySelectorAll('.rotator__case'));

    const change = () => {
        const active = card.querySelector('.rotator__case_active');
        let next = active.nextElementSibling;
        if (next === null) {
            next = rotatorCase[0];
        }
        active.classList.remove('rotator__case_active');
        next.classList.add('rotator__case_active');
        next.style.color = next.dataset.color;
        const speed = next.dataset.speed;
        setTimeout(change, speed);
    }

    change();
})