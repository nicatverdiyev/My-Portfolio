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
// ----DARK--MODE--BUTTON---END----