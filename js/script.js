document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargado correctamente");

    /* ============================================================
       1. BOTÓN VOLVER ARRIBA
       Aparece cuando el usuario baja la página y vuelve al inicio.
       ============================================================ */
    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        window.addEventListener("scroll", () => {
            // Se muestra si el scroll es mayor a 200px
            btnTop.style.display = window.scrollY > 200 ? "block" : "none";
        });

        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ============================================================
       2. EFECTO DE ESCRITURA (TYPEWRITER)
       Escribe y borra frases automáticamente en el título.
       ============================================================ */
    const textoCambiante = document.getElementById("typewriter");
    if (textoCambiante) {
        const frases = [
            "Diseñador Freelancer", 
            "Desarrollador Web", 
            "Especialista en Frontend",
            "Estudiante de Ingeniería"
        ];
        let indexFrase = 0;
        let indexLetra = 0;
        let borrando = false;

        function animarTexto() {
            const fraseActual = frases[indexFrase];
            
            if (borrando) {
                textoCambiante.textContent = fraseActual.substring(0, indexLetra - 1);
                indexLetra--;
            } else {
                textoCambiante.textContent = fraseActual.substring(0, indexLetra + 1);
                indexLetra++;
            }

            let velocidad = borrando ? 50 : 150;

            // Lógica de pausa y cambio de frase
            if (!borrando && indexLetra === fraseActual.length) {
                velocidad = 2000; // Pausa cuando termina de escribir
                borrando = true;
            } else if (borrando && indexLetra === 0) {
                borrando = false;
                indexFrase = (indexFrase + 1) % frases.length;
                velocidad = 500;
            }

            setTimeout(animarTexto, velocidad);
        }
        animarTexto();
    }

    /* ============================================================
       3. CONTADOR ANIMADO DE ESTADÍSTICAS
       Hace que los números suban rápidamente de 0 al objetivo.
       ============================================================ */
    const contadores = document.querySelectorAll('.numero-contador');
    
    if (contadores.length > 0) {
        const animarContadores = () => {
            contadores.forEach(contador => {
                const actualizar = () => {
                    const objetivo = +contador.getAttribute('data-objetivo');
                    const actual = +contador.innerText;
                    const incremento = objetivo / 50; // Velocidad del conteo

                    if (actual < objetivo) {
                        contador.innerText = Math.ceil(actual + incremento);
                        setTimeout(actualizar, 30);
                    } else {
                        contador.innerText = objetivo;
                    }
                };
                actualizar();
            });
        };

        // Iniciar animación (puedes mejorar esto con IntersectionObserver)
        animarContadores();
    }

    /* ============================================================
       4. VALIDACIÓN DE FORMULARIO DE CONTACTO
       Asegura que el usuario no envíe campos vacíos.
       ============================================================ */
    const formulario = document.querySelector('.formulario');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            const nombre = formulario.querySelector('input[type="text"]').value;
            const correo = formulario.querySelector('input[type="email"]').value;
            const mensaje = formulario.querySelector('textarea').value;

            if (nombre === "" || correo === "" || mensaje === "") {
                e.preventDefault();
                alert("❌ Por favor, completa todos los campos obligatorios.");
            } else {
                alert("✅ ¡Gracias! Tu mensaje ha sido enviado correctamente.");
            }
        });
    }
});