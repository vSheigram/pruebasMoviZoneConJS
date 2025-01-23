// Array Productos
const productos = [
    // Samsung
    {
        id: "s21fe",
        nombre: "Samsung Galaxy S21 FE",
        imagen: "../img/s21fe.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(905999)
    },
    {
        id: "s22",
        nombre: "Samsung Galaxy S22",
        imagen: "../img/s22.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(1355999)
    },
    {
        id: "flip5",
        nombre: "Samsung Z Flip 5",
        imagen: "../img/flip5.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(1289999)
    },
    {
        id: "fold5",
        nombre: "Samsung Galaxy Fold 5",
        imagen: "../img/fold5.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(2219999)
    },
    {
        id: "s24ultra",
        nombre: "Samsung Galaxy S24 Ultra",
        imagen: "../img/s24ultra.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(2599999)
    },
    {
        id: "s24",
        nombre: "Samsung Galaxy S24",
        imagen: "../img/s24.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(1749999)
    },
    {
        id: "s23",
        nombre: "Samsung Galaxy S23",
        imagen: "../img/s23.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(1509999)
    },
    {
        id: "s23+",
        nombre: "Samsung Galaxy S23+",
        imagen: "../img/s23+.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(2199999)
    },
    {
        id: "a54",
        nombre: "Samsung Galaxy A54",
        imagen: "../img/a54.webp",
        categoria: {
            nombreCategoria: "Samsung",
            idCategoria: "samsung",
        },
        precio: Number(799999)
    },
    // Iphone
    {
        id: "iphone16Pro",
        nombre: "iPhone 16 Pro",
        imagen: "../img/iphone16Pro.webp",
        categoria: {
            nombreCategoria: "iPhone",
            idCategoria: "iphone",
        },
        precio: Number(6699900)
    },
    {
        id: "iphone15",
        nombre: "iPhone 15",
        imagen: "../img/iphone15.webp",
        categoria: {
            nombreCategoria: "iPhone",
            idCategoria: "iphone",
        },
        precio: Number(2899900)
    },
    {
        id: "iphone16",
        nombre: "iPhone 16",
        imagen: "../img/iphone16.webp",
        categoria: {
            nombreCategoria: "iPhone",
            idCategoria: "iphone",
        },
        precio: Number(5599900)
    },
    {
        id: "iphone14",
        nombre: "iPhone 14",
        imagen: "../img/iphone14.webp",
        categoria: {
            nombreCategoria: "iPhone",
            idCategoria: "iphone",
        },
        precio: Number(2399900)
    },
    {
        id: "iphone15pro",
        nombre: "iPhone 15 Pro",
        imagen: "../img/iphone15pro.webp",
        categoria: {
            nombreCategoria: "iPhone",
            idCategoria: "iphone",
        },
        precio: Number(3419900)
    },
    // Wearables
    {
        id: "applewatchSE",
        nombre: "Apple Watch SE",
        imagen: "../img/applewatchSE.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(589999)
    },
    {
        id: "galaxywatch6",
        nombre: "Galaxy Watch 6",
        imagen: "../img/galaxywatch6.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(499900)
    },
    {
        id: "applewatchseries10",
        nombre: "Apple Watch Series 10",
        imagen: "../img/applewatchseries10.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(1299900)
    },
    {
        id: "galaxywatch5pro",
        nombre: "Galaxy Watch 5 Pro",
        imagen: "../img/galaxywatch5pro.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(699999)
    },
    {
        id: "applewatchultra2",
        nombre: "Apple Watch Ultra 2",
        imagen: "../img/applewatchultra2.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(2119900)
    },
    {
        id: "galaxyfit3",
        nombre: "Galaxy Fit 3",
        imagen: "../img/galaxyfit3.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(119999)
    },
    {
        id: "galaxywatch6classic",
        nombre: "Galaxy Watch 6 Classic",
        imagen: "../img/galaxywatch6classic.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(719999)
    },
    {
        id: "buds2",
        nombre: "Galaxy Buds 2",
        imagen: "../img/buds2.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(244999)
    },
    {
        id: "airpods4",
        nombre: "AirPods 4",
        imagen: "../img/airpods4.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(319999)
    },
    {
        id: "budsFE",
        nombre: "Galaxy Buds FE",
        imagen: "../img/budsFE.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(219999)
    },
    {
        id: "airpodspro2",
        nombre: "AirPods Pro 2",
        imagen: "../img/airpodspro2.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(569999)
    },
    {
        id: "buds2pro",
        nombre: "Galaxy Buds 2 Pro",
        imagen: "../img/buds2pro.webp",
        categoria: {
            nombreCategoria: "Wearable",
            idCategoria: "wearable",
        },
        precio: Number(299999)
    },
];

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
    <option value="relevance">Relevancia</option>
`;
searchInput.after(sortSelect);

// Configuración del mensaje de "No se encontraron resultados"
noResultsMessage.textContent = "No se encontró lo que busca.";
noResultsMessage.style.display = "none";
noResultsMessage.style.color = "#a0b4d9";
contenedorProductos.parentElement.append(noResultsMessage);

// Función para cargar los productos en el HTML
function cargarProductos(productosFiltrados = productos) {
    contenedorProductos.innerHTML = ""; // Limpia el contenedor
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
        case "relevance":
        default:
            return productosFiltrados; // Relevancia o sin cambios
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


// Cargar los productos al iniciar la página
cargarProductos();
