const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9); 
  //we need to round to one decimal place
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  //we need to round to one decimal place
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
