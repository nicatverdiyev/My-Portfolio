// Naviqation scrool effekti---start---

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Naviqation scrool effekti---end---