const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    menu.classList.toggle('open');
};

window.onscroll =() => {
    menu.classList.remove('bx-x');
    menu.classList.remove('open');
};

var typed = new Typed(".input",{
    strings:["Web Developer.","Web Designer.","Java Developer.","PHP Full Stack."],
    typeSpeed: 120,
    backSpeed:70,
    loop: true

})