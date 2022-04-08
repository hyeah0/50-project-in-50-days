const boxes = document.querySelectorAll('.box');

window.addEventListener("scroll",active);

function active(){

    let windowHeight = window.innerHeight;
    console.log(windowHeight);

    boxes.forEach(box => {
        const boxHeight = box.getBoundingClientRect().top;

        console.log("box Height : " + boxHeight);

        if(windowHeight > boxHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
    
}