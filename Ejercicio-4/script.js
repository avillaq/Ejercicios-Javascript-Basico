document.addEventListener('DOMContentLoaded',init);
function init(){
    
    let boton = document.querySelector('#boton');    
    boton.addEventListener('click',function(){
        let codigo = document.querySelector('#entrada').value;

        let patron = /([a-z]+)-([a-z]+)-([a-z]+)/g;
        let codigos = patron.exec(codigo);

        let codigoFinal = document.querySelector('#codigo');
        codigoFinal.innerHTML = `Codigo: ${codigos[1]}-${codigos[2]}-${codigos[3]}`;
        
    });


}