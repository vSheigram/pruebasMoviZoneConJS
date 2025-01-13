// Capturar elementos del DOM
const formNewsletter = document.querySelector("#form-newsletter");
const emailInput = document.querySelector("#email-newsletter");
const feedback = document.querySelector("#newsletter-feedback");

// Función para manejar la suscripción
function manejarSuscripcion(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    const email = emailInput.value.trim(); // Obtener y limpiar el valor del correo

    if (validarCorreo(email)) {
        // Recuperar correos existentes en localStorage
        let suscriptores = JSON.parse(localStorage.getItem("suscriptores")) || [];

        if (!suscriptores.includes(email)) {
            // Agregar el correo al array si no está ya registrado
            suscriptores.push(email);
            localStorage.setItem("suscriptores", JSON.stringify(suscriptores));

            feedback.textContent = "¡Gracias por suscribirte!";
            feedback.style.color = "green";
        } else {
            // Mensaje si el correo ya está registrado
            feedback.textContent = "Este correo ya está suscrito.";
            feedback.style.color = "orange";
        }
    } else {
        // Mensaje si el correo no es válido
        feedback.textContent = "Por favor, ingresa un correo válido.";
        feedback.style.color = "red";
    }

    emailInput.value = ""; // Limpiar el campo de entrada
}

// Validar formato del correo
function validarCorreo(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Asignar el evento al formulario
formNewsletter.addEventListener("submit", manejarSuscripcion);

// Variable global para el carrito
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para abrir el offcanvas del carrito
function mostrarCarrito() {
    const offcanvasCarrito = document.querySelector("#offcanvasCarrito");
    const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvasCarrito);

    // Mostrar el carrito
    bootstrapOffcanvas.show();
}

// Función para sincronizar el carrito con localStorage
function sincronizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

// Al cargar la página, actualizamos la vista del carrito
document.addEventListener("DOMContentLoaded", () => {
    if (typeof actualizarCarrito === "function") {
        actualizarCarrito(); // Llamamos a actualizarCarrito() si existe
    }
});