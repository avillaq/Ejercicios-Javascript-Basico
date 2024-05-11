document.addEventListener('DOMContentLoaded',init);
function init(){
    let diaArequipa = new Date();
    diaArequipa.setFullYear(2024, 7, 15);

    let diaHoy = new Date();

    let minuto = 1000 * 60;
    let hora = minuto * 60;
    let dia = hora * 24;

    let diasFaltantes = (diaArequipa - diaHoy) / dia;

    let dias = document.querySelector('#dias');
    dias.innerHTML = diasFaltantes;
}