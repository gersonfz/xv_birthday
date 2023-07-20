export const formBackend = () => {
    const form = document.querySelector('.formAssistance');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío por defecto del formulario

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
        fetch('https://xv-backend.onrender.com/send-mail/form-birthday', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),

        })
            .then(response => response.json())
            .then(data => {
                console.log(data.redirect);
                if (data.redirect) {
                    window.location.href = data.redirect;
                } else {
                    // Manejar la respuesta normalmente
                    console.log(data);
                }
            })
            .catch(error => {
                // Maneja el error si ocurre
                console.error(error);
            });
    });

}