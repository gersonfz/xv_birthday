import { showModal } from '../modal/showModal';
import { buttonCalendar } from './buttonCalendar';
import './placeBirthday.css';
import '../modal/modal.css';
import { showDirections } from './showDirections';
import { contentForm } from './contentForm';
import { contentMap } from './contentMap';
import { formBackend } from './formBackend';

export const placeBirthday = () => {
  const placeBirthday = document.querySelector('#placeBirthday');

  placeBirthday.innerHTML = `
    <div class="containerPlaceBirthday">
      <div>
        <img src="fiesta-title.svg" alt="Titulo fiesta">
      </div>
      <div class="buttonCalendar flex">
        <h2>Día</h2>
        <p>Sabado 19 de agosto - 21hs</p>
        <button id="my-default-button" class="button">Agendar</button>
      </div>
      <div class="buttonPlace flex">
        <h2>Lugar</h2>
        <p>El Castillo - GEBA</p>
        <button id="confirmButton" class="button">Confirmar asistencia</button>
        <div id="modalForm" class="modal"></div>
      </div>
      <div class="buttonDirections flex">
        <h2 >Dirección</h2>
        <p>Av. Pres. Figueroa Alcorta 5575, C1426 CABA</p>
        <button id="directionsButton" class="button">¿Cómo llegar?</button>
        <div id="modalM" class="modal"></div>
      </div>
    </div>
  `;

  buttonCalendar();

  const confirmButton = document.querySelector("#confirmButton");
  const directionsButton = document.querySelector("#directionsButton");
  const modalF = document.querySelector('#modalForm');
  const modalM = document.querySelector('#modalM');

  const formModal = showModal(modalF, "¿Asiste a la fiesta?", contentForm);
  const modalMap = showModal(modalM, "Cómo llegar a la fiesta", contentMap);

  confirmButton.addEventListener('click', () => {
    formModal.show();
  });

  directionsButton.addEventListener('click', () => {
    modalMap.show();
  });

  // Obtener el botón "Ver mapa ampliado" por su identificador
  const verMapaAmpliadoButton = document.getElementById('openLargerMap');

  // Agregar el evento de clic al botón para ejecutar la función showDirections
  verMapaAmpliadoButton.addEventListener('click', showDirections);

  showDirections();

  formBackend();

};
