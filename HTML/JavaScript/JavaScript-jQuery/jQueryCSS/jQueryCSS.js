$(document).ready(function() {

    // $('div').css({
    //     width: "100px",
    //     height: "100px",
    //     background: "red"
    // });

    $('div').addClass('style1');
    $('div').click(function() {
        // $(this).addClass('style2');
        // $(this).removeClass('style1');
        $(this).toggleClass('style2');
    });

    // height 100  边框加内边距(margin, padding + 100)  200
    alert($('div:last').innerHeight());

});