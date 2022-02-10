/**Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

// var input = 'a short example';
// var splitInput = input.split('');
// var firstSlice = splitInput.slice(0,5);
// var secondSlice = splitInput.slice(5, 10);
// console.log('first', firstSlice)
// console.log('second', secondSlice)

function flipEveryNChars(inputString, n){
  //create result string
  var flipped = '';
  //split input string into an array, on no delimiter
  var characters = inputString.split('');
  //iterate over array of characters, incremented by N
  for (var i = 0; i<characters.length; i+=n){
    //slice arrfrom current position to current position plus n
      var currentSlice = characters.slice(i, i+n)
    //reverse the array
      var reversedSlice = currentSlice.reverse();
      //join the reversed array
      var joinedSlice = reversedSlice.join('');
    //add resulting string to result 
      flipped += joinedSlice;
  }

    //return result
    return flipped;
}

//ASSERTION FUNCTION
function assertEqual(actual, expected,testName){
  if(actual === expected){
    console.log('passed')
  } else{
    console.log('FAILED ['+testName+'] Expected "'+expected+'", but got "'+ actual +'"')
  }
}

//TEST CASE
var input_1 = 'a short example'
var actual_1 = flipEveryNChars(input_1, 5);
var expected_1 = 'ohs axe trelpma';
assertEqual(actual_1,expected_1, 'should return flip every chunk of 5 characters in a string')

var input_2 = 'abcdefghijkl'
var actual_2 = flipEveryNChars(input_2, 4);
var expected_2 = 'dcbahgfelkji';
assertEqual(actual_2,expected_2, 'should return flip every chunk of 4characters in a string')
