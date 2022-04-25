const labels = document.querySelectorAll("label");
console.log(labels);

labels.forEach((label)=>{
    label.innerHTML = label.innerText.split('')
                      .map((label,idx)=>
                          `<span style="transition-delay:${idx*50}ms">${label}</span>`)
                      .join('')
                      
})