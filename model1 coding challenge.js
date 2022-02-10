function isOldEnoughToDrink(age) {
  // if given age is above limit
  if (age >= 21){
    //return true;
    return true;
  // otherwise
  } else {
    // return false
    return false;
  }
}

var output = isOldEnoughToDrink(22);
console.log(output); // --> true


function getProperty(obj, key) {

  var result = obj[key];
  return result;
}


var obj = {
 key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'



function addFullNameProperty(obj) {
  // your code here
  var firstName = obj.firstName;
  var lastName  = obj.lastName;
  
  var fullNameValue = firstName + " " + lastName;
  obj['fullName'] = fullNameValue;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'


function addObjectProperty(obj1, key, obj2) {
  //fuction set a new property on the 1st object at the given key. 


  //The value of that new property is the entire 2nd object.
obj1[key] = obj2
  
}


var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }




//Advanced3
//Write a function called "select".

//Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

//Notes:

//If keys are present in the given array, but are not in the given object, it should ignore them.
//It does not modify the passed in object.

function select(arr, obj) {
  // your code here
  //create newObj object
  var newObj = {};
  //iterate over the array of keys 
  for (var i = 0; i < arr.length; i ++){
    //if current key is present in input object
    var currentKey = arr[i];
    if(obj[currentKey] !== undefined ){
      //add input object's property to newObj
      newObj[currentKey] = obj[currentKey]
    }
  }
  //return newObj object
  return newObj;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }



function getAllElementsButFirst(array) {
  // your code here
  //return array.slice(1)
  var result =[];
  for(var i = 1; i< array.length; i++){
      result.push(array[i]);
  }
  return result;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]



function getAllElementsButLast(array) {
  // your code here
  //return array.slice(0,array.length-1)
  
  var result = [];
  for (var i= 0; i< array.length-1; i++){
      result.push(array[i])
  }
  return result;
}
var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]


//Write a function called "countCharacter".
//Given a string input and a character, 
//"countCharacter" returns the number of occurrences of a given character in the given string.

 function countCharacter(str, char) {
  // your code here  
  var count =  0;
  for (i =0; i< str.length; i++){
    str.char ++;
    count ++;
  }
  return count;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3


function removeFromBackOfNew(arr) {
  // your code here
  //return arr.slice(0,arr.length-1)
  
  var copyOfArr=arr.slice();
  copyOfArr.shift();
  return copyOfArr;
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]


//Write a function called "countCharacter".
//Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.
function countCharacter(str, char) {
  // your code here  
  //creat count variable
  var count =  0;
//iterate over the characters in the input string
  for (i =0; i< str.length; i++){
    // if current character matches input char;
    if(str[i]=== char){
      //increment the count by 1;
    count++;
    }
  }
  //return count variable
  return count;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3


function getAllLetters(str) {
  // your code here
  if (str === ""){
      return [];
  }
  var splitted = str.split("");
  return splitted;
}


var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']


function getAllWords(str) {
  // your code here
  // if given empty string, return empty array
 if (str === ""){
      return [];
  }
  var splitted = str.split(" ");
  return splitted;
}   
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']



//Write a function called "countWords".
//Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
//Notes:If given an empty string, it should return an empty object.
function countWords(str) {
  // your code here
  //edge case: is given an empty string,should return empty object
  if(str === ""){
    return {};
  }

  //create count variable and set it to an empty object
  var count = {};
  //split input string into array of words
  var words =  str.split(" ");
  //iterate over the array of words
  for (var i=0; i< words.length; i++){
    //create alias for current word
    var currentWord = words[i];
    // if current words have not counted
    if(count[currentWord]=== undefined){
      // add it to count object with a value of 1
      count[currentWord] = 1;
    //otherwisse 
    } else {
      // increment value in count by 1
      count[currentWord] ++;
    }
  }
  //return result variable 
  return count;
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}



//Write a function called "or".

//Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

  //Do not use the || operator.
 //Use ! and && operators instead.
 function or(expression1, expression2) {
  // your code here
  //return (expression1 || expression2)
  return !(!expression1 && !expression2);

}
var output = or(true, false);
console.log(output); // --> true;



///******PAY ATTENTION TO THIS -- Advanced 2
//Write a function called "extend".

//Given two objects, "extend" adds properties from the 2nd object to the 1st object.

//Notes:

//Add any keys that are not in the 1st object.
//If the 1st object already has a given key, ignore it (do not overwrite the property value).
//Do not modify the 2nd object at all.


function extend(obj1, obj2) {
  // your code here

//iterate over the properties in obj2
//this give us a string version of all keys in obj2
for (var keyFromObj2 in obj2){
  //if current obj2 property is not in obj1, 
  if(obj1[keyFromObj2] === undefined ){
     // add obj2's property to obj1
     obj1[keyFromObj2] = obj2[keyFromObj2]
  }
    
}
}


var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}


//Delete/Remove certain type of values in the object:
//remove array values:
function removeArrayValues(obj) {
  //iterate over the obj
  for (var key in obj){
    // check if values are of certain type
      if (Array.isArray(obj[key]) === true ){
        //remove current value
          delete obj[key];
      }
  }
}

//remove string value:
function removeStringValues(obj) {
  // your code here
  for (var key in obj){
      if (typeof obj[key] === 'string'){
          delete obj[key];
      }
  }
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }



function removeNumbersLargerThan(num, obj) {
  // your code here
  //iterate over obj
    // if current value is number and current value is greater than given number
        //remove current value  
    
  for (var key in obj){
  var value = obj[key];
      if (typeof value === 'number' && value > num){
          delete obj[key];
      }
  }

}



function countNumberOfKeys(obj) {
  // create count variable and set it as 0
  var count = 0
  //iterate over the obj
        //increment value in count by 1
  for (var key in obj){
    
          count ++;
      }
  
  //return count variable
  return count;
}

//or
function countNumberOfKeys(obj) {
  Object.keys(obj)
  return object.keys(obj).length;
}


var obj = {
  a: 1,
  b: 2,
  c: 3
};



function convertDoubleSpaceToSingle(str) {
  // your code here  
 // split the input String into an Array using "  " as seperator
var array = str.split("  ")
  //Transforming an Array into a String using " " as joiner
 return array.join(" ")


 //or 
 return str.split("  ").join(" ")
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
var output = countNumberOfKeys(obj);
console.log(output); // --> 3




function getAllElementsButNth(array, n) {
  // your code here
  array.splice(n,1)
  return array;
} 

//or 
function getAllElementsButNth(array, n) {
  // your code here
  var result = [];
  for (var i = 0; i < array.length; i ++){
    if (i = n){
      continue;
    }
    result.push(array[i])
  }
  return result;
}




function getIndexOf(char, str) {
  // your code here
  //return str.indexOf(char);
  
  //or
  
  //iterate over input string
    //if current char equals to input char
        //return index
  //return -1
for (var i = 0; i<str.length; i++){
    if(str[i] === char){
        return i;
    }
}
return -1;
    
}




function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  //compare word1 and word2
  if(word1.length > word2.length){
      if (word2.length > word3.length){
          return word3.length
      } else {
          return word2.length;
      }
  } else {
      return word1.length;
  }
}

// or 
function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  //create an array
  var array = [word1, word2, word3]
  //make the first word length as the minimum length;
  var minLength = word1.length;
  //iterate over the rest of words in the array;
  for (var i = 1; i <array.length; i ++){
    //if current word length is less than min length
     //reassign  minlength to be the length of current word
     if (array[i].length < minLength){
      minLength = array[i].length;
     }

  }
  return minLength;
}




function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  if(word1.length<word2.length){
      if(word2.length < word3.length){
          return word3.length;
      } else{
          return word2.length;
      }
  } else {
      return word1.length;
      
  }
}

//or 
function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  //create an array with all words;
  var array = [word1, word2, word3]
  //create maximum length var and assign it to be the lenth of first word;
  var maxLength = word1.length;
  //iterate over the rest of words
  for (var i = 1; i<array.length; i++){
      //if current word's length is longer than max length;
      if(array[i].length > maxLength){
          //reassign max length to be the length of current word;
          maxLength = array[i].length;
      }
  }
  //return max length
  return maxLength;




  function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  //create an array of all the words
  var words = [word1, word2, word3];
  //create longest variable and assign it to first word
  var longest = words[0];
  //iterate over the words
  for (var i = 0; i< words.length; i++){
      //if current word length is greater than longest
      if(words[i].length > longest.length){
          //assign longest to be the current word
          longest = words[i];
      }
  }
  //return longest's word
  return longest;
}
}

function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  var words = [word1, word2, word3];
  var shortest = words[0]
  for(var i = 0; i< words.length; i++){
      if(words[i].length < shortest.length){
          shortest = words[i];
      }
  }
  return shortest;
}


//Advanced3


function select(arr, obj) {
  // your code here
  //create newObj object
  var newObj = {};
  //iterate over the array of keys 
  for (var i = 0; i < arr.length; i ++){
    //if current key is present in input object
    var currentKey = arr[i];
    if(obj[currentKey] !== undefined ){
      //add input object's property to newObj
      newObj[currentKey] = obj[currentKey]
    }
  }
  //return newObj object
  return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }




function filterOddLengthWords(words) {
  //create result array
  var result = [];
  //iterate over every word in the words array
      //if current word's length is odd 
        //add current word to end of result array
  for (i = 0; i < words.length; i++){
      if(words[i].length % 2 ===1){
          result.push(words[i]);
      
      } 
  }
  //return result array
  return result;
}


var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']




function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length ===0){
      return 0;
  }
  var result = 1;
  for (var i = 0; i<arr.length; i++){
        result *= arr[i];
        //result = result *arr[i];
        
      
  }
  return result;

}
var output = computeProductOfAllElements([2, 4,10]);
console.log(output); // --> 60


ffunction countAllCharacters(str) {
  // If the array is empty, it should return an empty array.
  if(str.length ===0){
      return {};
  }

//create an object to store counts
var result ={};

//iterate over the string of letters
 for (var i = 0; i<str.length; i++){
    //create an alias for current letter
  var currentLetter = str[i]
  //if have not counted current letter 
  if(result[currentLetter] === undefined){
         result[currentLetter] = 1;
     } else {
         result[currentLetter] ++
     }
 }
  
  return result;

}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}



//Write a function called "removeElement".

//Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

//Notes:

//If all the elements match, it should return an empty array.
//If an empty array is passed in, it should return an empty array.


function removeElement(array, discarder) {
  // your code here
 //iterate over all elements inside array
    //if current element equals to discarder 
        //delete current element 
            //decrement index variable
  
  for(var i = 0; i<array.length; i++){
      if(array[i] === discarder){
          array.splice(i,1)
          i--;
      } 
  }
  return array;
  
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]



function keep(array, keeper) {
  
  //iterate over all elements inside array
    //if current element dose not equals to keeper 
        //delete current element 
            //decrement index variable
    for (var i = 0; i<array.length; i++){
        if(array[i] !== keeper)
        array.splice(i,1)
        i--
}
return array;   
  
}



function computeAverageOfNumbers(nums) {
  // your code here
  if (nums.length === 0){
    return 0;
  }
  var sum = 0;

function computeFactorialOfN(n) {
  var result = 1;
  for(var i = 1; i <=n; i++){
    result = result * i ;
  }
  return result;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24


function repeatString(string, num) {
  var result = '';
  for(var i  = 1; i<=num; i++){
    result = result + string;
  }
  return result;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'


  for (var i = 0; i< nums.length; i++){
      sum = nums[i] + sum;
  }

  return sum/(nums.length);
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3



function getAverageOfElementsAtProperty(obj, key) {
  if(obj[key] === undefined){
      return 0;
  }
  if(Array.isArray(obj[key]) === false){
      return 0;
  }
  if(obj[key].length ===0){
      return 0;
  }
  
  var sum = 0;
  for (i = 0; i <obj[key].length; i++){
      sum = obj[key][i] + sum;
  }
  
  return sum/obj[key].length;
  
}
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2



function getSmallestElementAtProperty(obj, key) {
  // your code here
  if(obj[key] === undefined){
      return undefined;
  }
  if(Array.isArray(obj[key]) === false){
       return undefined;
  }
  var smallest = obj[key][0]
  for(var i = 0; i< obj[key].length; i++){
      if(obj[key][i] < smallest){
          smallest = obj[key][i];
      }
  }
  return smallest;
}


var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1



function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if(obj[key] === undefined){
     return []; 
  }
  
  if(Array.isArray(obj[key])=== false){
      return [];
  }
  
  
      var lastIndex = obj[key].length -1
   
      obj[key]. splice(lastIndex, 1)

      //obj[key].pop

  return obj[key]
}



function getStringLength(string) {
  // create count variable
  var counter = 0
  //while we have a string with some length 
    //'chop' the first character of the string using slice
  while(string !== ""){
    string = string.slice(1);
    counter ++;
  }

  //return counter variable 
  return counter;
}
var output = getStringLength('hello');
console.log(output); // --> 5



function joinArrayOfArrays(arr) {
  // your code here
  //return arr[0].concat(arr[1],arr[2]);
  var result = [];
  for(var i = 0; i<arr.length; i++){
      result = result.concat(arr[i])
  }
  
  return result;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']



function getProductOfAllElementsAtProperty(obj, key) {
  if(obj[key] === undefined){
      return 0;
  }
  if(Array.isArray(obj[key]) === false){
      return 0;
  }
  if(obj[key].length === 0){
      return 0;
  }
  
  var result = 1;
  for(var i =0; i< obj[key].length; i++){
      result = result * obj[key][i];
  }
  return result;
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24





//ADVACED 5::::
function sumDigits(num) {

  var inputIsNegative = false;
//check if num is negative 
if(num < 0){
  // get rid of negative sign 
  num = Math.abs(num);
  //save info to later
  inputIsNegative = true;
}

  //iterate over the string 
  var sum = 0;
  // convert number to string and name the string as stringNum
  var stringNum = num.toString();

  var firstValue = Number(stringNum[0]);

  for (var i = 0; i < stringNum.length; i++){
    //convert current string char to a number 
    //add it to the sume

    sum = sum + Number(stringNum[i])
  }
 //check boolean flag and act approritely
  if(inputIsNegative){
    sum = sum - 2* firstValue
    return sum;
  } else {
    return sum;
  }
}

var output = sumDigits(1148);
console.log(output); // --> 14
var output = sumDigits(-316);
console.log(output); // --> 4



function findShortestWordAmongMixedElements(arr) {
  //If the given array is empty, it should return an empty string.
  if(arr.length ===0){
    return "";
  }
  //filter out the strings inside arr
  var strings = [];
  for(var i =0; i<arr.length; i++){
    if(typeof arr[i]=== "string"){
      strings.push(arr[i])
    }
  }
  //If the given array contains no strings, it should return an empty string
  if(strings.length === 0){
    return "";
  }
  //assum strings array has strings 
  var shortest = strings[0];
  for(var i = 1; i<strings.length; i++){
    if(strings[i].length < shortest.length){
      shortest = strings[i];
    }
  }
return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'


function computeSummationToN(n) {
  var sum =0
  for(var i = 0; i<=n; i++){
    sum =sum + i;
  }
    return sum;
  }
  var output = computeSummationToN(6);
console.log(output); // --> 21


//conditional
function convertScoreToGradeWithPlusAndMinus(score) {
if (score < 0 || score > 100){
    return 'INVALID SCORE';
}

if(score <= 59 ){
  return 'F';
} else if (score <= 69) {
  //IF 60, 61 OR 62
     //return D-
  //else if 68, 69
    //return D+
  if(score <= 62){
    return 'D-';
  } else if(score >= 68){
    return 'D+'
  } else {
    return 'D';
  }
} else if (score <= 79){
  if(score <= 72){
    return 'C-';
  } else if(score >= 78){
    return 'C+'
  } else {
    return 'C';
  }
} else if (score <= 89){
    if(score <= 82){
    return 'B-';
  } else if(score >= 88){
    return 'B+'
  } else {
    return 'B';
  }
  } else if(score <= 100){
    if(score <= 92){
    return 'A-';
  } else if(score >= 98){
    return 'A+'
  } else {
    return 'A';
  }
}
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

//Advanced6

function modulo(num1, num2) {
  if(num1 === 0){
    return 0;
  }
  if(num2 ===0 ){
    return NaN;
  }
  if(isNaN(num1)|| isNaN(num2)){
    return NaN;
  }

//create a resultIsPositive boolean flag
var resultIsPositive = true;
if(num1<0){
  resultIsPositive = false;
}
//make both num1 and num2 positive version
num1 = Math.abs(num1);
num2 = Math.abs(num2);

//15-4=11-4=7-4=3
//reassign to be num1-num2 until num1 is less than num2
while(num1>= num2){
  num1 = num1-num2;
}
//check our flag: check resultIsPositive
//if it is; just return num1
//otherwise
//return - num1;

if(resultIsPositive){
  return num1;
} else {
  return -num1;
}
}

var output = modulo(25, 4);
console.log(output); // --> 1




//Iteration 5
function multiply(num1, num2) {
  //create a resultIsPositive boolean flag
var resultIsPositive = true;
if((num1>0 && num2 <0) || (num1<0 && num2>0)){
  resultIsPositive = false;
}
//make both num1 and num2 positive version
num1 = Math.abs(num1);
num2 = Math.abs(num2);

//create result variable
var result =0;
//iterate num2 times
for(i = 1; i<=num2; i++){
  //add num1 to result;
  result = result + num1;
}

  //check our flag: check resultIsPositive
//if it is; just return result
//otherwise
//return - result;

if(resultIsPositive){
  return result;
} else {
  return -result;
}
}

var output = multiply(4, -7);
console.log(output); // --> 28


//ADVANCED 7
function isOddWithoutModulo(num) {
  if(num === 0){
    return false;
  }
  //get rid of negative sign, make num positive version
  num = Math.abs(num);

  //reassign num to be num - 2 until num<2
  while(num >= 2){
    num = num-2
  }
  // 15-2 = 13-2 = 11-2=9-2=7-2 = 5-2=3-2=1
  //10-2=8-2=6-2=4-2=2-2=0
  //if num-2 = 1
  if(num === 1){
    return true;
  } else {
    return false;
  }
}

var output = isOddWithoutModulo(18);
console.log(output); // --> true

//convert array to object1
function transformFirstAndLast(array) {
  var result = {};
  var key = array[0];
  var value = array[array.length -1];
  result[key] = value
  return result; 
}
var output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']) ;
console.log(output); // {
  //Kevin : 'Coleman'
//}



function transformArrayToObject(array) {
  var result = {} 
  for(i = 0; i< array.length; i++){
    var key = array[i][0];
    var value = array[i][1];
    result[key] = value;
  }
  return result
}

var output = transformArrayToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(output)



function transformEmployeeData(employeeData) {
  var container = []
  for (i = 0; i<employeeData.length; i++){
    var personArray = employeeData[i];
    var personObject = {};
    for(j = 0; j < personArray.length; j++){
      var key = personArray [j][0];
      var value = personArray [j][1];
      personObject[key] = value;
    }
    container.push(personObject);
  }
  return container;
}

var output = transformEmployeeData([
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]);
console.log(output)


function getAllKeys(obj) {
  var result =[]
  for (var key in obj) {
    result.push(key)
  }
  return result;
}

var input = {
  name : 'Sam',
  age : 25,
  hasPets : true
};
var output = getAllKeys(input)
console.log(output)

function listAllValues(obj) {
  var result =[]
  for (var key in obj) {
    result.push(obj[key])
  }
  return result;
}

var input = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};
var output = listAllValues(input)
console.log(output)


function convertObjectToArray(obj) {
  var container = [];
  for (var key in obj){
    var innerArray = [key, obj[key]]
    container.push(innerArray)
  }

  return container;
}

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
var output = convertObjectToArray(input)
console.log(output) //[['name', 'Holly'], ['age', 35], ['role', 'producer']]


//Greetcustomer
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  //check if customer is in the data or not
  if(customerData[firstName]=== undefined){
    return "Welcome! Is this your first time?"
  }
  var visitsObject = customerData[firstName]
  if( visitsObject.visits === 1){
    return "Welcome back, " + firstName + "! We\'re glad you liked us the first time!"
  } else {
    return "Welcome back, " + firstName + "! So glad to see you again!"
  }
}

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'