import { showModal } from '../modal/showModal';
import { formBackendMusic } from './formBackend';
import './musicAndDressCode.css';

export const musicAndDressCode = () => {
    const musicAndDressCode = document.querySelector('#musicAndDressCode');

    musicAndDressCode.innerHTML = (`
        <div class="containerMusicAndDressCode">
            <div class="titleMusicDress">
                <img class="imgTitle" src="fiesta-title.svg" alt="Titulo fiesta">
                <p>Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta</p>
            </div>
            <div class="musicSection flex">
                <h3>Música</h3>
                <img class="imgMusicAndDress" src="musica.svg" alt="Logo musica">
                <p>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</p>
                <div id="modalMusic" class="modal"></div>
                <button id="musicButton" class="button">Sugerir<br>canción</button>
            </div>
            <div class="dressSection flex">
                <h3>Dress Code</h3>
                <img class="imgMusicAndDress" src="vestuario.svg" alt="Logo vestuario">
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
    <div class="loading" id="loading" style="display: none;">Enviando...</div>
    <div class="loading" id="sent-message" style="display: none;">Formulario enviado correctamente</div>
    <form class="inputMusicText" action="https://xv-backend.onrender.com/send-music" method="POST">
        <input class="inputMusic" type="text" id="nameMusic" name="nameMusic" placeholder="Tu nombre" required>
        <input class="inputMusic" type="text" id="song" name="song" placeholder="Nombre de la canción y autor" required>
        <input class="inputMusic" type="text" id="link" name="link" placeholder="Si lo deseas, enlace de YouTube">
        <input class="button" type="submit" value="Enviar">
    </form>
    `

    const contentDressCode = `
    <div class="inputText">
        <p>Elegante Sport</p>
        <p>Colores neutros</p>
        <p>(Excepto azul)</p>
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
    formBackendMusic();
};
