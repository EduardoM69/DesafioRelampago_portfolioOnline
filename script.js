const btnColorMode = document.querySelector("#mode")
const iconTema = btnColorMode.querySelector("img")
const temaSalvo = localStorage.getItem("tema");

// Verifica o tema no LocalStorage
if (temaSalvo === "escuro") {
    document.body.classList.add("temaEscuro");
    iconTema.src = "img/icons/brightness-high.svg";
}

// Troca o tema ao apertar o botão
btnColorMode.addEventListener("click", () =>  {
    if (document.body.classList.contains("temaEscuro")){
        
        document.body.classList.remove("temaEscuro")
        iconTema.src = "img/icons/brightness-high-fill.svg"
        localStorage.setItem("tema", "claro")

    } else {

        document.body.classList.add("temaEscuro")
        iconTema.src = "img/icons/brightness-high.svg"
        localStorage.setItem("tema", "escuro")
    }
})