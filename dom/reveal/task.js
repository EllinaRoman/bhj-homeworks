const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    reveal.forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    })
})