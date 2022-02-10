function organizeItems(itemData){
  //create result object and set to be empty object
  var result = {};
  //iterate over input array
  for (var i = 0; i < itemData.length; i ++){
    //create an alias for current object of input
    var currentObj = itemData[i];
    var newItemName = currentObj.itemName;
    //if itemName have onsale set to true, add '($)'to their itemName
    if(currentObj.onSale === true){
      newItemName= newItemName + '($)';
      }
    //set result key to be category's value
    var key = currentObj['category'];
    //result value is the array of the newItemName
    //if result obj does not have any value to its property
      if(result[key] === undefined){
        //create a new array for the result's itemName that has the same category
        result[key] = [];
     }
   //push the itemName property to the value array accordingly
    result[key].push(newItemName);
  }

  //return result;
  return result;
}


//or 
function organizeItems(data){
  var result = {}
  for(var i = 0; i < data.length; i++){
    var currentObj= data[i];
    var key = currentObj['category'];
    var newItemName = currentObj['itemName'];
    if(currentObj['onSale']){
      newItemName = `${newItemName}($)`;
    }
    if(result[key] === undefined){
      result[key] = [newItemName];
    } else {
      result[key].push(newItemName)
    }
  }
  return result;
}

var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false }, 
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

var output =  organizeItems(itemData);
console.log('output:' ,output)//{
  //fruit:  ['apple', 'melon($)'],
  //canned: ['beans', 'corn($)', 'soup'],
  //frozen: ['pizza']
  //};