import { crearSeccionCarrito } from "../components/carrito.js";


export function guardarProductosEnCarrito(producto) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let idx = carrito.findIndex((item) => item.id === producto.id);

    if (idx !== -1) {
        carrito[idx].cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    crearSeccionCarrito(carrito);
}

