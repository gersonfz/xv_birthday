class Carousel {
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        this.carouselContainer = document.querySelector('.carousel-container');
        this.carouselImage = document.querySelector('.carousel-image');
        this.carouselIndicators = Array.from(document.querySelectorAll('.carousel-indicator'));
        this.interval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.showImage();
        this.addEventListeners();
        this.startAutoPlay();
    }

    showImage() {
        this.carouselImage.src = this.images[this.currentIndex];

        // Resaltar el indicador correspondiente a la imagen actual
        this.carouselIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage();
    }

    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage();
    }

    startAutoPlay() {
    
        this.interval = setInterval(() => {
            this.nextImage();
        }, 5000); // Cambiar la imagen cada 5 segundos
    }

    stopAutoPlay() {
        clearInterval(this.interval);
    }

    handleTouchEnd() {
        const touchDiff = this.touchEndX - this.touchStartX;
        const threshold = 50; // Umbral de desplazamiento para considerar un deslizamiento válido

        if (touchDiff > threshold) {
            this.prevImage();
        } else if (touchDiff < -threshold) {
            this.nextImage();
        }
    }

    addEventListeners() {
        this.carouselContainer.addEventListener('mouseover', () => {
            this.stopAutoPlay();
        });

        this.carouselContainer.addEventListener('mouseout', () => {
            this.startAutoPlay();
        });

        this.carouselIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.currentIndex = index;
                this.showImage();
            });
        });

        this.carouselContainer.addEventListener('touchstart', (event) => {
            this.touchStartX = event.touches[0].clientX;
        });

        this.carouselContainer.addEventListener('touchend', (event) => {
            this.touchEndX = event.changedTouches[0].clientX;
            this.handleTouchEnd();
        });
    }
}

export default Carousel;
