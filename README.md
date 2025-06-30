# Proyecto E-commerce TP

---

## Funcionalidades

### 1. Listado de productos
- Se realiza una consulta a la API para obtener el listado de productos.
- Los productos se muestran en tarjetas (cards) con información básica.
- Se implementa un buscador que permite filtrar los productos por nombre o característica.

### 2. Modal de detalle de producto
- Al seleccionar un producto, se abre un modal que muestra el título, precio y descripción completa.
- El modal puede cerrarse con la ‘X’ o con el botón “Agregar al carrito”.
- Al agregar un producto al carrito, se almacena en `localStorage` y se muestra un mensaje confirmando la acción.

### 3. Carrito de compras
- El carrito se representa con un icono en la barra de navegación.
- Al hacer clic en el icono, se despliega un sidebar con el listado de productos seleccionados.
- Los productos del carrito mantienen persistencia gracias a `localStorage`.

### 4. Sidebar del carrito
- En el sidebar se muestran los productos con su imagen, título, cantidad y precio final.
- Se incluyen botones para:
  - Disminuir cantidad (con botón deshabilitado si cantidad es 1).
  - Aumentar cantidad (habilita el botón para disminuir).
  - Eliminar producto del carrito.
- Cada cambio actualiza el `localStorage` para mantener la persistencia.

### 5. Acciones finales del carrito
- Botón “Finalizar compra” que limpia el carrito, borra el `localStorage` y muestra un mensaje de confirmación.
- Botón “Eliminar todo” que elimina todos los productos y limpia el `localStorage`.

---

## Integrantes y contribuciones

| Nombre Completo      | Funcionalidad desarrollada                          | GitHub Username         |
|---------------------|----------------------------------------------------|------------------------|
| Cuello Pablo Agustin      | Agregar estilos, buscador y terminar el proceso de compra del producto                      | AgusCuelloIstea |
| Lages Sabrina Leyla  | Implementó las cards de productos, el modal de detalle y la lógica del carrito con persistencia en localStorage. Corrigió la visualización de productos en el carrito. | [SabrinaLages](https://github.com/SabrinaLages) |

