$(document).ready(() => {
    let s = window.PARSER;
    $("#validar").on('click', () => {
        try {
            s.parse($("#editor").val());
            console.log("bien, cachon");
        } catch (error) {
            console.log("nada, cachon");
        }
    })
})