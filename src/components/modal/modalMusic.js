import './modal.css'

export const modalMusic = (modal) => {
    modal.innerHTML = (`
        <div class="modal-content">
            <span class="close">&times;</span>
            <form class="modalMusic">
                <h3>Sugerir canción</h3>
                <div class="inputText">
                    <input type="text" id="name" name="name" placeholder="Tu nombre">
                    <input type="text" id="song" name="song" placeholder="Nombre de la canción y autor">
                    <input type="text" id="link" name="link" placeholder="Si lo deseas, enlace de YouTube">
                </div>
                <input type="submit" value="Enviar">
            </form>
        </div>
    `);

    // Obtener elementos necesarios
    const buttonMusic = document.querySelector("#musicButton");
    const closeButton = modal.querySelector(".close");

    // Mostrar el modal cuando se hace clic en el botón
    buttonMusic.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Ocultar el modal cuando se hace clic en el botón de cerrar
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Ocultar el modal cuando se hace clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
