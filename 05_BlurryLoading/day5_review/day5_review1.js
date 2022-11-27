const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let loadingNum = 1;
let int = setInterval(loading,30);

function loading(){
    loadingNum++;

    if(loadingNum>99){
        clearInterval(int);
    }

    loadingText.innerHTML = `${loadingNum}%`
    loadingText.style.opacity = scale(loadingNum, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loadingNum, 0, 100, 30, 0)}px)`;
    console.log(loadingNum);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}