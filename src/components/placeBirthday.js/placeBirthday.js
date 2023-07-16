import { showModal } from '../modal/showModal';
import { buttonCalendar } from './buttonCalendar';
import './placeBirthday.css';


export const placeBirthday = () => {
  const placeBirthday = document.querySelector('#placeBirthday');

  placeBirthday.innerHTML = `
    <div class="containerPlaceBirthday">
      <div class="buttonCalendar flex">
        <h2>Día</h2>
        <p>Miércoles 19 de junio - 17hs</p>
        <button id="my-default-button" class="button">Agendar</button>
      </div>
      <div class="buttonPlace flex">
        <h2>Lugar</h2>
        <p>Salon Avril</p>
        <div id="modalForm" class="modal"></div>
        <button id="confirmButton" class="button">Confirmar<br>asistencia</button>
      </div>
      <div class="buttonDirections flex">
        <h2>Dirección</h2>
        <p>Av. Pergamino 203 - CABA</p>
        <div id="modalM" class="modal"></div>
        <button id="directionsButton" class="button">¿Cómo llegar?</button> 
      </div>
    </div>
  `;
  buttonCalendar();

  // Obtener el botón "confirmButton" y los elementos modales
  const confirmButton = document.querySelector("#confirmButton");
  const directionsButton = document.querySelector("#directionsButton");
  const modalF = document.querySelector('#modalForm');
  const modalM = document.querySelector('#modalM');

  const contentForm = `
  <form class="formAssistance">
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
  `

  const contentMap = `
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.635386207243!2d-58.41228692454813!3d-34.613380372950786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf0e488df63%3A0x780a09e4f181b5d5!2sGral.%20Urquiza%20250%2C%20C1215%20CABA!5e0!3m2!1ses!2sar!4v1689281163596!5m2!1ses!2sar" width="250" height="350" style="border:0;" allowfullscreen="" loading="lazy"     referrerpolicy="no-referrer-when-downgrade"></iframe>
    <button id="openLargerMap">Ver mapa ampliado</button>
  </div>`;

  const formModal = showModal(modalF, "¿Asiste a la fiesta?", contentForm); // Pasar el elemento modal como parámetro a la función modalForm
  const modalMap = showModal(modalM, "Como llegar a la fiesta", contentMap); // Pasar el elemento modal como parámetro a la función modalMap

  // Mostrar el modal de confirmación cuando se hace clic en el botón "Confirmar asistencia"
  confirmButton.addEventListener('click', formModal.show);
  directionsButton.addEventListener('click', modalMap.show)
};
