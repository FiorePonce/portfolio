const ilust = document.getElementById('ilust');
const nombre = document.getElementById('nombre');

nombre.addEventListener('mouseover', () => {
    ilust.src = "./imag/yoAnimIzq.png"; 
});
nombre.addEventListener('mouseleave', () => {
    ilust.src = "./imag/yoAnimFren.png"; 
});

ilust.addEventListener('mouseover', () => {
    ilust.src = "./imag/yoAnimCont.png"; 
});
ilust.addEventListener('mouseleave', () => {
    ilust.src = "./imag/yoAnimFren.png"; 
});