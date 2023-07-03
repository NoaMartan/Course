// persistent cookie - stays even if the browser is closed
// non persistent cookie - will be deleted once browser is closed
const date = new Date();
document.cookie = `name=noa expires=${date.toUTCString()}`;
console.log(document.cookie);

// sessions storage wont remain after closing the browser
sessionStorage.setItem("test", "i want to go home");
console.log(sessionStorage.getItem("test"));
localStorage.setItem("localItem", "wow");
console.log(localStorage.getItem("localItem"));

const jsonObj = {
  firstName: "Noa",
  lastName: "Martan",
};

localStorage.setItem("data", JSON.stringify(jsonObj));
const obj = JSON.parse(localStorage.getItem("data"));
console.log(obj);
