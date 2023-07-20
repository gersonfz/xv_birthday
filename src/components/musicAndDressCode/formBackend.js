
export const formBackendMusic = () => {
    const form = document.querySelector('.inputText');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío por defecto del formulario

        // Obtén los valores del formulario
        const name = document.querySelector('#name').value;
        const song = document.querySelector('#song').value;
        const link = document.querySelector('#link').value;

        // Crea un objeto con los datos del formulario
        const formData = {
            name,
            song,
            link
        };

        // Envía los datos al backend
        fetch('https://xv-backend.onrender.com/send-mail/form-music', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.redirect) {
                    window.location.href = data.redirect;
                } else {
                    // Manejar la respuesta normalmente
                    console.log(data);
                }
            })
            .catch(error => {
                console.error(error); // Maneja el error si ocurre
            });
    });
};
