const btnLightMode = document.querySelector("#lightModeBtn")
const btnDarkMode = document.querySelector("#darkModeBtn")
// const body = document.body

const everything = document.querySelector("*")


// Dark Mode
btnDarkMode.addEventListener('click', ()=>everything.style.backgroundColor = "#222")
btnDarkMode.addEventListener('click', ()=>everything.style.color = '#eee')

// Light Mode
btnLightMode.addEventListener('click', ()=>everything.style.backgroundColor = "#eee")
btnLightMode.addEventListener('click', ()=>everything.style.color = '#222')
