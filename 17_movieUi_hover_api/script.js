// api link >>> https://www.themoviedb.org/documentation/api
// 1. API_URL  https://[apidomain]/[apiversion]/[apiresource]&api_key=[apikey]&page=1
// 2. IMG_PATH https://image.tmdb.org/t/p/w[가로크기]
// 3. SEARCH_API https://api.themoviedb.org/3/search/movie?api_key=[apikey]&query='

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popluarity.desc&api_key=[apikey]c&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=[apikey]&query='"

const form = document.querySelector("#form")
const search = document.querySelector("#search")
const main = document.querySelector("#main")

// 실행 함수 : 설정함수를 실행
getMoives(API_URL);

// 설정 함수
// 영화를 가져오는 함수 (api를 가져옴)
async function getMoives(url){
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)

    // html 적용 함수_ 영화보여주기
    showMovies(data.results)
}

function showMovies(movies){
    // 데이터가 들어갈 태그 안 html 비우기  
    main.innerHTML = ''

    movies.forEach((movie) => {
         // 배열형태로 데이터 가져오기
         const { title, poster_path, vote_average, overview } = movie

         // div태그 생성후 class=movie 속성값 적용
         const movieEl = document.createElement("div")
         movieEl.classList.add('movie')

         movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3> ${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                   ${overview}
                </div>
         `
         main.appendChild(movieEl);
    });

}

function getClassByRate(vote){
    if(vote >= 8){
        return 'rating_green'
    }else if(vote >= 5){
        return 'rating_oreage'
    }else{
        return 'rating_red'
    }
}

// 폼태그 submit 눌렀을때 실행
// 검색에 따라 api 에서 가져오는 데이터를 변경
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const searchTearm = search.value

    if(searchTearm && searchTearm !== ''){
        getMoives(SEARCH_API + searchTearm)
        search.value = ''

    }else{
        window.location.reload()
    }

})
