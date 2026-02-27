
const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function quandoClicar() {
    formulario.style.left = "40%"
    formulario.style.tranform = "translatex(-40%)"
    mascara.style.visibility = "visible"
}

function desaparecer() {
    formulario.style.left = "-316px"
    mascara.style.visibility = "hidden"

}