const d4Form = document.querySelector('.d4-form');
const d4Btn = document.querySelector('.d4-btn');
const d4Input = document.querySelector('.d4-input');

console.dir(d4Btn);

d4Btn.addEventListener('click',(event) => {
    event.preventDefault();
    d4Form.classList.toggle('active');
    d4Input.focus();
})

