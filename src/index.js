import { createCards, allProducts, renderCards } from "./components/card.js";

localStorage.getItem("carrito") || localStorage.setItem("carrito", JSON.stringify([]));

createCards();

document.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.getElementById('exampleModal');

  if (modalEl) {
    modalEl.addEventListener('hidden.bs.modal', () => {
      modalEl.innerHTML = '';
    });
  }

  const inputSearch = document.getElementById('search');
  if (inputSearch) {
    inputSearch.addEventListener('input', () => {
      const texto = inputSearch.value.toLowerCase().trim();
      const filtrados = allProducts.filter(p => p.title.toLowerCase().includes(texto));
      renderCards(filtrados);
    });
  }
});
