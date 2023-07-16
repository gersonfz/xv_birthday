import './modal.css'

export const showModal = (modal, title, content) => {
    modal.innerHTML = (`
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modalContent">
                <h3>${title}</h3>
                    ${content}
                <input type="submit" value="Enviar">
            </div>
        </div>
    `);

    const closeButton = modal.querySelector(".close");

    // Mostrar el modal cuando se hace clic en el botón
    const show = () => {
        modal.style.display = "block";
    };

    // Ocultar el modal cuando se hace clic en el botón de cerrar
    const hide = () => {
        modal.style.display = "none";
    };

    // Ocultar el modal cuando se hace clic fuera de él
    const handleOutsideClick = (event) => {
        if (event.target === modal) {
            hide();
        }
    };

    closeButton.addEventListener("click", hide);
    window.addEventListener("click", handleOutsideClick);

    return { show, hide };
};
