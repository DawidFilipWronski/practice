const burgerBtn = document.querySelector('.burger');
const burgerIco = document.querySelector('i');
burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    burgerIco.classList.toggle('fa-bars');
    burgerIco.classList.toggle('fa-times');
})