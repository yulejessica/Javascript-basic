/*Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
*/

function findPairForSum(integers, target) {
  //create result array
  var result = [];
  //create a new set of num; 
  var seen = new Set();
  //iterate over the intergers array
  for(var i = 0; i< integers.length; i ++){
    currentInt = integers[i];
    //create an alias for the differnece between target sum and current int
    var difference = target - currentInt;
    //check if the new set of num has current int 
    if(seen.has(currentInt)){  
      //result equals to the diffence and the current int
      result = [difference, currentInt];
    }
   //add the differce into newset 
   seen.add(difference);
    }
  //return result
  return result;
  }



function assertArrayEquals(actual, expected, testName){
  var sameValues = true;
  for(var i = 0; i < actual.length; i ++){
    if(actual[i] !== expected [i]){
      sameValues = false;
    }
  }
  var sameLengths = actual.length === expected.length; 

  if (sameValues && sameLengths){
    console.log('passed');
  } else {
    console.log('FAILED ['+testName+'] EXPECTED "'+expected +'", but got "'+ actual+'"');
  }
  }

//test case
var actual = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var expected = [4, 5]
assertArrayEquals(actual, expected,'should return a pair of number that sums the target value')



