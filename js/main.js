function cargarProductos() {
    //debugger
    listadoFrutas.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto
              li.id = producto + "Prod"
              li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
              listadoFrutas.append(li)
    }
}

cargarProductos()

function agregarAlCarrito(prod) {
    if (prod.trim() !== "") {
        debugger
        carrito.push(prod) //debajo de esto debería guardar el carrito
        guardoCarrito()
        const liNuevoProducto = document.createElement("li")
              liNuevoProducto.className = "collection-item blue-text"
              liNuevoProducto.innerText = prod
              liNuevoProducto.id = prod + "EnCarrito"
              liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
              listadoCarrito.append(liNuevoProducto)
    }
}

function removerDelCarrito(prod) {
    //debugger
    const productoAremover = document.getElementById(`${prod}`)
          productoAremover.remove()
          item = carrito.indexOf(productoAremover.innerText)
          if (item >= 0) {
              carrito.splice(item, 1)
              //guardo Carrito
          }
          console.warn(`${prod} ha sido eliminado del carrito.`)
}

function guardoCarrito() {
    if (carrito.lenght > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

function recuperoCarrito() {
    debugger
    let miCarrito
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))){
        miCarrito.forEach( fruta => {
            carrito.push(fruta)
        });
    }
}

recuperoCarrito()