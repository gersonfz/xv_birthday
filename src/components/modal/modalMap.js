import './modal.css';

export const modalMap = (modal) => {
    modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.635386207243!2d-58.41228692454813!3d-34.613380372950786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf0e488df63%3A0x780a09e4f181b5d5!2sGral.%20Urquiza%20250%2C%20C1215%20CABA!5e0!3m2!1ses!2sar!4v1689281163596!5m2!1ses!2sar" width="250" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button id="openLargerMap">Ver mapa ampliado</button>
        </div>
    </div>
    `;

    const buttonLargeMap = modal.querySelector('#openLargerMap');

    const openLargerMap = () => {
      window.open("https://goo.gl/maps/e7vshC5FMdkVRnNP7", '_blank');
    };
  
    buttonLargeMap.addEventListener('click', openLargerMap);



    // Obtener elementos necesarios
    const button = modal.previousElementSibling;
    const closeButton = modal.querySelector(".close");

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
