var fs = require('fs');

//create empty array to store numbers
var numArray = [];


//function to retrieve text file, and convert to to numbers.
//Then callback a function when done
function numsToArray(callback){
  fs.readFile('numbers.txt', 'utf-8', function(err, fileContents) {
    numArray = fileContents.split(', ');
    for (var i = 0; i < numArray.length; i++) {
      numArray[i] = parseInt(numArray[i]);
    }
    callback();
  })
}

//callback function to log required values.
function done(array) {
  //calls the get 
  console.log(getValues(numArray));
}

function getValues(array) {
  var values = {};
  values.high = array[0];
  values.low = array[0];
  values.average = 0;
  var tempSum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > values.high) {
      values.high = array[i];
    }
    if (array[i] < values.low) {
      values.low = array[i];
    }
    tempSum += array[i];
  }
  values.average = Math.round(tempSum/(numArray.length));
  return values;
}

numsToArray(done);
