/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AuthForm {
    modalName = "login";

    onSubmit(data) {
        User.login(data, (error, response) => {
            try {
                this.handleResponse(error, response);
                App.getModal(this.modalName).close();
            } catch (error) {
                alert(error);
            }
        });
    }
}
