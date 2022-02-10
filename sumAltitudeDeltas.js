function sumAltitudeDeltas(heights, start, end){
    var result = 0;
    for(i = start; i < end; i++){
      var currentHeight = heights[i];
      var difference = heights[i+1] - currentHeight; 
      if(difference > 0){
        result += difference * 2;
      } else {
        result += Math.abs(difference);
      }
    }
    return result;
}


let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
console.log(output_0); //--> 6

let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
console.log(output_1); //--> 7

let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); //--> 2

let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
console.log(output_3); //--> 15

let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
console.log(output_4); //--> 50