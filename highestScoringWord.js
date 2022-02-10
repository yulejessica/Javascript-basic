var letterValues = { 
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26
};

//function definitions
function findEachWordCount(word){
  //split word into arra
  var wordArr = word.split('');
  wordScore = 0;
   for(j=0; j < wordArr.length;j++){
     var currentLetter = wordArr[j];
    for(var key in letterValues){
      if(currentLetter === key){
        var eachLetterScore = letterValues[key];
        wordScore += eachLetterScore;
      }
}
}
  return wordScore;
}

function highestScoringWord(string) {
  var highestWordCountOverall = 0;
  var wordWithHighestScoring = '';
  //sanitize the input to be all lower case
  string = string.toLowerCase();
 // convert string to its array version 
 var inputArr = string.split(' ');
 for(var i = 0; i < inputArr.length; i++){
   var currentWord = inputArr[i];
   var eachWordCount = findEachWordCount(currentWord);
   if( eachWordCount > highestWordCountOverall){
     highestWordCountOverall = eachWordCount;
     wordWithHighestScoring = currentWord;
   }
 }
  return wordWithHighestScoring;
}


function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed');
  } else {
    console.log(`failed [${testName}] expected "${expected}", but got "${actual}"`);
  }
}

var input_1 = 'what time are we climbing up the volcano';
var actual_1 = highestScoringWord(input_1);
var expected_1 = 'volcano';
assertEqual(actual_1, expected_1,'should return the highest scoreword amng the string of words');
