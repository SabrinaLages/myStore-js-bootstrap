

export function createModal(producto) {
    const containerModal = document.querySelector("#exampleModal");

    containerModal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${producto.image}" class="img-fluid mb-3" alt="${producto.title}" style="height: 350px; object-fit: cover">
          <p>${producto.description}</p>
          <p><strong>$${producto.price}</strong></p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick='guardarEnCarrito(${producto.id})'> <span><i class="bi bi-bag-plus"></i></span> Agregar a carrito</button>
      </div>
      </div>
    </div>
  `;

}