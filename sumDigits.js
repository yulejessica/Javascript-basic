function sumDigits(num) {
    var numIsPositive = true;
    if(num < 0){
        numIsPositive = false; 
        num = Math.abs(num);
    }
    
  var sum = 0; 
  var stringNum = num.toString();
  var firstValue = Number(stringNum[0]);
 
  for(var i = 0; i < stringNum.length; i++){
      var currentNum = Number(stringNum[i]);
      sum += currentNum;
  }
  if(numIsPositive){
    return sum;
  } else {
    return sum - 2 * firstValue ;
  }
}
var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4