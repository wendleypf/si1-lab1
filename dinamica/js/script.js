$(document).ready(function() {
    /*
     * Adcionar Elemento
     */
    $(".form-horizontal").submit(function(event) {
        if ($("#assuntoAprender").val() == "" || $("#assuntoAprender").val().trim() == "") {
            $(".alert").show();
        } else {
            $(".alert").hide();

            var assunto = $("#assuntoAprender").val();
            var radio = $('input[name=assuntos]');
            var checkedValue = radio.filter(':checked').val();

            if (checkedValue == "sim") {
                $(".table-bordered").append(
                    "<tr class='success'>" +
                    "<td>" + assunto + "</td>" +
                    "<td>" +
                    " <div class='btn-group'><a value=" + "'" + assunto + "'" + " class='btn btn-success disabled'><i class='icon-thumbs-up icon-white'></i> Mover</a>" +
                    " <a href='javascript:void(0);' class='btn btn-danger remove'><i class='icon-trash icon-white'></i> Remover</a></div>" +
                    "</td>" +
                    "</td>" +
                    "</tr>");
            } else {
                $(".table-bordered").append(
                    "<tr class='warning'>" +
                    "<td>" + assunto + "</td>" +
                    "<td>" +
                    " <div class='btn-group'><a href='javascript:void(0);' value=" + "'" + assunto + "'" + " class='btn btn-success mover'><i class='icon-thumbs-up icon-white'></i> Mover</a>" +
                    " <a href='javascript:void(0);' class='btn btn-danger remove'><i class='icon-trash icon-white'></i> Remover</a></div>" +
                    "</td>" +
                    "</tr>");
            }
        }
        event.preventDefault();
    });
    /*
     * Remover Elemento
     */
    $(document).on('click', 'a.remove', function() {
        $(this).closest('tr').remove();
    });
    /*
        Mover Elemento
    */
    $(document).on('click', 'a.mover', function() {
        $("tr").removeClass("warning").addClass("success");
        $(this).addClass('disabled');
    });
});
