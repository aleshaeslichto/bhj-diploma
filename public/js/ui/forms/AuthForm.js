/**
 * Класс AuthForm предоставляет механизм обработки запроса для авторизационных форм
 **/
class AuthForm extends AsyncForm {
    handleResponse(error, response) {
        if (error) {
            throw error;
        } else if (response && response.success) {
            this.element.reset();
            App.setState("user-logged");
        } else {
            throw new Error("Ошибка: " + response.error);
        }
    }
}