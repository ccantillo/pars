$(document).ready(() => {
    let s = window.PARSER;
    $("#validar").on('click', () => {
        try {
            s.parse($("#editor").val());
            swal({
                title: "Exito!",
                text: "la sintaxis es correcta!",
                icon: "success",
            });
        } catch (error) {
            alert("la sintaxis es incorrecta");
        }
    })
})