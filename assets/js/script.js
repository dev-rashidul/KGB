// JavaScript Code for Mobile Menu

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle(){
    navToggler.classList.toggle("active")
    const menu = document.querySelector(".menu");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")){
        menu.style.maxHeight = menu.scrollHeight + "px";
    }else{
        menu.removeAttribute("style");
    }
}
