const convertToCelsius = function(tempF) 
{
  let num = (5/9) * (tempF -32);
  return Math.round(num * 10) /10;
};

const convertToFahrenheit = function(tempC) 
{
  let num = (tempC) * (9/5) +32;
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
