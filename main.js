const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const originalPresentation = document.querySelector('.presentation-container');
const modifiedPresentation = document.querySelector('.second-presentation-container');

button.addEventListener('click', cambiarPortada);
button2.addEventListener('click', cambiarPortada);


function cambiarPortada(){
    if (modifiedPresentation.classList.contains('desactive')){
        originalPresentation.classList.add('desactive');
        modifiedPresentation.classList.remove('desactive');
    } else {
        originalPresentation.classList.remove('desactive');
        modifiedPresentation.classList.add('desactive');
    }
}
















