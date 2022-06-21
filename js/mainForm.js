const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}
focoEnCampos()

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de ENVIAR"
})

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosUser()
    alert(`Gracias por su compra 😃`)
})

function guardarDatosUser(){
    debugger
    const datosUser = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        email: inputEmail.value
    }
    let str = JSON.stringify(datosUser)
    localStorage.setItem("datosUser", str)
}

function recuperoDatosUser() {
    if (localStorage.getItem("datosUser")){
        const datosUser = JSON.parse(localStorage.getItem("datosUser"))
            inputNombre.value = datosUser.nombre
            inputTelefono.value = datosUser.telefono
            inputEmail.value = datosUser.email
    }
    const carrito = JSON.parse(localStorage.getItem("carrito"))
    document.querySelector("#productosComprados").innerText = carrito.join(" - ")
}

recuperoDatosUser()