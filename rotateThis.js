/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

Doubled string: 'hello w orldhello w  orld'
Search w/in it: '       orldhello w    '
*/

function rotateThis(string1, string2){
  
  //create the doubleds string version of string1
  var doubledString1 = string1.concat(string1);
  
  //check the index of string2 is inside the double
  var indexOfString2 = doubledString1.indexOf(string2);
  if(indexOfString2 > -1){
    return true;
  } else {
    return false;
  }

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