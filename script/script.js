const btnColorMode = document.querySelector("#mode")
const iconTema = btnColorMode.querySelector("img")
const temaSalvo = localStorage.getItem("tema");
const ham_menu = document.querySelector(".ham-menu")
const nav_menu = document.querySelector(".nav-menu")

// Verifica o tema no LocalStorage
if (temaSalvo === "escuro") {
    document.body.classList.add("temaEscuro");
    iconTema.src = "assets/img/icons/brightness-high.svg";
}

// Troca o tema ao apertar o botão
btnColorMode.addEventListener("click", () =>  {
    if (document.body.classList.contains("temaEscuro")){
        
        document.body.classList.remove("temaEscuro")
        iconTema.src = "assets/img/icons/brightness-high-fill.svg"
        localStorage.setItem("tema", "claro")

    } else {

        document.body.classList.add("temaEscuro")
        iconTema.src = "assets/img/icons/brightness-high.svg"
        localStorage.setItem("tema", "escuro")
    }
})

ham_menu.addEventListener("click", () => {
    ham_menu.classList.toggle("ativo")
    nav_menu.classList.toggle("ativo")
})
nav_menu.querySelectorAll("a").forEach(e => 
    e.addEventListener("click", () => {
            ham_menu.classList.remove("ativo")
            nav_menu.classList.remove("ativo")
    }))