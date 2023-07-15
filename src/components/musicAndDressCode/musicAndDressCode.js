import { modalDress } from '../modal/modalDress';
import { modalMusic } from '../modal/modalMusic';
import './musicAndDressCode.css'

export const musicAndDressCode = () => {
    const musicAndDressCode = document.querySelector('#musicAndDressCode')

    musicAndDressCode.innerHTML = (`
        <div class="containerMusicAndDressCode">
            <div>
                <h2>Fiesta</h2>
                <p>Hagamos juntos una fiesta epica. Aqui algunos detalles a tener en cuenta</p>
            </div>
            <div class="musicSection flex">
                <h3>Musica</h3>
                <p>Cual es la cancion que no debe faltar en la PlayList de la fiesta</p>
                <div id="modalMusic" class="modal"></div>
                <button id="musicButton" class="button">Sugerir<br>cancion</button>
            </div>
            <div class="dressSection flex">
                <h3>Dress Code</h3>
                <p>Una orientacion para tu vestuario</p>
                <div id="modalDress" class="modal"></div>
                <button id="dressButton" class="button">Ver mas</button>
            </div>
        </div>
    `);

    // Obtener el botón "musicButton" y los elementos modales
    const musicButton = document.querySelector("#musicButton");
    const dressButton = document.querySelector("#dressButton");
    const modalM = document.querySelector('#modalMusic');
    const modalD = document.querySelector('#modalDress');

    modalMusic(modalM); // Pasar el elemento modal como parámetro a la función modalMusic
    modalDress(modalD)

    // Mostrar el modal de confirmación cuando se hace clic en el botón "Sugerir cancion" y "Ver mas"
    musicButton.addEventListener("click", () => {
        modalM.style.display = "block";
    });
    dressButton.addEventListener("click", () => {
        modalD.style.display = "block";
    });
};