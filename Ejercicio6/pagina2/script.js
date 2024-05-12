document.addEventListener('DOMContentLoaded',init);
function init(){
    let operacion = document.querySelector("#operacion");
    let tipoOperacion = document.querySelector("#tipoOperacion");
    tipoOperacion.addEventListener("change",function(){
        let valor = tipoOperacion.value;
        
        if (valor === "operacionAritmetica") {
            operacion.innerHTML = `
                                <option value="suma">Suma</option>
                                <option value="resta">Resta</option>
                                <option value="multiplicacion">Multiplicacion</option>
                                <option value="division">Division</option>
                                <option value="modulo">Modulo</option>
                                `
        } else if (valor === "operacionLogica") {
            console.log("Logica");
        } else{
            console.log("De bits");
        }

    });
    



}