/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
    /**
     * Создаёт счёт с помощью Account.create и закрывает
     * окно в случае успеха, а также вызывает App.update()
     * и сбрасывает форму
     * */
    onSubmit(data) {
        Account.create(data, (err, response) => {
            if (response.succes) {
                const newAccountForm =
                    document.getElementById("new-account-form");
                newAccountForm.reset();

                const modalId = newAccountForm.closest("modal").dataset.modalId;
                App.getModal(modalId).close();

                App.update();
            } else {
                alert(response.error);
            }
        });
    }
}
