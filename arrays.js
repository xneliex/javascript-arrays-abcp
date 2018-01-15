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
var addElementToEndOfArray (array,element){
  return [...array, element];
}
var destructivelyAddElementToEndOfArray =function (array, element {
  array.push(element);
  return array;
}
var accessElementInArray(array,index){
  return array[index];
}
return array;
var removeElementFromBeginningOfArray= function (array) {
  return array.slice(1);
}
var removeElementFromEndOfArray =function (array){}
  return array.slice(0, chocolateBars.lenght-1);
}
