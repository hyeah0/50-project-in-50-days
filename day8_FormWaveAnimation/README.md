# review

## 복습시 추가

### html

#### 1. button 그림자 효과

    .btn{
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    background-color: rgba(253, 144, 48, 0.625);
    box-shadow: 0px 2px 5px rgba(119, 65, 19, 0.625);}

## 복습시 헷갈렸던 부분

### html

#### 1. form

    form > div > input, label

    <form>
        <div class="form-control">
            <input type="text" required>
            <label for="">Email</label>
        </div>

### css

#### 1. input 클릭시 아웃라인 제거 ( outline : 0)

    .form-control input:focus,
    .form-control input:valid{
        outline: 0;
    }

#### 2. input 클릭시 label 위치 변경

    .form-control input:focus + label,
    .form-control input:focus + label{
    transform: translateY(-30px);
    }

    .form-control input:focus + label span,
    .form-control input:valid + label span{
        transform: translateY(-30px);
    }

#### 3. input 클릭시 label span이 튕기듯한 효과 (cubic-bezier)

    .form-control label span{
        display: inline-block;
        transition: 0.3s
        cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

### js

#### 1. 배열 각 요소에 함수

    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay: ${idx*50}ms">${letter}</span>`)
            .join('')
        console.log(label);
    })

    1. 라벨 글씨를 하나씩 분리
        .split('')
    2. 글씨 하나씩 분리 해놓은 것을 새로운 배열을 생성
        .map((letter, idx) => `<span style="transition-delay: ${idx*50}ms">${letter}</span>`)
    3. 배열의 모든 요소를 연결해 하나의 문자열로 생성
        .join('')
