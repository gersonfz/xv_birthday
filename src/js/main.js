import '../css/style.css';
import { loader } from '../components/loader/loader';
import { actualizarCuentaRegresiva } from '../components/countdown/countdown';
import { placeBirthday } from '../components/placeBirthday.js/placeBirthday';
import { mainCarousel } from '../components/carousel/mainCarousel';
import { musicAndDressCode } from '../components/musicAndDressCode/musicAndDressCode';
import { gift } from '../components/gift/gift';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('#app');
  
  appContainer.innerHTML = `
    <section class="containerLoader">
    <div id="loader"></div>
      <div id="content" style="display: none;">
        <div class="paginaPrincipal">
          <p> Bienvenidos <br> a la invitacion de </p>
          <h1> Milagros </h1>
          <button class="buttonIngresar button">Ingresar</button>
        </div>
        <div class="containerMainSection" style="display: none;"> 
          <div>
            <h2> Milagros </h2>
            <h3> Mis 15 años </h3>
            <img src="comilla-apertura.svg" alt="Comilla apertura" width="25" height="25" title="Comilla apertura">
            <p> Te espero para compartir esta noche tan especial contigo </p>
            <img src="comilla-cierre.svg" alt="Comilla cierre" width="25" height="25" title="Comilla cierre">
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
        <section id="countdown" style="display: none;"></section>
        <section class="sectionPlaceBirthday" id="placeBirthday" style="display: none;"></section>
        <section id="carousel" style="display: none;"></section>
        <section id="musicAndDressCode" style="display: none;"></section>
        <section id="gift" style="display: none;"></section>

      </div>
    </section>
  `;

  const contentSection = document.querySelector('#content');
  const buttonIngresar = document.querySelector('.buttonIngresar');
  const paginaPrincipal = document.querySelector('.paginaPrincipal');
  const containerMainSection = document.querySelector('.containerMainSection');
  const countdown = document.querySelector('#countdown');
  const placeBirthdaySection = document.querySelector('#placeBirthday');
  const carouselSection = document.querySelector('#carousel');
  const musicAndDressCodeSection = document.querySelector('#musicAndDressCode');
  const giftSection = document.querySelector('#gift');

  // Espera a que todos los recursos estén cargados
  window.addEventListener('load', () => {
    // Muestra el preloader utilizando la función loader
    loader();

    buttonIngresar.addEventListener('click', () => {
      contentSection.style.backgroundImage = 'url("/primera-seccion-background.svg")';
      contentSection.style.display = 'block';
      paginaPrincipal.style.display = 'none';
      containerMainSection.style.display = 'block';
      countdown.style.display = 'block';
      placeBirthdaySection.style.display = 'block';
      carouselSection.style.display = 'block';
      musicAndDressCodeSection.style.display = 'block';
      giftSection.style.display = 'block';
    });
  });

  actualizarCuentaRegresiva();
  placeBirthday();
  mainCarousel();
  musicAndDressCode();
  gift();
});
