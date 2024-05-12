document.addEventListener('DOMContentLoaded',init);
function init(){

    let cuerpoTabla = document.querySelector('#cuerpoTabla');
    let resultado = document.querySelector('#resultado');
    let btnSuma = document.querySelector('#btnSuma');

    let form = document.querySelector('#form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let numeroValores = document.querySelector('#numeroValores').value;
        numeroValores = parseInt(numeroValores);

        let col = Math.ceil(Math.sqrt(numeroValores));

        let resto = numeroValores % col;
        let fil = (numeroValores - resto)/col;

        cuerpoTabla.innerHTML = "";
        resultado.innerHTML = "";

        for (let i = 0; i < fil; i++) {
            let filaTabla = document.createElement('tr');
            cuerpoTabla.appendChild(filaTabla);
            for (let j = 0; j < col; j++) {
                filaTabla.appendChild(crearCelda());
            }
        }

        if(resto > 0){
            let filaTabla = document.createElement('tr');
            cuerpoTabla.appendChild(filaTabla);
            for (let i = 0; i < resto; i++) {
                filaTabla.appendChild(crearCelda());
            }
        }
    });

    
    btnSuma.addEventListener('click',function(){
        let totalCeldas = document.querySelectorAll('td');
        let sumaTotal = 0;
        for (let i = 0; i < totalCeldas.length; i++) {
            sumaTotal += parseInt(totalCeldas[i].textContent);
        }
        resultado.innerHTML = `La suma total de los valores es: <strong>${sumaTotal}</strong>`;
        
    });

    function crearCelda() {
        let celda = document.createElement('td');
        celda.style.border = "1px solid black";
        celda.textContent = obtenerAleatorio();
        return celda;
    }

    function obtenerAleatorio() {
        return Math.floor(Math.random()*1000)+1;
    }

}