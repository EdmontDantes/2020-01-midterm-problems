/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber (number) {
  if (number % 3 !== 0 && number % 5 !== 0) {
    return number;
  }
  if (number % 3 === 0 && number % 5 !== 0) {
    return 'Fizz';
  }
  if (number % 5 === 0 && number % 3 !== 0) {
    return 'Buzz';
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }
}

function getMiddleLetters (str) {
  if (str.length % 2 === 0) {
    let middleletters = '';
    let middleEven = str.length / 2
    middleletters = str.charAt(middleEven - 1) + str.charAt(middleEven);
    return middleletters;
  }
  if (str.length % 2 === 1) {
    let middleLettersOdd = '';
    let middleOdd = Math.floor(str.length / 2)
    middleLettersOdd = str.charAt(middleOdd - 1) + str.charAt(middleOdd) + str.charAt(middleOdd + 1);
    return middleLettersOdd;
  }
}

function getNextLetter (str) {
  if (str === 'z') {
    return 'a';
  }
  // let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // if (alphabet.includes(str)) {
  // return alphabet.charAt((alphabet.includes(str)));
  // }
  else if (str === 'a') {
    return 'b';
  }else if (str === 'b') {
    return 'c';
  }else if (str === 'c') {
    return 'd';
  }else if (str === 'd') {
    return 'e';
  }else if (str === 'e') {
    return 'f';
  }else if (str === 'f') {
    return 'g';
  }else if (str === 'h') {
    return 'i';
  }else if (str === 'j') {
    return 'k';
  }else if (str === 'k') {
    return 'l';
  }else if (str === 'm') {
    return 'n';
  }else if (str === 'o') {
    return 'p';
  }else if (str === 'q') {
    return 'r';
  }else if (str === 'r') {
    return 's';
  }else if (str === 's') {
    return 't';
  }else if (str === 't') {
    return 'u';
  }else if (str === 'u') {
    return 'v';
  }else if (str === 'v') {
    return 'w';
  }else if (str === 'w') {
    return 'x';
  }else if (str === 'x') {
    return 'y';
  }

}

function getAverage (numbers) {
  let sumOfAllNumbers = 0;
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfAllNumbers += numbers[i];
  }
  average = sumOfAllNumbers / numbers.length;
  return average;
}

function triStateAreaOnly (statesNames) {
  let onlyTristate = [' NY', ' NJ', ' CT'];
  let newArraywithOnlyTriState = [];
    for (let i = 0; i < statesNames.length; i++) {
      if (statesNames[i].endsWith(onlyTristate[i])) {
      newArraywithOnlyTriState.push(statesNames[i]);
      }
    }
    return newArraywithOnlyTriState;
}
triStateAreaOnly(['Brooklyn, NY', 'Stamford, NH', 'Komboken, CT'])

function removeTrolls (posts) {
  const newPostsWithLowerCase = [];
for (const post of posts) {
  if (post === post.toLowerCase()) {
    newPostsWithLowerCase.push(post);
  }
  }
return newPostsWithLowerCase;
  }

removeTrolls ('Im failing this test, Hope I can make it', 'what is it', 'It suckSS')

function addToMultiDigitNumbers (numAddend, numbers) {
  let newAddedNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
      newAddedNumbers.push(numAddend + numbers[i]);
    }
  }
  return newAddedNumbers;
}
  // let num2ArrayToString = num2.toString();
  // let num2Array = num2ArrayToString.split('');
  // let num2ArrayToNumbers = [];
  // let addedNum1ToArrayNum2 = [];
  // if (num2 >= 10) {
  //   for (let i = 0; i < num2Array.length; i++) {
  //     num2ArrayToNumbers.push(Number(num2Array[i]));
  //   }
  //   for (let i = 0; i < num2ArrayToNumbers.length; i++) {
  //     addedNum1ToArrayNum2.push(num1 + num2ArrayToNumbers[i])
  //   }
  //   return addedNum1ToArrayNum2;
  // }

addToMultiDigitNumbers (3, 24)

function hyphenateNames (names) {
  let countWords = 0;
  const hyphenedNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] === ' ') {
      countWords++;
    }
    if (countWords > 2) {
      hyphenedNames.push(names[i].replace(' ', '-'));
    }
  }
  return hyphenedNames;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
