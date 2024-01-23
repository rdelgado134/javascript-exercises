const removeFromArray = function(array, elementToBeRemoved) 
{
    let size = array.length;
    let result = [];

    for(let i = 0; i < size; i++)
    {
        if(array[i] != elementToBeRemoved) 
        {
            result.push(array[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
