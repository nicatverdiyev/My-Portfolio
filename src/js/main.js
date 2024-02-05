// Naviqation scrool effekti---start---

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Naviqation scrool effekti---end---

// ----GÖRÜLEN İŞLER BOLMESİ POPUP CARD---START----
const porfolioModals = document.querySelectorAll(".portfolioModel");
const imgCards = document.querySelectorAll(".imgCard");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn")

var porfolioModal = function (modalClick) {
    porfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard,i)=>{
    imgCard.addEventListener("click", ()=>{
        porfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn)=> {
    portfolioCloseBtn.addEventListener("click", ()=>{
        porfolioModals.forEach((porfolioModalView) => {
            porfolioModalView.classList.remove("active");
        });
    });
});
// ----GÖRÜLEN İŞLER BOLMESİ POPUP CARD---END----

// -----SCROLL-TO-TOP---BUTTON---START---

const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll",function () {
    scrollTopBtn.classList.toggle("active",window.scrollY > 500);
});

scrollTopBtn.addEventListener("click",()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// -----SCROLL-TO-TOP---BUTTON---END---

// ----DARK--MODE--BUTTON---START----

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// ----DARK--MODE--BUTTON---END----

// -----RESPONSİV MENYU İCONLAR START-------
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".navItems a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
    navItem.addEventListener("click", () =>{
        navigation.classList.remove("active");
    });
});

// -----RESPONSİV MENYU İCONLAR END--------

// ScrollReveal({
//     reset: true,
//     distance: '60px',
//     duraction: 2500,
//     delay: 100
// });

// ScrollReveal().reveal('.home .info h2', {delay: 500, origin:'left'});
// ScrollReveal().reveal('.home .info h3, .home .info p', {delay: 600, origin:'right'});
// ScrollReveal().reveal('.home .info .btn', {delay: 500, origin:'right'});