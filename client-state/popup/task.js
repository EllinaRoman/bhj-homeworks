const modal = document.querySelector('#subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

if (document.cookie.indexOf('modalClosed=true') != -1) {
    modal.classList.remove('modal_active');
} else {
    modal.classList.add('modal_active');
}

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = "modalClosed=true";
})