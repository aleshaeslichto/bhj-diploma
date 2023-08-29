/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    let { url, method, callback } = options;

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    let formData = new FormData();

    if (method.toUpperCase() === "GET") {
        url = url.concat('?', new URLSearchParams(options.data).toString());
    } else {
        for (let key in options.data) {
            formData.append(key, options.data[key]);
        }
    }

    xhr.open(method, url); // инициализация запроса

    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(null, xhr.response);
        } else {
            callback("Ошибка: проблема с отправкой запроса", {});
        }
    };

    xhr.onerror = () => {
        callback(new Error("Ошибка: проблема с сетью"));
    };

    xhr.send(formData); // отправка запроса
};
