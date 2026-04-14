const editor = document.querySelector('#editor');
const remove = document.querySelector('#remove');

editor.addEventListener('keyup', () => {
    const value = editor.value;
    save(value);
});

const load = () => {
    const data = localStorage.getItem('data');
    if (!data) return;

    editor.value = data;
};
load();

remove.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('data');
})

const save = (value) => {
    localStorage.setItem('data', value);
};

