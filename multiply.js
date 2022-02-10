function multiply(num1, num2) {
  
  var resultIsPositive = true; 
  if((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)){
      resultIsPositive = false;
  }
  
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  
  var result = 0; 
  for(var i = 1; i <= num2; i ++){
      result += num1;
  }
  
  if(resultIsPositive){
      return result; 
  } else {
      return -result;
}
}

var output = multiply(4, 7);
console.log(output); // --> 28