// Función que se ejecuta al hacer clic en el botón "Ver mapa ampliado"
export const showDirections = () => {
    // Verificar si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
        // Obtener la ubicación actual del usuario
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Obtener las coordenadas de la ubicación actual
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Construir la URL de dirección con la ubicación actual y el destino del mapa
                const destination = "El Castillo Eventos";
                const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destination)}`;

                // Abrir una nueva ventana o pestaña con la ruta
                window.open(directionsUrl);
            },
            (error) => {
                console.error("Error en la geolocalización:", error);
            }
        );
    } else {
        console.error("Geolocalización no está disponible en este navegador.");
    }
}
