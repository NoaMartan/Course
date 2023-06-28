//let num1 = +prompt("please type in a number");
//let num2 = +prompt("please type in another number");
//let avg = (num1 + num2) / 2;
//document.write(`<h1> the average is: ${avg} <h1/>`);
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making the request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing request");
    resolve(`Extra info ${response}`);
  });
}

/*
makeRequest("Facebook")
  .then((response) => {
    console.log("Response Received");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
*/
async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

function printInterval(number) {
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= number; i++) {
      setTimeout(20000);
      resolve(i);
    }
    reject("Done");
  });
}

async function executer() {
  try {
    const response = await printInterval(10);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

console.log(executer());
