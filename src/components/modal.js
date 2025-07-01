export function createModal(producto) {
    const containerModal = document.querySelector("#exampleModal");

    containerModal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-4">
        <div class="modal-header border-0 pb-0">
          <h1 class="modal-title fs-4 fw-semibold" id="exampleModalLabel">${producto.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        
        <div class="modal-body pt-2">
          <div class="text-center mb-4">
            <img src="${producto.image}" class="img-fluid rounded" alt="${producto.title}" style="max-height: 350px; object-fit: cover;">
          </div>
          <p class="mb-3">${producto.description}</p>
          <p class="fs-5 fw-bold text-success">$${producto.price}</p>
        </div>
        
        <div class="modal-footer border-0 pt-0 d-flex justify-content-rigth">
          <button type="button" class="btn btn-agregar text-success border-success" onclick="guardarEnCarrito(${producto.id})">
            <i class="bi bi-bag-plus me-1"></i> Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `;

}