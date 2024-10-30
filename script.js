let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    let top = window.scrollY;
    sections.forEach(sec=>{

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(link =>{
                link.classList.remove('active');

                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
    document.querySelector('header').classList.toggle('sticky', top > 100);
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay: 200,
    origin: 'top',
}).reveal('.home-content, .heading');

ScrollReveal({
    origin: 'bottom',
}).reveal('.home-img, .services-container, .portfolio-box, .contact form');

ScrollReveal({
    origin: 'left',
}).reveal('.home-contact h1, .about-img-container, .details-container,exp-details-container');

ScrollReveal({
    origin: 'right',
}).reveal('.home-contact p, .about-details-container,.about-container,.article-container');
var typingEffect = new Typed(".typedText",{
    strings : ["Btech student"," Tech Enthusiast", "Flutter Developer","UI-UX designer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  });
  