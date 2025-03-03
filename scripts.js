const form = document.querySelector('.formulario-contato')
const mascara = document.querySelector('.mascara-formulario')
function clickBotaoContato(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function clickBotaoFechar(){
    form.style.left = "-500px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}