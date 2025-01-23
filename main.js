document.addEventListener("DOMContentLoaded", () => {
    const loginIcon = document.getElementById("login-icon");

    if (loginIcon) {
        loginIcon.addEventListener("click", (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            Swal.fire({
                icon: "info",
                title: "Esto no es una tienda real",
                text: "No es necesario que te loguees porque no vas a poder comprar nada, pero si quieres apoyarme, puedes invitarme un café ☕",
                confirmButtonText: "Entendido",
                confirmButtonColor: "#382E59",
                background: "#0D1326",
                color: "#C2D7F2",
                showCancelButton: true,
                cancelButtonText: "Invitar un café",
                cancelButtonColor: "#7B548C"
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.cancel) {
                    // Redirige al enlace de MercadoPago
                    window.open("https://link.mercadopago.com.ar/alejandroespasandin", "_blank");
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const finalizarCompraBtn = document.getElementById("finalizar-compra");

    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener("click", () => {
            // Mostrar SweetAlert2
            Swal.fire({
                icon: "info",
                title: "Recuerda que no es una tienda real",
                text: "Esto es un simulador así que no vas a poder comprar nada por aquí, pero si quieres apoyarme, puedes invitarme un café ☕",
                confirmButtonText: "Entendido",
                confirmButtonColor: "#382E59",
                background: "#0D1326",
                color: "#C2D7F2",
                showCancelButton: true,
                cancelButtonText: "Invitar un café",
                cancelButtonColor: "#7B548C"
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.cancel) {
                    // Redirige al enlace de MercadoPago
                    window.open("https://link.mercadopago.com.ar/alejandroespasandin", "_blank");
                }
            });
        });
    }
});