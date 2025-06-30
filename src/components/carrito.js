
export function crearSeccionCarrito(carrito) {
  let containerCarrito = document.querySelector(".offcanvas-body");


  containerCarrito.innerHTML = '';

  carrito.forEach(c => {
    let template = `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${c.image}" class="img-fluid rounded-start" alt="${c.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-truncate">${c.title}</h5>
                <p class="card-text">${c.description || "Sin descripción"}</p>
                <p class="card-text"><strong>$${c.price}</strong> - Cantidad: ${c.cantidad}</p>
              </div>
            </div>
          </div>
        </div>
        `;
    containerCarrito.innerHTML += template;
  });
}
