// accedo a los elementos del DOM
let evento1 = document.getElementById('evento-1');
let evento2 = document.getElementById('evento-2');
let evento3 = document.getElementById('evento-3');
let educacion = document.getElementById('educacion');
let comercial = document.getElementById('comercial');

// events listener
evento1.addEventListener('click', () => {
    setTimeout( () => {
        console.log('evento1 disparado');
        comercial.style.display = 'none';
        educacion.style.display = 'block';
        educacion.style.animation = 'opacity 2s';
    }, 100);
});


evento2.addEventListener('click', () => {
    setTimeout( () => {
        console.log('evento2 disparado');
        educacion.style.display = 'none';
        comercial.style.display = 'block';
        comercial.style.animation = 'opacity 2s';
    }, 100)
});


evento3.addEventListener('click', () => {
    setTimeout( () => {
        console.log('evento2 disparado');
        educacion.style.display = 'block';
        comercial.style.display = 'block';
        comercial.style.animation = 'opacity 2s';
        educacion.style.animation = 'opacity 2s';
    }, 100)
});