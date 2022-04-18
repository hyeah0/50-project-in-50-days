const showNav = document.querySelector(".text_container");
const btnBar = document.querySelector(".btn_bar");
const btnClose = document.querySelector(".btn_close");
const btnContainer = document.querySelector(".button_container");
const navContainer =document.querySelector(".nav_container")


btnBar.addEventListener('click',()=>{
    showNav.classList.add("rotate");
    btnContainer.classList.add("clicked");
    navContainer.classList.add("show-nav")
});

btnClose.addEventListener('click',()=>{
    showNav.classList.remove("rotate");
    btnContainer.classList.remove("clicked");
    navContainer.classList.remove("show-nav")
});


