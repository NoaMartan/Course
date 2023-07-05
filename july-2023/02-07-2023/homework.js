let users = [];

function init() {
  const storageUsers = localStorage.getItem("users");
  if (storageUsers !== null) {
    users = JSON.parse(storageUsers);
  }
  generateTableBody();
}
function submitHandler() {
  const form = document.forms["userData"];
  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const email = form["email"].value;
  users[users.length] = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  localStorage.setItem("users", JSON.stringify(users));

  document.querySelector("#tbody").innerHTML += `
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td> <button onclick="removeRow(${users.length - 1})">X</button> </td>
    <tr/>
  `;
  form.reset();
}
function removeRow(rowIndex) {
  let newUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (i !== rowIndex) {
      newUsers[newUsers.length] = users[i];
    }
  }
  users = newUsers;
  generateTableBody();
  localStorage.setItem(users, JSON.stringify(users));
}
init();

function generateTableBody() {
  document.querySelector("#tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    document.querySelector("#tbody").innerHTML += `
  <tr>
    <td>${users[i].firstName}</td>
    <td>${users[i].lastName}</td>
    <td>${users[i].email}</td>
    <td> <button onclick="removeRow(${i})">X</button> </td>
    <tr/>
  `;
  }
}
