jQuery.myjQuery = function() {
    alert('拓展');
};

jQuery.fn.myjQuery = function() {
    jQuery(this).text('hello');
};