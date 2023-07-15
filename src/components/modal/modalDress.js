import './modal.css'

export const modalDress = (modal) => {
    modal.innerHTML = (`
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modalDress">
                <h3>Dress code</h3>
                <div class="inputText">
                    <p>Contenido dress code</p>
                </div>
                <input type="submit" value="Enviar">
            </div>
        </div>
    `);

    // Obtener elementos necesarios
    const buttonDress = document.querySelector("#dressButton");
    const closeButton = modal.querySelector(".close");

    // Mostrar el modal cuando se hace clic en el botón
    buttonDress.addEventListener("click", () => {
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
