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