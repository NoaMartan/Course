const studentsArr = [
  { firstName: "a1", lastName: "b1", email: "a1@gmail.com", age: 25 },
  { firstName: "a2", lastName: "b2", email: "a2@walla.com", age: 21 },
  { firstName: "a3", lastName: "b3", email: "a3@yahoo.com", age: 19 },
  { firstName: "a4", lastName: "b4", email: "a4@gmail.com", age: 31 },
  { firstName: "a5", lastName: "b5", email: "a5@gmail.com", age: 28 },
  { firstName: "a6", lastName: "b6", email: "a6@gmail.com", age: 22 },
];

let youngest = studentsArr[0];
for (let i = 1; i < studentsArr.length; i++) {
  if (youngest.age > studentsArr[i].age) {
    youngest = studentsArr[i];
  }
}

youngest = studentsArr[0];
for (obj of studentsArr) {
  if (obj.age < youngest.age) {
    youngest = obj;
  }
}

console.log(
  `The youngest student is ${youngest.firstName} ${youngest.lastName}, they are ${youngest.age} years old. Their email address is: ${youngest.email}`
);

console.log(
  `The youngest student is ${youngest.firstName} ${youngest.lastName}, they are ${youngest.age} years old. Their email address is: ${youngest.email}`
);

let stringArr = [];
let charOptions = ["a", "b", "c", "d", "e", "f", "g"];
let numOfStrings = 3;
let numOfChars = 4;
for (let i = 0; i < numOfStrings; i++) {
  stringArr[i] = "";
  for (let j = 0; j < numOfChars; j++) {
    stringArr[i] += charOptions[Math.floor(Math.random() * charOptions.length)];
  }
}
console.log(stringArr);
