$(() => {
    $('#btn-close-all').on('click', e => {
        $('.alert').alert('close');
    });
});

$(() => {
    $('#btn-click').on('click', e => {
        $('#btn-auto-save').button('toggle');
    });
});


$(() => {
    $('#btn-click1').on('click', e => {
        const valor = parseInt($(e.target).find('.badge').text());
        $(e.target).find('.badge').text(valor + 1);
    });
});