const panels = document.querySelectorAll('.panel');

console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
        console.log(panels);
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
        // console.log(panels);
    })
}

const imgs = document.querySelectorAll('.img');
console.log (imgs);
console.log(imgs.forEach);

imgs.forEach((img) => {
    img.addEventListener('click',() => {
        removeClasses()
        img.classList.add('move');
    })
})

function removeClasses(){
    imgs.forEach((img) => {
        img.classList.remove('move');
    })
}


// =================================

const imgsRecap2 = document.querySelectorAll('.img_recap2');
console.log(imgsRecap2);

imgsRecap2.forEach((imgRecap2) => {
    imgRecap2.addEventListener('click',() => {
        reclick();
        imgRecap2.classList.add('move_recap2');
    })
})

function reclick(){
    imgsRecap2.forEach((imgRecap2)=>{
        imgRecap2.classList.remove('move_recap2');
    })
    
}