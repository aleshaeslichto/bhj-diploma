/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
    constructor(element) {
        if (!element) {
            throw new Error("TransactionsPage: Не найден элемент");
        }

        this.element = element;
        this.registerEvents();
    }

    /**
     * Вызывает метод render для отрисовки страницы
     * */
    update() {
        if (this.lastOptions) {
            this.render(this.lastOptions);
        }
    }

    /**
     * Отслеживает нажатие на кнопку удаления транзакции
     * и удаления самого счёта. Внутри обработчика пользуйтесь
     * методами TransactionsPage.removeTransaction и
     * TransactionsPage.removeAccount соответственно
     * */
    registerEvents() {
        document.querySelector(".remove-account").onclick = () => {
            this.removeAccount();
        };
        document.querySelector(".content").onclick = (event) => {
            if (event.target.classList.contains("transaction__remove")) {
                this.removeTransaction(event.target.dataset["id"]);
            } else {
                if (event.target.closest(".transaction__remove")) {
                    this.removeTransaction(
                        event.target.closest(".transaction__remove").dataset[
                            "id"
                        ]
                    );
                }
            }
        };
    }

    /**
     * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
     * Если пользователь согласен удалить счёт, вызовите
     * Account.remove, а также TransactionsPage.clear с
     * пустыми данными для того, чтобы очистить страницу.
     * По успешному удалению необходимо вызвать метод App.updateWidgets() и App.updateForms(),
     * либо обновляйте только виджет со счетами и формы создания дохода и расхода
     * для обновления приложения
     * */
    removeAccount() {}

    /**
     * Удаляет транзакцию (доход или расход). Требует
     * подтверждеия действия (с помощью confirm()).
     * По удалению транзакции вызовите метод App.update(),
     * либо обновляйте текущую страницу (метод update) и виджет со счетами
     * */
    removeTransaction(id) {}

    /**
     * С помощью Account.get() получает название счёта и отображает
     * его через TransactionsPage.renderTitle.
     * Получает список Transaction.list и полученные данные передаёт
     * в TransactionsPage.renderTransactions()
     * */
    render(options) {}

    /**
     * Очищает страницу. Вызывает
     * TransactionsPage.renderTransactions() с пустым массивом.
     * Устанавливает заголовок: «Название счёта»
     * */
    clear() {}

    /**
     * Устанавливает заголовок в элемент .content-title
     * */
    renderTitle(name) {}

    /**
     * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
     * в формат «10 марта 2019 г. в 03:20»
     * */
    formatDate(date) {}

    /**
     * Формирует HTML-код транзакции (дохода или расхода).
     * item - объект с информацией о транзакции
     * */
    getTransactionHTML(item) {}

    /**
     * Отрисовывает список транзакций на странице
     * используя getTransactionHTML
     * */
    renderTransactions(data) {}
}
