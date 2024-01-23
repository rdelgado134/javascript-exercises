const repeatString = function(word, timesRepeated) {

    if(timesRepeated < 0) { return "ERROR"}
    let result = "";
    
    for(let i = 0; i < timesRepeated; i++)
    {
        result += word;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
