const carrito = [];

// Función para agregar al carrito
export function agregarAlCarrito(index) {
    const producto = arrayProductos[index];
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar el carrito
export function actualizarCarrito() {
    const carritoItems = document.getElementById('carritoItems');
    const carritoTotal = document.getElementById('carritoTotal');

    carritoItems.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        item.innerHTML = `
            ${producto.marca} - ${producto.modelo} - $${producto.precio.toLocaleString()}
            <button class="btn btn-danger btn-sm float-end" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoItems.appendChild(item);
    });

    carritoTotal.innerText = `Total: $${total.toLocaleString()}`;
}

// Función para eliminar del carrito
export function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}