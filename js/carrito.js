// Función para agregar un producto al carrito
function agregarProductoAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);

    if (!producto) return;

    const productoExistente = productosEnCarrito.find(p => p.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        productosEnCarrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
    mostrarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    const carritoItems = document.querySelector("#carritoItems");
    const carritoTotal = document.querySelector("#carritoTotal");

    if (!carritoItems || !carritoTotal) return;

    carritoItems.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        li.innerHTML = `
            <div>
                <h6>${producto.nombre}</h6>
                <p>
                    <button class="btn btn-sm btn-light btn-decrementar" data-id="${producto.id}">-</button>
                    <span>${producto.cantidad}</span>
                    <button class="btn btn-sm btn-light btn-incrementar" data-id="${producto.id}">+</button>
                </p>
            </div>
            <div>
                <span>$${(producto.precio * producto.cantidad).toLocaleString("es-AR")}</span>
                <button class="btn btn-sm btn-danger btn-eliminar" data-id="${producto.id}">X</button>
            </div>
        `;
        carritoItems.appendChild(li);
    });

    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    carritoTotal.textContent = `Total: $${total.toLocaleString("es-AR")}`;

    sincronizarCarrito();
    agregarEventosCarrito();
}

// Función para asignar eventos a los botones
function agregarEventosCarrito() {
    const botonesIncrementar = document.querySelectorAll(".btn-incrementar");
    const botonesDecrementar = document.querySelectorAll(".btn-decrementar");
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");

    botonesIncrementar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;
            const producto = productosEnCarrito.find(p => p.id === id);
            if (producto) {
                producto.cantidad++;
                actualizarCarrito();
            }
        });
    });

    botonesDecrementar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;
            const producto = productosEnCarrito.find(p => p.id === id);
            if (producto && producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                productosEnCarrito = productosEnCarrito.filter(p => p.id !== id);
            }
            actualizarCarrito();
        });
    });

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;
            productosEnCarrito = productosEnCarrito.filter(p => p.id !== id);
            actualizarCarrito();
        });
    });
}

// Actualizar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", actualizarCarrito);