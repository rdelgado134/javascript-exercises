const sumAll = function(startNum, endNum) 
{
    if(startNum < 0 || endNum < 0 || typeof startNum === 'string' || typeof endNum === 'string')
    {return "ERROR";}
   /* if(typeof startNum === 'number' && Number.isInteger(startNum)) {return "ERROR";}
    if(typeof endNum === 'number' && Number.isInteger(endNum)) {return "ERROR"}*/

    let result = 0;

    if(startNum < endNum)
    {
        for(let i = startNum; i <= endNum; i++)
        {
            result += i;
        }
    }
    else if (startNum > endNum)
    {
        for(let j = endNum; j <= startNum; j++)
        {
            result +=j;
        }
    }
    if(result == 0) {return "ERROR"}
    return result;
};

// Do not edit below this line
module.exports = sumAll;
