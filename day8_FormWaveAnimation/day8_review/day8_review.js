const labels = document.querySelectorAll(".form-control label");
console.log(labels);

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx*50}ms">${letter}</span>`)
        .join('')
    console.log(label);
})

// 1. 라벨 글씨를 하나씩 분리 .split('')
// 2. 글씨 하나씩 분리 해놓은 것을 새로운 배열을 생성 .map((letter, idx) => `<span style="transition-delay: ${idx*50}ms">${letter}</span>`)
// 3. 배열의 모든 요소를 연결해 하나의 문자열로 생성 .join('')