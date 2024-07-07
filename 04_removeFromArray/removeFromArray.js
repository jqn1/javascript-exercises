const removeFromArray = function(array,...remove) {
  finalArray = []
  for (let element = 0; element <= array.length-1; element++) {
    //we push into a new array items that we dont want to remove
      if (!remove.includes(array[element])) {
        finalArray.push(array[element]);
    }
  }
  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
