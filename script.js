let lightDark = document.querySelector('.fa-circle-half-stroke');
let body = document.querySelector('body');
let nav = document.querySelectorAll('nav a');

lightDark.addEventListener('click', () => {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.remove('dark');    
        }
    } else {
        body.classList.add('dark');
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.add('dark');    
        }
    }
})