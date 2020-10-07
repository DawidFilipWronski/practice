// console.log("dzial");

$('a').on('click', function () {

    var $move = $('section.' + $(this).attr('class')).offset().top;
    console.log($move);
    console.log($(this).attr('class'));
    $('body, html').animate({
        scrollTop: $move
    }, 1000)
})