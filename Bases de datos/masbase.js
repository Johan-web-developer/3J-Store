const productos = [
    {
        nombre: "Camisa Tipo Playa",
        id: 1,
        precio: "129.000 $COP",
        imagen: "../Img-Mas-Productos/img1.png",
    },
    {
        nombre: "Blusa Rosa Elegante",
        id: 2,
        precio: "159.000 $COP",
        imagen: "../Img-Mas-Productos/img2.png",
    },
    {
        nombre: "Camiseta Blanca Casual",
        id: 3,
        precio: "59.000 $COP",
        imagen: "../Img-Mas-Productos/img3.png",
    },
    {
        nombre: "Blusa Blanco/Negro",
        id: 4,
        precio: "149.000 $COP",
        imagen: "../Img-Mas-Productos/img4.png",
    },
    {
        nombre: "Camisa Azul Elegante",
        id: 5,
        precio: "119.000 $COP",
        imagen: "../Img-Mas-Productos/img5.png",
    },
    {
        nombre: "Blusa Roja Formal",
        id: 6,
        precio: "139.000 $COP",
        imagen: "../Img-Mas-Productos/img6.png",
    },
    {
        nombre: "Camiseta Estampada Casual",
        id: 7,
        precio: "89.000 $COP",
        imagen: "../Img-Mas-Productos/img7.png",
    },
    {
        nombre: "Blusa Dorada Elegante",
        id: 8,
        precio: "189.000 $COP",
        imagen: "../Img-Mas-Productos/img8.png",
    },
    {
        nombre: "Camisa Gris Casual",
        id: 9,
        precio: "139.000 $COP",
        imagen: "../Img-Mas-Productos/img9.png",
    },
    {
        nombre: "Conjunto Rosa",
        id: 10,
        precio: "219.000 $COP",
        imagen: "../Img-Mas-Productos/img10.png",
    },
    {
        nombre: "Pantalon Beige",
        id: 11,
        precio: "149.000 $COP",
        imagen: "../Img-Mas-Productos/img11.png",
    },
    {
        nombre: "Pantalon Negro Bota-Campana",
        id: 12,
        precio: "119.000 $COP",
        imagen: "../Img-Mas-Productos/img12.png",
    },
    {
        nombre: "Pantalon Rojo a cuadros",
        id: 13,
        precio: "79.000 $COP",
        imagen: "../Img-Mas-Productos/img13.png",
    },
    {
        nombre: "Licra Gris",
        id: 14,
        precio: "159.000 $COP",
        imagen: "../Img-Mas-Productos/img14.png",
    },
    {
        nombre: "Pantalon Negro Elegante",
        id: 15,
        precio: "119.000 $COP",
        imagen: "../Img-Mas-Productos/img15.png",
    },
]

const selector = document.querySelector('#container')

productos.forEach((producto)=>{
    const {id,imagen,nombre,precio} = producto;
        const divBox = document.createElement('div');
        divBox.innerHTML = `
                <div class="container"${id}">
                    <img src="${imagen}">
                <div class="d-flex gap-1">
                <a href="#" class="btn btn-dark mt-3" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal${id}" imagen="${imagen}" name="${nombre}">
                    Detalles
                </a>
                <a href="#" class="btn btn-secondary mt-3 carrito" id="${id}">+</a>
                </div>
                <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h2 class="modal-title fs-5" id="exampleModalLabel">${nombre}</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="gridCards">
                <div>
                <img src="${imagen}">
                <h5>${nombre}</h5>
                <p>${precio}</p>
                </div>
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
        </div>
        ` 
    selector.appendChild(divBox);
})

// Carrito JS

const images = document.querySelector('#container')
let array = []
const body = document.querySelector('#bodies')
const borrar = document.querySelector('#deleteProductos')
const vaciar = document.querySelector('#vaciarCarrito')

// Listener 

images.addEventListener("click",selectDiv)
borrar.addEventListener("click", deletePr)

function deletePr(e){
clean()
        if (e.target.classList.contains("delete")) {
            const deleteButton = e.target.getAttribute("id")
            console.log(deleteButton);
            array = array.filter((chao)=> chao.id !== deleteButton)
        }
    inyect()
}

// Local Storage 

document.addEventListener('DOMContentLoaded',()=>{
    array = JSON.parse(localStorage.getItem('contratadosCart')) || [];
    inyect()
})

function selectDiv(e){
    e.preventDefault()
    if (e.target.classList.contains("carrito")) {
        const select = e.target.parentElement.parentElement
        console.log(select);
        objectCart(select)
    }
}

function objectCart(selectCart) {
    clean()
    const prendas = {
        imagen: selectCart.querySelector("img").src,
        nombre: selectCart.querySelector("h5").textContent,
        precio: selectCart.querySelector("p").textContent,
        id: selectCart.querySelector('.carrito').getAttribute("id")
    }
    array = [...array,prendas]
    inyect()
}

vaciar.addEventListener('click', ()=>{
    cleanVacio()
})

function inyect() {
    clean()
    array.forEach((arrai)=>{
        const {imagen, nombre,precio, id} = arrai
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>
        <img src="${imagen}" class="img-fluid" width ="160px">
        </td>
        <td>
        <p>${precio}</p>
        </td>
        <td>
        <p>${nombre}</p>
        </td>
        <td>
        <center>
        <a href="#" class="btn btn-danger delete" id="${id}">X</a>
        </center>
        </td>
        `
        body.appendChild(row)
    })

    appStorage();
}

function appStorage () {
    localStorage.setItem('contratadosCart', JSON.stringify(array))
}

function clean(){
    body.innerHTML = ""
}

function cleanVacio(){
    body.innerHTML = ""
    array = []
}