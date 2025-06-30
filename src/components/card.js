import { guardarProductosEnCarrito } from "../utils/carritoStorage.js";
import { getProducts } from "./../api/api.js";
import { createModal } from "./modal.js";


let allProducts = [];
export function createCards() {
    let container = document.querySelector('#list-products');



    getProducts().then((data) => {
        allProducts = data;

        window.mostrarDetalle = (id) => {
            const producto = allProducts.find(p => p.id === id);
            createModal(producto);
        }

        window.guardarEnCarrito = (id) => {
            const producto = allProducts.find(p => p.id === id);
            guardarProductosEnCarrito(producto);
        };

        data.forEach((p) => {
            let template =
                `<div class="col">
                 <div class="card">
                    <img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style= "height: 350px; object-fit:cover>
                    <div class="card-body">
                       <h5 class="card-title text-truncate">${p.title}</h5>
                       <button type='button' class='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='mostrarDetalle(${p.id})'>Mas detalle</button>
                    </div>
                </div>
            </div>`;

            container.innerHTML += template;
        });
    })
}