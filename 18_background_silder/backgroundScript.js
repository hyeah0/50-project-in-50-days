// html 가져오기 -------------------------------------------------------
// body 가져오기
const body = document.body

// 슬라이더들 배열로 가져오기
const slides = document.querySelectorAll('.slide')

// 왼쪽, 오른쪽 버튼 가져오기
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// 실행된 슬라이더(배열로 가져온 slides의 인덱스(순서))
let activeSlide = 0;


// 함수 ---------------------------------------------------------------
// slides[0] 번째에 이미지 가져오기
function setBgToBody(){
    // slides[0] 번째에 이미지
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// 현재 실행중인 슬라이드에 active 클래스 추가
function setActiveSlide(){

    // 1. 각 슬라이드 별로 클래스로 지정된 active 삭제
    slides.forEach(slide=>{
        slide.classList.remove('active')
    })

    // 2. 현재 실행중인 슬라이드에 active 클래스 추가
    slides[activeSlide].classList.add('active')
}

// 오른쪽 버튼클릭시 슬라이드 움직이는 이벤트 실행
rightBtn.addEventListener('click', ()=>{
   // 현재 실행중인 슬라이드 +1
    activeSlide++

    if(activeSlide > slides.length -1 ){
        activeSlide = 0;
    }

    setBgToBody();      // 이미지 가져오는 함수
    setActiveSlide();   // 실행중 이미지에 class 추가
})

// 왼쪽 버튼클릭시 슬라이드 움직이는 이벤트 실행
leftBtn.addEventListener('click', ()=>{
   // 현재 실행중인 슬라이드 -1
    activeSlide--

    if(activeSlide < 0  ){
        activeSlide = slides.length -1;
    }

    setBgToBody();      // 이미지 가져오는 함수
    setActiveSlide();   // 실행중 이미지에 class 추가
})


// 함수실행 -------------------------------------------------------------
setBgToBody();
