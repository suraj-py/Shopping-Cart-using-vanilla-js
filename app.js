const toggleButton = document.querySelector('.toggle_btn');
const sideCart = document.querySelector('.side_menu');

toggleButton.addEventListener('click', () => {
    sideCart.classList.toggle('open');
})