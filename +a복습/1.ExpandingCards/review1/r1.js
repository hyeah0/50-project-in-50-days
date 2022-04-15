const imgs = document.querySelectorAll('.img');

imgs.forEach((season)=>{
    season.addEventListener('click',()=>{
        remove();
        season.classList.add('active');
    })
})

function remove(){
    imgs.forEach((season)=>{
        season.classList.remove('active');
    })   
}