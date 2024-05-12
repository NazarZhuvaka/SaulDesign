// headerLink.classList.toggle('hiden')  -- тут задається подія 

const headerLink = document.querySelector('.header__ul')
const headerMenu = document.querySelector('.icon-menu')

headerMenu.addEventListener('click' ,  () => headerLink.classList.toggle('_active'))


const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    //убрати актів у всі
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }
    //добавити активний клас до данного кнопки
    this.classList.add("tab-controls__btn--active");

    // відобразити потрібні товари і hide непотрібні
    for (let product of tabsProducts) {
      //провірка на all
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

  });
}

