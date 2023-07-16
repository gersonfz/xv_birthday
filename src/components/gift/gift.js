import { showModal } from '../modal/showModal';
import './gift.css'

export const gift = () => {
    const giftSection = document.querySelector('#gift')
    giftSection.innerHTML = (`
        <div class="containerGift flex"> 
            <h2>Regalos</h2>
            <p>Si deseas regalarme algo mas que tu hermosa presencia</p>
            <div class="musicSection flex">
                <div id="modalGift" class="modal"></div>
                <button id="giftButton" class="button">Numero de CBU</button>
            </div>
        </div>
    `);

    const giftButton = document.querySelector("#giftButton");
    const modalG = document.querySelector('#modalGift');

    const contentGift = `
    <div class="inputText">
        <p>Regalos</p>
    </div>
    `

    const giftModal = showModal(modalG, "Regalos", contentGift); // Crear el modal de Regalos

    giftButton.addEventListener("click", giftModal.show); // Mostrar el modal de música al hacer clic en el botón
};