// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  var arrayOfLetters = word.split("");
  //create object to store the counts
  var objectOfCounts = {};
  // Count the instances of each letter
  for(var i = 0; i <arrayOfLetters.length; i++){
    //create alias for current letter 
    var currentLetter = arrayOfLetters[i];
    //if havent counted the current letter
      //set the count to 1
    //otherwise 
      //increment the count by 1
    if(objectOfCounts[currentLetter] === undefined){
      objectOfCounts[currentLetter] = 1;
    } else {
      objectOfCounts[currentLetter] ++;
    }
  }

  // Iterate all the counts and find the highest
  highest = 0;
//   for(var key in objectOfCounts){
//   if(objectOfCounts[key] > highest){
//       highest = objectOfCounts[key];
//   }
//   }
var countsArr = Object.values(objectOfCounts);
for(var i = 0; i < countsArr.length; i++){
    if(countsArr[i] > highest){
        highest = countsArr[i];
    }
}
  // Return this word's max repeat count
  return highest;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var arrayOfWords = text.split(" ");
  // For each word...
  for(var j = 0; j< arrayOfWords.length; j++){
    var word = arrayOfWords[j];
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    // If that max repeat count is higher than the overall max repeat count, then
    if(repeatCountForWord > maxRepeatCountOverall ){
      // update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord;
      // update wordWithMaxRepeatCount
      wordWithMaxRepeatCount = word;
    }
  }
  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}
// TESTS CASES
var input_1 = 'technology';
var actual_1 = findMaxRepeatCountInWord(input_1);
var expected_1 = 2;
assertEqual(actual_1,expected_1,'should return 2 for given word')

var input_2 = "I passed my exam are you not entertained";
var actual_2 = findFirstWordWithMostRepeatedChars(input_2)
var expected_2 = "entertained";
assertEqual(actual_2,expected_2,'should return word with most repeated charactor')