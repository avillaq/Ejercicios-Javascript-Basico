document.addEventListener('DOMContentLoaded',init);
function init(){
    function invertirPalabra(palabra) {
        let palabraInvertida = "";
        for (let i = palabra.length - 1; i >= 0; i--) {
            palabraInvertida += palabra[i];
        }
        return palabraInvertida;
    }

    let palabra = document.querySelector("#entrada").value;

    let boton = document.querySelector("#invertir");

    boton.addEventListener("click", function () {
        
    });

}