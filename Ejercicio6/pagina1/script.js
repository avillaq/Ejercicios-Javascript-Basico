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

    let btnRojo = document.querySelector('#btnRojo');
    let btnAzul = document.querySelector('#btnAzul');
    let btnVerde = document.querySelector('#btnVerde');

    btnRojo.addEventListener('click',function(){
        textoPrueba.style.color = 'red';
    });

    btnAzul.addEventListener('click',function(){
        textoPrueba.style.color = 'blue';
    });

    btnVerde.addEventListener('click',function(){
        textoPrueba.style.color = 'green';
    });


    function cambiarTamaño(n) {
        let fontSize = window.getComputedStyle(textoPrueba).fontSize;
        fontSize = parseInt(fontSize);
        fontSize += n;
        textoPrueba.style.fontSize = `${fontSize}px`;
    }


}