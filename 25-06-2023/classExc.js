const tbl = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

document.write(`<table border="1">
 <thead>
 <tr>
 <th>col 1</th>
  <th>col 2</th>
   <th>col 3</th>
 </tr>
 </thead>
 <tbody>
`);

for (line of tbl) {
  document.write(`<tr>`);
  for (cell of line) {
    document.write(`<td>${cell}</td>`);
  }
  document.write(`</tr>`);
}

document.write(` 
 </tbody>
  </table>`);
document.write("<hr>");
const list = ["item1", "item2", "item3", "item4"];

document.write(`<ul>`);
for (item of list) {
  document.write(`<li>${item}</li>`);
}
document.write(`</ul>`);
