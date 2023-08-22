/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {

    const { url, method, callback } = options;

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    const isGet = method.toUpperCase() === "GET";

    function getGetData() {
        const data = options.data || {};
        if (!data) {
            return null;
        }

        let params = "";
        Object.keys(data).forEach((key) => {
            params += `${key}=${data[key]}&`;
        });

        return params.slice(0, -1);
    }

    function getNonGetData() {
        const data = options.data || {};
        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        return formData;
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

    const requestData = isGet ? getGetData() : getNonGetData();

    xhr.send(requestData); // отправка запроса
};
