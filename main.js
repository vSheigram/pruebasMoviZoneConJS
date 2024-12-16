// Importar funciones desde carrito.js
import { agregarAlCarrito, cargarCarrito } from './carrito.js';

// Función para cargar los productos en la página
function cargarProductos() {
    const contenedorProductos = document.getElementById('productos');

    arrayProductos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'm-3');
        card.style.width = "18rem";
        card.innerHTML = `
            <img src="./img/placeholder.jpg" class="card-img-top" alt="${producto.modelo}">
            <div class="card-body">
                <h5 class="card-title">${producto.marca} - ${producto.modelo}</h5>
                <p class="card-text">Precio: $${producto.precio.toLocaleString()}</p>
                <button class="btn btn-primary" id="agregar-btn-${index}">Añadir al carrito</button>
            </div>
        `;
        contenedorProductos.appendChild(card);

        // Enlazar el evento de clic con la función agregarAlCarrito
        document.getElementById(`agregar-btn-${index}`).addEventListener('click', function () {
            agregarAlCarrito(index);
        });
    });
}

// Cargar el carrito desde localStorage (si existe)
cargarCarrito();

// Cargar productos al iniciar
cargarProductos();