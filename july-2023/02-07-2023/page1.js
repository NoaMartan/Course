function submitHandler() {
  const form = document.forms["submitForm"];
  const firstName = form["firstName"].value;
  console.log(firstName);
  const lastName = form["lastName"].value;
  console.log(lastName);
  const email = form["email"].value;
  const color = form["color"].value;
  const gender = form["gender"].value;

  console.log(firstName);
  console.log(lastName);
  console.log(form);

  generateTable(firstName, lastName, email, gender, color);
}

function generateTable(firstName, lastName, email, gender, color) {
  document.getElementById("tbody");
  let tableRow = `<tr>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${email}</td>
  <td>${gender}</td>
  <td>${color}</td>
  </tr>
  `;
  document.getElementById("tbody").innerHTML += tableRow;
}
