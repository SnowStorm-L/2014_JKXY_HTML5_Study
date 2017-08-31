

$(document).ready(function() {

    $(window).on('load', function() {

        imgLocation();

        window.onscroll = function() {
            loadImg();
        };

    });

});

function loadImg() {

    if (scrollside()) {

        var imgData = {
            'data': [
                {'src': 'Swift.jpg'},
                {'src': 'Hacker.jpg'},
                {'src': 'Android.jpg'},
                {'src': 'PHP.jpg'},
                {'src': 'iOS.jpg'},
                {'src': 'Python.jpg'},
                {'src': 'C.jpg'},
                {'src': 'Java.png'}
            ]
        };

        $.each(imgData.data, function(index, value) {
            var box = $('<div>').addClass('box').appendTo($('#container'));
            var content = $('<div>').addClass('content').appendTo(box);
            var srcPath = '../../../img/Programming/' + $(value).attr('src');
            $('<img>').attr('src', srcPath).appendTo(content);
        });
        imgLocation();
    }
}

function scrollside() {
    var box = $('.box');
    var boxLast = box.last();
    var lastBoxHeight = boxLast.get(0).offsetTop +
        Math.floor(boxLast.height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    return (lastBoxHeight < scrollHeight + documentHeight);
}

function imgLocation() {

    var box = $('.box');
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxHeightArray = [];
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxHeightArray[index] = boxHeight;
        } else {
            var minBoxHeight = Math.min.apply(null, boxHeightArray);
            var minBoxIndex = $.inArray(minBoxHeight, boxHeightArray);
            $(value).css({
                position: 'absolute',
                top: minBoxHeight,
                left: box.eq(minBoxIndex).position().left
            });
            boxHeightArray[minBoxIndex] += box.eq(index).height();
        }
    });
}