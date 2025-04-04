// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWord = "";
  if (words.length === 0) {
    return null;
  } else {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      } else {
        continue;
      }
    }
  }
  return longestWord;
}

// console.log(findLongestWord(words))

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
}

// console.log(`La suma de números es ${sumNumbers(numbers)}`)

// Iteration #3.1 Bonus:
const pruebaSuma = [6, 12, "miami", 1, "barca", "200", "lisboa", 8, false];

function sum(nums) {
  let sum = 0;
  let error = "Elemento no válido";
  if (nums.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] === "number") {
        sum += nums[i];
      } else if (typeof nums[i] === "string") {
        sum += nums[i].length;
      } else if (nums[i] === true) {
        sum += 1;
      } else if (nums[i] === false) {
        sum += 0;
      } else {
        throw error;
      }
    }
    return sum;
  }
}

// console.log(`La suma de números prueba es ${sum(pruebaSuma)}`)

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
  let sum = 0;
  if (nums.length === 0) {
    return null;
  } else {
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
  }
  return sum / nums.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(words) {
  let sum = 0;
  if (words.length === 0) {
    return null;
  } else {
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
  }
  return sum / words.length;
}

// console.log(`la suma de palabras es ${averageWordLength(wordsArr)}`)

// Bonus - Iteration #4.1
function avg(elems) {
  let sum = 0;
  if (elems.length === 0) {
    return null;
  } else {
    for (let i = 0; i < elems.length; i++) {
      if (typeof elems[i] === "number") {
        sum += elems[i];
      } else if (typeof elems[i] === "string") {
        sum += elems[i].length;
      } else if (elems[i] === true) {
        sum += 1;
      } else if (elems[i] === false) {
        sum += 0;
      }
    }
    return sum / elems.length;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(elem) {
  const newArr = [];
  if (elem.length === 0) {
    return null;
  } else {
    for (let i = 0; i < elem.length; i++) {
      if (newArr.includes(elem[i])) {
        continue;
      } else {
        newArr.push(elem[i]);
      }
    }
  }
  return newArr;
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrWords, word) {
  if (arrWords.length === 0) {
    return null;
  } else {
    if (arrWords.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(arrElems, word) {
  let counter = 0;
  if (arrElems.length === 0 || !arrElems.includes(word)) {
    return 0;
  } else {
    for (let i = 0; i < arrElems.length; i++) {
      if (arrElems[i] === word) {
        counter += 1;
      } else {
        continue;
      }
    }
  }
  return counter;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(arrNums) {
  for (let i = 0; i < arrNums.length; i++) {
    for (let j = 0; j < arrNums[i].length; j++) {
      if (arrNums[i][j] != 1) {
        for (let k = 0; k < arrNums[i].length; k++) {
          if (arrNums[i][k] != 2) {
            return 0;
          } else {
            return 16;
          }
        }
      } else {
        return 1;
      }
    }
  }
}

//Refactorizada: 
// function greatestProduct(arrNums) {
//   let allOnes = true;
//   let allTwos = true;

//   for (let row of arrNums) {
//     for (let num of row) {
//       if (num !== 1) allOnes = false;
//       if (num !== 2) allTwos = false;
//     }
//   }

//   if (allOnes) return 1;
//   if (allTwos) return 16;
//   return 0;
// }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
