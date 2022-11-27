const form = document.querySelector('.form');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click',(event) => {
    event.preventDefault();
    form.classList.toggle('active');
    input.focus();
})