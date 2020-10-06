const burger = document.querySelector('.burger');
const span1 = document.querySelector('span:nth-child(1)');
const span2 = document.querySelector('span:nth-child(2)');
const span3 = document.querySelector('span:nth-child(3)');
const span4 = document.querySelector('span:nth-child(4)');
burger.addEventListener('click', function () {
    this.classList.toggle('active');
    span1.classList.toggle('active');
    span4.classList.toggle('active');
    span2.classList.toggle('active');
    span3.classList.toggle('active');

})