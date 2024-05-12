document.addEventListener('DOMContentLoaded',init);
function init(){
    
    let form = document.querySelector('#form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let numeroValores = document.querySelector('#numeroValores').value;
        numeroValores = parseInt(numeroValores);

        let col = Math.ceil(Math.sqrt(numeroValores));

        let resto = numeroValores % col;
        let fil = (numeroValores - resto)/col;

        let cuerpoTabla = document.querySelector('#cuerpoTabla');
        cuerpoTabla.innerHTML = "";

        for (let i = 0; i < fil; i++) {
            let filaTabla = document.createElement('tr');
            cuerpoTabla.appendChild(filaTabla);
            for (let j = 0; j < col; j++) {
                let celda = document.createElement('td');
                celda.style.border = "1px solid black";
                celda.textContent = obtenerAleatorio();
                filaTabla.appendChild(celda);
            }
        }

        if(resto > 0){
            let filaTabla = document.createElement('tr');
            cuerpoTabla.appendChild(filaTabla);
            for (let i = 0; i < resto; i++) {
                let celda = document.createElement('td');
                celda.style.border = "1px solid black";
                celda.textContent = obtenerAleatorio();
                filaTabla.appendChild(celda);
            }
        }
    });


    function obtenerAleatorio() {
        return Math.floor(Math.random()*100)+1;
    }

}