const items = ["volvo", "audi", "bmv"];
function addItemsToElement(itemsArray, element) {
  let strItems = "";
  let originalText = element.innerHTML;
  for (let i = 0; i < itemsArray.length; i++) {
    if (i % 2 === 0) {
      strItems += `<li style="color: red">${itemsArray[i]}</li>`;
    } else {
      strItems += `<li style="color: blue">${itemsArray[i]}</li>`;
    }
  }
  element.innerHTML = strItems + originalText;
}
let ulElement = document.getElementById("list");
addItemsToElement(items, ulElement);
