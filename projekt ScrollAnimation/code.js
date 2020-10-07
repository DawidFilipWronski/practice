$(document).on('scroll', function () {
    var currentScroll = $(document).scrollTop();
    var okno = $(window).height();
    var art1Height = $('.art1').height();
    var art2Height = $('.art2').height();
    var art3Height = $('.art3').height();
    var art4Height = $('.art4').height();

    var $art1 = $('.art1');
    var $art2 = $('.art2');
    var $art3 = $('.art3');
    var $art4 = $('.art4');
    var art1Dist = $art1.offset().top;
    var art2Dist = $art2.offset().top;
    var art3Dist = $art3.offset().top;
    var art4Dist = $art4.offset().top;

    if (currentScroll > art1Dist - okno + art1Height / 2) {
        $art1.addClass('active');
        // console.log('pojawiam sie!');
    }
    if (currentScroll > art2Dist - okno + art2Height / 2) {
        $art2.addClass('active');
        // console.log('pojawiam sie!');
    }
    if (currentScroll > art3Dist - okno + art3Height / 2) {
        $art3.addClass('active');
        // console.log('pojawiam sie!');
    }
    if (currentScroll > art4Dist - okno + art4Height / 2) {
        $art4.addClass('active');
        // console.log('pojawiam sie!');
    }

    // op1 i op2 animaja
    var $op1 = $('.op1');
    var $op2 = $('.op2');
    var op1Height = $op1.height();
    var op2Height = $op2.height();
    var op1Dist = $op1.offset().top;
    var op2Dist = $op2.offset().top;
    var right = op1Dist - okno + op1Height / 2;

    console.log('op1dist: ' + op1Dist);
    console.log('right: ' + right);
    console.log('currentScroll: ' + currentScroll);
    if (currentScroll > op1Dist - okno + op1Height * 0.3) {

        // console.log('scale 1 zaczelo dzialac');

        $op1.addClass('active');


    }
    if (currentScroll > op2Dist - okno + op2Height * 0.3) {
        // console.log('scale 2 zaczelo dzialac');
        $op2.addClass('active');

    }




    //reset animacji
    if (currentScroll < 50) {
        $art1.removeClass('active');
        $art2.removeClass('active');
        $art3.removeClass('active');
        $art4.removeClass('active');
        $op1.removeClass('active');
        $op2.removeClass('active');
        console.clear();
    }
})