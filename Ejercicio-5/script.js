document.addEventListener('DOMContentLoaded',init);
function init(){
    let limiteColumnas = [1,4,9,16,25,36,49,64,81,100];
    let form = document.querySelector('#form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let numeroValores = document.querySelector('#numeroValores').value;
        numeroValores = parseInt(numeroValores);
    });



}