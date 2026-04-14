const progress = document.querySelector('#progress');
const file = document.querySelector('#file');
const form = document.querySelector('#form');

file.addEventListener('change', () => {
    progress.value = 0;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!file.files[0]) return;
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file.files[0]);
    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / e.total;
    }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})


