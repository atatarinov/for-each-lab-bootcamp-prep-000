function iterativeLog(array) {
  return array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var newArr = [1, 2, 3, 4, 5];
  newArr.forEach(callback);
  return newArr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
