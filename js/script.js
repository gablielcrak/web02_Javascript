document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargado correctamente");

    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        window.addEventListener("scroll", () => {
            btnTop.style.display = window.scrollY > 300 ? "block" : "none";
        });

        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});