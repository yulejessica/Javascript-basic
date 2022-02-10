function checkWinner(arr){
  //iterate over the arr
  for(var i = 0; i < arr.length; i++){
    //if current and next and next and next are equal to black
    if(arr[i] === 'black' && arr[i+1] === 'black' && arr[i+2] === 'black'&& arr[i+3] === 'black'){
      return 'Black Wins!'
    }
    //return black win
    //if current and next  and next  and next are equal to red
    if(arr[i] === 'red' && arr[i+1] === 'red'&& arr[i+2] === 'red'&& arr[i+3] === 'red'){
      return 'Red Wins!'
    }
    //return red win
   
  }
   //return red win
    //(if iteration stops)
    return 'Draw!'
    //return Draw
}
let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'


function generateSampleView(users){
  var resultArr = [];
  for(var i = 0; i < users.length; i++){
    var usersObj = users[i];

    var usersId = usersObj['id'];
    var email = usersObj['email'];
    var address = '';
    var userAddressObj = usersObj['address'];
 
    var streetOfAdd = userAddressObj['street'];
    var suiteOfAdd= userAddressObj['suite']; 
    var cityOfAdd = userAddressObj['city'];
    var zipcodeOfAdd = userAddressObj['zipcode'];
  
    address += streetOfAdd + ', ' + suiteOfAdd + ', ' + cityOfAdd + ', ' + zipcodeOfAdd;

    //if id is even 
    if(usersId % 2 === 0){
      resultArr.push(address);
    } else {
      resultArr.push(email);
    }
  }
  return resultArr;
}


//assertion function
function assertArraysEqual(actual, expected, testName){
  let sameValues = true; 
  for(let i = 0; i < actual.length; i++){
    if(actual[i] !== expected[i]){
      sameValues = false;
      break;
    }
  }
  let sameLengths = actual.length === expected.length; 
  if(sameValues && sameLengths){
    console.log(`passed`);
  } else {
    console.log(`failed [${testName}] EXPECTED "${expected}", but got "${actual}"`);
  }
}

//testCase 
let sampleUsers = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

let actual = generateSampleView(sampleUsers);
let expected =["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
assertArraysEqual(actual, expected, 'should add user email to return array when id property is odd');



function solution(integers){
  if(integers.length > 0 && integers.length < 3){
    return integers.join(',');
  }

  //create result array
  let result = [];
  //create start index binding equal to 0 
  let start = 0; 
  //create next index binding, equal to 1
  let next = 1; 
  //create end index binding, equal to 2
  let end = 2;

  //iterate over the integers array
  while(start < integers.length){
    //if value at end minus value at next is 1; value at next minus value at start equals 1
    if(integers[end] - integers[next] === 1 && integers[next] - integers[start] === 1){
    //while value at end minus value at next is 1
      while(integers[end] - integers[next] === 1){
        //next,end = end,end+1
        next = end; 
        end = end + 1;
      }
      //save a slice of input from start to end
      let seq = integers.slice(start, end);
      //create string format of slice and add to result
      result.push(`${seq[0]}-${seq[seq.length-1]}`)
      //start, next, end = end, end+1, end+2
      start = end ;
      next = end + 1; 
      end = end + 2;
    } else {
  //otherwise
    //don't have a streak
    //add value at start to result
    result.push(integers[start]);
    //start, next, end = next, end, end+1
    start = next; 
    next = end; 
    end = end + 1;
    }
  }
  //return result array join on a comma
  return result.join(",");
}


var result1 = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
console.log(result1)// "-6,-3-1,3-5,7-11,14,15,17-20";


var result2 = solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
console.log(result2)// "-4--1,2,3,5,6,12-15,17";



function splitPairs(input) {
  if(input === ''){
    return [];
  }

  var resultArr = [];
  //turn input string to its array version
  var inputArr = input.split('');
  var pairedChar = '';
  for(var i = 0 ; i < inputArr.length; i +=2){
    var currentWord = inputArr[i];
    var nextWord = inputArr[i+1];
    
    if(nextWord === undefined){
      nextWord ="_";
    }
    paredChar = currentWord + nextWord;
    resultArr.push(paredChar);
  }
  return resultArr;
}

function assertArraysEqual(actual, expected, testName){
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);
  if(actual === expected){
    console.log(`passed`)
  } else {
    console.log(`failed [${testName}] expected ${expected}, but got ${actual}`)
  }
}
var input_1 = 'abc'
var actual_1 = splitPairs(input_1);
var expected_1 = ['ab', 'c_'];
assertArraysEqual(actual_1, expected_1, 'should split strings into pairs of characters and when string has odd length, replace missing second char of last pair with underscore ');

var input_2 = 'abcdef'
var actual_2 = splitPairs(input_2);
var expected_2 = ['ab', 'cd', 'ef'];
assertArraysEqual(actual_2, expected_2, 'should split strings into pairs of characters')



var input_3 = ''
var actual_3 = splitPairs(input_2);
var expected_3 = [];
assertArraysEqual(actual_2, expected_2, 'an empty string should make your function produce an empty array')





