$(document).ready(() => {
    let s = window.PARSER;
    $("#validar").on('click', () => {
        try {
            s.parse($("#editor").val());
            alert("la sintaxis es correcta");
        } catch (error) {
            alert("la sintaxis es incorrecta");
        }
    })
})