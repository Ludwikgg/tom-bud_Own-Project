const menubtn = document.querySelector(".nav__btn")
const menulist = document.querySelector(".nav__list")
document.querySelector(".description__section")
const navlinks = document.querySelectorAll(".nav__link")


const menuToggle = () => {
    menulist.classList.toggle("active");
}
menubtn.addEventListener('click', menuToggle)

const menuoff = () => {
    menulist.classList.remove("active");
}

navlinks.addEventListener('click', menuoff)