let navbar = document.getElementById("nav");

window.onscroll = function () {
    if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        navbar.classList.add("scroll");
    }
    else
    {
        navbar.classList.remove("scroll");
    }
};