function isOddWithoutModulo(num) {
 if(num === 0){
     return false;
 }
 
 num = Math.abs(num);
 
 while(num >= 2){
     num = num -2;
 }
 
 if(num === 1){
     return true;
 } else {
     return false;
 }
}