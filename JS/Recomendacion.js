document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("recomendacionForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let nombre = document.getElementById("nombre").value.trim();
        let postres = document.getElementById("postres").value;
        let postreNuevo = document.getElementById("postreNuevo").value.trim();
        let recomendacion = document.getElementById("recomendacion").value.trim();
        
        if (!nombre || !postres || !postreNuevo || !recomendacion) {
            alert("Por favor, complete todos los campos antes de enviar.");
            return;
        }
        
        alert("¡Enviado con éxito!");
        this.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recomendacionForm");
    const inputs = form.querySelectorAll("input, select, textarea");

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Tab") {
                if (!input.value.trim()) {
                    event.preventDefault(); // Evita el tab si el campo está vacío
                    alert("Complete este campo para continuar");
                }
            }
        });

        input.addEventListener("blur", function () {
            if (!input.value.trim()) {
                input.focus(); // Mantiene el foco en el campo hasta que se llene
            }
        });
    });
});
