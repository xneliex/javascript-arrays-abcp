var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];
function addElementToBeginningOfArray (array, element){
  return [array,...element];
}
function destructivelyAddElementToBeginningOfArray (array,element){
  array.unshift(element);
return array;
}
function addElementToEndOfArray (array,element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray =function (array, element {
  array.push(element);
  return array;
}
var accessElementInArray(array,index){
  return array[index];
}
return array;
function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}
function removeElementFromEndOfArray (array){}
  return array.slice(0, chocolateBars.lenght-1);
}
