const sideMenu = document.querySelector('.side-menu')
const cartBtn = document.querySelector('.cart-icon')

cartBtn.addEventListener('click', (e) => {
    sideMenu.classList.toggle('active')
})