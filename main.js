const soy = document.querySelector('#soy');
const facundo = document.querySelector('#facundo');
const front = document.querySelector('#front');
const developer = document.querySelector('#developer');
const button = document.querySelector('#button');

function cambiarPortada(){
    soy.textContent = "Sobre mi";
    facundo.textContent = "Proyectos";
    front.textContent = "Habilidades";
    developer.textContent = "Contacto";
}
