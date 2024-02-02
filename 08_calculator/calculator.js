const add = function(num1, num2) 
{
	return num1 + num2;
};

const subtract = function(num1, num2) 
{
  return num1 - num2;
};

const sum = function(nums) 
{
  let result = 0;
	for(let i = 0; i < nums.length; i++)
  {
    result +=nums[i];
  }
  return result;
};

const multiply = function(nums) 
{
  result = 1;
	for(let i = 0; i < nums.length; i++)
  {
    result *=nums[i];
  }
  return result;
};

const power = function(num1, power) 
{
  let result = num1;
	for(let i = 2; i <= power; i++)
  {
    result *= num1;
  }
  return result;
};

const factorial = function(num) 
{
 //5! = 5x4x3x2x1 == 120	
 let result = num;
 for(let i = num -1; i > 0; i--)
 {
    result *= i;
 }

 if(num == 0) {result = 1;}
 return result;
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
