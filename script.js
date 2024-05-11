// headerLink.classList.toggle('hiden')  -- тут задається подія 

const headerLink = document.querySelector('.header__ul')
const headerMenu = document.querySelector('.icon-menu')

headerMenu.addEventListener('click' ,  () => headerLink.classList.toggle('_active'))

