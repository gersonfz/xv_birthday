export const contentForm = `
<form class="formAssistance" action="https://xv-backend.onrender.com/send-mail/form-birthday" method="POST">
  <div class="inputRadio">
    <div class="inputRadio-margin">
      <input type="radio" id="confirm-yes" name="attendance" value="yes" checked >
      <label for="confirm-yes">Si,<br>confirmo</label>
    </div>
    <div class="inputRadio-margin">
      <input type="radio" id="confirm-no" name="attendance" value="no">
      <label for="confirm-no">No<br>puedo :(</label>
    </div>

  </div>
  <div class="inputText">
    <div class="form-group">
      <input type="text" id="name" name="name" placeholder="Ingrese su nombre completo:">
    </div>
    <div class="form-group">
      <textarea id="important-data" name="important-data" placeholder="Agregue algún dato importante  Ej: Soy vegetariano"></textarea>
    </div>
  </div>
  <input class="button" type="submit" value="Enviar">
</form>
`;

