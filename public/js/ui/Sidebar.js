/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {

    static init() {
        this.initAuthLinks();
        this.initToggleButton();
    }

    static initToggleButton() {
        const sidebarButton = document.querySelector(".sidebar-toggle");
        const body = document.querySelector("body");
        sidebarButton.addEventListener("click", (e) => {
            body.classList.toggle("sidebar-open");
            body.classList.toggle("sidebar-collapse");
        });
    }

    static initAuthLinks() {
      const {registerButton, loginButton, logoutButton} = {
        registerButton: document.querySelector('.menu-item_register'),
        loginButton: document.querySelector('.menu-item_login'),
        logoutButton: document.querySelector('.menu-item_logout'),
      };

      registerButton.addEventListener('click', (e) => {
        App.getModal('register').open();
      });

      loginButton.addEventListener('click', (e) => {
        App.getModal('login').open();
      });

      logoutButton.addEventListener('click', (e) => {
        User.logout((error, response) => {
          if (error) {
            console.error(error);
            return;
          }

          if (response && response.succes) {
            App.setState('init');
          }
        });
      });
    }
}
