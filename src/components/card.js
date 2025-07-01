import { guardarProductosEnCarrito } from "../utils/carritoStorage.js";
import { getProducts } from "./../api/api.js";
import { createModal } from "./modal.js";

export let allProducts = [];

export function createCards() {
  getProducts().then(data => {
    allProducts = data;

    window.mostrarDetalle = (id) => {
      const producto = allProducts.find(p => p.id === id);
      createModal(producto);
    };

    window.guardarEnCarrito = (id) => {
      const producto = allProducts.find(p => p.id === id);
      guardarProductosEnCarrito(producto);
      const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
      if (modal) modal.hide();
    };

    renderCards(allProducts);
  });
}


export function renderCards(productos) {
  const container = document.querySelector('#list-products');
  container.innerHTML = '';

  productos.forEach(p => {
    const template = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 card-hover">
          <img src="${p.image}" class="card-img-top p-3" alt="${p.title}" style="height: 200px; object-fit: contain;">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title fw-light">${p.title}</h5>
            <button type='button' class='btn btn-primary mt-1 btn-detalle' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='mostrarDetalle(${p.id})'>Mas detalle</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += template;
  });
}