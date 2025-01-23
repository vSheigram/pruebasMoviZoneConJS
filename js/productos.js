// DOM Capturas
const contenedorProductos = document.querySelector("#contenedor-productos");
const checkboxes = document.querySelectorAll("#filter-form .form-check-input");
const minPriceSelect = document.querySelector("#min-price");
const maxPriceSelect = document.querySelector("#max-price");
const searchInput = document.createElement("input");
const sortSelect = document.createElement("select");
const noResultsMessage = document.createElement("p");

// Configuración del buscador
searchInput.type = "text";
searchInput.placeholder = "Buscar productos...";
searchInput.classList.add("form-control", "mb-3");
searchInput.style.marginBottom = "1rem";
document.querySelector("#filter-form").prepend(searchInput);

// Configuración del filtro de orden
sortSelect.classList.add("form-select", "mb-3");
sortSelect.innerHTML = `
    <option value="default">Ordenar por...</option>
    <option value="name-asc">Nombre (A-Z)</option>
    <option value="name-desc">Nombre (Z-A)</option>
    <option value="price-asc">Precio (menor a mayor)</option>
    <option value="price-desc">Precio (mayor a menor)</option>
`;
searchInput.after(sortSelect);

// Configuración del mensaje de "No se encontraron resultados"
noResultsMessage.textContent = "No se encontró lo que busca.";
noResultsMessage.style.display = "none";
noResultsMessage.style.color = "#a0b4d9";
contenedorProductos.parentElement.append(noResultsMessage);

let productos = [];

// Función para cargar productos desde un archivo JSON
function cargarProductosJSON() {
    fetch("../json/productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            productos = data; // Almacena los productos en la variable global
            cargarProductos();
        })
        .catch(error => {
            console.error("Error al cargar productos:", error);
        });
}

// Función para cargar los productos en el HTML
function cargarProductos(productosFiltrados = productos) {
    contenedorProductos.innerHTML = "";
    if (productosFiltrados.length === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
        productosFiltrados.forEach(producto => {
            const article = document.createElement("article");
            article.classList.add("product-item", "col-md-4", "mb-4");

            article.innerHTML = `
                <div class="card product-card border border-secondary">
                    <img src="${producto.imagen}" class="product-image card-img-top" alt="${producto.nombre}">
                    <div class="card-body card-body-color">
                        <h2 class="product-title card-title">${producto.nombre}</h2>
                        <p class="product-price card-text">$${producto.precio.toLocaleString("es-AR")}</p>
                        <button id="${producto.id}" class="boton-comprar btn btn-danger">Comprar</button>
                    </div>
                </div>
            `;
            contenedorProductos.append(article);
        });
    }
}

// Función para ordenar productos
function ordenarProductos(productosFiltrados) {
    const sortBy = sortSelect.value;
    switch (sortBy) {
        case "name-asc":
            return productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        case "name-desc":
            return productosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
        case "price-asc":
            return productosFiltrados.sort((a, b) => a.precio - b.precio);
        case "price-desc":
            return productosFiltrados.sort((a, b) => b.precio - a.precio);
        default:
            return productosFiltrados;
    }
}

// Función para filtrar productos
function filtrarProductos() {
    const categoriasSeleccionadas = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const minPrice = parseFloat(minPriceSelect.value) || 0;
    const maxPrice = parseFloat(maxPriceSelect.value) || Infinity;
    const searchQuery = searchInput.value.toLowerCase().trim();

    let productosFiltrados = productos.filter(producto => {
        const cumpleCategoria = categoriasSeleccionadas.length === 0 ||
            categoriasSeleccionadas.includes(producto.categoria.idCategoria);
        const cumplePrecio = producto.precio >= minPrice && producto.precio <= maxPrice;
        const cumpleBusqueda = producto.nombre.toLowerCase().includes(searchQuery);
        return cumpleCategoria && cumplePrecio && cumpleBusqueda;
    });

    productosFiltrados = ordenarProductos(productosFiltrados);

    cargarProductos(productosFiltrados);
}

// Evento delegado para capturar clics en los botones "Comprar"
contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-comprar")) {
        const idProducto = e.target.id;
        agregarProductoAlCarrito(idProducto);
    }
});

// Eventos para aplicar filtros dinámicamente
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filtrarProductos);
});

minPriceSelect.addEventListener("change", filtrarProductos);
maxPriceSelect.addEventListener("change", filtrarProductos);
sortSelect.addEventListener("change", filtrarProductos);
searchInput.addEventListener("input", filtrarProductos);

// Botón de resetear filtros
const resetFiltersButton = document.querySelector("#reset-filters");

// Función para resetear los filtros
function resetearFiltros() {
    // Reiniciar filtros de categoría
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Reiniciar selectores de rango de precios
    minPriceSelect.value = "0";
    maxPriceSelect.value = "Infinity";

    // Reiniciar buscador
    searchInput.value = "";

    // Reiniciar filtro de orden
    sortSelect.value = "default";

    // Cargar todos los productos
    cargarProductos();
}

// Evento para el botón de resetear filtros
resetFiltersButton.addEventListener("click", resetearFiltros);

// Cargar los productos desde el JSON al iniciar la página
cargarProductosJSON();