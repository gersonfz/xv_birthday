import './modal.css'

export const modalForm = (modal) => {
    modal.innerHTML = (`
            <div class="modal-content">
                <span class="close">&times;</span>
                <form class="formAssistance">
                    <h3>¿Asiste a la fiesta?</h3>
                    <div>
                        <input type="radio" id="confirm-yes" name="attendance" value="yes">
                        <label for="confirm-yes">Si, confirmo</label>
                        <input type="radio" id="confirm-no" name="attendance" value="no">
                        <label for="confirm-no">No puedo :(</label>
                    </div>
                    <div class="inputText">
                        <input type="text" id="name" name="name" placeholder="Ingrese su nombre completo:">
                        <textarea id="important-data" name="important-data" placeholder="Agregue algún dato importante"></textarea>
                    </div>
                    <input type="submit" value="Enviar">
                </form>
            </div>
    `);

    // Obtener elementos necesarios
    const button = document.querySelector("button");
    const closeButton = document.querySelector(".close");


    // Mostrar el modal cuando se hace clic en el botón
    button.addEventListener("click", () => {
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
