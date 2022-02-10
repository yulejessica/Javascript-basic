/*Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

function detectOutlierValue(stringOfNums){
  //split input into an array of stringOfNums
  var arrayOfStringNums = stringOfNums.split(' ');
  //create arrays for odds and evens 
  var odds = [];
  var evens = [];
  //iterate over the array of stringOfNums
  for (var i = 0; i< arrayOfStringNums.length; i++){
    //convert current stringNum to a number
    var currentNum = Number(arrayOfStringNums[i]);
    //check if current stringofNums is odd or even 
    if(currentNum % 2 === 0){
      //create an object for that stringNum, with value, and the index (+1) where we found it 
      //push it to the appropriate odds or even array
      evens.push({
        values: currentNum,
        index: i+1,
      })
    } else {
      odds.push({
        values: currentNum,
        index: i+1,
      })
    }
}
  //check which array has a length of 1
    if(odds.length ===1){
      return odds[0].index;
    } else {
    //return that array's only value's index value
      return evens[0].index;
    }
}

//assertion function to be used
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+testName+'] Expected "'+expected +'" but got "'+actual+'"')
  }
}

//test casse 
input_1 = "2 4 7 8 10";
actual_1 = detectOutlierValue(input_1);
expected_1 = 3
assertEqual (actual_1, expected_1, 'should return the sole odd number when the rest of numbers are even')

input_2 = "1 10 1 1";
actual_2 = detectOutlierValue(input_2);
expected_2 = 2; 
assertEqual(actual_2, expected_2,'should return the sole even number when the rest of numbers are odd')