import { atcb_action } from 'add-to-calendar-button';

export const buttonCalendar = () => {
  const config = {
    name: "Mili Birthday",
    description: "Ven a mi fiesta",
    startDate: "2023-07-19",
    startTime: "20:30",
    endDate: "2023-07-20",
    endTime: "05:30",
    timeZone: "America/Buenos_Aires",
    location: "World Wide Web",
    options: ["Apple","Google","iCal","Outlook.com","Yahoo","Microsoft365","MicrosoftTeams"],

  };

  const button = document.querySelector('#my-default-button');
  if (button) {
    button.addEventListener("click", () => atcb_action(config, button));
  }
};
