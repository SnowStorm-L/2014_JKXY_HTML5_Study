$(document).ready(function() {

    $('#hide').click(function() {
       $('p').hide(1000); // 隐藏的动画持续事件1千毫秒
    });

    $('#show').click(function() {
       $('p').show(1000);
    });

    $('#toggle').click(function() {
        $('p').toggle(1000);
    });

    $('#fadeIn').on('click', function() {
        $('#div1').fadeIn(1000);
        $('#div2').fadeIn(1000);
        $('#div3').fadeIn(1000);
    });

    $('#fadeOut').on('click', function() {
        $('#div1').fadeOut(1000);
        $('#div2').fadeOut(1000);
        $('#div3').fadeOut(1000);
    });

    $('#fadeToggle').on('click', function() {
        $('#div1').fadeToggle(1000);
        $('#div2').fadeToggle(1000);
        $('#div3').fadeToggle(1000);
    });

    $('#fadeTo').on('click', function() {
        $('#div1').fadeTo(1000, 0.5);
        $('#div2').fadeTo(1000, 0.7);
        $('#div3').fadeTo(1000, 0.3);
    });

    $('#flipshow').click(function() {
       $('#content').css('color', 'red').slideToggle(1000, function() {
           alert('执行完毕,触发回调');
       }); // slideDown slideUp 隐藏/消失
    });

});