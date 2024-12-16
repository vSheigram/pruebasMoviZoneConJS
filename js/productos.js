class Producto {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    aplicarDescuento(porcentaje) {
        this.precio -= this.precio * (porcentaje / 100);
    }
}

const arrayProductos = [];

arrayProductos.push(
    new Producto("Apple", "iPhone 16 Pro", 6699900.00),
    new Producto("Apple", "iPhone 15", 2899900.00),
    new Producto("Apple", "iPhone 16", 5599900.00),
    new Producto("Apple", "iPhone 14", 2399900.00),
    new Producto("Samsung", "Galaxy S21 FE", 905999.00),
    new Producto("Samsung", "Galaxy S22", 1355999.00),
    new Producto("Samsung", "Z Flip 5", 1289999.00),
    new Producto("Samsung", "Z Fold 5", 2219999.00),
    new Producto("Samsung", "Galaxy S24 Ultra", 2599999.00),
    new Producto("Samsung", "Galaxy S24", 1749999.00),
    new Producto("Samsung", "Galaxy S23", 109999.00),
    new Producto("Samsung", "Galaxy S23+", 2199999.00),
    new Producto("Samsung", "Galaxy A54", 799999.00),
    new Producto("Apple", "Watch SE", 589999.00),
    new Producto("Samsung", "Galaxy Watch 6", 499900.00),
    new Producto("Apple", "Watch Series 10", 1299900.00),
    new Producto("Samsung", "Watch 5 Pro", 699999.00),
    new Producto("Apple", "Watch Ultra 2", 2119900.00),
    new Producto("Samsung", "Galaxy Fit3", 119999.00),
    new Producto("Samsung", "Galaxy Watch 6 Classic", 719999.00),
    new Producto("Samsung", "Galaxy Buds2", 244999.00),
    new Producto("Apple", "AirPods 4", 319999.00),
    new Producto("Samsung", "Galaxy Buds FE", 219999.00),
    new Producto("Apple", "AirPods Pro 2", 569999.00),
    new Producto("Samsung", "Galaxy Buds2 Pro", 299999.00),
);