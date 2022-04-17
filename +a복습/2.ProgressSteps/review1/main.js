// 1.step 색상 바꾸기
// 2.step_bar 색상바꾸기
// 3.prev.next 버튼 disabled 설정

// 1. 프로그래스바 next 클릭시 currentactive 숫자 +1
// 순번 이상으로 next 클릭시 currentactive의 값은 최대 순번 값으로 한다
// 2. 프로그래스바 prev 클릭시 currentactive 숫자 -1
// 순번 이하으로 prev 클릭시 currentactive의 값은 최소 순번 값으로 한다
// 3-1. next, prev 클릭시 순번에 색깔 변하게 하기
// 3-2. next, prev 클릭시 progress bar 색깔 변하게 하기
// 3-3. 최대 순번값이 되었을때 next 버튼 disabled 처리 , 
//      최소 순번값이 되었을때 prev 버튼 disabled 처리

const steps = document.querySelectorAll('.step');
const btnPrev = document.querySelector('.btn_prev');
const btnNext = document.querySelector('.btn_next');
const stepBar = document.querySelector('.step_bar');


let currentactive = 1;


btnNext.addEventListener("click",()=>{

    currentactive++;
    if(currentactive > steps.length){
        currentactive = steps.length
    }
    console.log("next currentactive : " + currentactive + " steps.length : " + steps.length);

    moveBar();
})

btnPrev.addEventListener("click",()=>{

    currentactive--;
    if(currentactive < 1){
        currentactive = 1;
    }
    
    console.log("prev currentactive : " + currentactive + " steps.length : " + steps.length);

    moveBar();
})

function moveBar(){
    steps.forEach((step,idx)=> {
        if(currentactive>idx){
            step.classList.add('active');
        }
        else {
            step.classList.remove('active');
        }
    })

    // stepBar(progressbar)
    const actives = document.querySelectorAll('.active');
    // console.log(actives.length);
    // console.log(steps.length);
    stepBar.style.width = (actives.length-1)/(steps.length-1)*100+'%';

    // button disabled
    if(actives.length === steps.length){
        btnNext.disabled = true;
    }
    else if(actives.length === 1){
        btnPrev.disabled = true;
    }
    else{
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }

    
}

