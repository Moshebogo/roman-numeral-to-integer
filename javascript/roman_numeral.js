function romanNumeral(string) {
  // all posibble translations
  const dictionary = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  // turn each letter into a number and add to array
  const array = []

   for (let i = 0; i < string.length; i++) {
    console.log(i)
    // define the current letter
    const currentLetter = dictionary[string[i]]
    // definbe the next letter
    let nextLetter;
    if (dictionary[string[i+1]]  != null) {
      nextLetter = dictionary[string[i+1]]
    } else {
      nextLetter = 0
    }
    // decide what to push into array
    if (currentLetter > nextLetter) {
      array.push(currentLetter)
    } else if (currentLetter < nextLetter) {
      array.push(nextLetter - currentLetter)
      i++
    } else {
      array.push(currentLetter)
    }
   }
    // add sum of all numbers from array into 1 number
    let total = 0
    for (num of array) {
     total += num
    }
    console.log("total =>", total)
    console.log("array =>", array)
    // return the total sum as 1 number
    return total
  }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
