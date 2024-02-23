const ilust = document.getElementById('ilust');
const nombre = document.getElementById('nombre');
const contac = document.getElementById('conta');
const proyec = document.getElementById('proye');
const sobMi = document.getElementById('sobremi');

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

contac.addEventListener('mouseover', () => {
    ilust.src = "./imag/yoAnimContacto.png"; 
});
contac.addEventListener('mouseleave', () => {
    ilust.src = "./imag/yoAnimFren.png"; 
});

proyec.addEventListener('mouseover', () => {
    ilust.src = "./imag/yoAnimProyec.png"; 
});
proyec.addEventListener('mouseleave', () => {
    ilust.src = "./imag/yoAnimFren.png"; 
});

sobMi.addEventListener('mouseover', () => {
    ilust.src = "./imag/yoAnimSobreMi.png"; 
});
sobMi.addEventListener('mouseleave', () => {
    ilust.src = "./imag/yoAnimFren.png"; 
});



document.getElementById('hamburger-btn').addEventListener('click', function() {
    document.getElementById('menu-hamburguesa').classList.toggle('active');
});
