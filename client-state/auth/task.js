const form = document.querySelector('form');
const userId = document.querySelector('#user_id');
const welcome = document.querySelector('#welcome');
const signin = document.querySelector('#signin');
const remove = document.querySelector('.remove');

if (localStorage.getItem('userId')) {
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('userId');
    signin.classList.remove('signin_active')
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const login = form.elements.login;
    const password = form.elements.password;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`login=${login.value}&password=${password.value}`);
    xhr.onreadystatechange = () => {
        if (xhr.status >= 200 && xhr.status <= 300 && xhr.readyState === XMLHttpRequest.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.setItem('userId', response.user_id);
                welcome.classList.add('welcome_active');
                userId.textContent = response.user_id;
                signin.classList.remove('signin_active')
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
    login.value = '';
    password.value = '';
})

remove.addEventListener('click', () => {
    localStorage.removeItem('userId');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    userId.textContent = '';
})

