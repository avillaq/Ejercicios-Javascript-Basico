document.addEventListener('DOMContentLoaded',init);
function init(){
    let textoPrueba = document.querySelector('#textoPrueba');
    let btnAumentar = document.querySelector('#btnAumentar');
    let btnReducir = document.querySelector('#btnReducir');

    btnAumentar.addEventListener('click',function(){
        cambiarTamaño(5);
    });

    btnReducir.addEventListener('click',function(){
        cambiarTamaño(-5);
    });

    function cambiarTamaño(n) {
        let fontSize = window.getComputedStyle(textoPrueba).fontSize;
        fontSize = parseInt(fontSize);
        fontSize += n;
        textoPrueba.style.fontSize = `${fontSize}px`;
    }


}