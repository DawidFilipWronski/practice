const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('nav');

burgerBtn.addEventListener('click', function () {
    this.classList.toggle('on');
    this.classList.toggle('jump');
    nav.classList.toggle('on');

})