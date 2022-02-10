// function
function findColdHot(array) {
  // create an empty object
  var resultObj = {};
  // create coldest and hottest variables
  let coldest = array[0];
  let hottest = array[0];
  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    if (array[i].temp > hottest.temp) {
      hottest = array[i];
    } else if (array[i].temp < coldest.temp) {
      coldest = array[i];
    }
  }
  // create coldest and hottest properties
  resultObj['Coldest Place'] = coldest.city;
  resultObj['Hottest Place'] = hottest.city;
  // return result object
  return resultObj;
}
// tests
var input = [
  {city: 'Helsinki', temp: 12},
  {city: 'Berlin', temp: 10},
  {city: 'Oslo', temp: 4},
  {city: 'Nairobi', temp: 39},
  {city: 'Paris', temp: 6},
  {city: 'Istanbul', temp: 39},
  {city: 'Rome', temp: 25}
];
var actual = findColdHot(input);
var expected = {'Coldest Place': 'Oslo', 'Hottest Place': 'Nairobi'};
console.log(actual)