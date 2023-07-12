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
        <button>Confirmar<br>asistencia</button>
      </div>
      <div class="buttonDirections">
        <h2>Direccion</h2>
        <p>Av. Pergamino 203 - CABA</p>
        <button>¿Como<br>llegar?</button> 
      </div>
    </div>
  `;
    buttonCalendar();
};
