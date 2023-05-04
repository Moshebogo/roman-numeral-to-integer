function romanNumeral(string) {
  // all posibble combos 
  const dictionary = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500
  }
  // turn each letter into a number
  const array = []

   for (let i = 0; i < string.length; i++) {
    const currentLetter = dictionary[string[i]]
    const nextLetter = dictionary[string[i+1]] 

    if (dictionary[currentLetter] > dictionary[nextLetter]) {
      console.log("curr =>", dictionary[currentLetter])
      array.push(dictionary[currentLetter])
    } else if (dictionary[currentLetter] < dictionary[nextLetter]) {
      console.log("next =>", dictionary[nextLetter])
      array.push(dictionary[nextLetter] - dictionary[currentLetter])
    }
   }

   console.log('array =>', array)
   
    // add sum of all numbers 
    let total = 0
    for (num of array) {
     total += num
    }
    // return total sum
    // return total
  }

romanNumeral("VVI")

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 1");
//   console.log(romanNumeral('I'));

//   console.log("");

//   console.log("Expecting: 9");
//   console.log(romanNumeral('IX'));

//   console.log("");

//   console.log("Expecting: 402");
//   console.log(romanNumeral('CDII'));
// }

// module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
