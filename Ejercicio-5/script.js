document.addEventListener('DOMContentLoaded',init);
function init(){
    let limiteColumnas = [1,4,9,16,25,36,49,64,81,100];
    let form = document.querySelector('#form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let numeroValores = document.querySelector('#numeroValores').value;
        numeroValores = parseInt(numeroValores);

        let col = 0;
        for (let i = 0; i < limiteColumnas.length; i++) {
            if(limiteColumnas[i] >= numeroValores){
                col = i+1;
                break;
            }
        }

        let resto = numeroValores % col;
        let fil = (numeroValores - resto)/col;

        let cuerpoTabla = document.querySelector('#cuerpoTabla');

        for (let i = 0; i < fil; i++) {
            let filaTabla = document.createElement('tr');
            cuerpoTabla.appendChild(filaTabla);
            for (let j = 0; j < col; j++) {
                let celda = document.createElement('td');
                celda.textContent = "prueba";
                filaTabla.appendChild(celda);
            }
            
        }


    });



}