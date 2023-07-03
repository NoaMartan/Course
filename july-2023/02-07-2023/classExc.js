const users = [
  { username: "noamartan", password: "12345" },
  { username: "edo", password: "meth" },
];
console.log("------------------before function--------------------------");
function loginHandler() {
  console.log("------------------in function--------------------------");
  const form = document.forms["loginForm"];
  let username = form["username"].value;
  let password = form["password"].value;
  console.log(username, password);
  let isMatch = false;
  for (let user of users) {
    if (user.password === password && user.username === username) {
      document.getElementById("errormsg").innerHTML = "Logging in...";
      isMatch = true;
      break;
    }

    if (!isMatch) {
      document.getElementById("errormsg").innerHTML =
        "Incorrect username or password";
    }
  }
}
