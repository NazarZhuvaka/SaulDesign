// headerLink.classList.toggle('hiden')  -- тут задається подія 

const headerLink = document.querySelector('.header__nav')
const headerBtn = document.querySelector('.header__btn')

headerBtn.addEventListener('click' ,  () => headerLink.classList.toggle('hiden'))