let x = Math.floor(Math.random() * 100);
let sum = x;
while (x % 2 !== 0 && x % 3 !== 0) {
  console.log(`currently the number is ${x}, and sum is ${sum}.`);
  sum += x;
  x = Math.floor(Math.random() * 100);
}
console.log(`${sum} is the sum of all the numbers`);
