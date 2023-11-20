let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

console.log(formulario)

function cliqueiNoBotao(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function sumirFormulario(){
    formulario.style.left = "-280px"
    mascara.style.visibility = "hidden"
}