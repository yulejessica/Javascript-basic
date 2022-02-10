/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/


function transposeTwoStrings(inputArray){
  //create alias for first string
  var firstString = inputArray[0];
  //create alias for second string 
  var secondString = inputArray[1];
  //create a variable for the longer string 
  var longerString; 
  //determine longer string 
  if(firstString >= secondString){
    longerString = firstString;
  } else {
    longerString = secondString;
  }
//create result string 
  var transposedString = '';
  //iterate over the length of longer string
  for(var i = 0; i < longerString.length; i ++){
    //set first to first string current letter or empty space
    var firstChar = firstString[i] || " ";
    //set second to second string's current letter of empty space
    var secondChar = secondString[i] || " ";
    //add first, space, second, and newline to result string
    transposedString += firstChar + ' ' + secondChar + ' ' + '\n';

  

  }
  return transposedString;
}