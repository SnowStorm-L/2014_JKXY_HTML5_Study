$(document).ready(function() {
    $('#div_id_1').draggable();
    $('#div_id_2').droppable();
    $('#div_id_2').on('drop', function(event, ui) {
         alert('放入里面');
    });
    $('#div_id_3').resizable();

    $('#a_id').button().on('click', function() {
        if ($('#right').hasClass('ui-selected')) {
            alert('回答正确');
        } else {
            alert('回答错误');
        }
    });
    $('#selector').selectable();

    $('#sortable').sortable();
});