export const formBackend = () => {
    const form = document.querySelector('.formAssistance');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío por defecto del formulario

        // Mostrar el loading
        const loadingMessage = document.getElementById('loadingBirthday');
        loadingMessage.style.display = 'block';

        // Obtén los valores del formulario
        const attendance = document.querySelector('input[name="attendance"]:checked').value;
        const name = document.querySelector('#name').value;
        const importantData = document.querySelector('#important-data').value;

        // Crea un objeto con los datos del formulario
        const formData = {
            attendance,
            name,
            importantData
        };

        // Envía los datos al backend
        fetch('https://xv-backend.onrender.com/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),

        })
            .then(response => response.json())
            .then(data => {
                // Ocultar el loading
                loadingMessage.style.display = 'none';

                console.log(data);
                if (data.redirect) {
                    // Mostrar mensaje de enviado correctamente
                    const sentMessage = document.getElementById('sentMessageBirthday');
                    sentMessage.style.display = 'block';

                    // Redirigir a otra página después de unos segundos
                    setTimeout(() => {
                        window.location.href = data.redirect;
                    }, 2000); // Redirigir después de 2 segundos (puedes ajustar el tiempo según tus necesidades)
                } else {
                    // Manejar la respuesta normalmente
                    console.log(data);
                }
            })
            .catch(error => {
                // Maneja el error si ocurre
                console.error(error);
                loadingMessage.style.display = 'none'; // Ocultar el loading en caso de error
            });
    });

}
