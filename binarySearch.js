/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

function binarySearch(inputArray,searchValue){
  var min = 0; 
  var max = inputArray.length -1; 
  var midpoint = Math.floor((max+min)/2);

  while (min <= max){
    if(searchValue === inputArray[midpoint]){
      return midpoint;
    }
    //if the target value is less than the value at midpoint
    if(searchValue < inputArray[midpoint]){
       //reset max to the midpoint - 1
       max = midpoint - 1; 
    }
    //if the search value is greater than the value at midpoint
    if(searchValue > inputArray[midpoint] ){
      //reset min to be midpoint +1; 
      min = midpoint + 1; 
    }

    //re-guess or reset the midpoint to be the middle of the remaining array 
      midpoint = Math.floor((max+min)/2);
  }
  //if while loop stops, we know the target value is NOT present
  return null;
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}] EXPECTED "${expected}", but got "${actual}".`);
  }
}


var actual_1 = binarySearch([1, 3, 16, 22, 31, 33, 34],31)
var expected_1 = 4; 
assertEqual(actual_1, expected_1, 'should return the correct index value of the search value inside the input array');



var actual_2 = binarySearch([1, 3, 16, 22, 31, 33, 34],15)
var expected_2 = null; 
assertEqual(actual_2, expected_2, 'should return null when the search value is not inside the input array');