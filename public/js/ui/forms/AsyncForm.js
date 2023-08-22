/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
    /**
     * Если переданный элемент не существует,
     * необходимо выкинуть ошибку.
     * Сохраняет переданный элемент и регистрирует события
     * через registerEvents()
     * */
    constructor(element) {
        if (!element) {
            throw new Error("AsyncForm error: Параметр element не задан");
        }
        this.element = element;
        this.registerEvents();
    }

    /**
     * Необходимо запретить отправку формы и в момент отправки
     * вызывает метод submit()
     * */
    registerEvents() {
        this.element.onsubmit = (e) => {
            e.preventDefault();
            this.submit();
        };
    }

    /**
     * Преобразует данные формы в объект вида
     * {
     *  'название поля формы 1': 'значение поля формы 1',
     *  'название поля формы 2': 'значение поля формы 2'
     * }
     * */
    getData() {
        const formData = new FormData(this.element);
        const keyValue = {};
        for (let item of formData.entries()) {
            const key = item[0];
            const value = item[1];
            keyValue[key] = value;
        }
        return keyValue;
    }

    onSubmit(options) {}

    submit() {
        this.onSubmit(this.getData());
    }

}