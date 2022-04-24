const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    input.classList.toggle("active");
    input.focus();
})