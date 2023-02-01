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

const linkAbout = document.querySelector('#aboutMe-link');
const sectionAbout = document.querySelector('#aboutMeSection');
linkAbout.addEventListener('click', aboutMe);

function aboutMe(){
    if(originalPresentation.classList.contains('desactive')){
        modifiedPresentation.classList.add('desactive');
        sectionAbout.classList.remove('desactive');
    }
}

aboutMeButton = document.querySelector('#aboutMeButton');
aboutMeButton.addEventListener('click', toggleAbout);

function toggleAbout(){
   if(sectionAbout.classList.contains('aboutMe')){
    sectionAbout.classList.add('desactive');
    modifiedPresentation.classList.replace('desactive', 'second-presentation-container');
    }
} 

const linkLanguage = document.querySelector('#language-link');
const sectionLanguage = document.querySelector('#languageSection');
linkLanguage.addEventListener('click', languageEnter);

function languageEnter(){
    if(originalPresentation.classList.contains('desactive')){
        modifiedPresentation.classList.add('desactive');
        sectionLanguage.classList.remove('desactive');
    }
}

const languageButton = document.querySelector('#languageButton');
languageButton.addEventListener('click', toggleLanguage);

function toggleLanguage(){
    if(sectionLanguage.classList.contains('languagues-section')){
        sectionLanguage.classList.add('desactive');
        modifiedPresentation.classList.replace('desactive', 'second-presentation-container');
    }
}

const linkContact = document.querySelector('#contact-link');
const sectionContact = document.querySelector('#sectionContact');
linkContact.addEventListener('click', contactEnter);

function contactEnter(){
    if(originalPresentation.classList.contains('desactive')){
        modifiedPresentation.classList.add('desactive');
        sectionContact.classList.add('contact-section');
    }
}

const contactButton = document.querySelector('#contactButton');
contactButton.addEventListener('click', toggleContact);

function toggleContact(){
    if(sectionContact.classList.contains('contact-section')){
        sectionContact.classList.replace('contact-section','desactive');
        modifiedPresentation.classList.replace('desactive', 'second-presentation-container');
    }
}




















