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


// ===============review1=============== //
// 1. 프로그래스바 next 클릭시 currentactive 숫자 +1
// 순번 이상으로 next 클릭시 currentactive의 값은 최대 순번 값으로 한다
// 2. 프로그래스바 prev 클릭시 currentactive 숫자 -1
// 순번 이하으로 prev 클릭시 currentactive의 값은 최소 순번 값으로 한다
// 3-1. next, prev 클릭시 순번에 색깔 변하게 하기
// 3-2. next, prev 클릭시 progress bar 색깔 변하게 하기
// 3-3. 최대 순번값이 되었을때 next 버튼 disabled 처리 , 
//      최소 순번값이 되었을때 prev 버튼 disabled 처리

const review1Progress = document.querySelector('.review1-progress');
const review1Circles = document.querySelectorAll('.review1-circle');
const review1Prev = document.querySelector('#review1-prev');
const review1Next = document.querySelector('#review1-next');

let review1CurrentActive = 1;

console.log(review1Circles);

review1Next.addEventListener('click',() => {
    review1CurrentActive++;

    if(review1CurrentActive > review1Circles.length ){
        review1CurrentActive = review1Circles.length 
    }

    console.log(`review1 current active : ${review1CurrentActive}`);
    review1Update()
})

review1Prev.addEventListener('click',() => {
    review1CurrentActive--;

    if(review1CurrentActive < 1){
        review1CurrentActive = 1
    }

    console.log(review1CurrentActive);
    review1Update()
})

function review1Update(){

    // 3-1
    review1Circles.forEach( (review1Circle , review1Idx) => {
        if(review1Idx < review1CurrentActive){
            // console.log(`review1Idx : ${review1Idx}`);
            review1Circle.classList.add('review1-active');
        }else{
            review1Circle.classList.remove('review1-active');
        }
    })

    // 3-2
    const review1Actives = document.querySelectorAll('.review1-active');
    // console.log(`review1Actives.length : ${review1Actives.length}`);
    // console.log(`review1Circles.length : ${review1Circles.length}`);
    console.log(`(review1Actives.length-1)/(review1Circles.length-1) : ${review1Actives.length-1}/${review1Circles.length-1} = ${(review1Actives.length-1) / (review1Circles.length-1)} `)* 100;
    review1Progress.style.width = ((review1Actives.length-1)/(review1Circles.length-1))* 100 + '%';

    // 3-3
    if(review1CurrentActive === 1){
        review1Prev.disabled = true;
    }else if(review1CurrentActive === review1Circles.length){
        review1Next.disabled = true;
    }
    else{
        review1Prev.disabled = false;
        review1Next.disabled = false;
    }
}

// ===============review2=============== //
// 1. 프로그래스바 next 클릭시 currentactive 숫자 +1
// 순번 이상으로 next 클릭시 currentactive의 값은 최대 순번 값으로 한다
// 2. 프로그래스바 prev 클릭시 currentactive 숫자 -1
// 순번 이하으로 prev 클릭시 currentactive의 값은 최소 순번 값으로 한다
// 3-1. next, prev 클릭시 순번에 색깔 변하게 하기
// 3-2. next, prev 클릭시 progress bar 색깔 변하게 하기
// 3-3. 최대 순번값이 되었을때 next 버튼 disabled 처리 , 
//      최소 순번값이 되었을때 prev 버튼 disabled 처리

const review2Progressbar = document.querySelector('.review2-progressbar');
const review2Circles = document.querySelectorAll('.review2-circle');
const review2Prev = document.querySelector('.review2-prev');
const review2Next = document.querySelector('.review2-next');

let review2CurrentAcctive = 1;

review2Next.addEventListener('click', () => {
    review2CurrentAcctive++;

    if(review2CurrentAcctive > review2Circles.length){
        review2CurrentAcctive = review2Circles.length     
    }
    // console.log(`review2CurrentAcctive : ${review2CurrentAcctive}`);
    // console.log(`review2Circles.length : ${review2Circles.length}`);
    review2MoveProgressBar();
})

review2Prev.addEventListener('click', () => {
    review2CurrentAcctive--;

    if(review2CurrentAcctive < 1){
        review2CurrentAcctive = 1;
    }
    // console.log(`review2CurrentAcctive : ${review2CurrentAcctive}`);
    review2MoveProgressBar();
})

function review2MoveProgressBar(){
    // 3-1
    review2Circles.forEach((review2Circle, review2Idx) => {
        if(review2Idx < review2CurrentAcctive){
            review2Circle.classList.add('review2-active');
        }
        else{
            review2Circle.classList.remove('review2-active');
        }
    })

    //3-2
    const review2Actives = document.querySelectorAll('.review2-active');

    review2Progressbar.style.width = (review2Actives.length -1)/(review2Circles.length -1) * 100 + '%';

    //3-3

    if(review2Actives.length === review2Circles.length){
        review2Next.disabled = true;
    }
    else if(review2Actives.length === 1){
        review2Prev.disabled = true;
    }
    else{
        review2Next.disabled = false;
        review2Prev.disabled = false;
    }
}