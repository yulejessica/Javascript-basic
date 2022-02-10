*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

*/

function rotateThis(str1, str2){
  //if stri 1 equals to str 2
  //return true
  if(str1 === str2){
    return true;
  }
  //turn str1 into an array
  var arr1 = str1.split('');
  //take the last value of arr1 and put it at the front 
  var lastValue = arr1.pop();
  arr1.unshift(lastValue);
  
  //while string version of arr1 is not equal to orginial str1
  while(arr1.join('') !== str1) {
    //compare the string version of arr1 with str2
    if(arr1.join('') === str2){
        //return true if they are the same
        return true;
    }
  //take the last value of arr1 and put it at the front 
  var lastValue = arr1.pop();
  arr1.unshift(lastValue);
  }

//return false
return false;

}

function assertEquals(actual, expected, testName){
  if(actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] EXPECTED ${expected}, but got ${actual}.`);
  }
}

var actual = rotateThis('hello world', 'orldhello w' )
var expected = true; 
assertEquals (actual, expected, 'should return true when second string is the first string rotated version');