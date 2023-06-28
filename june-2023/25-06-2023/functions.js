function multiply(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(multiply(10));

function printRandomColor() {
  let colorsArr = ["red", "orange", "blue", "white", "black", "orange"];
  return colorsArr[Math.floor(Math.random() * colorsArr.length)];
}

console.log(printRandomColor());
