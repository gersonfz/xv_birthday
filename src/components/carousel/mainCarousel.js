import Carousel from "./carousel";
import './carousel.css';

export const mainCarousel = () => {
    const carousel = document.querySelector('#carousel');

    carousel.innerHTML = `
    <div class="carousel-container">
      <div class="carousel-title">
        <h3> Un recorrido de estos 15 años </h3>
        <p>Junto a personas que son muy importantes en mi vida</p>
      </div>
      <div id="animationWindow"></div>
      <img class="carousel-image" src="" alt="Carousel Image">
      <div class="carousel-indicators">
        <div class="carousel-indicator active"></div>
        <div class="carousel-indicator"></div>
        <div class="carousel-indicator"></div>
        <div class="carousel-indicator"></div>
      </div>
    </div>
  `;

  const animData = {
    wrapper: document.querySelector('#animationWindow'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/camera.json'
  };
  
  const anim = bodymovin.loadAnimation(animData);
  anim.setSpeed(1);
  

    const images = [
        'https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3392937/pexels-photo-3392937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3910073/pexels-photo-3910073.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3392982/pexels-photo-3392982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];

    const carouselInstance = new Carousel(images);
};
