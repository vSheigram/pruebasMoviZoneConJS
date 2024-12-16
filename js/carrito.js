// Array global del carrito
const carrito = [];

// Función para agregar un producto al carrito
export function agregarAlCarrito(index) {
    const producto = arrayProductos[index]; // arrayProductos debería estar importado o ser global
    carrito.push(producto);
    actualizarCarrito();
    guardarCarrito();  // Guardar en el almacenamiento local (opcional)
}

// Función para eliminar un producto del carrito
export function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    guardarCarrito();  // Guardar en el almacenamiento local (opcional)
}

// Función para actualizar la vista del carrito en el offcanvas
export function actualizarCarrito() {
    const carritoItems = document.getElementById('carritoItems');
    const carritoTotal = document.getElementById('carritoTotal');
    carritoItems.innerHTML = '';  // Limpiar los productos actuales

    let total = 0;

    // Mostrar productos del carrito
    carrito.forEach((producto, index) => {
        total += producto.precio;
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.innerHTML = `
            ${producto.marca} - ${producto.modelo} - $${producto.precio.toLocaleString()}
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoItems.appendChild(item);
    });

    carritoTotal.innerText = `Total: $${total.toLocaleString()}`;
}

// Función para guardar el carrito en localStorage (opcional)
export function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage (opcional)
export function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoGuardado.forEach(producto => carrito.push(producto));
    actualizarCarrito();
}