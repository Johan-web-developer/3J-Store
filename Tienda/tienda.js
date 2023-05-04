// Selectores 

const tipoDePrenda = document.querySelector('#tipo')
const valorMinimoSelector = document.querySelector('#minimo')
const valorMaximoSelector = document.querySelector('#maximo')
const marcaDeRopa = document.querySelector('#marca')
const inpu = document.querySelector('#impu')
const input = document.querySelector('#imput')

// Objeto con los selects guardados

const datos = {
    tipoDato: "",
    valorMinimo: "",
    valorMaximo: "",
    marcaDato: "",
}

// Event Listener

document.addEventListener('DOMContentLoaded', ()=>{
    showCards(productos)
})

// Event Listener de los filtros

tipoDePrenda.addEventListener('input', (e)=>{
    datos.tipoDato = e.target.value

    filtrarValor ()
})

valorMinimoSelector.addEventListener('input', (e)=>{
    datos.valorMinimo = e.target.value

    filtrarValor ()
})

valorMaximoSelector.addEventListener('input', (e)=>{
    datos.valorMaximo = e.target.value

    filtrarValor ()
})

marcaDeRopa.addEventListener('input', (e)=>{
    datos.marcaDato = e.target.value

    filtrarValor ()
})

inpu.addEventListener('keyup', (e)=>{
    datos.marcaDato = e.target.value.toLowerCase()

    filtrarValor ()
})

input.addEventListener('keyup', (e)=>{
    datos.tipoDato = e.target.value.toLowerCase()

    filtrarValor ()
})

// Funcion para mostrar cards

function showCards(productos){

// Cards

    const containerCards = document.querySelector('#section-catalogo')

    limpiar() // Limpiar

    productos.forEach((producto)=>{
        const productoHTML = document.createElement('article')
        const {precio,imagen} = producto
        containerCards.appendChild(productoHTML)
        productoHTML.innerHTML = `
    
        <div class="card-img">
        <h5 class="card-tittle">${precio}</h5>
        <img class="catalogo-img" src="../${imagen}">
        </div>
        `     
    })
}

// Funcion filter de alto nivel

function filtrarValor(){
    limpiar()
    const resultado = productos
    .filter(filtrarTipo)
    .filter(filtrarMin)
    .filter(filtrarMax)
    .filter(filtrarMarca)
    showCards(resultado)
    if(!resultado.length){
        const errorDiv = document.querySelector('#pe')
        const mensajeError = document.createElement('article')
        mensajeError.innerHTML = `
        <p id="pe">Results Not Found</p>
        `
        errorDiv.appendChild(mensajeError)
      } 
}

function filtrarTipo(producto){
    if (datos.tipoDato){
        return producto.tipo === datos.tipoDato
    }
    return producto
}

function filtrarMin(producto){
    if (datos.valorMinimo){
        return producto.valor >= datos.valorMinimo
    }
    return producto
}

function filtrarMax(producto){
    if (datos.valorMaximo){
        return producto.valor <= datos.valorMaximo
    }
    return producto
}

function filtrarMarca(producto){
    if (datos.marcaDato){
        return producto.nombre === datos.marcaDato
    }
    return producto
}

function limpiar(){
    let m = document.querySelectorAll('article')
    for(let n = 0;n<m.length;n++){
        m[n].remove()
    }
}