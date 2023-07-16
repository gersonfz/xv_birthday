
//Importando el css desde esta misma seccion, para tener un trabajo modular
import './countdown.css'



// Actualiza el elemento HTML con la cuenta regresiva
export function actualizarCuentaRegresiva() {
    const countdownElement = document.querySelector("#countdown");
    const fechaActual = new Date();
    const fechaEvento = new Date(fechaActual.getFullYear(), 7, 19); // 6 representa julio (los meses se cuentan desde 0)

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
        <div>
            <h4>Faltan</h4>
        </div>
        <div>
            <div class="countdownDiv border">
                <span>
                    ${dias}
                </span>
                <span>
                    días
                </span>
            </div>
            <div class="countdownDiv border">
                <span>
                    ${horas % 24}
                </span>
                <span>
                    hs
                </span>
            </div>
            <div class="countdownDiv border">
                <span>
                    ${minutos % 60}
                </span>
                <span>
                    min
                </span>
            </div>
            <div class="countdownDiv">
                <span>
                    ${segundos % 60}
                </span>
                <span>
                    seg
                </span>    
            </div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="38" height="32" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_132"><rect width="38" height="32" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_132)"><g transform="matrix(0.9596898555755615,0,0,0.9596898555755615,0.7889251708984375,0.5816230773925781)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"><path fill="rgb(129,148,139)" fill-opacity="1" d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"></path></g></g></g></svg>
        </div>
    </div>
    `;
}

// Llama a la función para actualizar la cuenta regresiva cada segundo
setInterval(actualizarCuentaRegresiva, 1000);
