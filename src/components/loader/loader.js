export const loader = async () => {
  const loaderElement = document.getElementById('loader');
  const contentElement = document.getElementById('content');

  const waitForBackgroundImageLoad = () => {
    return new Promise((resolve) => {
      const backgroundImage = getComputedStyle(contentElement).backgroundImage;
      console.log(backgroundImage);

      const image = new Image();
      image.onload = resolve;
      image.src = backgroundImage.slice(4, -1).replace(/['"]/g, '');
    });
  };

  // Esperar a que la imagen de fondo del contenido se cargue
  await waitForBackgroundImageLoad();

  // Ocultar el loader y mostrar el contenido
  loaderElement.style.display = 'none';
  contentElement.style.display = 'block';
};
