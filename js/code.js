function loadTrends (){
    fetch('js/data.json')
    .then(res => res.json())
    .then(trends => {
        const section = document.querySelector("section");
        section.innerHTML = trends.map ((trend) => `<div><h2>${trend.name}</h2><p>${trend.description}</p><button>${trend.category}</button></div>`).join("");
      })
}

function changeStyles() {
    document.body.classList.toggle('dark')
}

document.querySelector('.btn').addEventListener('click', loadTrends)
document.querySelector('.btn_style').addEventListener('click', changeStyles)