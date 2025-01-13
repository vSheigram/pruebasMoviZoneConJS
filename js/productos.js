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
        precio: Number(109999)
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

// Función para cargar los productos en el HTML
function cargarProductos() {
    productos.forEach(producto => {
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

// Evento delegado para capturar clics en los botones "Comprar"
contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-comprar")) {
        const idProducto = e.target.id;
        agregarProductoAlCarrito(idProducto);
    }
});

// Cargar los productos al iniciar la página
cargarProductos();