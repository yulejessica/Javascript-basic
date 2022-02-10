// your code here
function computeSumOfAllElements(numbers){
  // input is 1 array of numbers
  // if input in empty, what do we return? (edge case)
  if (numbers.length === 0){
    return 0;
  }

  // define result variable
  var sumNumbers = 0;
  // we will iterate over the entire input array
  for (var i= 0; i<numbers.length; i++){
  // reassign sum to be sum plus current value
  sumNumbers = sumNumbers + numbers[i];
  }
  // output is sum of all the elements in the given array
  // return result variable
  return sumNumbers;
}



function computeAverageOfNumbers(numbers){
  // input is 1 array of number 
  //If input array is empty, your function should return 0.
  if (numbers.length ===0){
    return 0;
  }
  //create sum variable 
  var sum = 0;
// iterate over  all numbers - for loop
for (var i=0; i<numbers.length; i++){
//reassign result to be the average 
  sum = (sum + numbers[i])
} 
//return sum divided by input array length
return sum/numbers.length;
}



//Debugging(1)
function keyOfObjectValue(object, target) {
  //iterate over properties in object
  for (var key in object) {
    // if current value equals to target,
    if (object[key] === target) {
      //return curent key
      return key;
      // otherwise keep iterating
    } 
  }
  //if for loop has ended, there is no return key, we should return -1
    return -1;
}

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);


//Debugging(2)
function getElementsAbove40(numbers) {
  //define count variable, if it is inside the forloop, it will reassign it to 0 every loop
    var count = 0;
//iterate over array's number elements
  for (var i = 0; i < numbers.length; i++) {
    //check if current number is greater than 40
    if (numbers[i] > 40) {
      //add to the count
      count++;
    }
  }

//return a count representing the number of of elemtns whose value is greater than 40
  return count;


  //debugging (3)
  /input: 1 array of strings representing words in sentence
function createSentence(words) {
  //create sentence variable, start as empty string
  var sentence = "";
// iterate over the words array
  for (var i = 0; i < words.length; i++) {
    // if index variable is at last value
    if (i === words.length - 1){
      //add current word and a period to sentence
       sentence += words[i]+ '.';
       // otherwise, add current word and a spce
    } else{
      sentence += words[i] + ' ';
    }
    }
// return resulting sentence from the words 
 return sentence;
}


var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);
}


//Using an Object to Count Elements Coding Challenge (1)
function countWords(stringOfWords) {
//edge case: if given empty string, should return an empty object
  if(stringOfWords === ''){
    return {};
  }
  //create an object variable to store the counts
  var counts = {};
  //split the input string into an array of words
  var words = stringOfWords.split(' ');

//iterate over the string to count 
  for (var i=0; i < words.length; i++){
    //create an alias for current word
    var currentWord= words[i];
    //if we have not counted the current item
    if (counts[currentWord]=== undefined){
      //add it to the count object with a value of 1
      counts[currentWord]= 1;
      // otherwise
    } else{
      //incremebt value in count by 1
      counts[currentWord]++;
    }
    }
// return the result cout object
return counts;
}
var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);



//Use an object to count letters in a word
function countAllCharacters(string) {
  // input: a string of characters
  //edge case: if given an empty string
  if (string === ""){
    // return empty object
    return {};
  }

  //create counts variable
  var counts = {} ;
  //iterate over the string
  for (var i=0; i < string.length; i++){
    //create an alias for current letter
    var currentLetter = string[i];
    //if not counted the current letter
    if (counts[currentLetter] === undefined){
      //set current value to 1
      counts[currentLetter] = 1;
      //otherwise
    } else {
      //increment count value by 1
      counts[currentLetter]++;
    }

  }
  //return result count object
  // output: an object counts all characters
  return counts;
}


var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);
