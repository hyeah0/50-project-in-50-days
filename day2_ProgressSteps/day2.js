const progress = document.getElementById('day2-progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

console.log(circles);

next.addEventListener('click',() => {
    currentActive++;

    if(currentActive > circles.length){
        
        currentActive = circles.length;
    }
    console.log(`currentActive : ${currentActive}`);
    update();
})

prev.addEventListener('click',() => {
    currentActive--;

    if(currentActive < 1 ){
        currentActive = 1;
    }
    console.log(`currentActive : ${currentActive}`);
    update();
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    // console.log(actives);
    // console.log(actives.length, circles.length);
    // console.log((actives.length - 1) / (circles.length - 1) * 100 );
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1){
        prev.disabled = true
    }
    else if(currentActive === circles.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }

}