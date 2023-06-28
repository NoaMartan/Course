function isNumInArray(number, array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }
  return false;
}

function averageOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function minMaxAndAverage(array) {
  let min = array[0];
  let max = array[0];
  let average = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else {
      max = array[i];
    }
    sum += array[i];
  }
  average = sum / array.length;
  let obj = {
    min: min,
    max: max,
    average: average,
  };
  return obj;
}

function combinedArrays(array1, array2) {
  let combinedArray = [];
  let longArr;
  let shortArr;
  if (array1.length >= array2.length) {
    longArr = array1;
    shortArr = array2;
  } else {
    longArr = array2;
    shortArr = array1;
  }

  for (let i = 0; i < longArr.length; i++) {
    combinedArray[combinedArray.length] = longArr[i];
    if (i < shortArr.length) {
      combinedArray[combinedArray.length] = shortArr[i];
    }
  }

  return combinedArray;
}

let array = [1, 3, 5, 7];
let array2 = [2, 4, 6, 2, 2];
console.log(combinedArrays(array, array2));
