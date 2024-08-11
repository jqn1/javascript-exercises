const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(array) {
  return array.reduce((sum,currentValue)=>sum+currentValue,0);
	
};

const multiply = function(array) {
  return array.reduce((mult,currentValue)=>mult*currentValue,1);

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(number) {
  let factorial = 1;
  for (i = number; i>0; i--){
    factorial *= i;
  }
  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
