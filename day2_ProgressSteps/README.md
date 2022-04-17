# review

### js

#### 1. step 색상 바꾸기

#### 2.step_bar 색상바꾸기

#### 3.prev.next 버튼 disabled 설정

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
            if(currentactive > idx){
            step.classList.add('active');
            } else {
            step.classList.remove('active');
            }
        })

        //  ---- stepBar(progressbar) ----
        const actives = document.querySelectorAll('.active');
        stepBar.style.width = (actives.length-1)/(steps.length-1)*100+'%';

         // actives.length = 실행중인 순번
        // steps.length = 순번의 총 개수

        // ---- button disabled ----
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
