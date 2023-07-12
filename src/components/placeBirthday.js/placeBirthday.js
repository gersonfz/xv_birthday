import './placeBirthday.css'


export const placeBirthday = () => {
    const placeBirthday = document.querySelector('#placeBirthday')

    placeBirthday.innerHTML = `
    <div class="buttonCalendar">
        <add-to-calendar-button
        name="Mili Birthday"
        description="Ven a mi fiesta"
        startDate="2023-07-19"
        startTime="20:30"
        endDate="2023-07-20"
        endTime="05:30"
        timeZone="America/Buenos_Aires"
        location="World Wide Web"
        options="'Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365','MicrosoftTeams'"
        listStyle="modal"
        buttonStyle="3d"
        trigger="click"
        hideIconButton
        hideCheckmark
        label="Agendar"
        background="#000"
        language="es"
        class="custom-button-style"
        ></add-to-calendar-button>
    </div>
    <script>
  // Get the button element
  const button = document.querySelector('#custom-button button');

  // Change the background color
  button.style.backgroundColor = '#000';
</script>
    `
}