# review

## 복습시 헷갈린 부분

### js

#### 1.요소 클릭시 넓이 키우는 것은 가능 했으나, 나머지 요소들이 줄어들게 하기 (22.04.16)

    ** class 를 지우는 function 작성 필요

    function remove(){
    imgs.forEach((season)=>{
    season.classList.remove('active');
    })
    }
