/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    static URL = "/account";
    /**
     * Получает информацию о счёте
     * */
    static get(id = "", callback) {
        createRequest({
            url: this.URL + "/" + id, // почему лучше это - чем шаблонка? тк визуально шаблон читается в данной ситуации сложнее...
            method: "GET",
            callback,
        });
    }
}
