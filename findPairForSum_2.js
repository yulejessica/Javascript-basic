/*Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
//assumption: return an empty array in the event that the array doesn't contain what we want
*/

function findPairForSum(intergersArray, target){
  //create an empty array
  var pair = [];
  //create an empty array
  //iterate over intergersArraY(outer)
  for (var j = 0; j < intergersArray.length; j ++){
    var outerInt = intergersArray[j]; 
     //iterate from current integer over rest of integer(inner)
     for(var k = j+ 1; k < intergersArray.length; k++ ){
       var innerInt = intergersArray[k];
      //check outer value plus inner if sum is target sum
      if(outerInt + innerInt === target)
        //push outer, then inner to result array
        pair.push(outerInt, innerInt);
     }
  }
  return pair;
}

function assertArraysEqual(actual, expected, testName){
 var hasSameValues = true;
  for(var i = 0; i< actual.length; i++){
    if(actual[i] != expected[i]){
      hasSameValues = false; 
      break;
    }
  }
  var hasSameLengths = actual.length === expected.length;
  if(hasSameValues && hasSameLengths){
    console.log('passed')
  } else {
    console.log('FAILED ['+testName+'] EXPECTED '+expected+', but got '+actual+' ');
  }
}
 
var actualFound = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var expectedFound =  [4, 5];
assertArraysEqual(actualFound, expectedFound, 'should return an array of two numbers that sums to the target');

var actualNotFound = findPairForSum([3, 34, 17, 12, 5, 1], 11);
var expectedNotFound = [];
assertArraysEqual(actualNotFound, expectedNotFound, 'should return an empty array when not found');





