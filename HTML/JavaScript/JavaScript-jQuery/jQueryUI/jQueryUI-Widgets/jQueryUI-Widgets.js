var progressBar;
var currnet = 0;

var valueSpan;
var slider;

$(document).ready(function() {
    $(function() {
        $('#accordion').accordion({
            collapsible: true,
        });
    });

    var tags = [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ];

    $( "#autocomplete" ).autocomplete({
        source: function( request, response ) {
            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( tags, function( item ){
                return matcher.test( item );
            }) );
        }
    });

    $('#datePicker').datepicker();

    $('#DialogBtn').button().on('click', function() {
        $('#Dialog').dialog();
    });

    progressBar = $('#progressbar');
    progressBar.progressbar({max: 200});
    setInterval(changePorgessBar, 100);

    $('#menu').menu({
        position: {
            at: 'left bottom'
        }
    });

    slider = $('#slider');
    valueSpan = $('#span');

    slider.slider({
        slide: function(event, ui) {
            valueSpan.text(slider.slider('option', 'value'));
        }
    });

});

function changePorgessBar() {
    currnet++;
    if (currnet >= 200) {
        currnet = 0;
    }
    progressBar.progressbar('option', 'value', currnet);
}