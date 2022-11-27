# review

## 복습시 기억 안나는 부분(헷갈리는 부분)

### js

#### 1. event.preventDefault(); : 버튼 클릭시 초기화 방지

#### 2. input.focus(); : 클릭시 input 에 바로 입력할 수 있게 focus

    btn.addEventListener("click",(event)=>{
        event.preventDefault();
        input.classList.toggle("active");
        input.focus();
    })
