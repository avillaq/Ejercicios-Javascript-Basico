document.addEventListener('DOMContentLoaded',init);
function init(){
    function invertirPalabra(palabra) {
        let palabraInvertida = "";
        for (let i = palabra.length - 1; i >= 0; i--) {
            palabraInvertida += palabra[i];
        }
        return palabraInvertida;
    }

    let palabra = document.querySelector("#entrada");

    let boton = document.querySelector("#enviar");

    let salida = document.querySelector("#salida");

    boton.addEventListener("click", function () {
        salida.innerHTML = `Palabra invertida: ${invertirPalabra(palabra.value)}`;
    });

}