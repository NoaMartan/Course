//-------------------------------------------EXC-1----------------------------------------------------
function addItemToList(element, itemToAdd) {
  let updatedText = element.innerHTML + `<li>${itemToAdd}</li>`;
  element.innerHTML = updatedText;
}

function onclickHandler() {
  let elementText = document.getElementById("list");
  let inputValue = document.getElementById("input").value;
  addItemToList(elementText, inputValue);
}
//-------------------------------------------EXC-2----------------------------------------------------
function randomizeItems(element, arr) {
  arr = arr.reverse();
  showcaseList(element, arr);
}

function showcaseList(element, arr) {
  element.innerHTML = arr.join("");
}

function onclickHandler2() {
  randomizeItems(element, arr);
}

let arr = ["<li> apple </li>", "<li> orange </li>", "<li> banana </li>"];
let element = document.getElementById("listRandom");
showcaseList(element, arr);
//-------------------------------------------EXC-4----------------------------------------------------

function createdInfoTable(peopleArr) {
  let tableStr = `<table>
    <tr>
    <th>First Name</th>
     <th>Last Name</th>
      <th>Email</th>
    </tr>`;
  for (let person of peopleArr) {
    tableStr += `<tr>
        <td> ${person.firstName} </td>
        <td> ${person.lastName} </td>
        <td> ${person.email} </td>
        </tr>`;
  }
  tableStr += "</table>";
  document.getElementById("body").innerHTML =
    document.getElementById("body").innerHTML + tableStr;
}

let people = [
  { firstName: "Tal", lastName: "Sagi", email: "talsagi@gmail.com" },
  { firstName: "Noa", lastName: "Martan", email: "noamartan@gmail.com" },
];

createdInfoTable(people);
