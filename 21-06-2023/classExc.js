let num = Math.floor(Math.random() * 10);
console.log(`num = ${num}`);
let str = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    str += `${i}`;
  }
  console.log(str);
  str = "";
}
