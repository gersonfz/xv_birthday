import './modal.css'

export const showModal = (modal, title, content) => {
    modal.innerHTML = (`
        <div class="modal-content">
            <img src="flower-modal.png" alt="Flores pagina principal" class="">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <div class="section-content">
                <h3>${title}</h3>
                    ${content}
            </div>
        </div>
    `);

    const closeButton = modal.querySelector(".close");

    // Mostrar el modal cuando se hace clic en el botón
    const show = () => {
        modal.style.display = "block";
        modal.style.top = `${window.scrollY}px`; // Agrega esta línea
        document.body.classList.add("modal-open"); // Agrega esta línea para desactivar el scroll

      };

    // Ocultar el modal cuando se hace clic en el botón de cerrar
    const hide = () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Agrega esta línea para activar el scroll nuevamente

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
