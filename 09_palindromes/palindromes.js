function isPunctuation(char) {
    // Define a regular expression for punctuation characters
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
  
    // Test if the given character matches the punctuation pattern
    return punctuationRegex.test(char);
  }

const palindromes = function (str) 
{
      // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original and reversed strings
  return cleanStr === cleanStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
