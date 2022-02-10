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

