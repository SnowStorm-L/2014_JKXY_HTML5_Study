// 引入

var myjq = $.noConflict(); // 代替美元符号,防止其它库也是美元符号造成的冲突

jQuery(document).ready(function() {
    // jQuery.myjQuery();
    jQuery('div').myjQuery();

    jQuery('#btn').on('click', function() {
        jQuery('div').text('new');
    });
});