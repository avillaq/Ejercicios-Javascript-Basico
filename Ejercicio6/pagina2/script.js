document.addEventListener('DOMContentLoaded',init);
function init(){
    let tipoOperacion = document.querySelector('#tipoOperacion');

    tipoOperacion.addEventListener('change',function(){
        let valor = tipoOperacion.value;
        console.log(valor);

    });
    



}