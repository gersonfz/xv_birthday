import { modalForm } from '../modal/modalForm';
import { modalMap } from '../modal/modalMap';
import { buttonCalendar } from './buttonCalendar';
import './placeBirthday.css';

export const placeBirthday = () => {
  const placeBirthday = document.querySelector('#placeBirthday');

  placeBirthday.innerHTML = `
    <div class="containerPlaceBirthday">
      <div class="buttonCalendar">
        <h2>Día</h2>
        <p>Miércoles 19 de junio - 17hs</p>
        <button id="my-default-button">Agendar</button>
      </div>
      <div class="buttonPlace">
        <h2>Lugar</h2>
        <p>Salon Avril</p>
        <div id="modalForm" class="modal"></div>
        <button id="confirmButton">Confirmar<br>asistencia</button>
      </div>
      <div class="buttonDirections">
        <h2>Dirección</h2>
        <p>Av. Pergamino 203 - CABA</p>
        <div id="modalM" class="modal"></div>
        <button id="directionsButton">¿Cómo llegar?</button> 
      </div>
    </div>
  `;
  buttonCalendar();

  // Obtener el botón "confirmButton" y los elementos modales
  const confirmButton = document.querySelector("#confirmButton");
  const directionsButton = document.querySelector("#directionsButton");
  const modalF = document.querySelector('#modalForm');
  const modalM = document.querySelector('#modalM');

  modalForm(modalF); // Pasar el elemento modal como parámetro a la función modalForm
  modalMap(modalM); // Pasar el elemento modal como parámetro a la función modalMap

  // Mostrar el modal de confirmación cuando se hace clic en el botón "Confirmar asistencia"
  confirmButton.addEventListener("click", () => {
    modalF.style.display = "block";
  });

  // Mostrar el modal del mapa cuando se hace clic en el botón "¿Cómo llegar?"
  directionsButton.addEventListener("click", () => {
    modalM.style.display = "block";
  });
};
