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
      <div class="carousel-image-container">
        <img class="carousel-image" src="carousel-image" alt="Carousel Image">
      </div> 
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
        '/carousel-image-1.jpeg',
        '/carousel-image-2.jpeg',
        '/carousel-image-3.jpeg',
        '/carousel-image-4.jpeg',
    ];

    const carouselInstance = new Carousel(images);
};
