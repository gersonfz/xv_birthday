export const loader = async () => {
  const loaderElement = document.getElementById('loader');
  const contentElement = document.getElementById('content');

  const waitForBackgroundImageLoad = () => {
    return new Promise((resolve) => {
      const backgroundImage = getComputedStyle(contentElement).backgroundImage;

      const image = new Image();
      image.onload = resolve;
      image.src = backgroundImage.slice(4, -1).replace(/['"]/g, '');
    });
  };

  // Esperar a que la imagen de fondo del contenido se cargue
  await waitForBackgroundImageLoad();

  // Simular un retraso de 2 segundos antes de ocultar el loader
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Ocultar el loader y mostrar el contenido
  loaderElement.style.display = 'none';
  contentElement.style.display = 'block';
};
