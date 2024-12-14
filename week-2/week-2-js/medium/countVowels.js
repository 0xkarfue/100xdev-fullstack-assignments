/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let sortedStr = str.toLowerCase().split("")
    let count = 0;
    for(let i = 0; i < sortedStr.length; i++) {
      
      if (sortedStr[i] === 'a' || sortedStr[i] === 'e' || sortedStr[i] === 'i' || sortedStr[i] === 'o' || sortedStr[i] === 'u') {
        count = count + 1
      }
    }
    return count;
}

// countVowels("jfjharshis")

module.exports = countVowels;