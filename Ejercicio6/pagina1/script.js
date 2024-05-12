document.addEventListener('DOMContentLoaded',init);
function init(){
    let textoPrueba = document.querySelector('#textoPrueba');
    let btnAumentar = document.querySelector('#btnAumentar');
    let btnReducir = document.querySelector('#btnReducir');

    btnAumentar.addEventListener('click',function(){
        let fontSize = textoPrueba.style.fontSize;
        fontSize += 5;
        textoPrueba.style.fontSize = `${fontSize}px`;
    });

}