const sumAll = function(start,end) {
  sum = 0;
  if (start > end) {
    aux = start;
    start = end;
    end = aux;
  }
  if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  for (let i = start; i <= end; i++) {
    sum = sum + i ;

  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
