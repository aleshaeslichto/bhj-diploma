/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AuthForm {
    modalName = "register";

    onSubmit(data) {
        User.register(data, (error, response) => {
            try {
                this.handleResponse(error, response);
                App.getModal(this.modalName).close();
            } catch (error) {
                alert(error);
            }
        });
    }
}
