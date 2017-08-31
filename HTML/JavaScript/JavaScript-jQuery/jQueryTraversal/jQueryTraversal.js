$(document).ready(function() {

    //  children  只向下遍历一层  可选参数
    //  find    向下遍历所有字元素 必选参数

    // $('#div1').children('p').css({
    //     border: '3px solid red'
    // });

    // $('#div1').find('p').css({
    //     border: '3px solid red'
    // });

    // parent()  //往上遍历一层
    // parents() //往上遍历所有
    // parentUntil() // 直到某个元素(不包括直到那个元素)

    // $('#a_id').parent().css({
    //     border: '3px solid red'
    // });

    // $('#a_id').parents().css({
    //     border: '3px solid red'
    // });

    // // 区间 [a_id, div1)
    $('#a_id').parentsUntil("#div1").css({
        border: '3px solid red'
    });

   /*
    sibings() 所有同级元素(除了自己,全部被修改)
    next()      后一个
    nextAll()   后全部
    nextUntil() 后区间

    参照next 只不过 prev是前的意思
    prev()
    preAll()
    preUntil()
    */

    // $( "li.third-item" ).prev().css( "background-color", "red" );

    /*
    从0开始 最后一个可以表示为-1
    first()
    last()
    eq()
    filter() // 符合参数条件的改变
    not()   // 不符合参数条件的改变
     */

    // $( "li" ).eq(-1).css( "background-color", "red" );
    // $( "li" ).filter('.third-item').css( "background-color", "red" );
    $( "li" ).not('.third-item').css( "background-color", "red" );

});