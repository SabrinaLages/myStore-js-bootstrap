export function crearSeccionCarrito(carrito) {
  const containerCarrito = document.querySelector(".offcanvas-body");
  containerCarrito.innerHTML = '';

  if (carrito.length === 0) {
    containerCarrito.innerHTML = `<p class="text-muted">El carrito está vacío.</p>`;
    return;
  }

  window.actualizarCantidad = function (id, cambio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const index = carrito.findIndex(item => item.id === id);

    if (index !== -1) {
      carrito[index].cantidad += cambio;
      if (carrito[index].cantidad <= 0) {
          carrito.splice(index, 1);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      crearSeccionCarrito(carrito);
    }
  };

  window.eliminarProducto = function (id) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito = carrito.filter(item => item.id !== id);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      crearSeccionCarrito(carrito);
  };

  carrito.forEach((c, index) => {
    const total = (c.price * c.cantidad).toFixed(2);

    const template = `
      <div class="card mb-3">
        <div class="row g-0 align-items-center">
          <div class="col-4">
            <img src="${c.image}" class="img-fluid rounded-start" alt="${c.title}">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h6 class="card-title mb-2 text-truncate">${c.title}</h6>
              <p class="mb-1">Total: <strong>$${total}</strong></p>
              <div class="d-flex align-items-center gap-2 mb-2">
                <button class="btn btn-sm btn-outline-secondary" onclick="actualizarCantidad(${c.id}, -1)">-</button>
                <span>${c.cantidad}</span>
                <button class="btn btn-sm btn-outline-secondary" onclick="actualizarCantidad(${c.id}, 1)">+</button>
              </div>
              <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${c.id})">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `;

    containerCarrito.innerHTML += template;
  });

  const accionesFinales = `
    <div class="mt-4 d-grid gap-2">
      <button class="btn btn-outline-danger" id="btn-vaciar-carrito">
        <i class="bi bi-trash3"></i> Vaciar carrito
      </button>
      <button class="btn btn-success" id="btn-finalizar-compra" data-bs-toggle="modal" data-bs-target="#modalFinalizarCompra">
        <i class="bi bi-credit-card"></i> Finalizar compra
      </button>
    </div>
  `;
  containerCarrito.innerHTML += accionesFinales;

  document.getElementById('btn-vaciar-carrito').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    crearSeccionCarrito([]);
  });

  document.getElementById('btn-finalizar-compra').addEventListener('click', () => {
    localStorage.removeItem('carrito');

    const offcanvasEl = document.getElementById('offcanvasRight');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
    offcanvas.hide();
    crearSeccionCarrito([]);
  });

}
