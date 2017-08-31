$(document).ready(function() {

    /*常用事件方式*/

    // $('button').click(function() {
    //    alert('click');
    // });

    // $('button').dblclick(function() {
    //     alert('doubleClick');
    // });

    // $('button').mouseenter(function() {
    //    $(this).hide();
    // });
    
    // $('button').mouseleave(function() {
    //     $(this).hide();
    // })

    /*
    *  绑定事件
       解除绑定事件
    * */

    // $('#clickBtn').bind('click', clickHandler1);
    // $('#clickBtn').bind('click', clickHandler2);
    // $('#clickBtn').unbind('click', clickHandler2);

    // $('#clickBtn').on('click', clickHandler1);
    // $('#clickBtn').on('click', clickHandler2);
    // $('#clickBtn').off('click', clickHandler2);

    /*
    事件的目标
    事件的冒泡
    * */
    // $('body').bind('click', bodyHandler);
    // $('div').bind('click', divHandler1);
    // $('div').bind('click', divHandler2);

    /*
    * 自定义事件
    * */

    $('#clickBtn').click(function() {
       var event = jQuery.Event('MyEvent');
        $('#clickBtn').trigger(event);
    });

    $('#clickBtn').bind('MyEvent', function(event) {
        console.log(event);
    });

});

function clickHandler1() {
    console.log('clickHandler_1');
}

function clickHandler2() {
    console.log('clickHandler_2');
}

function bodyHandler(event) {
    console.log(event);
}

function divHandler1(event) {
    console.log(event);
    event.stopPropagation(); // 阻止父级的
    //event.stopImmediatePropagation(); // 所有全部阻止
}

function divHandler2(event) {
    console.log(event);
}
