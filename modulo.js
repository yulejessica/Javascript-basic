function modulo(num1, num2) {
  
  if(num1 === 0){
      return 0;
  }
  if(num2 === 0){
      return NaN;
  }
  if(isNaN(num1) || isNaN(num2)){
      return NaN;
  }
 
var firstNumberIsPositive = true;
     if(num1 < 0){
         firstNumberIsPositive = false; 
     }
     
num1 = Math.abs(num1);
num2 = Math.abs(num2);
     
 
while(num1 >= num2){
    num1 = num1 - num2; 
}

if(firstNumberIsPositive){
    return num1; 
} else {
    return -num1; 
}
  
}