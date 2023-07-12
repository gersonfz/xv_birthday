import '../css/style.css';
import { loader } from '../components/loader/loader';
import { actualizarCuentaRegresiva } from '../components/countdown/countdown';
import { placeBirthday } from '../components/placeBirthday.js/placeBirthday';



document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = `
    <section class="containerLoader">
      <div id="loader"></div>
      <div id="content" style="display: none;">
        <div class="dateBirthday"> 
          <h2>Bienvenidos</h2>
          <p>Estan cordialmente<br> invitados<br>
            a mis 15 años
          </p>
        </div>

        <section id="countdown"></section>

        <section class="sectionPlaceBirthday" id="placeBirthday"></section>
      </div>
    </section>
  `;

  // Espera a que todos los recursos estén cargados
  window.addEventListener('load', () => {
    // Muestra el preloader utilizando la función loader
    loader();
  });
      // Muestra la cuenta regresiva
      actualizarCuentaRegresiva();
      // Muestra el la seccion donde se hacen reservas, el lugar de la fiesta y como llegar
      placeBirthday();
});
