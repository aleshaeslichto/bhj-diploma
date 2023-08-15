/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    let url = options.url;

    if (options.method === "GET" && options.data) {
        const params = new URLSearchParams();
        Object.entries(options.data).forEach(([key, value]) =>
            params.append(key, value)
        );
        url += `?${params.toString()}`;
    }

    xhr.onload = () => {
        let response = xhr.response;
        let error = null;
        if (xhr.status >= 400) {
            error = new Error("Ошибка запроса");
        }
        options.callback(error, response);
    };

    xhr.onerror = () => {
        options.callback(new Error("Сетевая ошибка"));
    };

    xhr.open(options.method, url);

    if (options.data && options.method !== "GET") {
        xhr.setRequestHeader("Content-Type", "application/json");
        options.data = JSON.stringify(options.data);
    }

    xhr.send(options.data);
};
