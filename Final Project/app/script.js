let navbar = document.getElementById("nav");

window.onscroll = function () {
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.classList.add("scroll");
    }
    else
    {
        navbar.classList.remove("scroll");
    }
};