const Boxbody = document.querySelector(".box-body")
const Btnheader = document.querySelector(".header")
const Box = document.querySelector(".box")
let isHidden = true;
Btnheader.addEventListener("click", () => {
    if (isHidden) {
        Boxbody.classList.add("open");
        Box.classList.add("back-ground");
        isHidden = false;
    }
    else {
        Boxbody.classList.remove("open");
        Box.classList.remove("back-ground");
        isHidden = true;
    }
})


const Navbar = document.querySelector(".navbar-links");
const Btnnavbar = document.querySelector(".navbar-icons");
const overLay = document.querySelector("#overlay");
Btnnavbar.addEventListener("click", () => {
    Navbar.classList.toggle("navbar-open");
    overLay.classList.toggle("show");
})

overLay.addEventListener("click", () => {
    Navbar.classList.toggle("navbar-open");
    overLay.classList.toggle("show");
})
