class Producto {
    constructor(marca, modelo, imagen, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - this.precio * (porcentaje / 100);
    }

    toString() {
        return `${this.marca} ${this.modelo} - $${this.precio.toLocaleString()}`;
    }
}

const arrayProductos = [];

arrayProductos.push(
    new Producto("Apple", "iPhone 16 Pro", "../img/iphone16Pro.webp", 6699900.00),
    new Producto("Apple", "iPhone 15", "../img/iphone15.webp", 2899900.00),
    new Producto("Apple", "iPhone 16", "../img/iphone16.webp", 5599900.00),
    new Producto("Apple", "iPhone 14", "../img/iphone14.webp", 2399900.00),
    new Producto("Samsung", "Galaxy S21 FE", "../img/s21fe.webp", 905999.00),
    new Producto("Samsung", "Galaxy S22", "../img/s22.webp", 1355999.00),
    new Producto("Samsung", "Z Flip 5", "../img/filp5.webp", 1289999.00),
    new Producto("Samsung", "Z Fold 5", "../img/fold5.webp", 2219999.00),
    new Producto("Samsung", "Galaxy S24 Ultra", "../img/s24ultra.webp", 2599999.00),
    new Producto("Samsung", "Galaxy S24", "../img/s24.webp", 1749999.00),
    new Producto("Samsung", "Galaxy S23", "../img/s23.webp", 109999.00),
    new Producto("Samsung", "Galaxy S23+", "../img/s23+.webp", 2199999.00),
    new Producto("Samsung", "Galaxy A54", "../img/a54.webp", 799999.00),
    new Producto("Apple", "Watch SE", "../img/applewatchSE.webp", 589999.00),
    new Producto("Samsung", "Galaxy Watch 6", "../img/galaxywatch6.webp", 499900.00),
    new Producto("Apple", "Watch Series 10", "../img/applewatchseries10.webp", 1299900.00),
    new Producto("Samsung", "Watch 5 Pro", "../img/galaxywatch5pro.webp", 699999.00),
    new Producto("Apple", "Watch Ultra 2", "../img/applewatchultra2.webp", 2119900.00),
    new Producto("Samsung", "Galaxy Fit3", "../img/galaxyfit3.webp", 119999.00),
    new Producto("Samsung", "Galaxy Watch 6 Classic", "../img/galaxywatch6classic.webp", 719999.00),
    new Producto("Samsung", "Galaxy Buds2", "../img/buds2.webp", 244999.00),
    new Producto("Apple", "AirPods 4", "../img/airpods4.webp", 319999.00),
    new Producto("Samsung", "Galaxy Buds FE", "../img/budsFE.webp", 219999.00),
    new Producto("Apple", "AirPods Pro 2", "../img/airpodspro2.webp", 569999.00),
    new Producto("Samsung", "Galaxy Buds2 Pro", "../img/buds2pro.webp", 299999.00),
);