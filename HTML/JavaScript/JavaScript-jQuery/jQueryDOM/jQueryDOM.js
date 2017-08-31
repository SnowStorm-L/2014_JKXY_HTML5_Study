$(document).ready(function() {

    $('#btn1').click(function() {
        alert('text:' + $('#text').text()); // 只能获取到内容
        alert('text:' + $('#text').html()); // 能获取到内部的子标签
        alert('text:' + $('#it').val());
    });

    $('#btn2').click(function() {
        alert('text:' + $('#stackoverflow').attr('href')); // 只能获取到内容
        // attr('id') 获取id
    });

    $('#btn3').click(function() {
        // $('#p1').text('修改了');
        // 多个元素 第一个参数是当前元素的下标 第二个参数是修改的内容
        $('#p1').text(function(i, ot) {
            return 'old:' + ot + 'new:只是新的内容' + i;
        });
    });

    $('#btn4').click(function() {
        $('#p2').html('<a href="https://www.baidu.com">未知网址</a>');
    });

    $('#btn5').click(function() {
        $('#input_id').val('瓜皮');
    });

    $('#btn6').click(function() {
        $('#a_id').attr('href', 'https://stackoverflow.com');
        // 修改多个属性,字典
        // $('#a_id').attr({
        //     'href':'https://stackoverflow.com',
        //     'href':'https://stackoverflow.com',
        // });
    });

    /*
    * append 被选中元素结尾插入内容
    * prepend 被选中元素开头插入内容
    *
    * 下面2个方法会换行
    *
    * before 被选中元素之前插入内容
    * after 被选中元素之后插入内容
    * */

    $('#btn7').click(function() {
        $('#p3').append(' this is append');
        $('#p3').prepend('this is prepend ');
    });

    $('#btn8').click(function() {
        $('#p3').before(' this is before');
        $('#p3').after('this is after ');
    });

    $('#btn9').click(function() {
       // remove
        // empty
         $('#div').remove(); // 全部删除
         $('#div').empty(); // 删除div里面的子元素

    });

});

function appendText() {
    /*
        html、jQuery、DOM 三种方式添加
    * */

    var html = '<p>html</p>'
    var jQuery = $('<p></p>').text('jQuery');
    var DOM =  document.createElement('p')
        DOM.innerHTML = 'DOM';
    $('body').append(html, jQuery, DOM);
}