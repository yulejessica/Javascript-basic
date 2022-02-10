function getOrganizeItems(itemData){
  //create organizeItems object and set to be empty object
  var organizeItems = {};
  //iterate over input array
  for(var i = 0; i< itemData.length; i++){
    //create an alias for current item object
    var currentItemObj = itemData[i];
    //if onSale is true; add '($)' to the itemName
    if(currentItemObj.onSale === true){
      currentItemObj.itemName = currentItemObj.itemName +  '($)'; 
    }
    //set organizeItems key to be current item object's category value
    var keyOfOrganizeItems = currentItemObj.category
    //set organizeItems value to be getItemName value
    var valueOfOrganizeItems = getItemName(currentItemObj)
    //add key and value to organizeItems obj
    organizeItems[keyOfOrganizeItems] = valueOfOrganizeItems;
  }
  //return organizeItems;
  return organizeItems;
}
//HELPER FUNCTION 
function getItemName(itemObject){
  //create an array
  var itemNameArray = []
  //for each current item object
  for(var key in itemObject){
    //if the category value is the same 
    if(itemObject.category.indexOf(itemObject.category) != -1){
      //push the itemName to the array
      itemNameArray.push(itemObject.itemName)
    }
  }
  //return array
  return itemNameArray;
}

//ASSERTION FUNCTION TO BE USED
function assertObjectEqual(actual, expected, testName){
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);
  if(actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED ['+testName+'] Expected "'+expected+'" but got "'+actual+'"')
  }
}

//TEST CASE
  var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false }, 
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

var actualResult = getOrganizeItems(itemData)
var expectedResult = {
  fruit:  ['apple', 'melon($)'],
  canned: ['beans', 'corn($)', 'soup'],
  frozen: ['pizza']
  };
assertObjectEqual(actualResult, expectedResult, 'should organize item properly');
