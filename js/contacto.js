// Capturar elementos del formulario
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const feedback = document.querySelector("#form-feedback");

// Función para validar el formato del correo
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corrección en la expresión regular
    return regex.test(email);
}

// Manejar el envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar recarga de la página

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validaciones básicas
    if (!name || !email || !message) {
        feedback.textContent = "Por favor, completa todos los campos.";
        feedback.style.color = "red";
        return;
    }

    if (!validarEmail(email)) {
        feedback.textContent = "Por favor, ingresa un correo electrónico válido.";
        feedback.style.color = "red";
        return;
    }

    // Mostrar mensaje de éxito
    feedback.textContent = "¡Gracias por contactarnos! Hemos recibido tu mensaje.";
    feedback.style.color = "green";

    // Guardar en LocalStorage
    const nuevoContacto = { name, email, message };
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));

    // Limpiar el formulario después de 1 segundo
    setTimeout(() => {
        form.reset();
        feedback.textContent = "";
    }, 1000);
});