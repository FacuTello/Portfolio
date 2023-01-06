const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const originalPresentation = document.querySelector('.presentation-container');
const modifiedPresentation = document.querySelector('.second-presentation-container');

button.addEventListener('click', changeFront);
button2.addEventListener('click', changeFront);


function changeFront(){
    if (modifiedPresentation.classList.contains('desactive')){
        originalPresentation.classList.add('desactive');
        modifiedPresentation.classList.remove('desactive');
    } else {
        originalPresentation.classList.remove('desactive');
        modifiedPresentation.classList.add('desactive');
    }
}

const linkProjects = document.querySelector('#project-link');
const sectionProjects = document.querySelector('#sectionProjects');
linkProjects.addEventListener('click', projectsToggle);

function projectsToggle(){
    if (sectionProjects.classList.contains('desactive')){
        modifiedPresentation.classList.add('desactive');
        sectionProjects.classList.add('work-section');
    }
}

const backButtonOfProjects = document.querySelector('#backButtonOfProjects');
backButtonOfProjects.addEventListener('click', backMain);

function backMain(){
     if(sectionProjects.classList.contains('work-section')){
        sectionProjects.classList.replace('work-section', 'desactive');
        modifiedPresentation.classList.replace('desactive', 'second-presentation-container');
     }
}




















