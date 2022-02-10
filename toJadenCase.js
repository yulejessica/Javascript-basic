function toJadenCase(input) {
  //create result string 
  var result = '';
  //convert string to array 
  var inputArray = input.split(' ');
  //create a result array and set it to empty array
  var resultArray = [];
  //for each word in array
  for(var i = 0; i<inputArray.length; i ++){
    //create an alias for current word
    var currentWord = inputArray[i];
    // //get first letter of each word
    // var firstLetter = currentWord.substring(0,1);
    // //get remaining letter 
    // var remainingLetter = currentWord.substring(1);
    // //convert first letter to upper case
    // var captitalizedFirst = firstLetter.toUpperCase();
    // //concatenate first letter and remaining letter 
    // var capitalizedWord = captitalizedFirst + remainingLetter;
   var capitalizedWord = currentWord[0].toUpperCase() + currentWord.slice(1);
    //push capitalizedWord to result array
    resultArray.push(capitalizedWord)
}
  //convert result array to string
  result = resultArray.join(' ');
  return result;
  
};

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+testName+'] Expected "'+expected+'" but got "'+ actual+'"')
  }
}

var input = "How can mirrors be real if our eyes aren't real";
var actual =  toJadenCase(input);
var expected = 'How Can Mirrors Be Real If Our Eyes Aren\'t Real';
assertEqual(actual, expected, 'should capitalized every word in the string as return')