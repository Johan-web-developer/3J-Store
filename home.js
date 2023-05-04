const selectorUno = document.querySelector('.carru')
selectorUno.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="Img-Home/camisa1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="Img-Home/camisa2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="Img-Home/camisa3.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
        </div> 
`
/* -------------------------- Crear Container --------------------------*/

const imgContenedor = document.querySelector('.cont-grid')
const imgCont = document.createElement('div')
imgCont.classList.add('container')
imgContenedor.appendChild(imgCont)

/* -------------------------- Proximos Productos -------------------------- */

for(i=1;i<7;i++) {
  const imgSelector = document.querySelector('.container')
  const imgDiv = document.createElement('div')
  imgDiv.classList.add(`box${i}`)
  imgSelector.appendChild(imgDiv)
  
  const imgSelectorU = document.querySelector(`.box${i}`)
  const img = document.createElement('img')
  img.src=`Img-Home/p${i}.png`
  imgSelectorU.appendChild(img)
}

// Modales 

const uno = document.querySelector('#uno')
uno.innerHTML = `
<section class="d-flex gap-1">
<button type="button" class="btn ba btn-dark" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Detalles
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Camiseta a Cuadros</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <center>
      <img src="Img-Home/b1.png">
      <h3><b>$120.000 COP</b></h3>
      <p>Camiseta a Rayas Elegante Roja/Azul/Blanca</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</section>
`

const dos = document.querySelector('#dos')
dos.innerHTML = `
<section class="d-flex gap-1">
<button type="button" class="btn ba btn-dark" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal3">
  Detalles
</button>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Camiseta Chispeada</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <center>
      <img src="Img-Home/b4.png">
      <h3><b>$90.000 COP</b></h3>
      <p>Camiseta Chispeada Azul</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</section>
`
const tres = document.querySelector('#tres')
tres.innerHTML = `
<section class="d-flex gap-1">
<button type="button" class="btn ba btn-dark" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal4">
  Detalles
</button>
<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Camiseta Tipo Jean</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <center>
      <img src="Img-Home/b5.png">
      <h3><b>$80.000 COP</b></h3>
      <p>Camiseta Tipo Jean Azul de Cuero</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</section>
`

const cuatro = document.querySelector('#cuatro')
cuatro.innerHTML = `
<section class="d-flex gap-1">
<button type="button" class="btn ba btn-dark" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal5">
  Detalles
</button>
<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Camiseta Negra Difuminada</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <center>
      <img src="Img-Home/c1.png">
      <h3><b>$110.000 COP</b></h3>
      <p>Camiseta Negra Chispeada Difuminada</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</section>
`

const cinco = document.querySelector('#cinco')
cinco.innerHTML = `
<section class="d-flex gap-1">
<button type="button" class="btn ba btn-dark" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal6">
  Detalles
</button>
<div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Camiseta Celeste Tipo Playa</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <center>
      <img src="Img-Home/c4.png">
      <h3><b>$65.000 COP</b></h3>
      <p>Camiseta Celeste Estampada Tipo Playa</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</section>
`

const seis = document.querySelector('#seis')
seis.innerHTML = `
<section class="d-flex gap-1">
<button type="button" class="btn ba btn-dark" style="width: 100%" data-bs-toggle="modal" data-bs-target="#exampleModal7">
  Detalles
</button>
<div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Camiseta Blanca Elegante</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <center>
      <img src="Img-Home/c5.png">
      <h3><b>$130.000 COP</b></h3>
      <p>Camiseta Celeste Blanca Elegante Estilo-Manchado</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</section>
`