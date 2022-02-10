//001- assertEqual: if return value is boolen, use assertEqual
function multiplyByTwo(n) {
  return (n * 2) ;
}

function assertEqual(actual, expected, testName) {
  if (actual ===expected){
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}


var actual = multiplyByTwo(2); // returns 4
var expected = 4; 
var testName = 'it doubles 2 to 4';
assertEqual(actual, expected, testName);


//002-assertArraysEqual
function assertArraysEqual(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;

  var areEqualItems = true;
  for (var i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      areEqualItems = false;
      break;
    }
  }

  if (areEqualLength && areEqualItems) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

//OR
function assertArraysEqual(actual, expected, testName) {
  var areEqualValues = actual.every(function(item, i) {
    return item === expected[i];
  });
  var areEqualLength = (actual.length === expected.length);

  if (areEqualLength && areEqualValues) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}


//003-ASSERTOBJECTEQUALS
function assertObjectsEqual(actual, expected, testName) {
  // assign actual and expcted to be stringified version of themselves
  actual =  JSON.stringify(actual)
  expected =  JSON.stringify(expected)
  //compare those stringified version
  if (actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual )
  }
}

//Test Case
var person = {
  firstName: 'Cassidy',
  lastName: 'Jacobs'
};
updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Jacobs'
};

assertObjectsEqual(person, expected, "updates person's existing first name field");
// console output:


//004-assertWithinRange
function assertWithinRange(low, high, actual, testName) {
  //if actual >= low and actual is <= high
    //log passed
  //else 
    //log failed
  if(actual >= low && actual <= high){
    console.log('passed')
  } else {
    console.log('FAIL ['+ testName + '] "' + actual + '" not within range '+ low + ' to '+ high)
  }
}

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed


// FUNCTION DEFINITION(S)
function addOne(val) {
  return val + 1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(condition, testName) {
  if (condition) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + ']');
  }
}

// TESTS FOR isOne
var result1 = addOne(1);
assert(result1 === 2, 'should return result of a positive input number added to 1');

var result2 = addOne(-2);
assert(result2 === 1, 'should return result of a negative input number added to 1');


//005-Apply assertEqual_1
// FUNCTION DEFINITION(S)
function square(n) {
  return n * n+1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+ testName +'] Expected "'+ expected +'", but got "'+ actual +'"')
  }
}
// TESTS CASES
var actual = square(2)
var expected = 4
var testName = 'it sqaures 2 to 4';
// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(condition, testName){
  if(condition){
    console.log('passed')
  } else {
    console.log('FAILED [' + testName +']')
  }
}
// TESTS CASES
//positive integer
var actual_1 = square(2)
var expected_1 = 4;
assertEqual(actual_1, expected_1, 'should square a positive integer')
//negative integer
var actual_2 = square(-3)
var expected_2 = 9;
assertEqual(actual_2, expected_2, 'should square a negative integer')
//input is 0
var actual_2 = square(-0)
var expected_2 = 0;
assertEqual(actual_3, expected_3, 'should square an input of zero')
//input is a decimal
var actual_2 = square(.5)
var expected_2 = .25;
assertEqual(actual_4, expected_4, 'should square a decimal input')


//006-Apply assertEqual_2
// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  //iterate over each element inside the array
  for (var i = 0; i < array.length; i++) {
    //if doesEvery is ever false, return directly
    if(doesEveryElementMatch === false){
      return doesEveryElementMatch;
    }
    doesEveryElementMatch = callbackFunction(array[i]);
  }
  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+ testName +'] Expected "'+ expected +'", but got "'+ actual +'"')
  }
}

// TESTS CASES
function lessThan10(val) {
  return val < 10;
} //this is your test case's call back function

var arrayTrue = [1, 2, 3, 2, 8,3]; //test case array
var actualTrue = every(arrayTrue,lessThan10) //write the definition of the every function and get the result and it is the actual
//expected: true
assertEqual(actualTrue, true, "should return true when all array values return true when tested")

var arrayFalse =[9, 89, 8, 3];
var actualFalse = every(arrayFalse,lessThan10)
//expected:false
assertEqual(actualFalse, false, "should return false when not all array values return false when tested ")


//007-Apply assertArraysEqual
// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i]
    //apple callback function, then store result in newArray
    var result = callbackFunction(element)
    newArray.push(result);
  }
  return newArray;
}

function cubeAll(numbers) {
  //calling map on the numbers
  return map(numbers, function(n) {
    return n * n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName){
  var hasSameValues = true;
  for(var i = 0; i< actual.length; i++){
    if(actual[i] != expected[i]){
      hasSameValues = false; 
      break;
    }
  }
  var hasSameLengths = actual.length === expected.length;

  if(hasSameValues &&  hasSameLengths){
    console.log('passed')
  } else {
    console.log('FAILED ['+ testName +'] Expected "'+ expected +'", but got "'+ actual +'"')
  }
}

// TESTS CASES
//test map function
  //create callbackfunction for map to be addOne
function addOne(val){
  return val + 1;
}

var inputForMap = [1,2,3,4,5];
//make a call for map and save the result to actual map
var actualMap = map(inputForMap, addOne)
var expectedMap= [2,3,4,5,6]
assertArraysEqual(actualMap, expectedMap, "should correctly map elements of an array")

//test cubeAll
var inputForCubeAll = [1,3,5];
var actualCubeAll = cubeAll(inputForCubeAll)
var expectedCubeAll = [1,27,125]
assertArraysEqual(actualCubeAll, expectedCubeAll, "should correctly cube all elements of an array")

//could also test on negative input, 0 and decimal


//008-Apply assertObjectsEqual
// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
 if(actual === expected){
   console.log('passed')
 } else {
   console.log('FAILD ['+ testName + '] Expected '+ expected +', but got '+ actual +' ')
 }
}

// TESTS CASES
//everything present
var inputObject = {
  firstName:'Jack',
  lastName: 'Jacobs'
};
var actual = addFullNameProp(inputObject);
var expected= {
  firstName:'Jack',
  lastName: 'Jacobs',
  fullName: 'Jack Jacobs'
}
assertObjectsEqual(actual,expected, "should add full name property")

//missing first name
var inputObject = {

  lastName: 'Jacobs'
};
var actual = addFullNameProp(inputObject);
var expected= {
  lastName: 'Jacobs',

}
assertObjectsEqual(actual,expected, "should not add full name property if first name is missing")

//mising last name
var inputObject = {
  firstName:'Jack',
};
var actual = addFullNameProp(inputObject);
var expected= {
  firstName:'Jack',

}
assertObjectsEqual(actual,expected, "should not add full name property if last name is missing")


//Skeletons Code Solutions

//001_average
// Skeleton
// FUNCTION DEFINITION(S)
function average(numbers) {
  // create calculatedSum variable and assign to call to sum function
  var calculatedSum = sum(numbers);
   // returns the average of an array of numbers
    return calculatedSum/(numbers.length)
}

function sum(numbers) {
  // returns the sum of an array of numbers
  //create result variable and set sum to be 0
  var result = 0;
  //iterate over the numbers inside the array
  for(var i = 0; i < numbers.length; i++){
    //add each element to sum
    result = result + numbers[i];
  }
  //return result variable 
  return result;
 
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED, ['+testName+'] Expected "'+expected+'", but got "'+actual+'"')
  }
}

// TESTS CASES
//test sum function
var input = [1,2,3,4,5,6,7,8]
var actualSum= sum(input);
var expectedSum = 36;
assertEqual(actualSum, expectedSum, "should correctly return sum of the array of numbers")
//test avg function
var actualAverage = average(input);
var expectedAverage = 4.5;
assertEqual(actualAverage,expectedAverage, "should correctly return average of the array of numbers" )



//002_decorateStudentList:
// FUNCTION DEFINITION(S)
// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);//round up to the next largest integer 
  max = Math.floor(max);//returns the largest integer less than or equal to max
  //create a randome variable and assign to the integers between the range of min and nax
    //Math.random() is range 0 to 0.999999...
    // total amount of numbers between min and max : (max - min + 1)
  //return random
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
  console.log('random',random)
}

function decorateClassListWithAges(classList) {
  //create result variable and set it to empty array
  var result = [];
  //iterate over input array
  for(var j =0; j<classList.length; j++){
    //create a new object
    var currentStudent = {}
    //set a name property on new object
    currentStudent.name = classList[j];
    //set an age property on new object
    currentStudent.age = getRandomIntInclusive(10, 11);;
    //push new object to result array
    result.push(currentStudent)
  }
  // returns result
  return result;
}


// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual){
  if (low <= actual && high >= actual){
    return true;
  } else {
    return false;
  }
}
//some test function (takes in classList, and classListWithAges)
function testDecorateStudentList(input, output){
  //iterate over classlist
  for (i = 0; i<input.length; i++){
    //check if current name is the same between classList and classListWithAges 
    if(input[i]!== output[i].name){
    //end the function, maybe failure message
    console.log('FAILED, Incorrect name at index: '+ i);
    return;
    }
    //check if age values for current classListwithAges object is between 10 and 11 ==> assert within range
    if(assertWithinRange(10,11,output[i].age)===false){
      //end the function, maybe failure message
      console.log('FAILED, Incorrect age at index: ' + i);
      return;
    }
  }
  console.log('passed');
}

// TESTS CASES

//test decorateClassListWithAges
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = decorateClassListWithAges(classList)

testDecorateStudentList(classList,classListWithAges)

var output = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}];
assertArrayEquals = (actual, expected, "should return an array of object literals decorated with name and age for each student ")


//003_isIsogram
// Skeleton
// FUNCTION DEFINITION(S)
function isIsogram(text) {
  //empty string should return true
  if(text === ''){
    return true;
  }
  //change to lower case
  text = text.toLowerCase();
  var arrayOfLetters = text.split("");
  // add each char to a set
  var setOfLetters = new Set(arrayOfLetters);
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if(arrayOfLetters.length === setOfLetters.size){
    return true;
  } else{
    return false;
  }
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}
// TESTS CASES
var inputPass_1 = 'abcdefg';
var actualPass_1= isIsogram(inputPass_1);

assertEqual(actualPass_1, true, 'should return true for an isogram with all lower case')

var inputPass_2 = 'sTop';
var actualPass_2 = isIsogram(inputPass_2);

assertEqual(actualPass_2, true, 'should return true for an isogram with mixed case')

var inputFail_1 = 'stopped';
var actualFail_1 =  isIsogram(inputFail_1);

assertEqual(actualFail_1, false, 'should return false for a  non-isogram with lower case')


var inputFail_2 = 'aAqzrj';
var actualFail_2 =  isIsogram(inputFail_2);
assertEqual(actualFail_2, false, 'should return false for a  non-isogram with lower case')


//004_interpretASkeleton
// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  var arrayOfLetters = word.split("");
  //create object to store the counts
  var objectOfCounts = {}
  // Count the instances of each letter array
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
  var highest = 0;
  for(var key in objectOfCounts){
   if(objectOfCounts[key] > highest){
      highest = objectOfCounts[key];
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
    //alias for current word
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


//005_renderPhoneNumber
// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  //get areacode wrap in parathense, add to string
  string += this.parenthesize(this.getAreaCode());
  string += " ";
  //get exchange code, add to string
  string += this.getExchangeCode();
  //add hyphen to string
  string += "-";
  //get line number, add to string
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0,3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6,10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual !== expected) {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  } else {
    console.log('PASSED [' + testName + ']');
  }
}

//TEST FOR RENDER
//create a new instance of PhoneNumberFormatter
var formatter = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log(formatter);

// //test individual methods as we go
// var lineNumber = formatter.getLineNumber();
// console.log('lineNumber:', lineNumber);

var formattedNumber = formatter.render();
console.log(formattedNumber)//(650)835-9272

//006_findLongestPalindrome
// Skeleton
// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into word
  var words = sentence.split(" ");
  // iterate words and 
  //create an empty array and collect the palindromes
  var palidromes = [];
  for (var i= 0; i< words.length;i++){
    if (isPalindrome(words[i])=== true){
      palidromes.push(words[i])
    }
  }
  // sort the list of palindromes by word length
  palidromes.sort(sortAscendingByLength)
  // return the largest item in the sorted list
  return  palidromes.pop();
}


function reverseString(string) {
  //split string into an array
  var splitStringArray = string.split('');
  //reverse the new created array
  var reverseArray = splitStringArray.reverse();
  //join all elments together into a string
  var reversedString = reverseArray.join('');
  //return the reversed string
  return reversedString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase();
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USE
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed ['+testName+']')
  } else {
    console.log('FAILED [' +testName+ '] Expected "'+expected +'", but got "'+actual+'"')
  }
}

// TESTS CASES
var palidrome_test = 'wtrrtw';
var palidrome_test_result = isPalindrome(palidrome_test);
assertEqual(palidrome_test_result, true, 'should return true when input is a palidrome')


var non_palidrome_test ='riticulated'
var non_palidrome_test_result = isPalindrome(non_palidrome_test);
assertEqual(non_palidrome_test_result, false, 'should return false when input is not a palidrome')

var resultOfReverse = reverseString("abcdefg");
assertEqual(resultOfReverse, 'gfedcba', 'should return the input string reversed')

var resultOfFindLongest = findLongestPalindrome('a cute racecar went down to eye stettets')
assertEqual(resultOfFindLongest, 'stettets', 'should return the longest single-word palindrome')


//Fashion Inventory Code Solutions

//Part A:
function renderInventory(inventory) {
  //create a flatList string
  var flatList = '';
  //iterate over inventory array
  for (var i=0; i<inventory.length; i++){
    var designerObj= inventory[i];
    var shoes = designerObj['shoes']
    //for each shoe in the dessgnerobj's shoe array
      for(var j=0; j<shoes.length; j++){
        var currentShoe = shoes[j]
      //add the designer name, the shoe name, and the shoe price, and the new line
      //flatList += designerObj['name'] + ', ' + currentShoe['name'] + ', ' + currentShoe['price'] + '\n';
      flatList += renderCurrentShoeString(designerObj['name'],currentShoe['name'],currentShoe['price'] )

    }
  }
  //return flatList string
return flatList;
}

//Create helper functions if needed
function renderCurrentShoeString(designerName,shoeName,shoePrice){
  return designerObj['name'] + ', ' + currentShoe['name'] + ', ' + currentShoe['price'] + '\n';
}
//ASSERTION FUNCTION TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED [' +testName+ '] Expected "'+expected +'", but got "'+actual+'"')
  }
}
//test case
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var actualFlatList = renderInventory(currentInventory)
var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
assertEqual(actualFlatList, expectedFlatList, 'should render flat list of inventory item')


//
function calculateAveragePricePerDesigner(inventory) {
  //create result object in described format
  var result = {
    designers: []
  };
  //iterate over inventory array
  for(var i= 0; i< inventory.length; i++){
    //create a few convenient alias
    var designerObject = inventory[i];
    var shoes = designerObject.shoes;
    //create avgPricePerDesigner obj
    var avgPricePerDesigner = {}
    //assign a name property to be the current designer name
    avgPricePerDesigner.name = designerObject.name;
    //assign an ave price property to be the result of calling 'getAveragePrice' function
    avgPricePerDesigner.averagePrice = getAveragePrice(shoes);
    //push getAveragePrice obj into result.designers
    result.designers.push(avgPricePerDesigner);
  }
  
  //return result obj
  return result;
}

// Create helper functions if needed
function getAveragePrice(arrayOfShoeObjects){
  //calculate and return average price for all shoe objects
    //create Sum variable and set to 0
    var sum = 0;
    //iterate over the shoe array 
    for(var j =0; j< arrayOfShoeObjects.length; j++){
      //create an alias for currentshoeobj
      var currentShoeObj= arrayOfShoeObjects[j]
      //add price of current shoe to the sum
      sum += currentShoeObj.price; 
    }
    //return AvgPricePerDesigner
    return sum/arrayOfShoeObjects.length;
}

//ASSERTION FUNCTION
function assertObjectEqual(actual, expected, testName){
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);
  if(actual === expected){  
    console.log('passed')
  } else {
    console.log('FAILED [' +testName+ '] Expected "'+expected +'", but got "'+actual+'"')
  }
}

//TEST CASE
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var actual = calculateAveragePricePerDesigner(currentInventory)
var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
assertObjectEqual(actual,expected, 'should match properly formattee average price per designer obj');

//Part C
function listAllBlackShoes(inventory) {
//create result string 
var result = '';
//iterate over inventory array
for (var i= 0; i<inventory.length; i++){
  //create a few alias
  var designerObj = inventory[i];
  var shoes = designerObj.shoes
  //iterate over shoe array
  for(j=0; j<shoes.length; j++){
    //create current shoe Obj alias
    var eachShoesObj = shoes[j] 
    //if there is any word named black 
    if(shoeIsBlack(eachShoesObj)){
      //add designer name, shoe name and price to the result string
      result += designerObj.name + ', ' + eachShoesObj.name+ ', '+ eachShoesObj.price + '\n';    
    }
  }
}
//return result string
return result;
}

//Create helper functions if needed
function shoeIsBlack(shoeObject){
  //check if name has black, 
  if(shoeObject.name.indexOf('black')!== -1){
    return true;
  } else {
    return false;
  }
}

//ASSERTION FUNCTION TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

//TEST CASE
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var actualFlatList = listAllBlackShoes(currentInventory);
var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';
assertEqual(actualFlatList,expectedFlatList,'should return all shoes with black in the name');



//PART:D
// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter
//FUNCTION DEFINITION
function generateLaceDetails(inventory){
  //create result array 
  var laceDetails =[];
  //iterate over inventory array
  for (var i = 0; i< inventory.length; i++){
    //create an alias for current designer object
    var designerObj = inventory[i];
    //create an alias for current shoe array
    var shoesArray = designerObj.shoes
    //iterate over shoe array
    for(var j = 0; j< shoesArray.length; j++){
      //create an alias for current shoe object
      var currentShoe = shoesArray[j];
      //if there is any shoe name contains 'Lace'
      if(hasLaceInShoeName(currentShoe)){
        //create an alias for the current lace shoe
        var laceObj = {}
        //split name into array of words
        var nameWordsArray = currentShoe.name.split (' ');
        laceObj['nameWords'] = nameWordsArray;
        laceObj['targetWordIndex'] = getLaceIndex(nameWordsArray);
        //add object to laceDetails array
        laceDetails.push(laceObj);
      }
      }
    }
  //return result array
  return laceDetails;
  }
  

//HELPER FUNCTION IF NEEDED
function hasLaceInShoeName(shoeObject){
  //check if shoe name contains lace
  //if it does 
    //return the index of lace in name 
  //otherwise 
    //return false
  if(shoeObject.name.indexOf('lace')!== -1){
    return true;
  } else {
    return false;
  }
}
// console.log(hasLaceInShoeName({name: 'plain beige suede moccasin', price: 950},));


function getLaceIndex(arrayOfNameWords){
  //iterate over the array of name words
  for(var k = 0; k<arrayOfNameWords.length; k++){
    if(arrayOfNameWords[k].indexOf('lace') !== -1){
      // return the index where lace is found 
      return k
    }
  } 
}
// console.log(getLaceIndex( [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ]))




//ASSERTION FUNCTION TO BE USED
function assertObjectEqual(actual, expected, testName){
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

//TEST CASE
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var actualResult = generateLaceDetails(currentInventory);
var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];
assertObjectEqual(actualResult,expectedResult, 'should generate properly formatted lace details')