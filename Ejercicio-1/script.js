document.addEventListener('DOMContentLoaded',init);
function init(){
    function obtenerDia(n){
        let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        return dias[n];
    }
    let date = new Date();
    let day = date.getDay();

    let saludo = document.querySelector("#saludo");
    saludo.innerHTML = `Hola, hoy es ${obtenerDia(day)}`;

    console.log(`Hola, hoy es ${obtenerDia(day)}`);
}