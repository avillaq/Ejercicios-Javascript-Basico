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
            operacion.innerHTML = `
                                <option value="and">And</option>
                                <option value="or">Or</option>
                                `
        } else{
            operacion.innerHTML = `
                                <option value="desplazamientoIzquierda">Desplazamiento a la izquierda</option>
                                <option value="desplazamientoDerecha">Desplazamiento a la derecha</option>
                                `
        }
        resultado.innerHTML = "";
    });

    let btnCalcular = document.querySelector("#btnCalcular");
    let resultado = document.querySelector("#resultado");

    btnCalcular.addEventListener("click",function(){
        let valor1 = document.querySelector("#valor1").value;
        let valor2 = document.querySelector("#valor2").value;
        if (valor1 === "" || valor2 === "") {
            alert("Ingrese ambos valores");
            return;
        }

        valor1 = parseInt(valor1);
        valor2 = parseInt(valor2);
        
        let operacion = document.querySelector("#operacion").value;

        switch (operacion) {
            case "suma":
                resultado.innerHTML = `${valor1+valor2}`;
                break;
            case "resta":
                resultado.innerHTML = `${valor1-valor2}`;
                break;
            case "multiplicacion":
                resultado.innerHTML = `${valor1*valor2}`;
                break;
            case "division":
                resultado.innerHTML = `${valor1/valor2}`;
                break;
            case "modulo":
                resultado.innerHTML = `${valor1%valor2}`;
                break;
            case "and":
                if (valor1 !== 0 && valor1 !== 1 || valor2 !== 0 && valor2 !== 1) {
                    alert("Ambos valores deben ser 0 o 1");
                    return;
                }
                resultado.innerHTML = `${valor1&valor2}`;
                break;
            case "or":
                if (valor1 !== 0 && valor1 !== 1 || valor2 !== 0 && valor2 !== 1) {
                    alert("Ambos valores deben ser 0 o 1");
                    return;
                }
                resultado.innerHTML = `${valor1|valor2}`;
                break;
            case "desplazamientoIzquierda":
                resultado.innerHTML = `${valor1<<valor2}`;
                break;
            case "desplazamientoDerecha":
                resultado.innerHTML = `${valor1>>valor2}`;
                break;
            default:
                break;
        }

    });
}