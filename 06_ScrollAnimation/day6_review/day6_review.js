const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",showBox);

showBox();

function showBox(){

    let inHeight = window.innerHeight;
    
    console.log("inner height : " + inHeight);

    boxes.forEach(box => {

        const boxTop = box.getBoundingClientRect().top
        console.log("boxTop : " + boxTop );

        if(boxTop < inHeight){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}