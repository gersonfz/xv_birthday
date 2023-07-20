export const formBackendMusic = () => {
    const form = document.querySelector('.inputMusicText');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío por defecto del formulario

        // Mostrar el loading
        const loadingMessage = document.getElementById('loading');
        loadingMessage.style.display = 'block';

        // Obtén los valores del formulario
        const nameMusic = document.querySelector('#nameMusic').value;
        const song = document.querySelector('#song').value;
        const link = document.querySelector('#link').value;

        // Crea un objeto con los datos del formulario
        const formData = {
            nameMusic,
            song,
            link
        };

        // Envía los datos al backend
        fetch('https://xv-backend.onrender.com/send-music', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                // Ocultar el loading y mostrar el mensaje de enviado correctamente
                loadingMessage.style.display = 'none';
                const sentMessage = document.getElementById('sent-message');
                sentMessage.style.display = 'block';

                // Redirigir a otra página después de unos segundos
                setTimeout(() => {
                    window.location.href = data.redirect;
                }, 2000); // Redirigir después de 2 segundos (puedes ajustar el tiempo según tus necesidades)
            })
            .catch(error => {
                // Maneja el error si ocurre
                console.error(error);
                loadingMessage.style.display = 'none'; // Ocultar el loading en caso de error
            });
    });
};
