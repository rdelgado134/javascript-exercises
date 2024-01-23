const reverseString = function(word) {

        let result = ""
        let size = word.length;

        for(let i = size; i >= 0; i--)
        {
            result += word.charAt(i);
        }
        return result;
};

// Do not edit below this line
module.exports = reverseString;
