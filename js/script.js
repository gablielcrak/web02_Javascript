document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargado correctamente");

    /* =========================================
       1. BOTÓN VOLVER ARRIBA (Tu código)
       ========================================= */
    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        window.addEventListener("scroll", () => {
            // Se muestra al bajar más de 200px
            btnTop.style.display = window.scrollY > 200 ? "block" : "none";
        });

        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =========================================
       2. VALIDACIÓN DE FORMULARIO
       ========================================= */
    const formulario = document.querySelector('.formulario');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            const nombre = document.querySelector('input[placeholder="Tu Nombre"]').value;
            const correo = document.querySelector('input[placeholder="Tu Email"]').value;
            const mensaje = document.querySelector('textarea').value;

            if (nombre === '' || correo === '' || mensaje === '') {
                e.preventDefault(); // Evita que se envíe vacío
                alert('Por favor, llena los campos obligatorios (Nombre, Correo y Mensaje)');
            } else {
                alert('¡Mensaje enviado con éxito!');
            }
        });
    }

    /* =========================================
       3. MODO OSCURO (DARK MODE)
       ========================================= */
    const btnDark = document.getElementById('btnDarkMode');
    if (btnDark) {
        btnDark.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Cambiar el texto del botón según el modo
            if (document.body.classList.contains('dark-mode')) {
                btnDark.textContent = "☀️ Modo Claro";
            } else {
                btnDark.textContent = "🌙 Modo Oscuro";
            }
        });
    }
});