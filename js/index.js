$(document).ready(() => {
    let s = window.PARSER;
    $("#validar").on('click', () => {
        try {
            s.parse(editor.getValue());
            swal({
                title: "Exito!",
                text: "la sintaxis es correcta!",
                icon: "success",
            });
        } catch (error) {
            swal({
                title: "error!",
                text: "la sintaxis es incorrecta!",
                icon: "error",
            });
        }
    })
})