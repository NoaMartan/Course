let isPrinted = false;
function clickHandler() {
  if ((isPrinted = false)) {
    console.log("click");
    isPrinted = true;
  }
}

const element1 = document.getElementById("p1");
console.log(element1);
const liItems = document.getElementsByClassName("item");
console.log(liItems);
const lis = document.querySelectorAll("li");
console.log(lis);

for (let item of lis) {
  let text = item.textContent;
  console.log(text);
}

const div2 = document.getElementById("div2");
console.log(div2.innerHTML);
