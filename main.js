document.addEventListener("DOMContentLoaded", () => {
    const loginIcon = document.getElementById("login-icon");

    if (loginIcon) {
        loginIcon.addEventListener("click", (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            Swal.fire({
                icon: "info",
                title: "Esto no es una tienda real",
                text: "Esto es un simulador, pero si quieres apoyarme, puedes invitarme un café ☕.",
                confirmButtonText: "Entendido",
                confirmButtonColor: "#382E59",
                background: "#0D1326",
                color: "#C2D7F2",
                showCancelButton: true,
                cancelButtonText: "Invitar un café",
                cancelButtonColor: "#ff6f61"
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.cancel) {
                    // Redirige al enlace de MercadoPago
                    window.open("https://link.mercadopago.com.ar/alejandroespasandin", "_blank");
                }
            });
        });
    }
});