const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let loading = 1;
let int = setInterval(load,30);

function load(){
    loading++;

    if(loading > 99){
        clearInterval(int)
    }

    console.log(loading);
    loadingText.innerHTML = `${loading}%`
    loadingText.style.opacity = scale(loading, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}