let navbar = document.getElementById("nav");

window.onscroll = function () {
    if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        navbar.classList.add("scroll");
    }
    else
    {
        navbar.classList.remove("scroll");
    }
};


