'use strict'

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //CОБИРАЕТ ДАННЫЕ (method, url, async, login, pass);
    request.setRequestHeader('content-type', 'application/jsson; charset=utf-8') //ЧТО ХОТИМ ПОЛУЧИТЬ
    request.send(); //ОТПРАВЛЯЕМ ЗАПРОС

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Ошибка';
        }
    })
});

