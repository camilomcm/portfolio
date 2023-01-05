let lightDark = document.querySelector('.fa-circle-half-stroke');
let body = document.querySelector('body');
let header = document.querySelector('header');
let navA = document.querySelectorAll('nav a');
let buttons = document.querySelectorAll('.button');
let skills = document.querySelectorAll('.skills')
let projectName = document.querySelectorAll('#project-name');
let nameInput = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let projectData = document.querySelectorAll('#project-data'); //Corregir ID

lightDark.addEventListener('click', () => {
    if(body.classList.contains('dark') && 
       header.classList.contains('dark-nav')) {

        body.classList.remove('dark');
        header.classList.remove('dark-nav');
        for (let i = 0; i < navA.length; i++) {
            navA[i].classList.remove('dark-nav');    
        };
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('dark-btn');    
        };
        for (let i = 0; i < skills.length; i++) {
            skills[i].classList.remove('skills-dark');    
        }
        for (let i = 0; i < projectData.length; i++) {
            projectData[i].classList.remove('projectData-dark');    
        }
        for (let i = 0; i < projectName.length; i++) {
            projectName[i].classList.remove('projectName-dark');    
        }
        nameInput.classList.remove('dark-input');
        email.classList.remove('dark-input');
        message.classList.remove('dark-input');

    } else {
        body.classList.add('dark');
        header.classList.add('dark-nav');
        for (let i = 0; i < navA.length; i++) {
            navA[i].classList.add('dark-nav');    
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('dark-btn');    
        }
        for (let i = 0; i < skills.length; i++) {
            skills[i].classList.add('skills-dark');    
        }
        for (let i = 0; i < projectData.length; i++) {
            projectData[i].classList.add('projectData-dark');    
        }
        for (let i = 0; i < projectName.length; i++) {
            projectName[i].classList.add('projectName-dark');    
        }
        nameInput.classList.add('dark-input');
        email.classList.add('dark-input');
        message.classList.add('dark-input');
    }
})