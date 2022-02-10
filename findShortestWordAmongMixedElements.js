unction findShortestWordAmongMixedElements(arr) {

  if(arr.length === 0){
      return '';
  }
  var stringArr = [];
  for(var i = 0; i < arr.length; i ++){
     var currentElm = arr[i];
    if(typeof currentElm === 'string' ){
      stringArr.push(currentElm);
    }
  }

  if(stringArr.length === 0){
    return '';
  }

  var shortest = stringArr[0];
  for(var j = 0; j < stringArr.length; j ++){
      var currentStringElm = stringArr[j]
      if(currentStringElm.length < shortest.length){
          shortest = currentStringElm;
      }
  }
  return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'