import '../css/style.css';
import { loader } from '../components/loader';

document.querySelector('#app').innerHTML = `
  <div class="containerLoader">
    <div id="loader"></div>
    <div id="content" style="display: none;">
      <div class="dateBirthday"> 
        <h2>Bienvenidos</h2>
        <p>Estan cordialmente<br> invitados<br>
          a mis 15 anos
        </p>
      </div>
    </div>
  </div>
`;

// Muestra el preloader utilizando la función loader
loader();