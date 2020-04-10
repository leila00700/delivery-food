const cartbutton = document.querySelector("#cart-button");
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

cartbutton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

new wow().init();