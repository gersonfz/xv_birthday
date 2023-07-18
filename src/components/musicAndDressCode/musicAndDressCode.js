import { showModal } from '../modal/showModal';
import './musicAndDressCode.css';

export const musicAndDressCode = () => {
    const musicAndDressCode = document.querySelector('#musicAndDressCode');

    musicAndDressCode.innerHTML = (`
        <div class="containerMusicAndDressCode">
            <div>
                <h2>Fiesta</h2>
                <p>Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta</p>
            </div>
            <div class="musicSection flex">
                <h3>Música</h3>
                <p>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</p>
                <div id="modalMusic" class="modal"></div>
                <button id="musicButton" class="button">Sugerir<br>canción</button>
            </div>
            <div class="dressSection flex">
                <h3>Dress Code</h3>
                <p>Una orientación para tu vestuario</p>
                <div id="modalDress" class="modal"></div>
                <button id="dressButton" class="button">Ver más</button>
            </div>
        </div>
    `);

    const musicButton = document.querySelector("#musicButton");
    const dressButton = document.querySelector("#dressButton");
    const modalM = document.querySelector('#modalMusic');
    const modalD = document.querySelector('#modalDress');

    const contentMusic = `
    <div class="inputText">
        <input type="text" id="name" name="name" placeholder="Tu nombre">
        <input type="text" id="song" name="song" placeholder="Nombre de la canción y autor">
        <input type="text" id="link" name="link" placeholder="Si lo deseas, enlace de YouTube">
        <input class="button" type="submit" value="Enviar">

    </div>
    `

    const contentDressCode = `
    <div class="inputText">
        <p>Contenido dress code</p>
        <input class="button" type="submit" value="Enviar">
    </div>
    `
    const musicModal = showModal(modalM, "Música", contentMusic); // Crear el modal de música
    const dressModal = showModal(modalD, "Dress Code", contentDressCode); // Crear el modal de dress code

    musicButton.addEventListener("click", () => {
        musicModal.show();
      });
      
      dressButton.addEventListener("click", () => {
        dressModal.show();
      });
      
};
