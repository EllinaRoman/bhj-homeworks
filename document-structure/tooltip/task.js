const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();

        const noTooltip = document.querySelector('.tooltip');
        if (noTooltip) {
            const isSame = el.nextElementSibling === noTooltip;
            noTooltip.remove();

            if (isSame) {
                return;
            }
        }

        const tooltip = document.createElement('div');
        tooltip.innerText = el.getAttribute('title');
        tooltip.classList.add('tooltip_active');
        tooltip.classList.add('tooltip');
        el.insertAdjacentElement('afterend', tooltip);
        const position = el.dataset.position;
        const rect = el.getBoundingClientRect();
        let top;
        let left;
        if (position === 'top') {
            top = rect.top + window.scrollY - tooltip.offsetHeight;
            left = rect.left;
        } else if (position === 'left') {
            top = rect.top + window.scrollY;
            left = rect.left - tooltip.offsetWidth;
        } else if (position === 'right') {
            top = rect.top + window.scrollY;
            left = rect.right;
        } else {
            left = rect.left;
            top = rect.bottom + window.scrollY;
        }
        Object.assign(tooltip.style, {
            left: left + 'px',
            top: top + 'px',
        })
    })

});