const { response } = require("express");

/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
    static URL = "/user";

    static setCurrent(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    /**
     * Удаляет информацию об авторизованном
     * пользователе из локального хранилища.
     * */
    static unsetCurrent() {
        return JSON.parse(localStorage.getItem("user"));
    }

    /**
     * Возвращает текущего авторизованного пользователя
     * из локального хранилища
     * */
    static current() {
        localStorage.removeItem("user");
    }

    /**
     * Получает информацию о текущем
     * авторизованном пользователе.
     * */
    static fetch(callback) {
        createRequest({
            url: `${this.URL}/current`,
            method: "GET",
            callback: (err, response) => {
                if (response.success) {
                    this.setCurrent(response.user);
                } else {
                    this.unsetCurrent();
                }
                callback(err, response);
            },
        });
    }

    /**
     * Производит попытку авторизации.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static login(data, callback) {
        createRequest({
            url: `${this.URL}/login`,
            data,
            method: "POST",
            callback,
        });
    }

    /**
     * Производит попытку регистрации пользователя.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static register(data, callback) {
        createRequest({
            url: `${this.URL}/register`,
            data,
            method: "POST",
            callback,
        });
    }

    /**
     * Производит выход из приложения. После успешного
     * выхода необходимо вызвать метод User.unsetCurrent
     * */
    static logout(callback) {
        createRequest({
            url: `${this.URL}/logout`,
            method: "POST",
            callback: () => {
                this.unsetCurrent();
                callback();
            },
        });
    }
}
