const menubtn = document.querySelector(".nav__btn")
const btnico = document.querySelector(".fa-solid")
const menulist = document.querySelector(".nav__list")
document.querySelector(".description__section")
const navlinks = document.querySelectorAll(".nav__link")


const menuToggle = () => {
    menulist.classList.toggle("active");
    btnico.classList.toggle("fa-bars-staggered");

    navlinks.forEach(item => {
        item.addEventListener('click', () => {
            menulist.classList.remove('active');
            btnico.classList.remove("fa-bars-staggered")
        })
    })

    handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    navlinks.forEach(item => {
        item.classList.toggle("nav__link-animation")
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}






menubtn.addEventListener('click', menuToggle)