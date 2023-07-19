import { showModal } from '../modal/showModal';
import { buttonCalendar } from './buttonCalendar';
import './placeBirthday.css';
import '../modal/modal.css';

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

  const contentForm = `
    <form class="formAssistance">
      <div class="inputRadio">
        <div class="inputRadio-margin">
          <input type="radio" id="confirm-yes" name="attendance" value="yes" checked >
          <label for="confirm-yes">Si,<br>confirmo</label>
        </div>
        <div class="inputRadio-margin">
          <input type="radio" id="confirm-no" name="attendance" value="no">
          <label for="confirm-no">No<br>puedo :(</label>
        </div>

      </div>
      <div class="inputText">
        <div class="form-group">
          <input type="text" id="name" name="name" placeholder="Ingrese su nombre completo:">
        </div>
        <div class="form-group">
          <textarea id="important-data" name="important-data" placeholder="Agregue algún dato importante  Ej: Soy vegetariano"></textarea>
        </div>
      </div>
      <input class="button" type="submit" value="Enviar">
    </form>
  `;

  const contentMap = `
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.745966844494!2d-58.425655400000004!3d-34.5599868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5af91361e41%3A0x56b3450440c3542c!2sEl%20Castillo%20Eventos!5e0!3m2!1ses-419!2sar!4v1689556995653!5m2!1ses-419!2sar" width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <button id="openLargerMap" class="button">Ver mapa ampliado</button>
    </div>
  `;



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

  // Obtén una referencia al botón
  const openLargerMapButton = document.getElementById("openLargerMap");

  // Agrega un controlador de eventos al botón
  openLargerMapButton.addEventListener("click", showDirections);

  // Función que se ejecuta al hacer clic en el botón
  function showDirections() {
    // Verificar si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
      // Obtener la ubicación actual del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Obtener las coordenadas de la ubicación actual
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Construir la URL de dirección con la ubicación actual y el destino del mapa
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=El+Castillo+Eventos`;

          // Abrir una nueva ventana o pestaña con la ruta
          window.open(directionsUrl);
        },
        (error) => {
          console.error("Error en la geolocalización:", error);
        }
      );
    } else {
      console.error("Geolocalización no está disponible en este navegador.");
    }
  }

};
