const fontSize = Array.from(document.querySelectorAll('.font-size'));
const colorText = Array.from(document.querySelectorAll('.book__control_color .color'));
const colorBg = Array.from(document.querySelectorAll('.book__control_background .color'));
const book = document.querySelector('.book');



fontSize.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        book.classList.remove('book_fs-big', 'book_fs-small');
        const active = document.querySelector('.font-size_active');
        const size = el.dataset.size;
        if (active) {
            active.classList.remove('font-size_active');
        }
        el.classList.add('font-size_active');

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    })
})

colorText.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        const active = document.querySelector('.book__control_color .color_active');
        const color = el.dataset.textColor;

        if (active) {
            active.classList.remove('color_active');
        }
        el.classList.add('color_active');

        if (color === 'gray') {
            book.classList.add('book_color-gray');
        } else if (color === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        } else if (color === 'black'){
            book.classList.add('book_color-black');
        }
    })
})


colorBg.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        book.classList.remove('book_bg-gray', 'book_bg-white', 'book_bg-black');
        const active = document.querySelector('.book__control_background .color_active');
        const color = el.dataset.bgColor;

        if (active) {
            active.classList.remove('color_active');
        }
        el.classList.add('color_active');

        if (color === 'gray') {
            book.classList.add('book_bg-gray');
        } else if (color === 'white') {
            book.classList.add('book_bg-white');
        } else if (color === 'black'){
            book.classList.add('book_bg-black');
        }
    })
})
