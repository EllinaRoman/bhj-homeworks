const xhr = new XMLHttpRequest();
const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

const render = (valute) => {
    items.innerHTML = '';
    Object.entries(valute).forEach((el) => {
            items.insertAdjacentHTML('beforeend', `<div class="item">
            <div class="item__code">
                    ${el[1].CharCode}
                </div>
                <div class="item__value">
                    ${el[1].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`);
        })
}

const save = (valute) => {
    localStorage.setItem('data', JSON.stringify(valute));
}

const load = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (!data) return;

    render(data);
    loader.classList.remove('loader_active');
}
load();

xhr.onreadystatechange = () => {

    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const data = JSON.parse((xhr.responseText));
        const valute = data.response.Valute;
        save(valute);
        console.log(valute);

        render(valute);
        loader.classList.remove('loader_active');
    }
}




