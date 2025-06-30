//Aca empiezo a llamar las funciones

import { createCards } from "./components/card.js";


//localStorage 
localStorage.getItem("carrito") || localStorage.setItem("carrito", JSON.stringify([]));

createCards()

// Esperar a que el DOM cargue completamente antes de acceder al modal
document.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('exampleModal');

    if (modalEl) {
        modalEl.addEventListener('hidden.bs.modal', () => {
            modalEl.innerHTML = '';
        });
    }
});