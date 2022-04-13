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

# css

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
