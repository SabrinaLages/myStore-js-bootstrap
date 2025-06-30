import { crearSeccionCarrito } from "../components/carrito.js";


export function guardarProductosEnCarrito(producto) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let idx = carrito.findIndex((item) => item.id === producto.id); // si el producto existe en el carrito

    if (idx !== -1) {
        carrito[idx].cantidad += 1; //si existe actualizo la cantidad
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    crearSeccionCarrito(carrito);
}


//export function validarProductoEnCarrito(carrito, producto) {

//  let idx = carrito.findIndex((item) => item.id == producto.id); // si el producto existe en el carrito
//if (idx != -1) {
//  carrito[idx].cantidad += 1; //si existe actualizo la cantidad
//} else {
//  producto.cantidad = 1;
//carrito.push(producto);
//}
//}

//function guardarEnLocalStorage(carrito) {
//  localStorage.setItem("carrito", JSON.stringify(carrito));
//}