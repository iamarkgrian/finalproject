let navbar = document.getElementById("nav");
let menu = document.querySelector('.mainMenu');
let openNavbar = document.querySelector('.navbar');
let showMenu = false;

window.onscroll = function () {
    if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        navbar.classList.add("scroll");
    }
    else
    {
        navbar.classList.remove("scroll");
    }
};


function mainMenuToggle() {
    if(!showMenu) 
    {
        menu.classList.add("activeMenu");
        openNavbar.style.display = "flex";
        showMenu = true;
    }
    else
    {
        menu.classList.remove("activeMenu");
        openNavbar.style.display = "none";
        showMenu = false;
    }
}

menu.addEventListener('click', mainMenuToggle);

