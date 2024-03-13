let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

// const indicador = document.getElementById('indicador')
// const body = document.querySelector('body')
// const themeSystem = localStorage.getItem("themeSystem") || "dark"

// indicador.addEventListener('click', ()=> {
//     let oldTheme = localStorage.getItem("themeSystem") || "dark"
//     let newTheme = oldTheme == "dark" ? "light" : "dark"

//     localStorage.setItem("themeSystem", newTheme)
//     defineCurrentTheme(newTheme)
// })

// function defineCurrentTheme(theme) {
    
//     document.documentElement.setAttribute("data-theme", theme)
//     if (theme == "dark") {
//         indicador.innerHTML = lightSvg;
//     } else {
//         indicador.innerHTML = darkSvg;
//     }
// }

// defineCurrentTheme(themeSystem)