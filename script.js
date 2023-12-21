const header = document.querySelector('header');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window. scrollY > 60)
});
    
let menu = decument.querySelector('#menu-icon');   
let navbar = decument.querySelector('.navbar');
menu.onclick = () => {
           menu.classList.toggle('bx-x');
           navbar.classList.toggle('open');
        }