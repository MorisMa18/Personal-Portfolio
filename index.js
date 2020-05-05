var navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('no-scroll');
        console.log ('Pls fucking work'); 
        document.body.classList.remove('nav-open'); 
    })
})