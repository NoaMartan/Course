let users = [];

function init() {
  const storageUsers = localStorage.getItem("users");
  // const arrUsers = JSON.parse(storageUsers);
  if (storageUsers !== null) {
    users = JSON.parse(storageUsers);
  }
  // for (let i = 0; i < arrUsers.length; i++) {
  //   users[i] = arrUsers[i];
  // }
  let tbody = document.querySelector("#tbody").innerHTML;
  for (let user of users) {
    document.querySelector("#tbody").innerHTML += `
  <tr>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <tr/>
  `;
  }
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
    <tr/>
  `;
  form.reset();
}

init();
