const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

const title = document.querySelector('#poll__title');
const answer = document.querySelector('#poll__answers');

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        title.textContent = data.data.title;

        data.data.answers.forEach((el, index) => {
            const btn = document.createElement('button');
            btn.textContent = `${el}`;
            btn.classList.add('poll__answer');
            answer.append(btn);

            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');

                const newXhr = new XMLHttpRequest();
                newXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                newXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                newXhr.send('vote=' + data.id + '&answer=' + index);

                newXhr.onreadystatechange = () => {
                    if (newXhr.readyState === XMLHttpRequest.DONE && newXhr.status >= 200 && newXhr.status < 300) {
                        const newData = JSON.parse(newXhr.responseText);
                        console.log(newData);
                        answer.innerHTML = ``;
                        newData.stat.forEach((el, index) => {
                            answer.innerHTML += `За вариант ${el.answer} проголосовали ${el.votes} участника<br>`
                        })
                    }
                }
            });
        });
    }
}