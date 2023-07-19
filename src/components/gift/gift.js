import { showModal } from '../modal/showModal';
import './gift.css'

export const gift = () => {
    const giftSection = document.querySelector('#gift')
    giftSection.innerHTML = (`
        <div class="containerGift flex"> 
            <img class="imgMusicAndDress" src="/gift.svg" alt="Imagen gift">
            <h2>Regalos</h2>
            <p>Si deseas regalarme algo más que tu hermosa presencia</p>
            <div class="giftSection flex">
                <div id="modalGift" class="modal"></div>
                <button id="giftButton" class="button">Numero de CBU</button>
            </div>
			<span id="scrollToTop">
                <svg class="arrowUp">
                    <path class="a1" d="M0 72 L30 40 L60 72"></path>
                    <path class="a2" d="M0 52 L30 20 L60 52"></path>
                    <path class="a3" d="M0 32 L30 0 L60 32"></path>
                </svg>
			</span>
        </div>
    `);

    const giftButton = document.querySelector("#giftButton");
    const modalG = document.querySelector('#modalGift');
    const scrollToTopButton = document.querySelector("#scrollToTop");


    const contentGift = `
    <div class="inputText">
        <p>Milagros Perotti Vera</p>
        <p>CVU: 0000003100080452512926</p>
        <p>Alias: mil.pv07</p>
        <p>CUIT/CUIL: 27488027714</p>
        <p>Mercado Pago</p>
    </div>
    `;

    const giftModal = showModal(modalG, "Regalos", contentGift); // Crear el modal de Regalos

    giftButton.addEventListener("click", giftModal.show); // Mostrar el modal de música al hacer clic en el botón

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
};
