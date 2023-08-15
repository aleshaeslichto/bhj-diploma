/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
    onSubmit(data) {
        User.register(data, (err, response) => {
            this.element.reset();

            if (response && response.success) {
                App.setState("user-logged");
                App.getModal("register").close();
            } else {
                alert(response.error);
            }
        });
    }
}
