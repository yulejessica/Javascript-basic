/*Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).
*/

function detectNetwork(cardNumber, cardData) {
  var resultNetwork = '';
  if(typeof cardNumber === 'number'){
    cardNumber = cardNumber. toString();
  }
  var resultCardLength = cardNumber.length;
  var firstTwoDigits = cardNumber[0] + cardNumber[1];

  //access the cardData
  for (var i = 0; i < cardData.length; i ++){
    //create a few alias 
    var cardObj = cardData[i];
    var arrrayOfCardPrefix = cardObj.prefixes;
    var arrayOfCardLength = cardObj.lengths;
    var eachCardNetwork = cardObj['issuer/network'];
        //check the result card number length to see if matches any length inside the card array element
   //check the length
    if(cardLengthArr.indexOf(targetCardLength) > -1 ){
      //check the first one or two digits
     
      if(cardPrefixArr.indexOf(targetCardPrefix) >-1){
        result =  cardNetwork;
        
      } 
    }
  }
  return resultNetwork;
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+testName+'] EXPECTED "'+expected+'" , but got "'+actual+'"');
  }
}

// Test case
var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

var actual = detectNetwork('343456789012345', cardData);
var expected = 'American Express';
assertEqual(actual, expected, 'should return the accurate network')
