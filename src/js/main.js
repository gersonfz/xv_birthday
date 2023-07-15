import '../css/style.css';
import { loader } from '../components/loader/loader';
import { actualizarCuentaRegresiva } from '../components/countdown/countdown';
import { placeBirthday } from '../components/placeBirthday.js/placeBirthday';
import { mainCarousel } from '../components/carousel/mainCarousel';
import { musicAndDressCode } from '../components/musicAndDressCode/musicAndDressCode';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('#app');
  
  appContainer.innerHTML = `
    <section class="containerLoader">
    <div id="loader"></div>
      <div id="content" style="display: none;">
        <div class="paginaPrincipal">
          <button class="buttonIngresar button">Ingresar</button>
        </div>
        <div class="dateBirthday" style="display: none;"> 
          <h2>Bienvenidos</h2>
          <p>Están cordialmente<br> invitados<br>a mis 15 años</p>
        </div>
        <section id="countdown" style="display: none;"></section>
        <section class="sectionPlaceBirthday" id="placeBirthday" style="display: none;"></section>
        <section id="carousel" style="display: none;"></section>
        <section id="musicAndDressCode" style="display: none;"></section>

      </div>
    </section>
  `;

  const contentSection = document.querySelector('#content');
  const buttonIngresar = document.querySelector('.buttonIngresar');
  const paginaPrincipal = document.querySelector('.paginaPrincipal');
  const dateBirthday = document.querySelector('.dateBirthday');
  const countdown = document.querySelector('#countdown');
  const placeBirthdaySection = document.querySelector('#placeBirthday');
  const carouselSection = document.querySelector('#carousel');
  const musicAndDressCodeSection = document.querySelector('#musicAndDressCode');

  // Espera a que todos los recursos estén cargados
  window.addEventListener('load', () => {
    // Muestra el preloader utilizando la función loader
    loader();

    buttonIngresar.addEventListener('click', () => {
      contentSection.style.backgroundImage = 'url("https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
      contentSection.style.display = 'block';
      paginaPrincipal.style.display = 'none';
      dateBirthday.style.display = 'block';
      countdown.style.display = 'block';
      placeBirthdaySection.style.display = 'block';
      carouselSection.style.display = 'block';
      musicAndDressCodeSection.style.display = 'block';
    });
  });

  actualizarCuentaRegresiva();
  placeBirthday();
  mainCarousel();
  musicAndDressCode();
});
