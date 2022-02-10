//Flip every pair of characters in a string.
function flipPairs(input){
  //create a result string 
  var flippedInput = '';
  //iterate over the string input, incremented by 2
  for(var i = 0; i< input.length; i+=2){
    //check if next character is undefined
    if(input[i+1] === undefined){
      //grab current character and add to result
      flippedInput += input[i];
      //break
      break;
  }
    //grab next character add to result 
    flippedInput += input[i+1];
    //grabe current character and add to result 
    flippedInput += input[i];
}
  //return result
  return flippedInput ;
}

//ASSERTION FUNCTION TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+testName+'] Expected "'+expected+'", but got "'+actual+'"')
  }
}

//TEST CASE
var input_1 = "check out how interesting this problem is, it\'s insanely interesting!";
var actual_1 = flipPairs(input_1);
var expected_1 = "hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!"
assertEqual(actual_1, expected_1, 'should flip every pair of character for large sentence with mixed charactors' );

var input_2 = "abcdef"
var actual_2 = flipPairs(input_2);
var expected_2 = "badcfe";
assertEqual(actual_2, expected_2, 'should flip every pair of character for small words');