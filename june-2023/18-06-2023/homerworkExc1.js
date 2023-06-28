let num1 = Math.floor(Math.random() * 101);
let num2 = Math.floor(Math.random() * 101);
let min, max;
if (num1 < num2) {
  max = num2;
  min = num1;
} else {
  max = num1;
  min = num2;
}
//document?.write(`<h1>min number:${min}, max number:${max}<h1/>`);
console.log(`min number:${min}, max number:${max}`);
for (let i = min; max >= i; i += min) {
  console.log(`${i} is a number that can be divided in ${max}`);
  //document?.write(`<h1>${i} is a number that can be divided in ${max}<h1/>`);
}
