document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el último botón del carrusel
    const lastTabElement = document.querySelector('[href="InformacionProductos.html#ArrozConLeche"]');
    const firstTabElement = document.querySelector('[data-bs-slide-to="0"]');

    lastTabElement.addEventListener("keydown", function (event) {
      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault(); // Evita el salto normal de tabulación
        firstTabElement.focus(); // Mueve el foco al primer slide
      }
    });
});

