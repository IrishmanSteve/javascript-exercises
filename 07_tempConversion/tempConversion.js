const convertToCelsius = function(fahr) {
  let celsius = Math.round(((fahr - 32) / 1.8) * 10) / 10;
  return celsius; 
};

const convertToFahrenheit = function(cels) {
  let fahrenheit = Math.round(((cels * 1.8) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
