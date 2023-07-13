
//Importando el css desde esta misma seccion, para tener un trabajo modular
import './countdown.css'



// Actualiza el elemento HTML con la cuenta regresiva
export function actualizarCuentaRegresiva() {
    const countdownElement = document.querySelector("#countdown");
    const fechaActual = new Date();
    const fechaEvento = new Date(fechaActual.getFullYear(), 6, 19); // 6 representa julio (los meses se cuentan desde 0)

    if (fechaActual > fechaEvento) {
        fechaEvento.setFullYear(fechaActual.getFullYear() + 1); // Ajusta al próximo año si la fecha ya pasó
    }
    const diferenciaTiempo = fechaEvento.getTime() - fechaActual.getTime();
    const segundos = Math.floor(diferenciaTiempo / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    countdownElement.innerHTML = `
    <div class="countdownElement">
        Falta ${dias} días, ${horas % 24} hs, ${minutos % 60} min ${segundos % 60} seg
    </div>
    `;
}

// Llama a la función para actualizar la cuenta regresiva cada segundo
setInterval(actualizarCuentaRegresiva, 1000);
