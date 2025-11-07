const { expression } = require("@babel/template");

function numberToString(num) {
  return num.toString()
}
// console.log(numberToString(854))


function removeChar(str) {
  return str.slice(1, -1)
}
// console.log(removeChar('eloquent'))


function bmi(weight, height) {
  // let hSq = height * height;
  // if(weight/hSq <= 18.5) {
  //     return "Underweight"
  // } else if (weight/hSq <= 25.0) {
  //     return "Normal"
  // } else if (weight/hSq <= 30) {
  //     return "Overweight"
  // } else if (weight/hSq > 30) {
  //     return "Obese"
  // }

  var result = weight / Math.pow(height, 2)

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }

}
// console.log(bmi(80, 1.80))


const countSheep = function (num) {
  // let arr = []
  // for (let i = 1; i <= num; i++) {
  //     arr.push(`${i} sheep...`);
  // }
  // return arr.join('');

  let str = "";
  for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
  return str;
}
// console.log(countSheep(4))


function solutionToReverse(str) {
  // let newStr = "";
  // for (let i = str.length; i > 0; i--) {
  //     newStr += str.charAt(i)
  // }
  // return newStr

  return str.split('').reverse().join('');
}
// console.log(solutionToReverse('world'))


function greet() {
  let str = 'Hello World!';
  let newStr = str.split(' ');
  return newStr.join(' ')
}
// console.log(greet());

function makeNegative(num) {
  // if(num !== 0) {
  //     return Math.abs(num) * -1;
  // } else {
  //     return 0
  // }

  return -Math.abs(num)
}
// console.log(makeNegative(42))
// console.log(makeNegative(0))
// console.log(makeNegative(-5))


function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
const arrFindNeedleHaystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
// console.log(findNeedle(arrFindNeedleHaystack));


function rentalCarCost(d) {
  // let totalCost = 40 * d;
  // d >= 3 && d < 7 ? totalCost -= 20 : totalCost;
  // d >= 7 ? totalCost -= 50 : totalCost;

  // return totalCost

  return d * 40 - ((d > 6) ? 50 : (d > 2) ? 20 : 0);
}
// console.log(rentalCarCost(4))
// console.log(rentalCarCost(7))


function countPostivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];

  let positive = 0;
  let negative = 0;

  for (let i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0)
      ++positive;
    else
      negative += input[i];
  }

  return [positive, negative];

}
// console.log(countPostivesSumNegatives([]))


function check(a, x) {
  return a.includes(x);
}
// console.log(check([0, 45, 75, 105, 99, 107], 0));


function litres(time) {
  return Math.floor(time * 0.5);
}
// console.log(litres(6.7));


function invert(array) {
  return array.map(num => -num)
}
// console.log(invert([1,-2,3,-4,5]));


function solutionToTestStrEnd(str, ending) {
  return str.slice(str.length - ending.length) === ending ? true : false;
  // return str.endsWith(ending);
}
// console.log(solutionToTestStrEnd('avcde', 'cde'));


function smash(words) {
  return words.join(' ');
}
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));


const stringToNumber = function (str) {
  return parseInt(str);
}
// console.log(stringToNumber("1234"))


function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(num => num === true).length;
}
// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]));


function grow(x) {
  return x.reduce((a, b) => a * b);
}
// console.log(grow([1, 2, 3, 4]));


function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
// console.log(reverseWords("This is an example!"));


function validatePIN(pin) {
  // return /^\d+$/.test(pin) && parseInt(pin) >= 0 ? pin.length === 4 || pin.length === 6 ? true : false : false;
  return /^(\d{4}|\d{6})$/.test(pin)
}
// console.log(validatePIN('1235'));


function DNAStrand(dna) {
  // const dnaSplit = dna.split('')
  // let dnaNew = [];
  // dnaSplit.forEach(letter => {
  //   if(letter === 'A') {
  //     dnaNew.push('T')
  //   } else if (letter === 'T') {
  //     dnaNew.push('A')
  //   }
  //   else if (letter === 'G') {
  //     dnaNew.push('C')
  //   }
  //   else if (letter === 'C') {
  //     dnaNew.push('G')
  //   }
  // })
  // return dnaNew.join('')
  const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  return dna.split('').map(function (v) { return pairs[v] }).join('');
}
// console.log(DNAStrand('ATTGC'))


function areYouPlayingBanjo(name) {
  // return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
// console.log(areYouPlayingBanjo('rark'));
// console.log(areYouPlayingBanjo('Rark'));


function filter_list(l) {
  // return l.filter(function(item) {
  //   if(typeof item === 'number') {
  //     return l
  //   }
  // })

  return l.filter(function (v) { return typeof v == 'number' })
}
// console.log(filter_list([1,2,'a','b']))

function isIsogram(str) {
  // const strArr = str.toLowerCase().split('')
  // if(str.length === 0) {
  //   return true;
  // } else {
  //   return strArr.filter((item, index) => strArr.indexOf(item) !== index).length > 0 ? false : true;
  // }

  return new Set(str.toUpperCase()).size == str.length;
}
// console.log(isIsogram('Dermatoglyphics'))
// console.log(isIsogram('isogram'))
// console.log(isIsogram('aba'))
// console.log(isIsogram('moOse'))
// console.log(isIsogram('isIsogram'))
// console.log(isIsogram(''))


const summation = function (num) {
  // arr = []
  // for(let i = num; i > 0; i--) {
  //   arr.push(i)
  // }
  // return arr.reduce(function(a, b) {
  //   return a + b;
  // })

  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}
// console.log(summation(8))


function getMiddle(s) {
  // return s.length % 2 == 0 ? `${s.charAt(s.indexOf('', Math.floor(s.length / 2) - 1))}${s.charAt(s.indexOf('', Math.floor(s.length / 2)))}` : s.charAt(Math.floor(s.length / 2));

  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
// console.log(getMiddle("testss"));


function setAlarm(employed, vacation) {
  // return employed && !vacation ? true : false;
  return employed && !vacation;
}
// console.log(setAlarm(true, true));
// console.log(setAlarm(false, true));
// console.log(setAlarm(false, false));
// console.log(setAlarm(true, false));


function openOrSenior(data) {
  // return data.map(info => info[0] >= 55 && info[1] > 7 ? 'Senior' : 'Open');
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

function DNAtoRNA(dna) {
  // return dna.split('').map(item => item === 'T' ? 'U' : item).join('');
  return dna.replace(/T/g, 'U');
}

// console.log(DNAtoRNA('GCAT'))


function getGrade(s1, s2, s3) {
  // let average = (s1 + s2 + s3)/3
  // let grade;
  // if(average >= 90) {
  //   grade = 'A';
  // } else if (average < 90 && average >= 80) {
  //   grade = 'B';
  // } else if (average < 80 && average >= 70) {
  //   grade = 'C';
  // } else if (average < 70 && average >= 60) {
  //   grade = 'D';
  // } else {
  //   grade = 'F'
  // }
  // return grade;
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}
// console.log(getGrade(95, 50, 98));


function removeSmallest(numbers) {
  let index = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)]
}
// console.log(removeSmallest([3,2,3,4,5,1,2,3,1]))


function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}
// console.log(getVolumeOfCuboid(2, 3, 5));


function squareDigits(num) {
  return parseInt(num.toString().split('').map(item => item * item).join(''))
}
// console.log(squareDigits(5681))


function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints ? true : false;
}
// console.log(betterThanAverage([2, 3, 4, 1], 5));


const doubleInteger = (num) => {
  return num ** 2;
}
// console.log(doubleInteger(2));


function getCount(str) {
  // let count = 0;
  // str.split('').forEach(letter => ['a', 'e', 'i', 'o', 'u'].forEach(vowel => {
  //     if(vowel === letter) {
  //       count++
  //     }
  //   })
  // )
  // return count;
  return (str.match(/[aeiou]/ig) || []).length;
}
// console.log(getCount('abracadabra'));


const findSmallestInt = (args) => {
  return Math.min(...args);
}
// console.log(findSmallestInt([34, 15, 2, -59]))


const maps = (x) => {
  return x.map(num => num * 2)
}
// console.log(maps([1, 2, 3, 4, 5]));


const sumTwoSmallestNumbers = (numbers) => {
  // let sortedArr = numbers.sort((a, b) => a - b);
  // return sortedArr[0] + sortedArr[1];

  numbers = numbers.sort(function (a, b) { return a - b; });
  return numbers[0] + numbers[1];
}
// console.log(sumTwoSmallestNumbers([3, 4, 5, 12, 1, 45, 68, 72, 91]));


const basicOp = (operation, value1, value2) => {
  // if(operation === '+') {
  //   return value1 + value2;
  // } else if (operation === '-') {
  //   return value1 - value2;
  // } else if (operation === '*') {
  //   return value1 * value2;
  // } else if (operation === '/') {
  //   return value1 / value2;
  // }

  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}
// console.log(basicOp('+', 4, 7));


function points(games) {
  let testArr = [];
  let newArr = games.map(item => item.split(''));
  for (let i = 0; i < newArr.length; i++) {
    if (parseInt(newArr[i][0]) > parseInt(newArr[i][2])) {
      testArr.push('win');
    } else if (parseInt(newArr[i][0]) < parseInt(newArr[i][2])) {
      testArr.push('loss');
    } else {
      testArr.push('tie');
    }
  }

  return testArr
}
// console.log(points(["1:0","2:0","3:0","4:0","1:1","3:1","4:1","0:2","4:2","4:3"]));


function repeatStr(n, s) {
  return s.repeat(n);
}
// console.log(repeatStr(8, '$'));


function hoopCount(n) {
  return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
}
// console.log(hoopCount(10));


function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b)
}
// console.log(stray([2, 1, 1]))


// Counting number of time element appears in array
// counting occurances of each element in array
function findOdd(A) {
  let obj = A.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});

  for (let key in obj) {
    // console.log(obj[key])
    if (obj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

function fakeBin(x) {
  // let arr = x.split('').map(item => parseInt(item));

  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] < 5) {
  //     arr[i] = 0;
  //   } else if(arr[i] >= 5) {
  //     arr[i] = 1;
  //   }
  // }

  // return arr.map(item => item.toString()).join('');

  return x.split('').map(item => item < 5 ? 0 : 1).join('');
}
// console.log(fakeBin('45385593107843568'));


function minMax(arr) {
  // let newArr = arr.filter(n => n === Math.max(...arr) || n === Math.min(...arr)).sort((a, b) => a - b);
  // if(newArr.length < 2) {
  //   newArr.push(newArr[0]);
  // }

  // return newArr;
  return [Math.min(...arr), Math.max(...arr)];
}
// console.log(minMax([4]));
// console.log(minMax([4, 5, 2, 1, 6, 8]));


// const makeUpperCase = (str) => {
//   return str.toUpperCase();
// }
const makeUpperCase = str => str.toUpperCase();
// console.log(makeUpperCase('hello world'));


const high = (x) => {
  // const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // let countArr = [];
  // for(let i = 0; i < x.split(' ').length; i++) {
  //   let wordArr = [];
  //   for(let j = 0; j < x.split(' ')[i].split('').length; j++) {
  //     wordArr.push(alpha.indexOf(x.split(' ')[i].split('')[j]) + 1);
  //   }
  //   countArr.push(wordArr.reduce((a, b) => a + b));
  // }
  // return x.split(' ')[countArr.indexOf(Math.max(...countArr))];

  // Optimized below
  let ax = x.split(' ').map(x => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return x.split(' ')[ax.indexOf(Math.max(...ax))];
}
// console.log(high('aa b'));


const quarterOf = (month) => {
  return month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1;
  // Math.ceil(month / 3);
}
// console.log(quarterOf(3));


function friend(friends) {
  return friends.filter(name => name.length === 4);
}
// console.log(friend(["Ryan", "Kieran", "Mark"]));


function likes(names) {
  if (names.length != 0) {
    names.splice(-1, 0, 'and')
  }
  return names.length == 0 ? 'no one liked this post' : `${names.join(' ')} liked this post`;

}
// console.log(likes(['mark', 'mike', 'randi']));


const positiveSum = (arr) => {
  // let newArr = arr.filter(num => num > 0);
  // return newArr.length === 0 ? 0 : newArr.reduce((a, b) => a + b);
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
// console.log(positiveSum([-1,2]));

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr;
}
// console.log(reverseSeq(5));


const century = (year) => {
  return Math.ceil(year / 100);
}
// console.log(century(1935));


function squareSum(numbers) {
  // return numbers.length == 0 ? 0 : numbers.map(number => number * number).reduce((a, b) => a + b );
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}
// console.log(squareSum([1, 4]));


function correct(string) {
  // const chars = {
  //   '5':'s',
  //   '0':'O',
  //   '1':'I'
  // }
  // return string.replace(/[501]/g, m => chars[m]);
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
}
// console.log(correct('L0ND0N'));


function stringToArray(string) {
  return string.split(' ');
}
// console.log(stringToArray('Hello World'));


const countTrue = (arr) => {
  return arr.length === 0 ? 0 : arr.filter(value => value === true).length;
}
// console.log(countTrue([true, false, false, true, false]));

function disemvowel(str) {
  // const chars = {
  //   'A':'',
  //   'E':'',
  //   'I':'',
  //   'O':'',
  //   'U':'',
  //   'a':'',
  //   'e':'',
  //   'i':'',
  //   'o':'',
  //   'u':''
  // }
  // return str.replace(/[AEIOUaeiou]/g, m => chars[m]);
  return str.replace(/[aeiou]/gi, '');
}
// console.log(disemvowel('This website is for losers LOL!'));

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}
// console.log(boolToWord(false));

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
// console.log(goals(9, 1, 2));


function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('')
}
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


function abbrevName(name) {
  let arrIn = [];
  name.split(' ').forEach(word => arrIn.push(word[0]));
  arrIn.splice(1, 0, '.');
  return arrIn.join('').toUpperCase();
}
// console.log(abbrevName('mark novak'));


const wave = (str) => {
  // let arr = [];
  // for(let i = 0; i < str.length; i++) {
  //   if(str.charAt(i) !== ' '){
  //     arr.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1));
  //   }
  // }

  // return arr;

  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
  });

  return result;
}
// console.log(wave('two words'));

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
// console.log(roundToNext5(-1));


const isStringUpperCase = (str) => {
  return str === str.toUpperCase();
}
// console.log(isStringUpperCase('TeST'));

function twoSort(s) {
  // let arr = s.sort()[0].split('')
  // return arr.map(letter => arr.indexOf(letter) !== arr.length - 1 ? letter + '***' : letter).join('');

  return s.sort()[0].split('').join('***');
}
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));

const solution = (nums) => {
  // return nums === null ? [] : nums.length === 0 ? [] : nums.sort((a,b) => a - b);
  return (nums || []).sort(function (a, b) {
    return a - b
  });
}
// console.log(solution([2, 20, 10]))


const isAnagram = (test, original) => {
  // return test.length === original.length ? test.toLowerCase().split('').sort().every((val, i) => val === original.toLowerCase().split('').sort()[i]) : false;
  const t = test.toLowerCase().split('').sort().join('');
  const o = original.toLowerCase().split('').sort().join('');
  return (t == o) ? true : false;
}
// console.log(isAnagram('SrLSoGsgt', 'gLrSStYGos'));


function booleanToString(b) {
  return b ? 'true' : 'false';
}
// console.log(true);


const findShort = (s) => {
  return Math.min(...s.split(' ').map(x => x.length));
}
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));


const testEven = (n) => {
  return n % 2 === 0 ? true : false;
}
// console.log(testEven(2));


function getSum(a, b) {
  let arr = [a, b];
  let newArr = [];
  arr.sort((a, b) => a - b)
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  return newArr.reduce((a, b) => a + b);

  // let min = Math.min(a, b),
  //     max = Math.max(a, b);
  // return (max - min + 1) * (min + max) / 2;
}
// console.log(getSum(8, 4));


const isValidWalk = (walk) => {
  // let x = 0;
  // let y = 0;
  // if(walk.length === 10) {
  //   walk.forEach(direction => {
  //     switch(direction) {
  //       case 'n':
  //         x++;
  //         break;
  //       case 's':
  //         x--;
  //         break;
  //       case 'w':
  //         y++;
  //         break;
  //       case 'e':
  //         y--;
  //         break;
  //     }
  //   })
  // } else {
  //   return false;
  // }
  // if(x === 0 && y === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  var dx = 0
  var dy = 0
  var dt = walk.length

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  return dt === 10 && dx === 0 && dy === 0
}
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));


function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
// console.log(greet('Greg', 'Daniel'));


function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));


const switchItUp = (number) => {
  let num = '';
  switch (number) {
    case 0: num = 'Zero'; break
    case 1: num = 'One'; break
    case 2: num = 'Two'; break
    case 3: num = 'Three'; break
    case 4: num = 'Four'; break
    case 5: num = 'Five'; break
    case 6: num = 'Six'; break
    case 7: num = 'Seven'; break
    case 8: num = 'Eight'; break
    case 9: num = 'Nine'; break
  }
  return num;
}
// console.log(switchItUp(1));


const persistence = (num) => {
  let arr = num.toString().split('');
  arr.map(x => parseInt(x));
  // let counter;



  // for(let i = 0; counter > 2; i++) {
  //   counter = arr.reduce((a,b) => a * b).toString().length;
  // }

  // return counter;

  let result = '';
  let i = 0;

  do {
    i = arr.reduce((a, b) => a * b).toString().length;
    result = result + i;
  } while (i < 1);

  return result;

}
// console.log(persistence(25));


const number = (busStops) => {
  let on = 0;
  let off = 0;

  for (let i = 0; i < busStops.length; i++) {
    on += busStops[i][0];
    off += busStops[i][1];
  }
  return on - off;
  // busStops.reduce((rem, [on, off]) => rem + on - off, 0)
}
// console.log(number([[10,0],[3,5],[5,8]]));


const problem = (x) => {
  return typeof x === "number" ? (x * 50) + 6 : 'Error';
}
// console.log(problem(10));

function checkForBase(base, factor) {
  return base % factor == 0;
}
// console.log(checkForBase(10, 2));


function shortcut(string) {
  return string.replace(/[aeiou]/gi, '');
}
// console.log(shortcut('test'));


function seriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + (1 / reverage);
    }
  }
  return result.toFixed(2);
};
// console.log(seriesSum(4));


function past(h, m, s) {
  return (((h * 60) * 60) + (m * 60) + s) * 1000;
}
// console.log(past(1,1,1));


function removeExlamationMarks(s) {
  return s.replace(/[!]/gi, '');
}
// console.log(removeExlamationMarks("Hello World!"));


function updateLight(current) {
  return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
}
// console.log(updateLight('red'));


function expandedForm(num) {
  // let arr = num.toString().split('');
  // let count = [];
  // for(let i = num.toString().length; i > 0; i--) {
  //     count.push(i - 1)
  // }
  // let newArr = [];
  // for(let i = 0; i < arr.length; i++){
  //   newArr.push(arr[i].padEnd(count[i] + 1, '0'))
  // }
  // return newArr.map(item => parseInt(item)).filter(item => item > 0).map(item => item.toString()).join(' + ');

  return num.toString().split("").reverse().map((a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(" + ");
}
// console.log(expandedForm(420370022));


const accum = (s) => {
  let arr = s.split('');
  return arr.map(letter => letter.toUpperCase() + letter.toLowerCase().repeat(arr.indexOf(letter))).join('-');
}
// console.log(accum('RqaEzty'));


const sortNumbers = (num) => {
  return num.sort(function (a, b) {
    return a - b;
  });

}
// console.log(sortNumbers([1, 100000, 21, 30, 4])); // [ 1, 4, 21, 30, 100000 ]


const enough = (cap, on, wait) => {
  // let space = cap - on;
  // return space >= wait ? 0 : wait - space;
  return Math.max(wait + on - cap, 0);
}
// console.log(enough(100, 60, 50));

function duplicateCount(text) {
  // let count = [];
  // for(let i = 0; i < [...new Set(text.toLowerCase().split(''))].length; i++) {
  //   count.push(text.toLowerCase().split('').filter(letter => letter === [...new Set(text.toLowerCase().split(''))][i]).length)
  // }
  // let answer = 0;
  // count.forEach(num => {
  //   if(num > 1) {
  //     answer++;
  //   }
  // })
  // return answer;
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
// console.log(duplicateCount('aabBcdfddde'));


function printerErrors(s) {
  // return s.match(/[n-z]/g) === null ? 0 + '/' + s.length : s.match(/[n-z]/g).length + '/' + s.length;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++;
    }
  }
  return `${count}/${s.length}`
}
// console.log(printerErrors('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));


const toAlternatingCase = (string) => {
  let arr = string.split('');
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    if (arr[i] === 'number') {
      newArr.push(arr[i]);
    } else if (arr[i].match(/[A-Z]/)) {
      newArr.push(arr[i].toLowerCase());
    } else {
      newArr.push(arr[i].toUpperCase());
    }
  }
  return newArr.join('');
}
// console.log(toAlternatingCase('1D2KabdC'));

String.prototype.toAlternatingCase = function () {
  return this.split("").map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')
}
// console.log(toAlternatingCase('testD12'));


function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;

  // below is optimized, but not sure if it would be real world practical
  // return (str.match(/[letter]/ig)||[]).length;

}
// console.log(strCount('Hollo', 'o'));


function topThreeWords(text) {
  // let arr = text.replace(/\s+/g,' ').trim().split(' ').map(word => word.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, "").toLowerCase());
  // let minArr = [... new Set(arr)];
  // let count = [];

  // for(let i = 0; i < minArr.length; i++) {
  //   let counter = 0;
  //   for(word of arr) {
  //     if(word === minArr[i]) {
  //       counter ++;
  //     }
  //   }
  //   let obj = {};
  //   obj["word"] = minArr[i];
  //   obj["tally"] = counter;
  //   count.push(obj);
  // }

  // let sortedArr = count.sort((a,b) => {
  //   return b.tally - a.tally;
  // })

  // let finalArr = sortedArr.slice(0, 3)

  // let lastArr = finalArr.map(obj => {
  //     return obj.word
  // })

  // let answerArr = [];

  // for(let i = 0; i < lastArr.length; i++) {
  //   if(lastArr[i].length === 1 && !lastArr[i].includes('\'')) {
  //     answerArr.push(lastArr[i])
  //   } else if (lastArr[i].length > 1) {
  //     answerArr.push(lastArr[i])
  //   }
  // }

  // return answerArr;

  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  return Object
    .keys(words)
    .sort(function (a, b) { return words[b] - words[a] })
    .slice(0, 3)
}
// console.log(topThreeWords("  , e   .. "));


const digitize = (n) => {
  return n.toString().split('').map(num => parseInt(num)).reverse();
}
// console.log(digitize(1234567890));


const order = (words) => {
  return words.split(' ').sort((a, b) => a.match(/\d+/g) - b.match(/\d+/g)).join(' ');
}
// console.log(order('is2 Thi1s T4est 3a'));


function twiceAsOld(dadYearsOld, sonYearsOld) {
  // let calc = dadYearsOld - (sonYearsOld * 2);
  // return  calc < 0 ? calc * -1 : calc;

  return Math.abs(dadYearsOld - (sonYearsOld * 2));
}
// console.log(twiceAsOld(55,30));


function getAge(inputString) {
  return parseInt(inputString.charAt(0));
}
// console.log(getAge('4 years old'));


const gimme = (triplet) => {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}
// console.log(gimme([2, 3, 1]));


const numberTest = (array) => {
  // let count = [];
  // let newArr = [];
  // for(let i = 1; i <= array.length; i++) {
  //   count.push(i)
  // }

  // for(let i = 0; i < array.length; i++) {
  //   newArr.push(`${count[i]}: ${array[i]}`)
  // }

  // return newArr;

  return array.map(function (letter, index) {
    return (index + 1) + ": " + letter;
  })
}
// console.log(numberTest(["a", "b", "c"]));


function noSpace(x) {
  // return x.replace(/[' ']/g, '');
  // return x.split(' ').join('');
  return x.replace(/\s/g, '');
}
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
// console.log(mouthSize('ALLIGATOR'));
// console.log(mouthSize('toucan'));


const areaOrPerimeter = (l, w) => {
  return l === w ? l * w : 2 * (l + w);
}
// console.log(areaOrPerimeter(6, 10));


function capitals(word) {
  let capIndexes = [];
  // for(let i = 0; i < word.length; i++) {
  //   if(word.split('')[i] === word.split('')[i].toUpperCase()) {
  //     capIndexes.push(word.split('').indexOf(word.split('')[i]))
  //   }
  // }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capIndexes.push(i)
    }
  }
  return capIndexes;
}
// console.log(capitals('CodEWaRs'));


function nextBigger(n) {
  let arr = n.toString().split('').reverse();
  let lowest;
  let i = 0;
  do {
    i = i + 1;
    lowest = arr[i + 1];
  } while (arr[i] < arr[i + 1]);

  let index = arr.indexOf(lowest);
  let sliceArr = arr.reverse().slice(-index);

  let nextLowest;
  let j = 0;
  do {
    j = j + 1;
    nextLowest = sliceArr[j + 1];
  } while (sliceArr[j] < sliceArr[j + 1])


  // let newArr = sliceArr.filter(num => num !== nextLowest);
  // newArr.push(lowest)
  // newArr.sort((a,b) => a - b);


  // newArr.push(nextLowest)
  // let updatedArr = sliceArr.filter(num => num > nextLowest)

  // let nextArr = arr.slice(0, index)
  // console.log(updatedArr)
  // updatedArr.push(lowest)
  // updatedArr.sort((a,b) => a - b);
  // updatedArr.forEach(num => newArr.push(num))
  return lowest;
}
// console.log(nextBigger(21432));

const findDifference = (a, b) => {
  return Math.abs((a.reduce((x, y) => x * y)) - b.reduce((x, y) => x * y));
}
// console.log(findDifference([3, 2, 5], [1, 4, 4]));q


const index = (array, n) => {
  return array[n] ? Math.pow(array[n], n) : -1;
}
// console.log(index([1, 2, 3, 4], 2));


function sumStr(a, b) {
  // return ((a.length !== 0 ? parseInt(a) : 0) + (b.length !== 0 ? parseInt(b) : 0)).toString();
  return String(Number(a) + Number(b));
}
// console.log(sumStr('', '4'));


function solutionCamelCase(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
// console.log(solutionCamelCase('camelCasingTest'));


function simpleMutipleication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
// console.log(simpleMutipleication(8));


const oddOrEven = (array) => {
  return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
// console.log(oddOrEven([2]));
// console.log(oddOrEven([1]));
// console.log(oddOrEven([]));

const lovefunc = (flower1, flower2) => {
  return flower1 % 2 !== flower2 % 2;
}
// console.log(lovefunc(2, 4));


function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
// console.log(finalGrade(100, 12));
// console.log(finalGrade(99, 0));
// console.log(finalGrade(85, 5));


function warnTheSheep(queue) {
  // let answer;
  // queue.reverse().forEach((animal, index) => {
  //   if(animal === 'wolf' && index === 0){
  //     answer = "Pls go away and stop eating my sheep";
  //   } else if(animal === 'wolf') {
  //     answer = `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
  //   }
  // })
  // return answer

  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;

}
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));


const likesCount = (names) => {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

}
// console.log(likesCount(['Mark', 'Randi']));


const pipeFix = (numbers) => {
  let arr = [];
  let lower = numbers[0];
  // let upper = numbers.reverse()[0];
  let upper = numbers[numbers.length - 1];
  for (let i = lower; i <= upper; i++) {
    arr.push(i)
  }
  return arr;
}
// console.log(pipeFix([-1, 5]));


function findAverage(array) {
  return array.length > 0 ? array.reduce((x, y) => (x + y)) / array.length : 0;
}
// console.log(findAverage([1, 2, 3]));


function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return 0
  }
}
// console.log(arithmetic(1, 3, 'add'));


function highAndLow(numbers) {
  // let arr = numbers.split(' ').map(number => parseInt(number)).sort((a,b) => a - b)
  // let max = arr[arr.length - 1].toString();
  // let min = arr[0].toString()
  // return `${max} ${min}`;

  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


const hero = (bullets, dragons) => {
  return bullets / dragons >= 2
}
// console.log(hero(100, 40));

const minAndMax = (list) => {
  let max = Math.max(...list);
  let min = Math.min(...list);

  return `${max} and ${min}`
}
// console.log(minAndMax([4,6,2,1,9,63,-134,566]));


const square = (num) => {
  return num * num;
}
// console.log(square(8));


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
}
// console.log(zeroFuel(50, 25, 2));


function minValue(values) {
  return parseInt([...new Set(values)].sort().join(''));
}
// console.log(minValue([3, 1, 1, 1, 3]));


function descendingOrder(n) {
  // return parseInt(String(n).split('').map(Number).sort((a, b) => b - a).join(''));
  return parseInt(String(n).split('').sort().reverse().join(''));
}
// console.log(descendingOrder(1021));


const paperwork = (n, m) => {
  return n > 0 && m > 0 ? n * m : 0;
}
// console.log(paperwork(10, 20));


const take = (arr, n) => {
  return arr.slice(0, n);
}
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3));


function addBinary(a, b) {
  return (a + b).toString(2);
}
// console.log(addBinary(5,9));


const sortArray = (array) => {
  // let arr = [];
  // for(let i = 0; i < array.length; i++) {
  //   if(array[i] % 2 === 0) {
  //     let obj = {};
  //     obj['index'] = i;
  //     obj['number'] = array[i];
  //     arr.push(obj);
  //   }
  // }

  // let oddArr = [];
  // for(let i = 0; i < array.length; i++) {
  //   if(array[i] % 2 !== 0) {
  //     oddArr.push(array[i]);
  //   }
  // }

  // let finalArr = oddArr.sort((a,b) => a - b);
  // for(let i = 0; i < arr.length; i++) {
  //   finalArr.splice(arr[i].index, 0, arr[i].number)
  // }

  // return finalArr;


  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((number) => number % 2 ? odd.shift() : number);
}
// console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));


function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}
// console.log(howManyLightsabersDoYouOwn('Mark'));


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(36));


function otherAngle(a, b) {
  return 180 - (a + b);
}
// console.log(otherAngle(30, 60));


function solve(s) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;

  s.split('').forEach(letter => {
    if (letter === letter.toUpperCase()) {
      upperCaseCount++;
    } else {
      lowerCaseCount++;
    }
  })

  if (upperCaseCount === lowerCaseCount) {
    return s.toLowerCase();
  } else if (upperCaseCount > lowerCaseCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}
// console.log(solve('CODe'));


const replace = (s) => {
  return s.replace(/[aeiou]/ig, '!');
}
// console.log(replace('Hi!'));


const mergeArrays = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
// console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));


const reverseList = (list) => {
  return list.reverse();
}
// console.log(reverseList([1,2,3,4]));


const longestConsec = (strarr, k) => {
  // let arr = [];
  // if(k > 2){
  //   for(let i = 0; i < strarr.length - (k - 1); i++) {
  //     let combinedElement = '';
  //     for(let j = 0; j < k; j++) {
  //       combinedElement += strarr[i + j];
  //     }
  //     arr.push(combinedElement)
  //   }
  // } else if(k === 2) {
  //   for(let i = 0; i < strarr.length - 1; i++) {
  //     arr.push(strarr[i] + strarr[i + (k - 1)]);
  //   }
  // } else if (k === 1) {
  //   for(let i = 0; i < strarr.length; i++) {
  //     arr.push(strarr[i])
  //   }
  // }

  // let longest = arr.sort((a,b) => b.length - a.length)

  // return strarr.length === 0 || k > strarr.length || k <=0 ? "" : longest[0];

  let longest = '';

  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    let tempArray = strarr.slice(i, i + k);
    let tempStr = tempArray.join('');

    console.log(tempArray);
    console.log(tempStr);
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }

  return longest;
}
// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));


function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
// console.log(saleHotdogs(4));



function parseIntTest(string) {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000
  };


  let firstArr = string.replace(/[-]/g, ' ').split(' ');
  let arr = firstArr.filter(word => word !== 'and')
  console.log(arr)
  let numberDigit = 0;
  let currentNumber = 0;

  for (let word of arr) {
    let number = numberMap[word];

    if (number >= 1000) {
      numberDigit += currentNumber * number;
      currentNumber = 0;

    } else if (number >= 100) {
      currentNumber *= number;
    } else {
      currentNumber += number;
    }
  }

  return numberDigit + currentNumber;
}
// console.log(parseIntTest('two thousand and forty-six'))


function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
// console.log(greet('mark'));


function getChar(c) {
  return String.fromCharCode(c);
}
// console.log(getChar(97));

const setReducer = (arr) => {
  while (arr.length - 1) {
    arr = arr.reduce((a, v, i) => {
      if (v != arr[i - 1]) a.push(1)
      else a[a.length - 1]++
      return a
    }, [])
  }
  return arr.pop()
}
// console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));


function capitalize(s) {
  // let evenString = '';
  // let oddString = '';

  // for(let i = 0; i < s.length; i++) {
  //   if(i % 2 === 0) {
  //     evenString += s.charAt(i).toUpperCase();
  //     oddString += s.charAt(i);
  //   } else {
  //     evenString += s.charAt(i);
  //     oddString += s.charAt(i).toUpperCase();
  //   }
  // }

  // return [evenString, oddString];

  let even = s.split('').map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('');
  let odd = s.split('').map((letter, index) => index % 2 !== 0 ? letter.toUpperCase() : letter).join('');

  return [even, odd];
}
// console.log(capitalize("abracadabra"));


const mxdiflg = (a1, a2) => {
  // let arr = [];

  // if(a1.length === 0) {
  //   arr.push(-1)
  // } else {
  //   for(let i = 0; i < a1.length; i++) {
  //     for(let j = 0; j < a2.length; j++) {
  //       arr.push(Math.abs(a1[i].length - a2[j].length))
  //     }
  //   }
  // }

  // if(a2.length === 0) {
  //   arr.push(-1)
  // } else {
  //   for(let i = 0; i < a2.length; i++) {
  //     for(let j = 0; j < a1.length; j++) {
  //       arr.push(Math.abs(a2[i].length - a1[j].length));
  //     }
  //   }
  // }

  // return Math.max(...arr);

  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let l1 = a1.map(string => string.length);
  let l2 = a2.map(string => string.length);

  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
}
// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));


const sequenceSum = (begin, end, step) => {
  let answer = 0;
  for (let i = begin; i <= end; i += step) {
    answer += i;
  }

  return begin > end ? 0 : answer;
}
// console.log(sequenceSum(1, 5, 1));


function titleCase(title, minorWords) {
  // let titleArr = title.split(' ');
  // let updatedTitle = [];
  // let minorArr = [];

  // if(minorWords) {
  //   minorArr = minorWords.toLowerCase().split(' ');
  // }

  // for(let i = 0; i < titleArr.length; i++) {
  //   updatedTitle.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1).toLowerCase());
  // }

  // let firstWord = updatedTitle[0]
  // updatedTitle.shift();
  // let answerArr = [];


  // for(let word in updatedTitle) {
  //   if(minorArr.indexOf(updatedTitle[word].toLowerCase()) !== -1) {
  //     answerArr.push(updatedTitle[word].toLowerCase())
  //   } else {
  //     answerArr.push(updatedTitle[word])
  //   }
  // }


  // answerArr.unshift(firstWord);
  // return answerArr.join(' ');

  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function (v, i) {
    if (v != "" && ((minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}
// console.log(titleCase("First a of in"));


const calculateYears = (principal, interest, tax, desired) => {
  // let reinvest = 0;
  // let years = 0;
  // for(let i = principal; i <= desired; i = reinvest) {
  //   let interestGain = i * interest;
  //   let amountReinvest = (interestGain - (interestGain * tax)) + i;
  //   reinvest = amountReinvest;
  //   console.log(reinvest)
  //   years++;
  // }
  // return principal === desired ? 0 : years;

  let years = 0;
  while (principal < desired) {
    principal += (principal * interest) * (1 - tax);
    years++
  }
  return years;
}
// console.log(calculateYears(1000,0.05,0.18,1000));


function cockroachSpeed(s) {
  return Math.floor(s * 27.778);
}
// console.log(cockroachSpeed(1.09));


function howMuchILoveYou(nbPetals) {
  let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

  return arr[(nbPetals - 1) % arr.length];
}
// console.log(howMuchILoveYou(2));


const findMultiples = (integer, limit) => {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}
// console.log(findMultiples(4, 27));


const plural = (n) => {
  return n !== 1;
}
// console.log(plural(1));


function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
// console.log(evenOrOdd(2));


function countBy(x, n) {
  // let arr = [];
  // for(let i = x; arr.length < n; i += x) {
  //   arr.push(i);
  // }
  // return arr;

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}
// console.log(countBy(2, 5));


// Filter array based on another array
function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (bird) {
    return !geese.includes(bird);
  });
}
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));


function expressionMatter(a, b, c) {
  // let arr = [];
  // arr.push(a * (b + c));
  // arr.push(a * b * c);
  // arr.push(a + b * c);
  // arr.push(a + b + c);
  // arr.push((a + b) * c);

  // return Math.max(...arr);


  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}
// console.log(expressionMatter(1, 1, 1));


// parsing url to get domain name / accessing 
function domainName(url) {
  // let testUrl;

  // if(!url.includes('http')) {
  //   testUrl = "http://" + url;
  // } else {
  //   testUrl = url
  // }

  // let host = new URL(testUrl).host;

  // if(host.includes('www')) {
  //   let first = host.split("www.").pop();
  //   return first.split('.')[0];
  // } else {
  //   return host.split('.')[0];
  // }

  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}
// console.log(domainName("www.xakep.ru"));


function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}
// console.log(isSquare(25));


function multiTable(number) {
  let table = '';

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
  }

  return table;
}
// console.log(multiTable(5));


// use .filter() to filter with index out elements from array
function multipleOfIndex(array) {
  // let answerArr = [];
  // for(let i = 0; i <= array.length; i++) {
  //   if(array[i] % i === 0 || array[i] === 0) {
  //     answerArr.push(array[i]);
  //   }
  // }
  // return answerArr;

  return array.filter((n, i) => n % i === 0 || n === 0)
}
// console.log(multipleOfIndex([0, 2, 3, 6, 9]));


// Using % (remainder) divides number by another number and provides the remainder left over - 17 % 5 - where 5 goes into 17 3x(15) and 2 left over
const remainder = (n, m) => {
  ;
  return Math.max(n, m) % Math.min(n, m);
}
// console.log(remainder(17, 5));


// rock, paper, scissors using object with winning combinations
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}
// console.log(rps('paper', 'scissors'));


// Accessing letter in string at index using [] instead of substr
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
// console.log(feast('chickadee', 'chocolate cake'));


// Area of triangle
function isTriangle(a, b, c) {
  // let semi = (a + b + c) / 2;

  // let area = Math.sqrt(semi*(semi - a)*(semi - b)*(semi - c));

  // if (a < 0 || b < 0 || c < 0) {
  //   return false
  // } else if (area > 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  return a + b > c && a + c > b && c + b > a;
}
// console.log(isTriangle(1, 2, 2));


// Using Math.pow and Math.sqrt to find perfect square
function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) {
    return -1;
  } else {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }
}
// console.log(findNextSquare(121));


const animal = (obj) => {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
// console.log(animal({name:"dog",legs:4,color:"white"}));


// using parseInt with radix (second value)
const hexToDex = (hexString) => {
  return parseInt(hexString, 16);
}
// console.log(hexToDex('FF'));


function angle(n) {
  return (n - 2) * 180;
}
// console.log(angle(4));


function sumDigits(number) {
  return Math.abs(number).toString().split('').map(num => parseInt(num)).reduce((a, b) => a + b);
}
// console.log(sumDigits(-99));


function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i].length === 0 || array2[i].length === 0) {
      score += 0;
    } else if (array1[i] === array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i]) {
      score--;
    }
  }
  return score < 0 ? 0 : score;
}
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));


// looping through array of strings and indexing string
const pointsGame = (games) => {
  let score = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      score += 3;
    }
    if (games[i][0] === games[i][2]) {
      score++
    }
  }
  return score;
}
// console.log(pointsGame(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));


// Checking array for value using .includes() and not using a loop
function check(a, x) {
  return a.includes(x);
}
// console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));


// Search string using .includes() to see if it contains a specific word
function spEng(sentence) {
  return sentence.toLowerCase().includes('english');
}
// console.log(spEng("abcEnglishdef"));


const sumMul = (n, m) => {
  if (m <= 0 || n <= 0) {
    return "INVALID";
  }

  let res = 0;
  for (let i = 0; i < m; i += n) {
    res += i;
  }
  return res;
}
// console.log(sumMul(89,16020));


const calculateAge = (born, date) => {
  if (born === date) {
    return 'You were born this very year!';
  }

  let years = Math.abs(born - date) == 1 ? 'year' : 'years';
  if (born < date) {
    return `You are ${date - born} ${years} old.`;
  }
  if (born > date) {
    return `You will be born in ${born - date} ${years}.`;
  }

}
// console.log(calculateAge(2002,2000));


// using .filter()
const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter(number => number % 2 === 0);
}
// console.log(getEvenNumbers([1,2,3,6,8,10]));


// Finding all possible pair sums in array and returning their index
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      };
    }
  }
}
// console.log(twoSum([2,2,3],4));


// Find largest pair sum in array
function largestPairSum(numbers) {
  // let arr = [];
  // for(let i = 0; i < numbers.length; i++) {
  //   for(let j = i + 1; j < numbers.length; j++) {
  //     let sum = numbers[i] + numbers[j];
  //     arr.push(sum);
  //   }
  // }
  // return Math.max(...arr);

  numbers.sort(function (a, b) { return b - a });
  return numbers[0] + numbers[1];
}
// console.log(largestPairSum([10,14,2,23,19]));


function opposite(number) {
  return -number
}
// console.log(opposite(8));


function printArray(array) {
  return array.join();
}
// console.log(printArray(["h","o","l","a"]));


const noOdds = (values) => {
  return values.filter(num => num % 2 === 0);
}
// console.log(noOdds([0,1,2,3]));


// Find the number of divisors of a number
const getDivisorsCnt = (n) => {
  let num = 0;
  if (n === 1) {
    return 1;
  }
  if (n % Math.sqrt(n) === 0) {
    num++;
  }

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      num += 2;
    }
  }
  return num;
}
// console.log(getDivisorsCnt(10));


const isPalidrome = (x) => {
  return x.toLowerCase().split('').reverse().join('') === x.toLowerCase();
}
// console.log(isPalidrome('Abba'));


const sumMix = (x) => {
  // let arr = [];
  // x.forEach(num => {
  //   arr.push(parseInt(num));
  // })
  // return arr.reduce((x,y) => x + y);

  return x.map(num => parseInt(num)).reduce((x, y) => x + y);
}
// console.log(sumMix([9, 3, '7', '3']));


function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(Math.sqrt([age1, age2, age3, age4, age5, age6, age7, age8].map(age => age * age).reduce((x, y) => x + y)) / 2);
}
// console.log(predictAge(65,60,75,55,60,63,64,45));


function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}
// console.log(nearestSq(10));


function race(v1, v2, g) {
  if (v2 < v1) { return null; }

  const seconds = Math.floor(g / (v2 - v1) * 3600);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds - h * 3600) / 60);
  const s = seconds - h * 3600 - m * 60;

  return [h, m, s];
}
// console.log(race(720, 850, 37));


function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}
// console.log(addLength("apple ban"));


// find the alphabet numberical value of letter/character
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}
// console.log(position('a'));


// turn number to binary
const toBinary = (n) => {
  return parseInt(n.toString(2));
}
// console.log(toBinary(1));


const humanYearsCatYearsDogYears = function (humanYears) {
  let dogYears = 0;
  let catYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      dogYears += 15;
      catYears += 15;
    } else if (i === 2) {
      dogYears += 9;
      catYears += 9;
    } else if (i > 2) {
      dogYears += 5;
      catYears += 4;
    }
  }
  return [humanYears, catYears, dogYears];
}
// console.log(humanYearsCatYearsDogYears(10));


function peopleWithAgeDrink(old) {
  return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky';
}
// console.log(peopleWithAgeDrink(21));


// reverse string and remove all non-alphabetic characters
const reverseLetter = (str) => {
  return str.replace(/[^a-z]/gi, '').split('').reverse().join('');
}
// console.log(reverseLetter('ultr53o?n'));


// Classic for loop
const between = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(between(1, 4));


// Removing every other item from array
const removeEveryOther = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  return arr;
}
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));


// finding unique value in array (not the same as the others);
const findUniq = (arr) => {
  arr.sort((a, b) => b - a)

  if (arr[0] !== arr[1]) {
    return arr[0];
  }

  if (arr[0] === arr[1]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  }
}
// console.log(findUniq([1, 1, 1, 2, 1]));


function defineSuit(card) {
  switch (card.slice(-1)) {
    case '♣': return 'clubs';
    case '♦': return 'diamonds';
    case '♥': return 'hearts';
    case '♠': return 'spades';
  }
}
// console.log(defineSuit('3♣'));


function greet(name) {
  return 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';
}
// console.log(greet('riley'));


function digPow(n, p) {
  let nTest = (n.toString().split('').map(num => Math.pow(parseInt(num), p++)).reduce((a, b) => a + b)) / n;
  return nTest >= 1 && nTest % 1 === 0 ? nTest : -1;
}
// console.log(digPow(46288, 3));


function moveGame(position, roll) {
  return position + (roll * 2);
}
// console.log(moveGame(3, 6));


function dataReverse(data) {
  // let byteArr = [];
  // for(let i = 0; i < data.length; i += 8) {
  //   const byte = data.slice(i, i + 8);
  //   byteArr.push(byte);
  // }
  // byteArr.reverse();

  // let reversedArr = [];
  // for(let i = 0; i < byteArr.length; i++) {
  //   reversedArr.push(...byteArr[i]);
  // }

  // return reversedArr;

  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
}
// console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));


function bump(x) {
  return x.replace(/[_]/gi, '').length <= 15 ? 'Woohoo!' : "Car Dead";
}
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));


function adjacentElementsProduct(array) {
  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}
// console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));


// remove everything after character in string
const removeUrlAnchor = (url) => {
  return url.split('#')[0];
}
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));


const isPowerOfTwo = (n) => {
  return Math.log2(n) % 1 === 0;
}
// console.log(isPowerOfTwo(4096));


const sumArray = (numbers) => {
  return numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b);
}
// console.log(sumArray([]));


// Remove duplicates from string or array using .filter()
const uniqueInOrder = (iterable) => {
  let newIterable;
  if (Array.isArray(iterable)) {
    newIterable = iterable;
  } else {
    newIterable = iterable.split('')
  }
  return newIterable.filter(function (item, position, arr) {
    return position === 0 || item !== arr[position - 1];
  })

}
// console.log(uniqueInOrder([ 'A', 'B', 'B', 'C', 'D', 'A', 'B' ]));


// Round to two decimal places
const twoDecimalPlaces = (n) => {
  // return Math.round(n * 100) / 100;
  return Number(n.toFixed(2));
}
// console.log(twoDecimalPlaces(4.655555));


const sumSequence = (count) => {
  if (count < 0) {
    return `${count}<0`
  }

  if (count === 0) {
    return '0=0';
  }

  let answer = [];
  for (let i = 0; i <= count; i++) {
    answer.push(i)
  }
  let sum = answer.reduce((a, b) => a + b);
  return `${answer.join('+')} = ${sum}`;
}
// console.log(sumSequence(6))


const unusualFive = () => {
  return 'string'.indexOf('g');
}
// console.log(unusualFive());

// Search array within array for matching arrays and return index of first match using .find();
const searchArray = (arrayToSearch, query) => {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].length !== 2 || !Array.isArray(arrayToSearch[i])) {
      throw new Error('Error');
    }
  }

  if (query.length !== 2) {
    throw new Error('Error');
  }

  return arrayToSearch.indexOf(arrayToSearch.find((subArr) => subArr[0] === query[0] && subArr[1] === query[1]));

}
// console.log(searchArray([[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]], [2,2]));


// using while loop
function persistenceTwo(num) {
  let strArr = num.toString().split('').map(item => parseInt(item));

  let counter = 0;
  let total;

  while (strArr.length > 1) {
    total = strArr.reduce((a, b) => a * b);
    counter++;
    strArr = total.toString().split('');
  }

  return counter;
}
// console.log(persistenceTwo(4));


// Combine array using concat
function flattenAndSort(array) {
  // let flatArr = [];
  // for(let i = 0; i < array.length; i++) {
  //   flatArr = flatArr.concat(array[i])
  // }
  // return flatArr.sort((a,b) => a - b);

  return [].concat(...array).sort((a, b) => a - b);
}
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));


// find pairs in array that equal sum
// find last index of item in array with lastIndexOf but not used in final solution
function sumPairs(ints, s) {
  // let arr = [];
  // let hashMap = {};

  // for(let i = 0; i < ints.length; i++) {
  //   if(hashMap[s - ints[i]] !== undefined) {
  //     arr.push([ints[hashMap[s - ints[i]]], ints[i], ints.lastIndexOf(ints[i])]);
  //   }
  //   hashMap[ints[i]] = i;
  // }

  // if(arr.length > 1) {
  //   arr.sort((a,b) => a[2] - b[2]);
  // }

  // return arr.length === 0 ? undefined : arr[0].slice(0, -1);

  let seen = {};
  for (let i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) {
      return [s - ints[i], ints[i]];
    }
    seen[ints[i]] = true;
  };
}
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));


// numerical alphabet number
const wordsToMarks = (string) => {
  return string.split('').map(letter => letter.charCodeAt(0) - 96).reduce((a, b) => a + b);
}
// console.log(wordsToMarks('attitude'));


// test if string contains every letter from alphabet
const isPangram = (string) => {
  return new Set(string.toLowerCase().replace(/[^a-z]/gi, "")).size === 26;
}
// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));


const XO = (str) => {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
// console.log(XO('xxooXoo'));


function findLongest(array) {
  let strArr = array.map(num => num.toString());
  let longest = strArr.sort((a, b) => b.length - a.length);
  return parseInt(longest[0]);
}
// console.log(findLongest([1, 10, 100]));



const rowSumOddNumbers = (n) => {
  // let counter = n * (n - 1) + 1;
  // let stop = n * n + (n - 1);
  // let arr = [];
  // for(let i = counter; i <= stop; i += 2) {
  //   arr.push(i)
  // }
  // return arr.reduce((a,b) => a + b);

  return Math.pow(n, 3);
}
// console.log(rowSumOddNumbers(42));


const billboard = (name, price) => {
  // let arr = [];
  // for(let i = 0; i < name.split('').length; i++) {
  //   arr.push(price);
  // }
  // return arr.reduce((a,b) => a + b);

  let counter = 0;
  for (let i = 0; i < name.length; i++) {
    counter += price;
  }
  return counter;
}
// console.log(billboard("Jeong-Ho Aristotelis", 30));


const towerBuilder = (nFloors) => {
  // let building = [];
  // for(let i = 0; i < nFloors; i++) {
  //   building.push('*'.repeat(nFloors * 2 - 1))
  // }

  // for(let i = building.length - 1; i > 0; i--) {
  //   building[i] = building[i].slice(i, -i);
  // }

  // for(let i = 0; i < building.length; i++) {
  //   if(i > 0) {
  //     let spaces = ' '.repeat(i);
  //     building[i] = spaces + building[i];
  //     building[i] =  building[i] + spaces;
  //   }
  // }

  // return building.reverse();

  let building = [];
  for (let i = 1; i <= nFloors; i++) {
    let spaces = ' '.repeat(nFloors - i);
    let blocks = '*'.repeat((i * 2) - 1);
    building.push(`${spaces}${blocks}${spaces}`)
  }
  return building;
}
// console.log(towerBuilder(5));


const whatDay = (num) => {
  const dayOfWeek = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };

  return dayOfWeek[num] || 'Wrong, please enter a number between 1 and 7';
}
// console.log(whatDay(1));

// multiply pairs in array and find min sum
const minSum = (arr) => {
  return arr.sort((a, b) => a - b).reduce((a, b) => a + b * arr.pop(), 0);
}
// console.log(minSum([12,6,10,26,3,24,26,24]));


const hello = (name) => {
  return !name ? 'Hello, World!' : `Hello, ${name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
}
// console.log(hello('john'));


const include = (arr, item) => {
  return arr.includes(item);
}
// console.log(include([1,2,3,4], 4));


const maxProduct = (numbers, size) => {
  return numbers.sort((a, b) => b - a).splice(0, size).reduce((a, b) => a * b);
}
// console.log(maxProduct([10, 8, 7, 9], 3));


const arrayLeaders = (numbers) => {
  let answerArr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers.slice(i + 1).reduce((a, b) => a + b)) {
      answerArr.push(numbers[i]);
    }
  }

  if (numbers[numbers.length - 1] > 0) {
    answerArr.push(numbers.pop());
  }
  return answerArr;
}
// console.log(arrayLeaders([498,-600,614,115,226,757,-38,-66,-453,427,134,-9,61,335,244,-184,136,78,-206,734,-665,434,651,-201,281,-830,-209,298,-33,350,80,-46,-262,143,174,-490,757,-536,-22,441,-230,965,-285,137,-322,-87,326,-556,200,-285,-16,-172,467,422,142,160,-326,-853,-651,-107,492,619,87,506,-145,698,292,-802,260,632,30,-423,-568]));


const stockList = (listOfArt, listOfCat) => {
  let obj = {};
  for (let i = 0; i < listOfCat.length; i++) {
    let counter = 0;
    for (let j = 0; j < listOfArt.length; j++) {
      if (listOfCat[i] === listOfArt[j].charAt(0)) {
        counter += parseInt(listOfArt[j].split(' ').pop());
      }
    }
    obj[listOfCat[i]] = counter;
  }

  return Object.values(obj).every((value) => value === 0) ? '' : listOfCat.map(function (cat) {
    return `(${cat} : ${obj[cat]})`
  }).join(' - ');

}
// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));

// Remove special character from string and remove 1st & last character
function arrayKata(string) {
  return string.split(',').slice(1, -1).join(' ') || null;
}
// console.log(arrayKata('A1,B2,C3,D4'));


function digits(n) {
  return n.toString().length;
}
// console.log(digits(128685));


function shortenToDate(longDate) {
  return longDate.substring(0, longDate.indexOf(','));
}
// console.log(shortenToDate("Friday May 2, 9am"));


const maxGap = (numbers) => {
  let arr = [];
  numbers.sort((a, b) => b - a);
  for (let i = 0; i < numbers.length - 1; i++) {
    arr.push(numbers[i] - numbers[i + 1])
  }

  return Math.max(...arr);
}
// console.log(maxGap([13,10,2,9,5]));


const smallEnough = (a, limit) => {
  return a.every(number => number <= limit);
}
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));


const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
  if (dolphin) {
    sharkSpeed /= 2;
  }

  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}
// console.log(shark(12, 50, 4, 8, true));


const isSortedAndHow = (array) => {
  let ascending = [...array].sort((a, b) => a - b);
  let descending = [...array].sort((a, b) => b - a);

  if (array.every((v, i) => v === ascending[i])) {
    return 'yes, ascending'
  } else if (array.every((v, i) => v === descending[i])) {
    return 'yes, descending'
  } else {
    return 'no'
  }

}
// console.log(isSortedAndHow([5,4,3]));


// loop through array and skip one element at index each loop
// second solution uses map and reduce instead
function productArray(numbers) {
  // let arr = [];
  // for(let i = 0; i < numbers.length; i++) {
  //   let tempArr = numbers.filter((_, index) => index !== i)
  //   arr.push(tempArr.reduce((a,b) => a * b));
  // }
  // return arr;

  return numbers.map(x => numbers.reduce((a, b) => a * b) / x)
}
// console.log(productArray([4, 3, 10, 3, 93, 79]));


function maxTriSum(numbers) {
  // return numbers.filter((num, i) => numbers.indexOf(num) === i).sort((a,b) => b - a).slice(0, 3).reduce((a,b) => a + b);

  return ([...new Set(numbers)]).sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b);
}
// console.log(maxTriSum([3,2,6,8,2,3]));


function reverse(string) {
  return string.split(' ').reverse().join(' ');
}
// console.log(reverse('I am an expert at this'));


// queue time and optimal load
const queueTime = (customers, n) => {
  let arr = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let index = arr.indexOf(Math.min(...arr));
    arr[index] += customers[i];
  }
  return Math.max(...arr);
}
// console.log(queueTime([10,2,3,3], 2));


// Counting occurances of  elements in string / array
function count(string) {
  // let answer = {};
  // let arr = string.split('');
  // for(let i = 0; i < arr.length; i++) {
  //   let counter = 0;
  //   if(!answer[arr[i]]) {
  //     counter++;
  //     answer[arr[i]] = counter;
  //   } else {
  //     answer[arr[i]]++;
  //   }
  // }
  // return answer;

  let answer = {};
  string.split('').forEach(letter => {
    answer[letter] ? answer[letter]++ : answer[letter] = 1;
  })
  return answer;
}
// console.log(count('ababac'));


function toNumberArray(stringarray) {
  return stringarray.map(str => parseFloat(str));
}
// console.log(toNumberArray(["1.1","2.2","3.3"]));


const meeting = (s) => {
  let list = s.toUpperCase().split(';')
    .map(name => name.split(':')
      .reverse().join(', '))
    .sort().map(name => '(' + name + ')')
    .join('');

  return list;
}
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));


// Remove multiple occurance from array based on count
const deleteNth = (arr, n) => {
  // let obj = {};
  // let answerArr = [];
  // for(let i = 0; i < arr.length; i++) {
  //   obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
  //   if(obj[arr[i]] <= n) {
  //     answerArr.push(arr[i])
  //   } 
  // }
  // return answerArr;

  let obj = {};
  return arr.filter(function (x) {
    obj[x] = (obj[x] || 0) + 1;
    return obj[x] <= n;
  })
}
// console.log(deleteNth([1,1,3,2,3,7,2,2,2,2], 3));


const lowercaseCount = (str) => {
  return str.replace(/[^a-z]/g, '').length;
}
// console.log(lowercaseCount('abcABC123'));


function getNumberFromString(s) {
  return parseInt(s.replace(/[^0-9]/g, ''));
}
// console.log(getNumberFromString("this is number: 7"));


function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}
// console.log(nthSmallest([2,169,13,-5,0,-1], 4));


function rowWeights(array) {
  // let teamOne = 0;
  // let teamTwo = 0;

  // for(let i = 0; i < array.length; i++) {
  //   i % 2 === 0 ? teamOne += array[i] : teamTwo += array[i];
  // }

  // return [teamOne, teamTwo];

  let teamOne = array.filter((x, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
  let teamTwo = array.filter((x, i) => i % 2 !== 0).reduce((a, b) => a + b, 0);

  return [teamOne, teamTwo];
}
// console.log(rowWeights([29,83,67,53,19,28,96]));


// Shortest way to reverse array
const reverseThreeKu = a => a.map(a.pop, [...a]);
// console.log(reverseThreeKu([1, 2, 3]));


function cookie(x) {
  return typeof x === 'number' ? 'Who ate the last cookie? It was Monica!' : typeof x === 'string' ? 'Who ate the last cookie? It was Zach!' : 'Who ate the last cookie? It was the dog!';
}
// console.log(cookie(true));


// Capitalize first letter of each word in string
function getDrinkByProfesion(param) {
  let test = param.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
  switch (test) {
    case 'Jabroni':
      return 'Patron Tequila';
    case 'School Counselor':
      return 'Anything with Alcohol';
    case 'Programmer':
      return 'Hipster Craft Beer';
    case 'Bike Gang Member':
      return 'Moonshine';
    case 'Politician':
      return 'Your tax dollars';
    case 'Rapper':
      return 'Cristal';
    default:
      return 'Beer';
  }
}
// console.log(getDrinkByProfesion('jabrOni'));


const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
  if (startPriceNew <= startPriceOld) {
    return [0, startPriceOld - startPriceNew]
  }

  let savings = 0;
  let counter = 0;

  while (savings + startPriceOld < startPriceNew) {
    counter++;
    if (counter % 2 === 0) {
      percentLossByMonth += .5;
    }
    savings += savingperMonth;
    startPriceOld *= 1 - (percentLossByMonth / 100);
    startPriceNew *= 1 - (percentLossByMonth / 100);
  }

  return [counter, Math.round((savings + startPriceOld) - startPriceNew, 2)];
}
// console.log(nbMonths(2000, 8000, 1000, 1.5));


function divCon(x) {
  let intNum = 0;
  let strNum = 0;
  x.forEach(item => {
    typeof item === 'number' ? intNum += item : strNum += parseInt(item);
  })
  return intNum - strNum;
}
// console.log(divCon([9, 3, '7', '3']));


const alphabetWar = (fight) => {
  // let right = 0;
  // let left = 0;
  // fight.split('').forEach(letter => {
  //   switch(letter) {
  //     case 'w':
  //       return left += 4;
  //     case 'p':
  //       return left += 3;
  //     case 'b':
  //       return left += 2;
  //     case 's':
  //       return left += 1;
  //     case 'm':
  //       return right += 4;
  //     case 'q':
  //       return right += 3;
  //     case 'd':
  //       return right += 2;
  //     case 'z':
  //       return right += 1;
  //     default:
  //       return;
  //   }
  // })
  // return right > left ? 'Right side wins!' : left > right ? 'Left side wins!' : "Let's fight again!";

  let map = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}
// console.log(alphabetWar('zdqmwpbs'));


function bouncingBall(h, bounce, window) {
  let nTimes = -1;
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      nTimes += 2;
      h *= bounce;
    }
  }
  return nTimes;
}
// console.log(bouncingBall(40, 1.0, 10));


function calculator(a, b, sign) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  }

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'unknown value';
  }
}
// console.log(calculator(1,2, "+"));


function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${+ exponent - 1}`;
}
// console.log(derive(7, 8));


const arrayDiff = (a, b) => {
  return a.filter(number => !b.includes(number));
}
// console.log(arrayDiff([1,2,3], [1,2]));


const multiplicationTable = (size) => {
  let arr = [];

  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = (i + 1) * (j + 1);
    }
  }

  return arr;
}
// console.log(multiplicationTable(3));


function pillars(numPill, dist, width) {
  if (numPill <= 1) {
    return 0;
  }

  if (numPill === 2) {
    return dist * 100;
  }

  if (numPill > 2) {
    return ((dist * 100) * (numPill - 1)) + ((numPill - 2) * width);
  }
}
// console.log(pillars(11, 15, 30));


function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}
// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));


const remove = (string) => {
  return string.endsWith('!') ? string.slice(0, -1) : string;
}
// console.log(remove('Hi!!!'));


const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
  7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063,
  5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496,
  6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825
]

const monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
  6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
  5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
  7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387
]

const tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
  7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
  7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
  5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703
]

const wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102,
  5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
  5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698,
  9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493
]

const thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
  9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
  9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066,
  7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701
]

const friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
  6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
  9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
  5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127
]

const saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
  5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
  5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
  7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085
];
const stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
const starsIn20 = (s) => {
  return s.map(day => {
    return day.reduce((a, b) => a + b);
  }).reduce((a, b) => a + b) * 20;
}
// console.log(starsIn20(stairs));


// binary arr to number
const binaryArrayToNumber = (arr) => {
  // return arr.reverse().map((number, index) => {
  //   return number * Math.pow(2, index);
  // }).reduce((a,b) => a + b);
  return parseInt(arr.join(''), 2);
}
// console.log(binaryArrayToNumber([1,0,1,1]));


const dutyFree = (normPrice, discount, hol) => {
  return Math.floor(hol / (normPrice * (discount / 100)));
}
// console.log(dutyFree(12, 50, 1000));


class Player {
  constructor(name) {
    this.name = name;
  }
}
let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));
const duckDuckGoose = (players, goose) => {
  const index = goose % players.length;
  return index === 0 ? players[players.length - 1].name : players[index - 1].name;
}
// console.log(duckDuckGoose(players, 30));


const evenNumbers = (array, number) => {
  return array.filter(number => number % 2 === 0).slice(-number);
}
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));


const highestRank = (arr) => {
  let obj = new Map();
  arr.forEach(number => {
    obj[number] ? obj[number]++ : obj[number] = 1;
  })

  let objArr = Object.values(obj).sort((a, b) => a - b);
  return Object.keys(obj).filter(key => obj[key] === Math.max(...objArr)).map(item => Number(item)).slice(-1)[0];
}
// console.log(highestRank([12, 10, 7, 12, 7, 6, 7, 10, 12, 10, 13]));


const duplicateEncode = (word) => {
  const charCount = new Map();
  word.toLowerCase().split('').forEach(letter => {
    charCount.set(letter, (charCount.get(letter) || 0) + 1);
  })
  return word.toLowerCase().split('').map(letter => {
    return charCount.get(letter) > 1 ? ')' : '(';
  }).join('');
}
// console.log(duplicateEncode('Success'));


function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return a.map(number => {
    if (vowels.includes(String.fromCharCode(number))) {
      return number = String.fromCharCode(number);
    } else {
      return number;
    }
  })
}
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));


function sayHello(name) {
  return `Hello, ${name}`;
}
// console.log(sayHello('Captain Kirk'));


const firstNonConsecutive = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] + 1) !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}
// console.log(firstNonConsecutive([1,2,3,4]));


const isUpperCase = (str) => {
  return str.split('').every((letter) => letter === letter.toUpperCase());
}
// console.log(isUpperCase('CaEF'));


String.prototype.isUpperCase = function () {
  return this.split('').every((letter) => letter === letter.toUpperCase());
}
// console.log(isUpperCase('CAEF'));


const removeCharacter = (string) => {
  return string.replace(/[!]/gi, '') + '!';
}
// console.log(removeCharacter('!Hi!!'));


const comp = (array1, array2) => {
  // if(array1 === null || array2 === null) {
  //   return false;
  // };

  // let arrOneMap = array1.sort((a,b) => a - b).map(number => number * number);
  // return JSON.stringify(arrOneMap) === JSON.stringify(array2.sort((a,b) => a - b));

  if (array1 == null || array2 == null) {
    return false;
  }

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  return array1.map(number => number * number).every((number, index) => number == array2[index]);

}
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));


const factorial = (n) => {
  // let arr = [];
  // for(let i = n; i > 0; i--) {
  //   arr.push(i);
  // }

  // if (n > 12 || n < 0) {
  //   throw new Error ('RangeError')
  // }

  // return n === 0 ? 1 : Array.from({length: n}, (v,k) => k + 1).reduce((a,b) => a * b);


  if (n > 12 || n < 0) throw new Error('RangeError');
  return n === 0 ? 1 : n * factorial(n - 1);
}
// console.log(factorial(5));

// l = width
// h = height
// w = depth


const getSize = (width, height, depth) => {
  return [(2 * width * depth) + (2 * width * height) + (2 * depth * height), width * height * depth];
}
// console.log(getSize(4, 2, 6));

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// console.log(("How can mirrors be real if our eyes aren't real").toJadenCase());


// const doubleChar = (str) => {
//   return str.split('').map(letter => {
//     return letter = `${letter}${letter}`;
//   }).join('');
// }

const doubleChar = (str) => str.split('').map(letter => letter + letter).join('');
// console.log(doubleChar('String'));


class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - (this.crew * 1.5) > 20;
  }
}

// const titanic = new Ship(15, 10);
// console.log(titanic.isWorthIt());


const filterString = (value) => {
  return parseInt(value.replace(/[^\d]/g, ''));
}
// console.log(filterString('a1b2c3'));


const powerOfTwo = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
// console.log(powerOfTwo(1));


const sumTriangularNumbers = (n) => {
  return n > 0 ? n * (n + 1) * (n + 2) / 6 : 0;
}
// console.log(sumTriangularNumbers(34));


const power = (base, exponent) => {
  let counter = 1;
  let arr = [];

  if (typeof base !== 'number') {
    return 1;
  }

  if (exponent > 0) {
    while (counter <= exponent) {
      counter++;
      arr.push(base)
    }
    return arr.reduce((a, b) => a * b);
  }

  if (exponent < 0) {
    while (counter <= exponent * -1) {
      counter++;
      arr.push(base);
    }
    return 1 / arr.reduce((a, b) => a * b);
  }
}
// console.log(power(x, 1));


const combat = (health, damage) => {
  return health < damage ? 0 : health - damage;
}
// console.log(combat(100, 5));


reverse = function (array) {
  return array.map(array.pop, [...array]);

  // let reverseArr = [];
  // for(let i = array.length - 1; i >= 0; i--) {
  //   reverseArr.push(array[i]);
  // }
  // return reverseArr;
}
// console.log(reverse([1,2,3]));


const sortGiftCode = (code) => {
  return code.split('').sort().join('');
}
// console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'));


const closeCompare = (a, b, margin) => {
  return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
}
// console.log(closeCompare(8.1, 5, 3));


const solveStr = (arr) => {
  // let answerArr = [];
  // for(let i = 0; i < arr.length; i++) {
  //   let counter = 0;
  //   arr.map(str => str.toLowerCase())[i].split('').forEach((letter, i) => {
  //     if(i + 1 === letter.charCodeAt(0) - 96) {
  //       counter++;
  //     }
  //   })
  //   answerArr.push(counter);
  // }
  // return answerArr;

  const alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(str => str.toLowerCase().split('').filter((letter, index) => index === alphabeth.indexOf(letter)).length);
}
// console.log(solveStr(["encode","abc","xyzD","ABmD"]));


const alphabetPosition = (text) => {
  return text.replace(/[^a-z]/gi, '').toLowerCase().split('').map(letter => letter = letter.charCodeAt(0) - 96).join(' ');
}
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// remove range of elements from array javascript
const removeRangeArray = (array, start, end) => {
  let deleteCount = end - start + 1;
  return array.splice(start, deleteCount);
}
// console.log(removeRangeArray([1,2,3,4,5,6,7,8,9,0], 2, 5));


const odds = (values) => {
  return values.filter(num => num % 2 !== 0);
}
// console.log(odds([1, 2, 3, 4, 5, 6]));


const vowelIndicies = (word) => {
  let answer = [];
  for (let i = 0; i < word.length; i++) {
    if (/[aeiouy]/i.test(word[i])) {
      answer.push(i + 1);
    }
  }
  return answer;
}
// console.log(vowelIndicies('apple'));


const all = (arr, fun) => {
  return arr.every(fun);
}
// console.log(all([1,2,3,4,5], function(v){return v<9}));


const gps = (s, x) => {
  let arr = [];
  for (let i = 0; i < x.length - 1; i++) {
    arr.push(3600 * (Math.round((x[i + 1] - x[i]) * 100) / 100) / s);
  }
  return x.length <= 1 ? 0 : Math.round(Math.max(...arr));
}
// console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));


const getRealFloor = (n) => {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
// console.log(getRealFloor(15));


const dashatize = (num) => {
  // if(num < 0) {
  //   num *= -1;
  // }

  // let str = '';
  // for(let i = 0; i < num.toString().length; i++) {
  //   if(parseInt(num.toString()[i]) % 2 !== 0) {
  //     str +=  '-'+num.toString()[i]+'-';
  //   } else {
  //     str += num.toString()[i];
  //   }
  // }

  // let arr = str.split('');
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] === '-' && arr[i] === arr[i + 1]) {
  //     arr.splice(i, 1);
  //   }
  //   if(arr[i] === '-' && i === 0) {
  //     arr.splice(i, 1);
  //   }
  //   if(arr[i] === '-' && i === arr.length - 1) {
  //     arr.splice(i, 1);
  //   }
  // }

  // return arr.join('');

  return String(num).replace(/([13579])/g, "-$1-").replace(/--+/g, "-").replace(/(^-|-$)/g, "");
}
// console.log(dashatize(-1));


const main = (verb, noun) => {
  return verb + noun;
}
// console.log(main('take ', 'item'));


// test if string contains multiple items
const countSmileys = (arr) => {
  // let counter = 0;
  // let filteredArr = arr.filter(item => /[)|D]/.test(item));
  // filteredArr.forEach(item => {
  //   if(item.length === 2 && /:|;/.test(item)) {
  //     counter++;
  //   }
  //   if(item.length === 3 && /-|~/.test(item)) {
  //       counter++;
  //   }
  // })
  // return counter;

  return arr.filter(item => /^[:;][-~]?[)D]$/.test(item)).length;
}
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));


const integrate = (coefficient, exponent) => {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}
// console.log(integrate(12, 5));


const isPythagoreanTriple = (integers) => {
  let [a, b, c] = integers.sort((a, b) => a - b);
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}
// console.log(isPythagoreanTriple([3, 4, 5]));


// remove duplicates from array
const distinct = (a) => {
  return [... new Set(a)];
}
// console.log(distinct([1,1,2]));


const spacify = (str) => {
  // return str.split('').map(item => item + ' ').join('').slice(0, -1);

  return str.split('').join(' ');
}
// console.log(spacify('hello world'));


const joinStrings = (string1, string2) => {
  return `${string1} ${string2}`
}
// console.log(joinStrings(134, 'testing'));


const stringClean = (s) => {
  return s.replace(/[0-9]/gi, '');
}
// console.log(stringClean('E3at m2e2!!'));


const automorphic = (n) => {
  return String(n * n).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
}
// console.log(automorphic(5));


const factorialTest = (n) => {
  if (n === 0) {
    return 1;
  }

  let products = [];
  for (let i = n; i > 0; i--) {
    products.push(i)
  }
  return products.reduce((a, b) => a * b);
}
// console.log(factorialTest(1));


function contamination(text, char) {
  // return text.length > 0 ? new Array(text.length + 1).join(char) : '';
  return char.repeat(text.length);
}
// console.log(contamination('asfasdf', '&'));


function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}
// console.log(nameShuffler('john McClane'));


const maxDiff = (list) => {
  return list.length > 0 ? Math.max(...list) - Math.min(...list) : 0;
}
// console.log(maxDiff([]));


const minArrVal = (arr, toReturn) => {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}
// console.log(minArrVal([1,2,3,4,5], 'value'));


function revrot(str, sz) {
  if (sz <= 0 || str.length === 0 || sz > str.length) {
    return "";
  }
  let arr = str.match(new RegExp('.{1,' + sz + '}', 'g'));
  let updatedArr = arr.map(item => {
    if (item.length === sz) {
      let testArr = [];
      for (let i = 0; i < item.length; i++) {
        testArr.push(Math.pow(parseInt(item[i]), 3));
      }
      if (testArr.reduce((a, b) => a + b) % 2 === 0) {
        return item.split('').reverse().join('');
      } else {
        return item.substring(1) + item[0];
      }
    }
  })
  return updatedArr.join('');
}
// console.log(revrot("563000655734469485", 4));


const validateCode = (code) => {
  return /^[1-3]/.test(code);
}
// console.log(validateCode(223));


const kebabize = (str) => {
  return str.split('').map((letter, index) => {
    if (/^[A-Z]/.test(letter) && index === 0) { return letter.toLowerCase(); }
    else if (/^[A-Z]/.test(letter) && index !== 0) { return '-' + letter.toLowerCase(); }
    else { return letter }
  }).join('').replace(/\d+/g, '');
}
// console.log(kebabize('MyCamelCased3String'));


function strong(n) {
  let arr = n.toString().split('');
  let mapArr = arr.map(num => {
    let rval = 1;
    for (let i = 1; i <= num; i++) {
      rval = rval * i;
    }
    return rval
  })
  return mapArr.reduce((a, b) => a + b) === n ? 'STRONG!!!!' : 'Not Strong !!';
}
// console.log(strong(145));


function alternateCase(s) {
  return s.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
}
// console.log(alternateCase('Hello World'));


function uefaEuro2016(teams, scores) {
  return scores[1] > scores[0] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` : scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}
// console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0]));


const reverseEveryOther = (str) => {
  return str.split(' ').map((word, index) => {
    if (index % 2 !== 0) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ').trim();
}
// console.log(reverseEveryOther("'  '"));


function tidyNumber(n) {
  return [...n + ''].sort().join('') == n;
}
// console.log(tidyNumber(2789));


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}
// const john = new Person('john', 34);
// console.log(john.info);

const calcNumerical = (x) => {
  let sum = n => [...n].reduce((a, b) => +a + +b);
  let totalOne = x.replace(/./g, x => x.charCodeAt(0));
  let totalTwo = totalOne.replace(/7/g, '1');
  return sum(totalOne) - sum(totalTwo);
}
// console.log(calcNumerical('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));


function typeOfSum(a, b) {
  let sum = a + b;
  return typeof sum;
}
// console.log(typeOfSum(true, 1));


Array.prototype.square = function () {
  return [...this].map(num => num * num)
}
Array.prototype.cube = function () {
  return [...this].map(num => num * num * num);
}
Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  return [...this].reduce((a, b) => a + b) / this.length;
}
Array.prototype.sum = function () {
  if (this.length === 0) return NaN;
  return [...this].reduce((a, b) => a + b);
}
Array.prototype.even = function () {
  return [...this].filter(num => num % 2 === 0);
}
Array.prototype.odd = function () {
  return [...this].filter(num => num % 2 !== 0);
}
// const numbers = [1, 2, 3];
// console.log(numbers.even());


// rotating a number based on index which is basically remove a number a specific index and add to the end
const maxRot = (n) => {
  let str = n.toString();
  let arr = [str];
  for (let i = 0; i <= str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    console.log
    arr.push(str.split().join());
  }
  return Math.max(...arr);
}
// console.log(maxRot(56789));


const minimumSteps = (numbers, value) => {
  let sorted = numbers.sort((a, b) => a - b);
  let sum = sorted[0];
  let counter = 0;
  for (let i = 1; i < sorted.length; i++) {
    if (sum < value) {
      sum += sorted[i];
      counter++
    }
  }
  return counter;
}
// console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464));


function cubeOdd(arr) {
  let allNumbers = arr.every(item => !isNaN(item));
  return allNumbers ? arr.filter(num => num % 2).reduce((a, b) => a + (Math.pow(b, 3)), 0) : undefined;
}
// console.log(cubeOdd([1, 2, 3, 4]));


const capitalizeIndex = (s, arr) => {
  let sArr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (sArr[arr[i]]) {
      sArr[arr[i]] = sArr[arr[i]].toUpperCase();
    }
  }
  return sArr.join('');
}
// console.log(capitalizeIndex("abcdef",[1,2,5]));


function overTheRoad(address, n) {
  return n * 2 - (address - 1);
}
// console.log(overTheRoad(3,3));


const findNb = (m) => {
  let n = 0;
  let v = 0;
  while (v < m) {
    n++;
    v += n * n * n;
  }
  return v != m ? -1 : n;
}
// console.log(findNb(1071225));


const vaporcode = (string) => {
  // let arr = string.split('').filter(letter => letter !== ' ');
  // return arr.map(letter => letter.toUpperCase() + '  ').join('').slice(0, -2);

  return string.toUpperCase().split(' ').join('').split('').join('  ');
}
// console.log(vaporcode("Lets go to the movies"));


function avgArray(arr) {
  // for(let i = 1; i < arr.length; i++) {
  //   let holderArr = arr[0];
  //   for(let j = 0; j < arr[i].length; j++) {
  //     holderArr[j] += arr[i][j]
  //   }
  //   return holderArr;
  // }

  const result = [];
  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
    }
    result.push(sum / arr.length);
  }
  return result;
}
// console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]));


function removeRotten(bagOfFruits) {
  return bagOfFruits ? bagOfFruits.map(fruit => fruit.replace(/rotten/, '').toLowerCase()) : [];
}
// console.log(removeRotten([]))


const numberToPower = (number, power) => {
  return power < 1 ? 1 : new Array(power).fill(number).reduce((a, b) => a * b);
}
// console.log(numberToPower(4, 1));

const nbDig = (n, d) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push((i * i).toString())
  }

  let counter = 0;
  let newArr = arr.join('').split('');
  newArr.forEach(letter => {
    if (letter == d.toString()) {
      counter++
    }
  })


  return counter;
}
// console.log(nbDig(5750, 0));


function switcheroo(x) {
  // return x.split('').map(letter => {
  //   if (letter === 'a') {
  //     return letter = 'b';
  //   } else if (letter === 'b') {
  //     return letter = 'a';
  //   } else {
  //     return letter;
  //   }
  // }).join('');


  return x.replace(/[ab]/g, letter => letter === 'a' ? 'b' : 'a');
}
// console.log(switcheroo('aaabcccbaaa'));

// remove n occurrences of character from string left to right
const removeExlamation = (s, n) => {
  for (let i = 0; i < n; i++) {
    s = s.replace('!', '');
  }
  return s;
}
// console.log(removeExlamation( "!!!Hi !!hi!!! !hi",5));


function multiplyAll(arr) {
  // return solve = (n) => {
  //   let answer = [];
  //   for(let i = 0; i < arr.length; i++) {
  //     answer.push(arr[i] * n);
  //   }
  //   return answer;
  // }

  return function (n) {
    return arr.map(num => num * n);
  }
}
// console.log(multiplyAll([1,2,3])(2));


// Test if string contains only numbers and is less than 10
function isDigit(s) {
  return s == parseFloat(s);
}
// console.log(isDigit("3-4"));


function sumCubes(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.map(num => num * num * num).reduce((a, b) => a + b);
}
// console.log(sumCubes(3));


const parseF = (s) => {
  return s == parseFloat(s) ? parseFloat(s) : null;
}
// console.log(parseF('NaN'));


const excludingVatPrice = (price) => {
  if (price === null) return -1;
  return Math.round(((price / 1.15) + Number.EPSILON) * 100) / 100;
}
// console.log(excludingVatPrice(230));


const findDigit = function (num, nth) {
  if (nth <= 0) return -1;
  let str = Math.abs(num).toString().split('');
  let index = nth - 1;
  return str.length > index ? str[nth - 1] : 0;

}
// console.log(findDigit(65, 0));


const explodeLetter = (s) => {
  return s.split('').map(num => {
    return num.repeat(parseInt(num));
  }).join('');
}
// console.log(explodeLetter('312'));


const binToDec = (bin) => {
  // return bin.split('').map(item => parseInt(item)).reverse().map((num, index) => {
  //   return num * Math.pow(2, index);
  // }).reduce((a,b) => a + b);

  return parseInt(bin, 2);
}
// console.log(binToDec('1001001'));



// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
const last = (x) => {
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
// console.log(last('x v q v'));


const evil = (n) => {
  return (n).toString(2).replace(/[0]/g, '').length % 2 === 0 ? "It's Evil!" : "It's Odious!";
}
// console.log(evil(42));


const slope = (points) => {
  let y = (points[3] - points[1]);
  let x = (points[2] - points[0]);

  if (x === 0) return 'undefined';

  return (y / x).toString();
}
// console.log(slope([-10,6,-10,3]));


const seven = (m) => {
  let counter = 0;
  while (m > 99) {
    m = Math.floor(m / 100) - 2 * (m % 10);
    console.log(m);
    counter++;
  }
  return [m, counter];
}
// console.log(seven(1603));


const sumOfMinimums = (arr) => {
  // let holder = [];
  // arr.forEach(array => {
  //   holder.push(Math.min(...array))
  // })
  // return holder.reduce((a,b) => a + b);

  return arr.reduce((a, b) => a + Math.min(...b), 0);
}
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));


// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
const squares = (x, n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(x);
    x *= x;
  }
  return arr;
}
// console.log(squares(2,5));

const outed = (meet, boss) => {
  meet[boss] = meet[boss] * 2;
  let sum = Object.values(meet).reduce((a, b) => a + b);
  let average = sum / Object.keys(meet).length;
  return average <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
// console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));


// Find left and right half of arr or str by looping
// Loop througha array backwards without i--
const balancedNumber = (number) => {
  const str = String(number);
  let leftTotal = 0;
  let rightTotal = 0;
  for (let i = 0; i < (str.length / 2) - 1; i++) {
    leftTotal += Number(str[i]);
    rightTotal += Number(str[str.length - 1 - i]);

    // use below to see how it works for backwards
    // console.log(str[str.length-1-i])
  }
  return leftTotal === rightTotal ? 'Balanced' : 'Not Balanced';
}
// console.log(balancedNumber(7225127225));


const templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
}
// console.log(templateStrings('Animals', 'Good'));


// Find all numbers in string and add together while keeping numbers in tact (4, 45, 82, et)
const sumOfIntegersInSTring = (s) => {
  // let arr = [];
  // s.replace(/[^0-9]/gi, ' ').split(' ').forEach(letter => {
  //   if(letter.length > 0) {
  //     arr.push(letter);
  //   }
  // });
  // return arr.length < 1 ? 0 : arr.map(letter => parseInt(letter))
  //           .reduce((a,b) => a + b);

  return s.replace(/[^0-9]/g, ' ').split(' ').reduce((a, b) => a + +b, 0)

}
// console.log(sumOfIntegersInSTring('test'));


const switcher = (x) => {
  const numbers = x.map(item => parseInt(item));
  const numOps = numbers.map(num => {
    if (num > 26) {
      if (num === 27) return '!';
      if (num === 28) return '?';
      if (num === 29) return ' ';
    } else {
      return String.fromCharCode(96 + (26 - num + 1))
    }
  });

  return numOps.join('');
}
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));


const cubeChecker = (volume, side) => {
  return Math.pow(side, 3) === volume && side > 0;
}
// console.log(cubeChecker(8, 3));


String.prototype.digit = function () {
  return /^\d$/.test(this);
};
// console.log('82'.digit());


const uniTotal = (string) => {
  return [...string].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}
// console.log(uniTotal('aaa'));


const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  return (blueStart - bluePulled) / ((blueStart + redStart) - (bluePulled + redPulled));
}
// console.log(guessBlue(5, 5, 2, 3));


// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript
// Figure out if number before and after is consecutive + 1 or - 1
const jumpingNumber = (n) => {
  let arr = n.toString().split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}
// console.log(jumpingNumber(967710));


const ensureQuestion = (s) => {
  return s.endsWith('?') ? s : `${s}?`;
}
// console.log(ensureQuestion('Yes'));


const validateUsr = (username) => {
  // return /^[a-z0-9_]{4,16}$/.test(username);
}
// console.log(validateUsr(''));


const sortMyString = (S) => {
  let even = S.split('').filter((value, index) => index % 2 === 0).join('');
  let odd = S.split('').filter((value, index) => index % 2 !== 0).join('');
  return even + ' ' + odd;
}
// console.log(sortMyString('CodeWars'));


const incrementer = (nums) => {
  return nums.map((num, index) => (num + index + 1) % 10);
}
// console.log(incrementer([3, 6, 9, 8, 9]));


const solutionPadded = (value) => {
  return "Value is " + value.toString().padStart(5, '0');
}
// console.log(solutionPadded(1204));


// class with extends keyword
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return this.name + ' meows.';
  }
}
const myCat = new Cat('Fee');
// console.log(myCat.speak());


// Remove all ending occurances of character from string
const removeFromEnd = (string) => {
  return string.replace(new RegExp('!' + '+$'), '');
}
// console.log(removeFromEnd('!Hi!!!'));


const pointsPer48 = (ppg, mpg) => {
  return ppg === 0 || mpg === 0 ? 0 : parseFloat((ppg * (48 / mpg)).toFixed(1));
}
// console.log(pointsPer48(0, 0));


Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((num) => !values_list.includes(num));
}
const l = new Array();
// console.log(l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));


const solutionSplit = (str) => {
  return (str + '_').match(/.{2}/g) || [];

  // let chunks = str.match(/.{1,2}/g) || [];
  // return chunks.map(chunk => {
  //   if(chunk.length === 2) {
  //     return chunk;
  //   } else {
  //     return chunk + '_';
  //   }
  // });
}
// console.log(solutionSplit('abcde'));


// Remove all occurances besides last occurance in array
const solveDuplicates = (arr) => {
  // let obj = {};
  // return arr.reverse().
  //            filter((num) => {
  //            obj[num] = (obj[num] || 0) + 1;
  //            return obj[num] <= 1;
  //            })
  //            .reverse();

  return arr.filter((num, index) => arr.lastIndexOf(num) === index);

}
// console.log(solveDuplicates([3, 4, 4, 3, 6, 3, 6]));


const longestVowelChain = (s) => {
  // s = s.replace(/[^aeiou]/ig, '_').split('_');
  // return Math.max(...(s.map(item => item.length)));

  return s.split(/[^aeiou]/).reduce((a, b) => Math.max(a, b.length), 0);
}
// console.log(longestVowelChain('codewarriors'));


const generateShape = (integer) => {
  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}
// console.log(generateShape(10));


const getOrder = (input) => {
  const arr = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
  let answerArr = [];
  for (let i = 0; i < arr.length; i++) {
    let match = input.match(new RegExp(arr[i], "g")) || [];
    if (input.match(new RegExp(arr[i], "g")) || [].length > 0) {
      answerArr.push(match.join(' '));
    }
  }
  return answerArr
    .join(' ')
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
}
// console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'));


const addSolve = (a, b) => {
  return a == b;
}
// console.log(addSolve('1', 1));


// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript
const calculate = (num1, operation, num2) => {
  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
    default:
      answer = null;
  }

  if (num1 === 0 || num2 === 0 && operation === '/') {
    answer = null;
  }


  return answer;
}
// console.log(calculate(3.2,"+", 8));


const multiplesFunction = (m, n) => {
  let arr = [];
  for (let i = 1; i < m + 1; i++) {
    arr.push(i * n);
  }
  return arr;
}
// console.log(multiplesFunction(3, 5));


const firstFunction = (arr, n) => {
  // return n < 1 ? [] : !n ? arr.slice(0, 1) : arr.slice(0, n);

  return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}
// console.log(firstFunction(['a', 'b', 'c', 'd', 'e']));


// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
const orderedCount = function (text) {
  // let obj = text.split('').reduce((a, b) => {
  //   a[b] = (a[b] || 0) + 1;
  //   return a;
  // }, {});

  // let arr = [];
  // for(let i = 0; i < text.length; i++) {
  //   arr.push(text[i]);
  // }

  // let filtered = arr.filter((item, index) => arr.indexOf(item) === index);

  // return filtered.map(item => {
  //   return [item, obj[item]];
  // });

  return Array.from(text.split('').reduce((a, b) => a.set(b, a.has(b) ? a.get(b) + 1 : 1), new Map()));
}
// console.log(orderedCount('233312'));


const upArrayTwo = (arr) => {
  if (arr.length === 0) return null;
  if (!arr.every(num => num < 10)) return null;
  if (!arr.every(num => num > -1)) return null;

  let bigNum = BigInt(arr.join('')) + BigInt(1);
  let newArr = bigNum.toString().split('').map(num => parseInt(num));

  if (arr.length === newArr.length) {
    return newArr;
  } else if (arr.length > newArr.length) {
    let diff = arr.length - newArr.length;
    for (let i = 0; i < diff; i++) {
      newArr.unshift(0);
    }
    return newArr;
  } else {
    return newArr;
  }
}
// console.log(upArrayTwo([1,2,1,0,-1]));


const datingRange = (age) => {
  let min;
  let max;

  if (age > 14) {
    min = (age / 2) + 7;
    max = (age - 7) * 2;
  }

  if (age <= 14) {
    min = age - .10 * age;
    max = age + .10 * age;
  }

  return Math.floor(min) + "-" + Math.floor(max);
}
// console.log(datingRange(17));

var ArrowFunc = function (arr) {
  return arr.map(num => String.fromCharCode(num)).join(''); //Complete this function
}
// console.log(ArrowFunc([84,101,115,116]));


// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
const solveCount = (s) => {
  let upperCase = s.match(/[A-Z]/g) || []
  let lowerCase = s.match(/[a-z]/g) || []
  let num = s.match(/[0-9]/g) || []
  let specialChar = s.match(/[^A-Z0-9]/gi) || []

  console.log(specialChar)

  return [upperCase.length, lowerCase.length, num.length, specialChar.length]
}
// console.log(solveCount('Codewars@codewars123.com'));


const boredom = (staff) => {
  const depMap = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  }

  const score = Object.keys(staff).reduce((a, b) => {
    return a + depMap[staff[b]];
  }, 0)

  return score <= 80 ? 'kill me now' : score > 80 && score < 100 ? 'i can handle this' : 'party time!!';
}
// console.log(boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }));


const swap = (string) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = string.split('');

  return arr.map(letter => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join('');
}
// console.log(swap('Hello World'));


const usdcny = (usd) => {
  const cny = (usd * 6.75).toFixed(2);
  return `${cny} Chinese Yuan`;
}
// console.log(usdcny(15));


const differenceOfSquares = (n) => {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  const squareOfSums = Math.pow(arr.reduce((a, b) => a + b), 2);
  const sumOfSquares = arr.map(num => {
    return num * num;
  }).reduce((a, b) => a + b);

  return squareOfSums - sumOfSquares;
}
// console.log(differenceOfSquares(5));


const splitInParts = (s, partLength) => {
  return s.match(new RegExp('.{1,' + partLength + '}', 'g')).join(' ');
}
// console.log(splitInParts("HelloKata", 2));


const disariumNumber = (n) => {
  let numArr = n.toString().split('').map(num => parseInt(num));

  let sum = numArr.map((num, index) => {
    return Math.pow(num, index + 1);
  })
    .reduce((a, b) => a + b);

  return sum === n ? 'Disarium !!' : 'Not !!';
}
// console.log(disariumNumber(89));


const encode = (str, n) => {
  // const strArr = str.split('').map(letter => letter.charCodeAt(0) - 96);
  // const nToArr = n.toString().split('').map(item => parseInt(item));
  // const numArr = [];
  // for(let i = 0; i < strArr.length; i++) {
  //   numArr.push(nToArr[i%nToArr.length]);
  // }
  // return strArr.map((num, index) => {
  //   return num + numArr[index]; 
  // });

  const key = String(n);
  return Array.from(str, (letter, index) => letter.charCodeAt(0) - 96 + Number(key[index % key.length]));
}
// console.log(encode('scout', 1939));


const typeValidation = (variable, type) => {
  return typeof variable == type;
}
// console.log(typeValidation(42, 'number'));


// Removing letters from string based on array 
const lastSurvivor = (letters, coords) => {
  for (let i = 0; i < coords.length; i++) {
    letters = letters.slice(0, coords[i]) + letters.slice(coords[i] + 1);
  }
  return letters;
}
// console.log(lastSurvivor('zbk', [0, 1]));


const stringMerge = (string1, string2, letter) => {
  return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
}
// console.log(stringMerge("person","here", "e"));


const toNato = (words) => {
  const OBJ = {
    'A': 'Alfa',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'Xray',
    'Y': 'Yankee',
    'Z': 'Zulu',
  };

  return words.split('').filter(item => item !== ' ').map(char => OBJ[char.toUpperCase()] || char).join(' ');
}
// console.log(toNato('If you can read!'));

const cutIt = (arr) => {
  let min = Math.min(...arr.map(x => x.length))
  return arr.map(item => item.slice(0, min));
}
// console.log(cutIt(["ab","cde","fgh"]));


// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript
// This is a good one. ReEx to replace char between two specific chars
const sevenAte9 = (str) => {
  return str.replace(/79(?=7)/g, '7');
}
// console.log(sevenAte9('789797'));


const mergeArraysThree = (a, b) => {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}
// console.log(mergeArraysThree([2, 4, 8], [2, 4, 6]));


// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
// Find noncommon chars between two strings and return one string with noncommon chars from both strings
const solveTwo = (a, b) => {
  return (a + b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
}
// console.log(solveTwo("xyabb","xzca"));


const evenAndOdds = (num) => {
  return num % 2 === 0 ? parseInt(num.toString(2)).toString() : num.toString(16);
}
// console.log(evenAndOdds(2));


const largestElements = (n, array) => {
  if (n === 0) return [];
  return array.sort((a, b) => a - b).slice(-n, array.length);
}
// console.log(largestElements(0, [7,6,5,4,3,2,1]));


// Finding length of arguments passed to function
function longestString() {
  return arguments.length;
}
// console.log(longestString('A', 'B', 'C'));


// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));


const wordValue = (a) => {
  return a.map((item, index) => item.replace(/\s/g, '')
    .split('')
    .map(letter => (letter.charCodeAt() - 96))
    .reduce((x, y) => (x += y), 0) * (index + 1));
}
// console.log(wordValue(["","abc abc","abc","abc"]));


const menFromBoys = (arr) => {
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}
// console.log(menFromBoys([2,43,90,95,90,37]));


const encodeVowel = (string) => {
  const vowels = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  }

  return string.split('').map(letter => {
    if (vowels.hasOwnProperty(letter)) {
      return vowels[letter].toString();
    } else {
      return letter;
    }
  }).join('');
}
// console.log(encodeVowel('hello'));

const decodeVowels = (string) => {
  const numbers = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
  }

  return string.split('').map(item => {
    if (numbers.hasOwnProperty(item)) {
      return numbers[item];
    } else {
      return item;
    }
  }).join('');
}
// console.log(decodeVowels('h2ll4'));


const sameClass = (a, b) => {
  if (!(/[a-zA-Z]/).test(a) || !(/[a-zA-Z]/).test(b)) return -1;
  let testA = null
  let testB = null;
  a === a.toUpperCase() ? testA = true : testA = false;
  b === b.toUpperCase() ? testB = true : testB = false;
  return testA === testB ? 1 : 0;
}

// console.log(sameClass('C', 'B'));


const sumOfDifferences = (arr) => {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
// console.log(sumOfDifferences([1, 2, 10]));


// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
const logicalCalc = (array, op) => {
  if (op === 'AND') return array.every(v => v);
  else if (op === 'OR') return array.some(v => v);
  else return !!array.reduce((s, v) => s ^ v);
}
// console.log(logicalCalc([false, true, true, false], "OR"));
// console.log(logicalCalc([true, true, true, false], "OR"));
// console.log(logicalCalc([true, true, true, false], "XOR"));



const sumOfN = (n) => {
  let arr = [];
  arr[0] = 0;
  for (let i = 1; i < Math.abs(n) + 1; i++) {
    if (n > 0) {
      arr[i] = arr[i - 1] + i;
    } else {
      arr[i] = arr[i - 1] - i;
    }
  }
  return arr;
}
// console.log(sumOfN(3));


const insertDash = (num) => {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
// console.log(insertDash(454793));


// Counting occurances of items in array
const mostFrequentItemCount = (collection) => {
  if (collection.length < 1) return 0;
  let obj = {};
  collection.forEach(num => {
    obj[num] = (obj[num] || 0) + 1;
  })
  return Math.max(...Object.values(obj));
}
// console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));


const containAllRots = (strng, arr) => {
  for (let i = 0; i < strng.length; i++) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
      return false;
    }
  }
  return true;
}
// console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));


const makeString = (s) => {
  return s.split(' ').map(word => word[0]).join('');
}
// console.log(makeString('sees eyes xray yoat'));


const checkThreeAndTwo = (array) => {
  let obj = {};
  array.forEach(char => {
    obj[char] = (obj[char] || 0) + 1;
  })
  return Object.values(obj).every(val => [2, 3].indexOf(val) > -1);
}
// console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));


// https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript
const consecutiveTest = (arr, a, b) => {
  // let testOne = [a,b].join('');
  // let testTwo = [b,a].join('');
  // let str = arr.join('');
  // return str.includes(testOne) || str.includes(testTwo);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a && arr[i + 1] === b) {
      return true;
    } else if (arr[i] === b && arr[i + 1] === a) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(consecutiveTest([1, -4, -5, 3, -2, 11, 23, -76, 6, -7, 2], 2, 3));


const meetingTest = (x) => {
  let test = x.indexOf('O');
  return test >= 0 ? test : 'None available!';
}
// console.log(meetingTest(['O', 'X', 'X']));


const compareStr = (s1, s2) => {
  let sum1 = 0;
  let sum2 = 0;
  if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
  if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';
  s1.toUpperCase().split('').map(letter => sum1 += letter.charCodeAt(0));
  s2.toUpperCase().split('').map(letter => sum2 += letter.charCodeAt(0));
  return sum1 === sum2;
}
// console.log(compareStr(null, "BC"));


const getASCII = (c) => {
  return c.charCodeAt(0);
}
// console.log(getASCII(' '));


const solutionHash = (pairs) => {
  let arr = [];
  for (key in pairs) {
    arr.push(`${key} = ${pairs[key]}`);
  }
  return arr.join(',');
}
// console.log(solutionHash({'a': 1, 'b': 2}));


const eachCons = (array, n) => {
  let answerArr = [];
  for (let i = 0; i < array.length; i++) {
    answerArr.push(array.slice(i, i + n));
  }
  return answerArr.filter(subArr => subArr.length === n);
}
// console.log(eachCons([3, 5, 8, 13], 2));


const removeVowels = (str) => {
  return str.replace(/[aeoiu]/g, '');
}
// console.log(removeVowels('drake'));


const getMinMax = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
}
// console.log(getMinMax([2,1]));


class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    if (this.lives === 0) {
      alert('Expect error already dead');
    } else if (this.number === n) {
      return true;
    }
    this.lives--;
    return false;
  }
}


const elevatorDistance = (array) => {
  let traveled = 0;
  for (let i = 0; i < array.length - 1; i++) {
    traveled += Math.abs(array[i] - array[i + 1]);
  }
  return traveled;
}
// console.log(elevatorDistance([7,1,7,1]));


const maxSequence = (arr) => {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
    sum = Math.max(sum, 0);
  }
  return max < 1 || max === -Infinity ? 0 : max;
}
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


const twoDecimal = (number) => {
  return Math.trunc(number * 100) / 100;
}
// console.log(twoDecimal(10.1289767789));


const isReallyNaN = (val) => {
  return Number.isNaN(val);
}
// console.log(isReallyNaN(NaN));


const shorterReverseLonger = (a, b) => {
  if (a.length >= b.length) return b + a.split('').reverse().join('') + b;
  if (a.length < b.length) return a + b.split('').reverse().join('') + a;

}
// console.log(shorterReverseLonger("first", "abcde"));


const filterLucky = (x) => {
  return x.filter(num => num.toString().indexOf('7') > -1);
}
// console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]));


const solveConsonants = (s) => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if ((/[aeiou]/).test(s[i])) {
      arr.push(s[i]);
    } else {
      arr.push(s[i].charCodeAt(0) - 96);
    }
  }
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (sum > 0) {
      result.push(sum);
      sum = 0;
    }
  }

  if (sum > 0) {
    result.push(sum);
  }

  return Math.max(...result);
}
// console.log(solveConsonants('zodiacs'));


const pairsSum = (ar) => {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      count++;
    }
  }
  return count;
}
// console.log(pairsSum([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));


const vowel2Index = (str) => {
  // return str.split('').map((letter, index) => {
  //   if((/[aeiou]/gi).test(letter)) {
  //     return index + 1;
  //   } else {
  //     return letter;
  //   }
  // }).join('');
  return str.replace(/[aeiou]/gi, (m, i) => i + 1);

}
// console.log(vowel2Index('this is my string'));


const makeBackronym = () => {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i < string.length - 1) {
      str += dict[string[i].toUpperCase()] + ' ';
    } else {
      str += dict[string[i].toUpperCase()];
    }
  }
  return str;
}
// console.log(makeBackronym());


class Solution {
  static main() {
    console.log("Hello World!");
  }
}


const addCallback = (n) => {
  return function (m) {
    return n + m;
  }
}
// console.log(addCallback(1)(3));


const calculateStr = (str) => {
  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}
// console.log(calculateStr('1minus2minus3minus4'));


const getMissingElement = (superImportantArray) => {
  for (let i = 0; i < 10; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    };
  };
}
// console.log(getMissingElement([0,5,1,3,2,9,7,6,4]));


const dirReduc = (arr) => {
  const opposite = {
    "NORTH": "SOUTH",
    "EAST": "WEST",
    "SOUTH": "NORTH",
    "WEST": "EAST"
  }
  return arr.reduce((result, direction) => {
    if (result[result.length - 1] === opposite[direction]) {
      result.pop();
    } else {
      result.push(direction);
    }
    return result;
  }, []);
};
// console.log(dirReduc(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]));


const aliasGen = (fName, sName) => {
  const firstName = { A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data' };
  const surname = { A: 'Analogue', C: 'Catalyst', P: 'Payload' };

  const first = fName[0].toUpperCase();
  const second = sName[0].toUpperCase();

  if (firstName[first] && surname[second]) {
    return firstName[first] + ' ' + surname[second];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
// console.log(aliasGen("Daisy", "Petrovic"));

var questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0
}];

const addToObjArr = () => {
  questions.forEach(question => {
    question.userAnswer = null;
  });
}
addToObjArr();
// console.log(questions);


const websites = new Array(1000).fill('codewars');
// console.log(websites);


const catMouse = (x) => {
  return x.indexOf('m') - x.indexOf('C') - 1 <= 3 ? 'Caught!' : 'Escaped!';
}
// console.log(catMouse("C....m"));


const discoverORiginalPrice = (discountedPrice, salePercentage) => {
  return Math.round(discountedPrice / (1 - salePercentage / 100) * 100) / 100;
}
// console.log(discoverORiginalPrice(373.85, 11.2));


const specialNumber = (n) => {
  return n.toString().match(/^[0-5]+$/) !== null ? "Special!!" : "NOT!!";
}
// console.log(specialNumber(2543));

const createDict = (keys, values) => {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      obj[keys[i]] = null;
    } else {
      obj[keys[i]] = values[i];
    }
  }
  return obj;
}
// console.log(createDict(['a', 'b', 'c','d'], [1, 2, 3]));


const avg = (a) => {
  return a.reduce((a, b) => a + b) / a.length;
}
// console.log(avg([0, 1, 2, 3, 4]));


const rot13 = (message) => {
  return message.split('').map(item => {
    if (item.match(/[A-Za-z]/gi)) {
      let charRot13 = item.toLowerCase().charCodeAt(0) + 13;
      if (charRot13 > 122) {
        charRot13 -= 26;
      }
      let letter = String.fromCharCode(charRot13);

      if (item.match(/[A-Z]/)) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    } else {
      return item;
    }
  }).join('');
}
// console.log(rot13('tesT'));


const flatten = (array) => {
  return array.flat();
}
// console.log(flatten([1, 2, 3, [4]]));


const averageAgain = (scores) => {
  return Math.round(scores.reduce((a, b) => a + b) / scores.length);
}
// console.log(averageAgain([90,98,89,100,100,86,94]));


const stantonMeasure = (a) => {
  let count = n => a.filter(num => num === n).length;
  return count(count(1));
}
// console.log(stantonMeasure([-9,1,5,1,2,1,-3,1,3,1,-11,1]));


// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript
const deepCount = (a) => {
  let counter = 0;
  let stack = [...a];

  while (stack.length > 0) {
    let item = stack.pop();

    if (Array.isArray(item)) {
      counter++;
      stack.push(...item);
    }
  }

  return a.flat(Infinity).length + counter;
}
// console.log(deepCount([]));


const reverseBits = (n) => {
  return parseInt(n.toString(2).split('').reverse().join(''), 2);
}
// console.log(reverseBits(417));


const lostSheep = (friday, saturday, total) => {
  return friday.concat(saturday).reduce((a, b) => a - b, total);
}
// console.log(lostSheep([3,1,2],[4,5],21));


const stringTransformer = (str) => {
  let backwards = str.split(' ').reverse().join(' ');

  return backwards.split('').map(item => {
    if (item === item.toUpperCase()) {
      return item.toLowerCase();
    } else if (item === item.toLowerCase()) {
      return item.toUpperCase();
    } else {
      return item;
    }
  }).join('')
}
// console.log(stringTransformer('Example String'));


const minimumNumber = (numbers) => {
  let sum = numbers.reduce((a, b) => a + b);
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = sum; i < Infinity; i++) {
    if (isPrime(i)) {
      return i - sum;
    }
  }

}
// console.log(minimumNumber([2,12,8,4,6]));


// https://www.codewars.com/kata/5613d06cee1e7da6d5000055/train/javascript
const step = (g, m, n) => {
  let arr = [];
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === g) {
        answer.push(arr[i], arr[j]);
      }
    }
  }
  return answer.length >= 2 ? answer.splice(0, 2) : null;
}
// console.log(step(2,100,110));


const evenLast = (numbers) => {
  if (numbers.length === 0) return 0
  return numbers.reduce((a, b, i) => i % 2 ? a : a + b) * numbers[numbers.length - 1];
}
// console.log(evenLast([2, 3, 4, 5]));


const arithmeticSequenceElements = (a, d, n) => {
  let arr = [];
  for (let i = a; arr.length < n; i += d) {
    arr.push(i);
  }

  return arr.join(', ');
}
// console.log(arithmeticSequenceElements(1, -3, 10));


const toTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}
// console.log(toTime(323500));


// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript
const abbreviate = (string) => {
  return string
    .split(/(?=\W)|(?<=\W)/)
    .map(item => {
      if (item.match(/[a-z]/gi) && item.length >= 4) {
        let count = item.length - 2;
        return item.slice(0, 1) + count + item.slice(-1);
      } else {
        return item;
      }
    })
    .join('');
}
// console.log(abbreviate('elephant-ride'));


const nextHappyYear = (year) => {
  year += 1;
  while (new Set(String(year)).size !== String(year).length) {
    year++;
  }
  return parseInt(Array.from(String(year), Number).join(''));
}
// console.log(nextHappyYear(7386));


const nicknameGenerator = (name) => {
  return name.length > 3 ? name.slice(0, 3 + 'aeiou'.includes(name[2])) : 'Error: Name too short';
}
// console.log(nicknameGenerator('Jimmy'));


const sortme = (names) => {
  return names.sort();
}
// console.log(sortme(['one', 'two', 'three' ]));


// DO THE ONE BELOW

// https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript


class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.replace(/^.*?_/, '').split('.', 2).join('.');
  }
}
// console.log(FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'));


const divisibleByThree = (str) => {
  return [...str].reduce((a, b) => a + b) % 3 === 0 ? true : false;
}
// console.log(divisibleByThree('123'));


const toLeetSpeak = (str) => {
  let obj = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2'
  }

  return str.split('').map(item => obj[item] || item).join('');

}
// console.log(toLeetSpeak('HELLO WORLD'));


const moveTen = (s) => {
  return s
    .split('')
    .map(item => {
      let charCode = item.charCodeAt(0);
      let forward = charCode + 10;
      if (forward < 123 && forward > 96) {
        return String.fromCharCode(forward)
      } else {
        let diff = forward - 123;
        return String.fromCharCode(97 + diff);
      }
    })
    .join('');
}
// console.log(moveTen('testcase'));


const longestWord = (stringOfWords) => {
  return stringOfWords.split(' ').reduceRight((a, b) => b.length > a.length ? b : a);
}
// console.log(longestWord('red blu grey'));




// GO BACK TO THE ONE BELOW


// https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript
const getStrings = (city) => {
  let cityChars = city.replace(/[^a-z]/gi, '').split('').map(item => item.toLowerCase()).join('');
  let count = {};

  cityChars.split('').forEach(item => {
    count[item] ? count[item]++ : count[item] = 1;
  })

  let str = '';


  for (key in count) {
    str += key + ':' + '*'.repeat(count[key]) + ','
  }

  return str.slice(0, -1);
}
// console.log(getStrings('Chicago'));


// https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript


const rank = (st, we, n) => {
  if (!st) return "No participants";

  let names = [];
  let stArr = st.split(',');

  for (let i = 0; i < stArr.length; i++) {
    let name = stArr[i];
    let nameScore = name
      .toLowerCase()
      .split('')
      .reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0) + name.length;
    let ranking = nameScore * we[i];
    names.push([name, ranking]);
  }

  names.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  })

  if (n > names.length || n < 1) {
    return "Not enough participants";
  }

  return names[n - 1][0];
}

// console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));


Math.roundNum = function (number) {
  let str = Math.abs(number).toString();
  let num = str.includes('.') ? parseFloat(str.split('.')[0]) : parseInt(str);
  let decimal = str.includes('.') ? parseFloat('0.' + str.split('.')[1]) : 0
  if (decimal >= .5) {
    num++;
  }
  return num;
};
// console.log(Math.roundNum(32218.522100335453));


Math.ceilNum = function (number) {
  let str = Math.abs(number).toString();
  let num = str.includes('.') ? parseFloat(str.split('.')[0]) : parseInt(str);
  let decimal = str.includes('.') ? parseFloat('0.' + str.split('.')[1]) : 0
  if (decimal > 0) {
    num++;
  }
  return num;
}
// console.log(Math.ceilNum(12.01));

Math.floorNum = function (number) {
  let str = Math.abs(number).toString();
  let num = str.includes('.') ? parseFloat(str.split('.')[0]) : parseInt(str);
  return num;
}
// console.log(Math.floorNum(12));


const vowelOne = (s) => {
  return s.replace(/[^aeiou]/gi, '0').replace(/[aeiou]/g, '1');
}
// console.log(vowelOne('123, arou'));


const doSort = (a) => {
  let num = a.filter(item => typeof item === 'number').sort((a, b) => a - b);
  let str = a.filter(item => typeof item === 'string').sort();
  return num.concat(str);
}
// console.log(doSort([ 2, 0, 2, 'Banana', 'Orange', 'Apple', 'Mango' ]));


const initializeNames = (name) => {
  let arr = name.split(' ');
  return arr.length > 2 ? arr.map((item, index) => {
    if (index === 0 || index === arr.length - 1) {
      return item;
    } else {
      return item.charAt(0) + '.';
    }
  }).join(' ') : name;
}
// console.log(initializeNames('Lois Mary Lane'));


const Ghost = function () {
  let colors = ['white', 'yellow', 'purple', 'red'];
  this.color = colors[Math.floor(Math.random() * colors.length)];
}
// const ghost = new Ghost();
// console.log(ghost.color);


// https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript
const unluckyDays = (year) => {
  let numberOfUnluckyDays = 0;
  for (let i = 0; i < 12; i++) {
    let dayNumber = new Date(year, i, 13).getDay();
    if (dayNumber === 5) {
      numberOfUnluckyDays++;
    }
  }
  return numberOfUnluckyDays;
}
// console.log(unluckyDays(2017));


const countDays = (d) => {
  let difference = Math.round((d.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  return difference > 0 ? difference + ' days' : difference < 0 ? 'The day is in the past!' : 'Today is the day!';
}
// console.log(countDays(new Date("December 9, 2024")));


String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
}
// console.log('a'.vowel());


const sorter = (textbooks) => {
  return textbooks.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0);
}
// console.log(sorter(['Algebra', 'history', 'Geometry', 'english']));


// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript
const spacey = (array) => {
  let string = '';
  return array.map(item => string += item);
}
// console.log(spacey(['kevin', 'has','no','space']));


const encryptThis = function (text) {
  let arr = text.split(' ');

  return arr.map(item => {
    let num = item.charCodeAt(0);
    let first = '';
    let last = '';
    let str = '';
    let answer = '';

    if (item.length <= 1) {
      answer += '';
    } else if (item.length <= 2) {
      last += item[item.length - 1];
      answer += last;
    } else if (item.length >= 3) {
      first += item[1];
      last += item[item.length - 1];
      str += item.slice(2, -1);
      answer += last + str + first;
    }

    return num + answer;
  }).join(' ');

}
// console.log(encryptThis('A wise old owl lived in an oak'));


const excryptThisPartTwo = function (text) {
  return text
    .split(' ')
    .map(item => {
      return item
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, item.charCodeAt(0));
    })
    .join(' ');
}
// console.log(excryptThisPartTwo('A wise old owl lived in an oak'));


const isLucky = (n) => {
  let sum = n
    .toString()
    .split('')
    .map(item => parseInt(item))
    .reduce((a, b) => a + b);

  return sum === 0 || n % 9 === 0 ? true : false;
}
// console.log(isLucky(1098));


// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript
const save = (sizes, hd) => {
  let test = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (test + sizes[i] > hd) {
      return i;
    }
    test += sizes[i];
  }

  return sizes.length;
}
// console.log(save([4, 4, 4, 3, 3], 11));


// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
const partlist = (arr) => {
  let combos = [];
  for (let i = 1; i < arr.length; i++) {
    let first = arr.slice(0, i).join(' ');
    let second = arr.slice(i, arr.length).join(' ');
    combos.push([first, second]);
  }
  return combos;
}
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));


const sum = (...args) => {
  return args.reduce((a, b) => a + b);
}
// console.log(sum(1, 2, 3));


function sumDupe() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum;
}
// console.log(sumDupe(1, 2, 3));


// const list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ]
const findAdmin = (list, lang) => {
  return list.filter(obj => obj.language === lang && obj.githubAdmin === 'yes');
}
// console.log(findAdmin(list1, 'JavaScript'));


const isNice = (arr) => {
  if (arr.length === 0) return false;
  let calcArr = [];
  for (let i = 0; i < arr.length; i++) {
    calcArr.push(arr[i] + 1, arr[i] - 1);
  }
  return arr.every(item => calcArr.includes(item));
}
// console.log(isNice([2,10,9,3]));


const multiplyByFive = (number) => {
  let n = number.toString().replace(/[^0-9]/g, '').length;
  return number * Math.pow(5, n);
}
// console.log(multiplyByFive(-2));


const prefill = (n, v) => {
  if (typeof n !== 'number' || typeof parseInt(n) !== 'number') throw new TypeError(`${n} is invalid`)
  return new Array(n).fill(v);
}
// console.log(prefill('0', 0));


const greetName = (name) => {
  return name ? 'hello ' + name + '!' : null;
}
// console.log(greetName(''));


const consecutiveTestTwo = (arr, a, b) => {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}
// console.log(consecutiveTestTwo([1, 4,  5,  3,  2, 7, 6, 23, 76, 11, 0], 2, 3));


const findAll = (array, n) => {
  let indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      indexes.push(i);
    }
  }
  return indexes;
}
// console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));



const catchSignChange = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i + 1] >= 0 || arr[i] >= 0 && arr[i + 1] < 0) {
      count++;
    }
  }
  return count;
}
// console.log(catchSignChange([1,-3,-4,0,5]));


const filterLongWords = (sentence, n) => {
  return sentence.split(' ').filter(word => word.length > n);
}
// console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));


const findDeletedNumber = (arr, mixArr) => {
  if (arr.length === mixArr.length) return 0;
  let sortedMixArr = mixArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedMixArr[i]) {
      return arr[i];
    }
  }
}
// console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));


const searchNames = (logins) => {
  return logins.filter(login => login[0].endsWith('_'));
}
// console.log(searchNames([[ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ]]));


// let obj = {};
//   return arr.filter(function(x) {
//     obj[x] = (obj[x] || 0) + 1;
//     return obj[x] <= n;
//   })

const sumNoDuplicates = (numList) => {
  return numList.reduce((a, b) => numList.indexOf(b) === numList.lastIndexOf(b) ? a + b : a, 0);
}
// console.log(sumNoDuplicates([1, 1, 2, 3]));


const countLettersAndDigits = (input) => {
  return input.replace(/[^a-z\d]/gi, "").length;
}
// console.log(countLettersAndDigits("T?"));


// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
function isDivisible(...args) {
  const [first, ...rest] = args;
  return rest.every(arg => first % arg === 0);
}
// console.log(isDivisible(3,3,4));


const tripleX = (str) => {
  // return str.indexOf('x') > -1 && str.indexOf('x') === str.indexOf('xxx');
  return /^[^x]*xxx/.test(str);
}
// console.log(tripleX('abraxxxas'));


const bingo = (a) => {
  let bingo = ['B', 'I', 'N', 'G', 'O'];
  let letters = a.map(num => {
    return String.fromCharCode(64 + num);
  })

  return bingo.every(v => letters.includes(v)) ? "WIN" : "LOSE";
}
// console.log(bingo([21,13,2,7,5,14,7,15,9,10]));


const consecutive = (array) => {
  let sorted = array.sort((a, b) => a - b);
  let arrFull = [];
  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    arrFull.push(i);
  }
  return arrFull.length - array.length;
}
// console.log(consecutive([4, 8, 6]));

const alternate = (n, firstValue, secondValue) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i % 2 === 0 ? firstValue : secondValue);
  }
  return arr;
}
// console.log(alternate(5, true, false));


Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function numberOfOccurrences(element) {
    return this.filter(num => num === element).length;
  }
});
const arr = [0, 1, 2, 2, 3]
// console.log(arr.numberOfOccurrences(2));


const consonantCount = (str) => {
  return str
    .split('')
    .filter(letter => letter.match(/[a-z]/gi))
    .filter(letter => !letter.match(/[aeiou]/gi))
    .length;
}
// console.log(consonantCount('TestIng'));


const removeParentheses = (s) => {
  let regex = /\([^()]*\)/g;
  while (s.match(regex)) {
    s = s.replace(regex, '');
  }
  return s;
}
// console.log(removeParentheses('(first group) (second group) (third group)'));


const incrementString = (strng) => {
  let num = strng.match(/\d+$/);
  if (num !== null) {
    let increment = (parseInt(num[0], 10) + 1).toString();
    let newNum = increment.padStart(num[0].length, '0');
    let newString = strng.replace(/\d+$/, '');
    return newString + newNum;
  } else {
    return strng + '1';
  }

}
// console.log(incrementString('foobar'));


const getAges = (sum, difference) => {
  if (sum < 0 || difference < 0) return null;
  let older = ((sum - difference) / 2) + difference;
  let younger = ((sum - difference) / 2);
  return older < 0 || younger < 0 ? null : [older, younger];
}
// console.log(getAges(63,-14));


// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
const bingoLottery = (ticket, win) => {
  let miniWins = 0;
  for (let i = 0; i < ticket.length; i++) {
    let nums = ticket[i][0].split('').map(letter => letter.charCodeAt(0));
    nums.forEach(number => {
      if (number === ticket[i][1]) {
        miniWins++;
      }
    })
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}
// console.log(bingoLottery([['PR',80], ['HURCP',74], ['AAHC',70], ['MT',81], ['VSNAV',86], ['LVKSIV',86], ['FF',72], ['NKTBCP',86], ['KGKK',83], ['ZUB',82]], 4));


const productQsandEx = (string) => {
  let exclimationMarks = s.split('!').length - 1;
  let questionMarks = s.split('?').length - 1;
  return exclimationMarks * questionMarks;
}
// console.log(productQsandEx('!!?'));


const arrCheck = value => value.every(item => Array.isArray(item));
// console.log(arrCheck([[1],[2]]));


// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
const solveOrder = (arr) => {
  let highToLow = arr.sort((a, b) => b - a);
  let sorted = [];

  let a = 0;
  let b = highToLow.length - 1;

  while (sorted.length < highToLow.length) {
    sorted.push(highToLow[a]);
    if (a !== b) {
      sorted.push(highToLow[b]);
    }
    a++;
    b--;
  }

  return sorted;
}
// console.log(solveOrder([52, 77, 72, 44, 74, 76, 40]));


const bandNameGenerator = (str) => {
  if (str[0] === str[str.length - 1]) {
    return str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1);
  } else {
    return "The " + str.charAt(0).toUpperCase() + str.slice(1);
  }
}
// console.log(bandNameGenerator('art'));


const findScreenHeight = (width, ratio) => {
  let divide = ratio.split(":", 1)[0] * 1;
  let multiply = ratio.split(":", 2)[1] * 1;
  let height = Math.trunc((width / divide) * multiply);

  return `${width}x${height}`;
}
// console.log(findScreenHeight(1024, "4:3"));


const numObj = (s) => {
  let arr = [];
  s.forEach(item => {
    let obj = {};
    obj[item] = String.fromCharCode(item);
    arr.push(obj);
  })
  return arr;
}
// console.log(numObj([118, 117, 120]));


const rainAmount = (mm) => {
  if (mm < 40) {
    return "You need to give your plant " + (40 - mm) + "mm of water"
  } else {
    return "Your plant has had more than enough water for today!"
  };
}
// console.log(rainAmount(39));


const flickSwitch = (arr) => {
  // let boolean = true;
  // let answer = [];
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] === 'flick') {
  //     boolean = !boolean;
  //   }
  //   answer.push(boolean);
  // }
  // return answer;

  let boolean = true;
  return arr.map(item => {
    if (item === 'flick') {
      return boolean = !boolean;
    } else {
      return boolean;
    }
  })
}
// console.log(flickSwitch(["codewars", "flick", "code", "wars"]));


// let answer = {};
//   string.split('').forEach(letter => {
//     answer[letter] ? answer[letter]++ : answer[letter] = 1;
//   })
//   return answer;


// Counting occurnaces and replacing with count and seperator
const freqSeq = (str, sep) => {
  return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
}
// console.log(freqSeq('hello world', '-'));


const broken = (x) => {
  return x.split('').map(item => item === '1' ? '0' : '1').join('');
}
// console.log(broken("10000000101101111110011001000"));


const timeCorrect = (timestring) => {
  if (!timestring) return timestring;
  if (!/^(\d\d:){2}\d\d$/.test(timestring)) return null;
  return (new Date(0, 0, 0, ...timestring.split(':'))).toString().slice(16, 24);
}
// console.log(timeCorrect('14:59:94'));


const decipherThis = (str) => {
  let arr = str.split(' ')
    .map(item => item.split(/(?<=\d)(?=\D)/))
    .map(item => [String.fromCharCode(parseInt(item[0])), item[1] ? item[1].length > 1 ? item[1].charAt(item[1].length - 1) + item[1].slice(1, -1) + item[1].charAt(0) : item[1] : ''].join(''));
  return arr.join(' ');
}
// console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));


const gordon = (a) => {
  return a.split(' ')
    .map(word => word.toUpperCase()
      .replace(/A/g, '@')
      .replace(/[EIOU]/g, '*') + "!!!!").join(' ');
}
// console.log(gordon('ji lc ba wiqkbnkiex babzgoca kdxwetej akvikfxx'));


String.prototype.isLetter = function () {
  return /^[a-zA-Z]$/.test(this);
}
// console.log('A'.isLetter());


const autocomplete = (input, dictionary) => {
  let lowerCaseInput = input.toLowerCase().replace(/[^a-zA-Z]/g, '');
  let answer = [];
  for (let i = 0; i < dictionary.length; i++) {
    let lowerCaseWord = dictionary[i].toLowerCase();
    if (lowerCaseWord.startsWith(lowerCaseInput) && answer.length < 5) {
      answer.push(dictionary[i]);
    }
  }
  return answer;
}
// console.log(autocomplete('n~!@#$%^&*()_+1234567890ope', ['Nopesville', 'Green', 'Narnia']));


const stripComments = (text, markers) => {
  return text.split('\n')
    .map(str => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join('\n');
}
// console.log(stripComments(' TO@^-a#GDksOaZq PXJx', ["@", "$", "/", "\\", "!", "%", "-", "+"]));


const twoHeighest = (arr) => {
  return [...new Set(arr.sort((a, b) => b - a))].slice(0, 2);
}
// console.log(twoHeighest([15, 20, 20, 17]));

const sixToast = (num) => {
  return Math.abs(num - 6);
}
// console.log(sixToast(17));


const reduce = (fraction) => {
  let gcd = function gcd(a,b) {
    return b ? gcd(b, a % b) : a;
  }

  gcd = gcd(fraction[0], fraction[1]);
  return [fraction[0] / gcd, fraction[1] / gcd];
}
// console.log(reduce([60, 20]));


const countZeros = (n) => {
  let counter = 0;
  for(let i = 1; i <= n; i++) {
    let str = i.toString();
    if (str.includes('0')) {
      str.split('').forEach(item => {
        if(item === '0') {
          counter++;
        }
      })
    }
  }
  // return counter;
}
// console.log(countZeros(200));


const findUnique = (numbers) => {
  return numbers.reduce((a,b) => a ^ b);
}
// console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]));


// https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript
const tacofy = (word) => {
  const dict = {
    a: 'beef',
    e: 'beef',
    i: 'beef',
    o: 'beef',
    u: 'beef',
    t: 'tomato',
    l: 'lettuce',
    c: 'cheese',
    g: 'guacamole',
    s: 'salsa'
  }
  return ['shell', ...[...word].map(char => dict[char.toLowerCase()]).filter(char => char), 'shell'];
}
// console.log(tacofy('asdf'));



const fireFight = (s) => {
  return s.replace(/Fire/g, '~~');
}
// console.log(fireFight('Mast Deck Engine Water Fire'));


// remove n occurnace of char from string that are in array javascript
const removeChars = (str, what) => {
  for(let key in what) {
    let count = 0;
    for(let i = 1; i <= what[key]; i++) {
      str = str.replace(key, '');
    }
  }
  return str;
}
// console.log(removeChars('this is a string',{'t':1, 'i':2}));


// https://www.codewars.com/kata/58587905ed1b4dad6e0000c6/train/javascript
class SmartTrafficLight {
  constructor(st1, st2) {
    this.st1 = st1;
    this.st2 = st2;

    if(this.st1[0] === this.st2[0]) {
      this.st1[0] = 0;
      this.st2[0] = 0;
    }
  }

  turngreen() {
    if(this.st1[0] === 0 && this.st2[0] === 0) {
      return null;
    }
    if(this.st1[0] > this.st2[0]) {
      this.st1[0] = 0;
      return this.st1[1];
    }
    if(this.st2[0] > this.st1[0]) {
      this.st2[0] = 0;
      return this.st2[1];
    }
    this.st1[0] = 0;
    this.st2[0] = 0;
    return null;
  }
}
const streets = new SmartTrafficLight([42, '27th ave'], [72, '3rd st']);
// console.log(streets.turngreen());


const arrayDiffTest = (a, b) => {
  return a.filter(num => !b.includes(num));
}
// console.log(arrayDiffTest([1,2,3], [1,2]));


const toFreud = (string) => {
  // return  string.split(' ').map(word => word = 'sex').join(' ');
  return string.replace(/[^ ]+/g, 'sex');
}
// console.log(toFreud('This is a test'));


const findChildren = (dancingBrigade) => {
  // let obj = {};
  // for(const char of dancingBrigade) {
  //   const lowerChar = char.toLowerCase();
  //   if(!obj[lowerChar]) {
  //     obj[lowerChar] = [];
  //   }
  //   obj[lowerChar].push(char);
  // }
  // return Object.values(obj).map(arr => arr.sort().join('')).sort().join('');

  return dancingBrigade.split('').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a)).join('');
}
// console.log(findChildren('beeeEBb'));


// THE FIRST BELOW IS NOT SUBMITTED BECAUSE KATA NOT PUBLISHED
// SECOND IS A TOUGH ONE!!

// https://www.codewars.com/kata/5926d7494b2b1843780001e6/train/javascript
function addFunc(...n) {
  return n.reduce((a,b) => a + b, 0);
}
// console.log(addFunc(1, 2, 3));


// https://www.codewars.com/kata/592915cc1fad49252f000006/train/javascript
const noIfsNoButs = (a, b) => {
  let test = a > b
  switch(test) {
    case true:
      return `${a} is greater than ${b}`
    default:
      return 'no'
  }
}
// console.log(noIfsNoButs(3, 2));


const roundToFive = (numbers) => {
  return numbers.map(num => Math.round(num / 5) * 5);
}
// console.log(roundToFive([34.5, 56.2, 11, 13]));

const changeObj = {
  'penny': 0.01,
  'nickel': 0.05,
  'dime': 0.10,
  'quarter': 0.25,
  'dollar': 1.00
}
const changeCount = (change) => {
  return change
    .split(' ')
    .map(coin => changeObj[coin])
    .reduce((a, b) => a + b)
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
}
// console.log(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'));


const solveDominant = (arr) => {
  let count = arr.length;
  let dominant = [];
  while (count >= 1) {
    if(arr[0] === Math.max(...arr) && !dominant.includes(arr[0])) {
      dominant.push(arr[0]);
    }
    arr.shift();
    count--;
    console.log(arr.length)
  }
  return dominant;
}
// console.log(solveDominant([16,17,14,3,14,5,2]));


const trickyDoubles = (n) => {
  const str = n.toString();
  const middle = str.length / 2;
  const first = str.slice(0, middle);
  const second = str.slice(middle);

  let answer = 0;
  if(first === second) {
    answer += n;
  } else {
    answer += n * 2;
  }

  return answer;
}
// console.log(trickyDoubles(8));


const noBoringZeros = (n) => {
  if(n === 0) return 0;
  let str = n.toString();
  while(str.endsWith('0')) {
    str = str.slice(0, -1);
  }
  return parseInt(str);
}
// console.log(noBoringZeros(0))


const isZeroBalanced = (n) => {
  if(n.length === 0) return false;
  let answer = true;
  for(let i = 0; i < n.length; i++) {
    if(!n.includes(n[i] * -1)) {
      answer = false;
    }
  }
  if(n.reduce((a,b) => a + b) !== 0) {
    answer = false;
  }
  return answer;
}
// console.log(isZeroBalanced([1,-1,2,-2]));


const monkeyCount = (n) => {
  return Array.from({length: n}, (_, i) => i + 1);
}
// console.log(monkeyCount(5));


// https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript
const replaceNth = (text, n, oldValue, newValue) => {
  let counter = 1;
  return text.split('').map(char => {
    if(char === oldValue) {
      if(counter === n) {
        counter = 1;
        return newValue;
      } else {
        counter++;
        return char;
      }
    } else {
      return char;
    }
  }).join('');
}
// console.log(replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'));


// raise number to another number without Math.pow()
const powerRaised = (x, y) => {
  return x**y;
}
// console.log(powerRaised(1, 701270));


// https://www.codewars.com/kata/58311faba317216aad000168/train/javascript
const printNums = (...args) => {
  let strArr = args.map(num => num.toString());
  const maxLength = Math.max(...strArr.map(str => str.length));
  return strArr.map(item => {
    if(item.length === maxLength) {
      return item;
    } else {
      let count = maxLength - item.length;
      let zeros = '0'.repeat(count);
      return zeros + item;
    }
  }).join('\n')
}
// console.log(printNums(1, 12, 34));


const solutionCount = (fullText, searchText) => {
  return (fullText.match(new RegExp(searchText, 'g')) || []).length;
}
// console.log(solutionCount('abbcbb','bb'));


// Removing non duplciates from array
const duplicates = (arr) => {
  // const obj = {};
  // const dupes = [];
  // let arrUpdate = arr.map(item => typeof item === 'string' ? 'num-' + item : item);
  // arrUpdate.forEach(num => {
  //   if(obj[num] && !dupes.includes(num)) {
  //     dupes.push(num);
  //   } else {
  //     obj[num] = true;
  //   }
  // })
  // return dupes.map(item => typeof item === 'string' && item.includes('num-') ? item.replace('num-', '') : item);

  return [...new Set(arr.filter((num, idx) => idx !== arr.indexOf(num)))];

}
// console.log(duplicates([1, 2, 1, 3, 2, 1, 2, 1, '3']));


const wordSearch = (query, seq) => {
  const filter = seq.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  return filter.length ? filter : ['Empty'];
}
// console.log(wordSearch("t", ["za", "ab", "abc", "zab", "zbc"]));


const numberJoy = (n) => {
  const sum = [...n.toString()].map(item => parseInt(item)).reduce((a,b) => a + b);
  const rev = parseInt(`${sum}`.split('').reverse().join(''));
  return sum * rev === n;
}
// console.log(numberJoy(1729));


const $dict = {
  E: 1,
  A: 1,
  I: 1,
  O: 1,
  N: 1,
  R: 1,
  T: 1,
  L: 1,
  S: 1,
  U: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}
const scrabbleScore = (str) => {
  return str.toUpperCase().split('').reduce((a,b) => a + ($dict[b] || 0), 0);
}
// console.log(scrabbleScore('quirky'));


const divisibleBy = (numbers, divisor) => {
  return numbers.filter(num => num % divisor === 0);
}
// console.log(divisibleBy([1,2,3,4,5,6], 2));


const arrayPlusArray = (arr1, arr2) => arr1.reduce((a,b) => a + b) + arr2.reduce((a,b) => a + b);
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));


const encodeSwitch = (str) => {
  return str.split('').map(item => {
    if(/^[a-zA-Z]+$/.test(item)) {
      return item.toLowerCase().charCodeAt(0) - 96;
    } else {
      return item;
    }
  }).join('');
}
// console.log(encodeSwitch('ABCD'));


const solveDivision = (x, y) => x / y;
// console.log(solveDivision(2, 1));


const capMe = (names) => {
  return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}
// console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));

const friendsArrObj = [
  { username: 'David', status: 'online', lastActivity: 10 },
  { username: 'Lucy', status: 'online', lastActivity: 0 },
  { username: 'Bob', status: 'online', lastActivity: 3 },
  { username: 'Julie', status: 'offline', lastActivity: 104 },
  { username: 'Lenny', status: 'online', lastActivity: 38 }
]

const whosOnline = (friends) => {
  if(friends.length === 0) return {};
  let obj = {
  };
  friends.map(friend => {
    if(friend.status === 'online' && friend.lastActivity < 11) {
      if(!obj.hasOwnProperty('online')) {
        obj['online'] = [friend.username]
      } else {
        obj['online'].push(friend.username);
      }
    }
    if(friend.status === 'offline') {
      if(!obj.hasOwnProperty('offline')) {
        obj['offline'] = [friend.username]
      } else {
        obj['offline'].push(friend.username);
      }
    }
    if(friend.status === 'online' && friend.lastActivity > 10) {
      if(!obj.hasOwnProperty('away')) {
        obj['away'] = [friend.username]
      } else {
        obj['away'].push(friend.username);
      }
    } 
  })
  return obj;
}
// console.log(whosOnline(friendsArrObj));


const anyArrows = (arrows) => {
  return arrows.some(arrow => !("damaged" in arrow) || arrow.damaged == false);
}
// console.log(anyArrows([ { damaged: true },
//   { damaged: true },
//   { damaged: true },
//   { damaged: true },
//   { damaged: true },
//   { damaged: false },
//   { damaged: true },
//   { damaged: true },
//   { damaged: true },
//   { damaged: false },
//   { damaged: true },
//   { damaged: true },
//   { damaged: true } ]));


const tailSwap = (arr) => {
  // let first = arr[0].slice(0, arr[0].indexOf(':')) + arr[1].slice(arr[1].indexOf(':'));
  // let second = arr[1].slice(0, arr[1].indexOf(':')) + arr[0].slice(arr[0].indexOf(':'));
  // return [first, second];
  let arrSplit = arr.map(str => str.split(':'));
  return [arrSplit[0][0] + ":" + arrSplit[1][1], arrSplit[1][0] + ":" + arrSplit[0][1]];
}
// console.log(tailSwap(['abc:123', 'cde:456']));


// https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript
const prevMultOfThree = (n) => {
  if(n % 3 === 0) return n;
  let str = n.toString();
  for(let i = str.length; i >= 0; i--) {
    str = str.slice(0, i)
    if(parseInt(str) % 3 === 0) {
      return parseInt(str);
    }
  }
  return null;
}
// console.log(prevMultOfThree(1244));


const heron = (a, b, c) => {
  let s = [a,b,c].reduce((a,b) => a + b) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
// console.log(heron(3, 4, 5));


const evenChars = (string) => {
  return string.length < 2 || string.length > 100 ? 'invalid string' : [...string].filter((char, index) => index % 2);
}
// console.log(evenChars('abcdefghijklm'));


const scrollingText = (text) => {
  let arr = [];
  for(let i = 0; i < text.length; i++) {
    arr.push((text.slice(i) + text.slice(0, i)).toUpperCase());
  }
  return arr;
}
// console.log(scrollingText('codewars'));


// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
function lastElement() {
  const args = arguments;
  const last = args[args.length - 1];
  
  if(typeof last === 'string') {
    return last[last.length - 1];
  }

  if(typeof last === 'array') {
    return last;
  }
}
// console.log(lastElement([1], [2], [3]));


const calculateTip = (amount, rating) => {
  if(rating.toLowerCase() === 'excellent') return Math.ceil(amount * .20);
  if(rating.toLowerCase() === 'great') return Math.ceil(amount * .15);
  if(rating.toLowerCase() === 'good') return Math.ceil(amount * .10);
  if(rating.toLowerCase() === 'poor') return Math.ceil(amount * .05);
  if(rating.toLowerCase() === 'terrible') return 0;
  return "Rating not recognised";

}
// console.log(calculateTip(30, "poor"));


const dotCalculator = (equation) => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '//': (a, b) => a / b,
  }
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
}
// console.log(dotCalculator('..... + ..'));

const evenOrOddCalc = (str) => {
  const even = str.split('').map(x => parseInt(x)).filter(num => num % 2 === 0).reduce((a,b) => a + b);
  const odd = str.split('').map(x => parseInt(x)).filter(num => num % 2 !== 0).reduce((a,b) => a + b);
  return even === odd ? 'Even and Odd are the same' : even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even';
}
// console.log(evenOrOddCalc('121'))


const hammingWeight = (x) => {
  let bin = '';
  while (x > 0) {
    bin = (x % 2) + bin;
    x = Math.floor(x / 2);
  }
  return bin.replace(/[^1]/g, '').length;
}
// console.log(hammingWeight(21));


const convertBits = (a, b) => {
  return (a ^ b).toString(2).replace(/0/g, "").length;   
}
// console.log(convertBits(31, 14));


const checkVowel = (string, position) => {
  if(position >= string.length || position < 0) return false;
  return /[aeiou]/i.test(string[position]);
}
// console.log(checkVowel('cat', 4));


const unscrambleEggs = (word) => {
  return word.replace(/egg/g, '');
}
// console.log(unscrambleEggs("Beggegeggineggneggeregg"));


// Big numbers
const addBigNumbers = (a, b) => {
  let max = a.length > b.length ? a : a.length === b.length ? a : b;
  let min = a.length < b.length ? a : a.length === b.length ? b : b;;
  
  if(max.length !== min.length) {
    let diff = max.length - min.length;
    min = '0'.repeat(diff) + min
  }

  let carrier = false;
  let string = '';
  for(let i = max.length - 1; i >= 0; i--) {
    let add = parseInt(max[i]) + parseInt(min[i]);
    
    if(carrier) {
      add += 1;
      carrier = false;
    }

    if(add > 9) {
      add -= 10;
      carrier = true;
    }

    string += add;

    if(i === 0 && carrier) {
      string += 1;
    }
  }

  return string.split('').reverse().join('');
}
// console.log(addBigNumbers("888", "822"));


const solveDiff = (a) => {
  let even = a.filter(x => x % 2 === 0);
  let odd = a.filter(x => x % 2 !== 0 && typeof x === 'number');
  return even.length - odd.length;
}
// console.log(solveDiff([ 0, 1, 2, 3, 'a', 'b' ]));


const sillycase = (silly) => {
  const middle = Math.round(silly.length / 2);
  return silly.slice(0, middle).toLowerCase() + silly.slice(middle, silly.length).toUpperCase();
}
// console.log(sillycase('testing'));


const reverseWordsAgain = (str) => {
  return str.split(' ').reverse().join(' ');
}
// console.log(reverseWordsAgain("yoda doesn't speak like this"));


const alphabetWarAgain = (fight) => {
  const leftMap = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  }

  const rightMap = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }

  let left = 0;
  let right = 0;

  const arr = fight.split('');

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== '*' && arr[i + 1] !== '*' && arr[i - 1] !== '*') {
      if(leftMap.hasOwnProperty(arr[i])) {
        left += leftMap[arr[i]];
      }

      if(rightMap.hasOwnProperty(arr[i])) {
        right += rightMap[arr[i]];
      }
    }
  }


  return left > right ? "Left side wins!" : right > left ? "Right side wins!" : "Let's fight again!";
}
// console.log(alphabetWarAgain('zz*zz'))


const validSpacing = (s) => {
  return s[0] === " " || s[s.length - 1] === " " || s.includes("  ") ? false : true;
}
// console.log(validSpacing("Hello  world"));


const numCombo = (arr, num) => {
  const combos = [];
  for(let i = 0; i < arr.length; i++) {
    const combo = [];
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        combo.push(arr[j])
      }
    }
    combos.push(combo.reduce((a,b) => a + b));
  }
  return combos.filter(x => x === num).length;
}
// console.log(numCombo([5, 0, 0, 2], 7));


const accumTwo = (s) => {
  let mumble = '';
  for(let i = 0; i < s.length; i++) {
    let holder = '';
    holder += s[i].toLowerCase().repeat(i + 1) + '-';
    mumble += holder.charAt(0).toUpperCase() + holder.slice(1);
  }
  return mumble.slice(0, -1);
}
// console.log(accumTwo('ZpglnRxqenU'));


const none = (arr, fun) => {
  return !arr.some(fun);
}
// console.log(none([0, 1,  2, 3, 5, 8, 13],function(item){ return item < 9}));


const dominator = (arr) => {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  const maxKey = parseInt(Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b));
  const maxVal = Math.max(...Object.values(obj)); 
  return maxVal > arr.length / 2 ? maxKey : -1;
}
// console.log(dominator([3,4,3,2,3,1,3,3]));


const scoreboard = (string) => {
  const obj = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'nil': 0
  }
  const arr = string.split(' ');
  console.log(arr)
  let score = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in obj) {
      score.push(obj[arr[i]])
    }
  }
  return score;
}
// console.log(scoreboard('The score is nil four'));


const borrow = (s) => {
  return s.toLowerCase().replace(/\s/g, '').replace(/[^\w]/g, '');
}
// console.log(borrow('WhAt! FiCK! DaMn CAke?'));


const reject = (array, predicate) => {
  return array.filter(item => !predicate(item));
}
// console.log(reject(['a', 'b', 3, 'd'], x => typeof x === 'string'));


const neutralise = (s1, s2) => {
  let results = '';
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] === '+' && s2[i] === '+') {
      results += '+';
    } else if (s1[i] === '-' && s2[i] === '-') {
      results += '-';
    } else {
      results += '0';
    }
  }
  return results;
}
// console.log(neutralise("-+-+-+", "-+-+-+"));


const arrowArea = (a,b) => {
  return (a * 0.5) * (b * 0.5);
}
// console.log(arrowArea(4, 2));


const scramble = (str, arr) => {
  const strArr = str.split('');
  for(let i = 0; i < arr.length; i++) {
    strArr[arr[i]] = str[i]
  }
  return strArr.join('');
}
// console.log(scramble('abcd', [0, 3, 1, 2]));


const encodeCipher = (plaintext) => {
  let arr = plaintext.split('').map(item => {
    if (/^[a-zA-Z]/.test(item)) {
      if((item.toLowerCase().charCodeAt(0) - 97) % 2 === 0) {
        return '0';
      } else {
        return '1'
      }
    } else {
      return item;
    }
  })
  return arr.join('');
}
// console.log(encodeCipher("Hello World!"));


// https://www.codewars.com/kata/5889a8b335de69cc620000c8/train/javascript
const swapDiagonals = (matrix) => {
  let counter = matrix[0].length - 1;
  for (let i = 0; i < matrix.length; i++) {
    let temp = matrix[i][i];
    matrix[i][i] = matrix[i][counter];
    matrix[i][counter] = temp;
    counter--;
  }
  return matrix;
} 
// console.log(swapDiagonals([
// [389,548,568,346,926,941],
// [798,299,203,145,933,656],
// [270,891,865,732,707,154],
// [778,821,458,262,432,669],
// [568,446,129,238,549,799],
// [651,349,253,877,424,690]
// ]));


const toCsvText = (array) => {
  return array.join('\n');
}
// console.log(toCsvText([
//   [ 0, 1, 2, 3, 45 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
// ]))


const missingWord = (nums, str) => {
  nums.sort((a,b) => a - b);
  const strNew = str.toLowerCase().replace(/[' ']/g, '');
  let word = '';
  for (let i = 0; i < nums.length; i++) {
    if (strNew.length > nums[i]) {
      word += strNew.charAt(nums[i]);
    } else {
      word = 'No mission today';
      break;
    }
  }
  return word;
}
// console.log(missingWord([6,5,9], "Zn  jYIk  gOa "));


const sentencify = (words) => {
  return words.join(' ').charAt(0).toUpperCase() + words.join(' ').substr(1) + ".";
}
// console.log(sentencify(["i", "am", "an", "AI"]));


const splitBill = (x) => {
  let xSpent = Object.keys(x);
  let friends = xSpent.length;
  let average = Object.values(x).reduce((a,b) => a + b) / friends
  for(let key in x) {
    let indAvg = x[key] - average;
    console.log(indAvg)
    if(indAvg % 1 === 0) {
      x[key] = indAvg;
    } else {
      x[key] = indAvg.toFixed(2) * 1;
    }
  }
  return x;
}
// console.log(splitBill({A:40,B:25,C:10,D:153,E:58}));


const circleArea = (radius) => {
  if(radius < 1) throw new TypeError('ERROR');
  return parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(3));
}
// console.log(circleArea(1));


const loopArr = (arr, direction, steps) => {
  if(direction === 'right') {
    return arr.splice(-steps).concat(arr);
  } else {
    return arr.splice(steps).concat(arr);
  }
}
// console.log(loopArr([1, 5, 87, 45, 8, 0], 'right', 2));



const orderFood = (list) => {
  let foodOptions = {};
  list.forEach(guest => {
    foodOptions[guest.meal] ? foodOptions[guest.meal]++ : foodOptions[guest.meal] = 1;
  })
  return foodOptions;
}
// console.log(orderFood([
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ]));

function add(x) {
  return x + 10;	
}

function mult(x) {
  return x * 30;
}

function chain(input, fs) {
  let result = input;
  for(let i = 0; i < fs.length; i++) {
    result = fs[i](result);
  }
  return result;
}
// console.log(chain(2, [add, mult]));


const solveStones = (stones) => {
  let remove = 0;
  for (let i = 0; i < stones.length; i++) {
    if(stones[i] === stones[i + 1]) {
      remove++;
    }
  }
  return remove;
}
// console.log(solveStones("GBRGGRBBBBRRGGGB"));


String.prototype.toAlternatingCase = function() {
  return this.split('').map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('');
}
// console.log("Hello World".toAlternatingCase());


const divisors = (integer) => {
    let answer = [];
    for(let i = 2; i < integer; i++) {
      let divide = integer / i;
      if(divide % 1 === 0) {
        answer.push(i);
      }
    }
    return answer.length > 0 ? answer : `${integer} is prime`;
}
// console.log(divisors(2));


// https://www.codewars.com/kata/671fd30696d3f42285f7d1f1/train/javascript
const window = (length, offset, list) => {
  let newList = [];
  const limit = length > 0 ? list.length : list.length + 1;
  for(let i = 0; i < limit; i += offset) {
    newList.push(list.slice(i, i + length));
  }
  return newList.filter(x => x.length === length);
}
// console.log(window(0,2,[0]));


const binaryToString = (binary) => {
  return binary.substr(2).split('0b').map(char => {
    return String.fromCharCode(parseInt(char, 2));
  }).join('');
}
// console.log(binaryToString('0b10000110b11000010b1110100'));


// https://www.codewars.com/kata/67757660c552a3a7ef9aaceb/train/javascript
const validateBase = (num, base) => {
  return num.split('').every(x => {
    const digit = /\d/.test(x) ? parseInt(x) : x.charCodeAt(0) - 55;
    return digit < base;
  })  
}
// console.log(validateBase('ABCDEF', 16));


const generatePairs = (n) => {
  let pairs = [];
  for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= n; j++) {
      if(i <= j) {
        pairs.push([i, j])
      }
    }
  }
  return pairs;
}
// console.log(generatePairs(2));


const oneTest = (arr, fun) => {
  return arr.filter(x => fun(x)).length === 1;
}
// console.log(oneTest([1,2,3,4,5], function(item){ return item<2}));


// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
const findUniqueStr = (arr) => {
  let obj = {};
  const sorted = arr.map((str, index) => [[...new Set(str.toLowerCase())].sort().join(''), index]);
  sorted.forEach(item => {
    obj[item[0]] = (obj[item[0]] || 0) + 1;
  })
  return arr[sorted.filter(item => item[0] === Object.keys(obj).find(key => obj[key] === 1))[0][1]];
}
// console.log(findUniqueStr([ 'silvia', 'vasili', 'victor' ]));


const leastLarger = (a, i) => {
  return a.indexOf(Math.min(...a.filter(x => x > a[i])));
}
// console.log(leastLarger([2, 1, 3, 5, 6], 0));


const toCamelCase = (str) => {
  return str
            .replace(/[-_]/g, ' ')
            .split(' ')
            .map((word, index) => index === 0 ? word : word.split('')[0].toUpperCase() + word.substr(1))
            .join('');
}
// console.log(toCamelCase('the_stealth-warrior'));


const allNonConsecutive = (arr) => {
  let nonConsecutive = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 !== arr[i + 1]) {
      nonConsecutive.push({'i': i + 1, 'n': arr[i + 1]});
    }
  }
  return nonConsecutive;
}
// console.log(allNonConsecutive([-5,-3,-2,0,1,2,3,4,6,7,8,10]));


const countMe = (data) => {
  if(!(/^\d+$/.test(data))) return '';
  let counter = 1;
  let holder = [];
  for(let i = 0; i < data.length; i++) {
    if(data[i] === data[i + 1]) {
      counter++;
      continue;
    }
    holder.push(counter + data[i]);
    counter = 1;
  }
  return holder.join('');
}
// console.log(countMe('99774'));


const digitsAdd = (num) => {
  let arr = num.toString().split('').map(x => parseInt(x));
  let answer = [];
  for(let i = 0; i < arr.length - 1; i++) {
    let holder = arr.slice(i + 1, arr.length);
    holder.forEach(num => {
      answer.push(arr[i] + num);
    })
  }
  return answer;
}
// console.log(digitsAdd(81596));


const locateTest = (arr, value) => {
  return arr.flat(Infinity).some(x => x === value);
}
// console.log(locateTest(['a','b',['c','d',['e']]] , 'e'));


const reverseIt = (data) => {
  if(typeof data === 'string') return data.split('').reverse().join('');  
  if(typeof data === 'number') return data.toString().split('').reverse().join('') * 1;
  return data;
}
// console.log(reverseIt(743.9129036011566));


const direction = (facing, turn) => {
  const compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const rotate = Math.floor(turn / 45);
  const facingIdx = compass.indexOf(facing);
  const finalFacingIdx = (facingIdx + rotate) % compass.length;
  return finalFacingIdx < 0 ? compass[compass.length - Math.abs(finalFacingIdx)] : compass[finalFacingIdx];
}
// console.log(direction("S", 450));


const randomCase = (x) => {
  return x.split('').map(char => {
    const random = Math.round(Math.random());
    if(random === 1) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}
// console.log(randomCase('THIS IS AN ALL CAPS STRING'));


const whoIsPaying = (name) => {
  return name.length < 3 ? [name] : [name, name.substr(0, 2)];
}
// console.log(whoIsPaying('Melissa'));


const getConsecutiveItems = (items, key) => {
  if(typeof items === 'number') items = items.toString();
  if(typeof key === 'number') key = key.toString();
  if(!items.includes(key)) return 0;
  
  const arr = items.match(/(.)\1*/g)
                    .filter(x => x.includes(key))
                    .map(x => x.length);
  return Math.max(...arr);
}
// console.log(getConsecutiveItems(9000, 1));


const findHack = (arr) => {
  const grades = { 'A': 30, 'B': 20, 'C': 10, 'D': 5, 'F': 0 };
  let hacked = [];
  for(let i = 0; i < arr.length; i++) {
    let score = arr[i][2].map(grade => grades.hasOwnProperty(grade) ? grades[grade] : 0);
    if(score.length >= 5 && score.every(grade => grade >= 20)) {
      score.push(20);
    }
    score = score.reduce((a,b) => a + b);
    if(arr[i][1] > 200) {
      hacked.push(arr[i][0]);
    } else if(arr[i][1] <= 200 && score <= 200 && arr[i][1] !== score) {
      hacked.push(arr[i][0]);
    }
  }
  return hacked;
}
// console.log(findHack(
//   [
//     [ 'Jack Brown', 75, [ 'B', 'D', 'D', 'B', 'F', 'D' ] ],
//     [ 'Doe Lawrence', 80, [ 'E', 'H', 'A', 'A' ] ],
//     [ 'Kabin Brown', 300, [ 'B', 'B', 'B', 'A' ] ],
//     [ 'Bill Black', 50, [ 'E', 'B', 'E', 'C', 'E' ] ],
//     [ 'Bill Webb', 30, [ 'B', 'D', 'G', 'D', 'F' ] ],
//     [ 'John Brown', 35, [ 'A', 'E', 'F', 'E', 'D' ] ],
//     [ 'Jane Bradley', 45, [ 'E', 'E', 'C', 'D', 'C' ] ],
//     [ 'Jane Bradley', 20, [ 'C', 'H', 'H', 'C', 'F' ] ],
//     [ 'Doe Brown', 300, [ 'B', 'C', 'E', 'A' ] ],
//     [ 'Jack Bradley', 20, [ 'G', 'F', 'E', 'H' ] ]
//   ]
// ));


const  capitalsFirst = (str) => {
  const arr = str.split(' ');
  const upper = arr.filter(x => x[0].match(/[A-Z]/)).join(' ');
  const lower = arr.filter(x => x[0].match(/[a-z]/)).join(' ');
  return upper + ' ' + lower;
}
// console.log(capitalsFirst("hey You, #Sort me Already! 123"));


const minMinMax = (array) => {
  let min = Math.min(...array);
  while(array.includes(min)) {
    min++;
  }
  return [Math.min(...array), min, Math.max(...array)];
}
// console.log(minMinMax([-2, -10, -9,  4, -10,  -1,  6, 16]));


const crossover = (c1, c2, idx) => {
  const c11 = c1.substring(0, idx);
  const c12 = c1.substring(idx, c1.length);
  const c21 = c2.substring(0, idx);
  const c22 = c2.substring(idx, c2.length);

  return [c11 + c22, c21 + c12];
}
// console.log(crossover("111000", "000110", 3));


const michaelPays = (costs) => {
  const cost3rd = costs / 3;
  if(costs < 5) return parseFloat(costs.toFixed(2));
  if(cost3rd >= 10) return parseFloat((costs - 10).toFixed(2));
  return parseFloat((costs - cost3rd).toFixed(2));
 }
// console.log(michaelPays(5.9181));


const searchBeans = (budget, prices) => {
  return prices.filter(x => x <= budget)
                .sort((a,b) => a - b)
                .join(',');
}
// console.log(searchBeans(3, [6, 1, 2, 9, 2]));


const sumSquares = (l) => {
  return l.flat(Infinity)
          .map((x => x * x))
          .reduce((a,b) => a + b);
}
// console.log(sumSquares([1,[[3],10,5,[2,[3],[4],[5,[6]]]],[10]]));


const alphaSeq = (str) => {
  let sorted = str.split('').map(x => x.toLowerCase()).sort();
  let seq = [];
  sorted.forEach(letter => {
    let n = letter.charCodeAt(0) - 96;
    seq.push(letter.repeat(n));
  })
  return seq.map(item => item[0].toUpperCase() + item.substring(1)).join(',');
}
// console.log(alphaSeq('ZpglnRxqenU'));


const maxedOut = (arr) => {
  const arrSum = arr.map(x => Math.pow(x, 3)).reduce((a,b) => a + b);
  const test = arrSum <= Number.MAX_SAFE_INTEGER ? arrSum : "You've pushed me to the max!";
  return test;
}
// console.log(maxedOut([208063.830683574,6.19992349116331]));


const arrayInfo = (arr) => {
  if(arr.length === 0) return 'Nothing in the array!';

  const length = arr.length;
  const int = arr.filter(x => typeof x === 'number' && Number.isInteger(x)).length;
  const float = arr.filter(x => typeof x === 'number' && !Number.isInteger(x)).length;
  const str = arr.filter(x => typeof x === 'string' && x !== ' ').length;
  const wtsp = arr.filter(x => x === ' ').length;

  return [[length], [int], [float], [str], [wtsp]].map(x => x.map(num => num === 0 ? null : num));

}
// console.log(arrayInfo([1,2,3.33,4,5.01,'bass','kick']));


const makesTheSentence = (characterArray, sentenceString) => {
  let charObj = {};
  let stObj = {};

  characterArray.forEach(x => {
    if(sentenceString.includes(x)) {
      charObj[x] = (charObj[x] || 0) + 1;
    }
  })

  sentenceString.split('').filter(x => x !== ' ').forEach(x => {
    stObj[x] = (stObj[x] || 0) + 1;
  })
  
  const sorted = (x) => {
    return Object.keys(x).sort().reduce((obj, key) => {
      obj[key] = x[key];
      return obj;
    }, {});
  }

  return JSON.stringify(sorted(charObj)) === JSON.stringify(sorted(stObj));
}
// console.log(makesTheSentence(['a', 'f', 'r', 'k', 's', 'e', 'u', 'I', 'a', 'o', 'c', '!', 't', 'e'], "I ate four cakes!"));


const dataPerson = {
  firstName: "John",
  lastName: "Smith",
  interests: "sport"
};
const createTemplate = (template) => {
  const createString = (dataPerson) => {
    let arr = template.split(' ');  
    return arr.map(x => {
      if(x.includes('{{') && x.includes('}}')) {
        let key = x.replace(/{{|}}/g, '');
        return dataPerson[key] ? dataPerson[key] : '';
      } else {
        return x;
      }
    }).join(' ');
  }
  return createString;
}
// console.log(createTemplate('{{firstName}} {{lastName}} likes {{interests}}'));


// Array.prototype.first = function() {
//   return this[0]
// }

// Array.prototype.last = function() {
//   return this[this.length - 1]
// }

// console.log([2,5,7,3,4].first());
// console.log([2,5,7,3,4].last());


const top3 = (products, amounts, prices) => {
  let rev = [];
  for(let i = 0; i < amounts.length; i++) {
    rev.push([amounts[i] * prices[i], products[i]]);
  }

  rev.sort((a,b) => b[0] - a[0])

  let answer = [];
  for(let i = 0; i < 3; i++) {
    answer.push(rev[i][1]);
  }
  return answer;
}
// console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]));


const calculateString = (string) => {
  let arr = string.match(/\d+|loses|gains/g);
  return arr[1] === 'loses' ?  parseInt(arr[0]) - parseInt(arr[2]) : parseInt(arr[0]) + parseInt(arr[2]);
}
// console.log(calculateString("Panda has 48 apples and loses 4"));


const zublansNightmare = (functionName) => {
  let str = '';
  for(let i = 0; i < functionName.length; i++) {
    if(functionName[i - 1] === '_') {
      str += functionName[i].toUpperCase();
    } else {
      str += functionName[i];
    }
  }
  return str.replace(/[_]/g, '');
}
// console.log(zublansNightmare('camel_case'));


const distancesFromAverage = (arr) => {
  const avg = arr.reduce((a,b) => a + b) / arr.length;
  return arr.map(x => +(avg - x).toFixed(2));
}
// console.log(distancesFromAverage([55, 95, 62, 36, 48]));


const totalAmountVisible = (topNum, numOfSides) => {
  const sides = (numOfSides + 1) - topNum;
  let answer = 0;
  for(let i = 1; i <= numOfSides; i++) {
    if(i !== sides) {
      answer += i;
    }
  }
  return answer;
}
// console.log(totalAmountVisible(3, 6));


const sumMatrix = (matrix) => {
  let counter = matrix.length - 1;
  let sum = 0;
  for(let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
    sum += matrix[i][counter];
    counter--;
  }

  return sum;
}
// console.log(sumMatrix([[1,2,3,4], [4,5,6,5], [7,8,9,7], [3,6,5,8]]));


const padIt = (str, n) => {
  let i = 0;
  while(i < n) {
    if(i % 2 === 0) {
      str = "*" + str;
    } else {
      str += "*";
    }
    i++;
  }
  return str;
}
// console.log(padIt("a", 5));


const validParentheses = (parenStr) => {
  while(parenStr.includes('()')) {
    parenStr = parenStr.replace('()', '');
  }
  return parenStr.length === 0;
}
// console.log(validParentheses('()(())'));


const repeats = (arr) => arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a,b) => a + b);
// console.log(repeats([4,5,7,5,4,8]));


var sing = function() {
  let beers;
  if(arguments[0] > 199) {
    beers = 200;
  } else if(arguments[0]) {
    beers = arguments[0];
  } else {
    beers = 99
  }
  let arr = [];
  for(let i = beers; i > 0; i--) {
    if(i === 1) {
      arr.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
      arr.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
      arr.push('No more bottles of beer on the wall, no more bottles of beer.')
      arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
    } else if(i === 2) {
      arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
      arr.push(`Take one down and pass it around, ${i - 1} bottle of beer on the wall.`)
    } else {
      arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
      arr.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`)
    }
  }

  return arr
}
// console.log(sing(99));


const process2Arrays = (arr1, arr2) => {
  let matching = arr1.filter(x => arr2.includes(x));
  let leftOver1 = arr1.filter(x => !matching.includes(x));
  let leftOver2 = arr2.filter(x => !matching.includes(x));
  let leftOver = [...leftOver1, ...leftOver2];
  return [matching.length, leftOver.length, leftOver1.length, leftOver2.length];
}
// console.log(process2Arrays([1, 2 ,3,4, 5 ,6 ,7 ,8 ,9], [2, 4, 6, 8, 10, 12, 14]));


const oracle = (gestures) => {
  let rock = gestures.filter(x => x === 'scissors').length - gestures.filter(x => x === 'paper').length;
  let paper = gestures.filter(x => x === 'rock').length - gestures.filter(x => x === 'scissors').length;
  let scissors = gestures.filter(x => x === 'paper').length - gestures.filter(x => x === 'rock').length;;

  const scores = { rock, paper, scissors };
  const values = Object.values(scores)

  const tie = values.every(x => x === values[0]);

  return tie ? 'tie' : Object.keys(scores).filter(key => scores[key] > 0).join('/');
}
// console.log(oracle([
//   'paper', 'paper',
//   'paper', 'scissors',
//   'paper', 'rock',
//   'rock'
// ]));



const arrangeString = (strng) => {
  let arranged = [];
  let arr = strng.split(' ');
  let i = 0;
  while(arr.length > 0) {
    if(arr.length === 1) {
      arranged.push(arr[0]);
      break;
    }
    if(i % 2 === 0) {
      if(arr[0].length <= arr[1].length) {
        arranged.push(arr.shift());
      } else {
        arranged.push(arr.splice(1,1)[0]);
      }
    } else {
      if(arr[0].length >= arr[1].length) {
        arranged.push(arr.shift());
      } else {
        arranged.push(arr.splice(1,1)[0]);
      }
    }
    
    i++;
  }
  return arranged.map((x, i) => {
    if(i % 2 === 0) {
      return x.toLowerCase();
    } else {
      return x.toUpperCase();
    }
  }).join(' ');
}
// console.log(arrangeString("on I came up were so grandmothers"));


const multiTableTen = (number) => {
  let str = '';
  for(let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${i * number} ${i < 10 ? '\n' : ''}`
  }
  return str;
}
// console.log(multiTableTen(5));


// let trueIfEven = function(v, i) { return v % 2 === 0; }
// let neverTrue = function(v, i) { return false; }
// let trueIfValueEqualsIndex = function(v, i) { return v === i; }
// let trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }
const findInArray = (array, iterator) => {
  for(let i = 0; i < array.length; i++) {
    if(iterator(array[i], i) === true) {
      return i;
    }
  }
  return -1;
}
// console.log(findInArray([1,1,0,7,6,7,3,3,9], trueIfValueEqualsIndex));


const setReducerTwo = (input) => {
  const reduced = (arr) => {
    let reducer = [];
    let group = [arr[0]];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] === arr[i - 1]) {
        group.push(arr[i]);
      } else {
        reducer.push(group.length);
        group = [arr[i]];
      }
    }
    reducer.push(group.length);
    return reducer;
  }

  let answer = reduced(input)
  
  while(answer.length !== 1) {
    answer = reduced(answer);
  }

  return answer[0];
}
// console.log(setReducerTwo([0, 4, 6, 8, 8, 8, 5, 5, 7]));


// const wordList = [
//   'advance',        'advantage',   'advice',
//   'advise',      'affair',         'affect',      'afford',
//   'afraid',      'after',          'afternoon',   'afterwards',
//   'again',       'against',        'age',         'agency',
//   'agent',       'ago',            'agree',       'agreement',
//   'ahead',       'aid',            'aim',         'air',
//   'aircraft',    'all', 'background', 'photograph', 'sccssfl', "strength",
//   'understand'
// ];
const wantedWords = (n, m, forbid_let) => {
  let list = [];
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for(let i = 0; i < wordList.length; i++) {
    if(!forbid_let.some(x => wordList[i].includes(x))) {
      let vowels = wordList[i].match(/[aeiou]/gi);
      let vLength = vowels !== null ? vowels.length : 0;

      let consonants = wordList[i].match(/[^aeiou]/gi);
      let cLength = consonants !== null ? consonants.length : 0;

      if(vLength === n && cLength === m) {
        list.push(wordList[i]);
      }
    }
  }

  return list;
}
// console.log(wantedWords(1, 7, ["m", "y"]));


// const functionTrue = () => { return 'Hello' };
// const functionFalse = () => { return 'Howdy' };
const _if = (bool, func1, func2) => {
  return Boolean(bool) ? func1() : func2();
}
// console.log(_if(true, functionTrue, functionFalse));


const palindromeChaineLength = (n) => {
  const isPalindrome = (x) => {
    let str = x.toString();
    return str === str.split('').reverse().join('');
  }

  let sum = n;
  let counter = 0;

  while(isPalindrome(sum) === false) {
    let forward = sum;
    let reverse = parseInt(sum.toString().split('').reverse().join('')); 
    sum = forward + reverse;
    counter++;
  }

  return counter;
}
// console.log(palindromeChaineLength(89));


function HTMLGen () {}
['a', 'b', 'p', 'body', 'div', 'span', 'title'].forEach(tag => {
  HTMLGen.prototype[tag] = function(content) {
    return `<${tag}>${content}</${tag}>`
  }
})
HTMLGen.prototype.comment = function(content) {
  return `<!--${content}-->`
}
const g = new HTMLGen();
const paragraph = g.p('Hello, World!');
// console.log(g.comment(paragraph));




// https://www.codewars.com/kata/688a614adfe03af512d4458c/train/javascript
const subsetSum = (xs, target) => {
  const results = [];
  let stop = false;
  const help = (current, remaining) => {
    if(remaining.length === 0 && stop == false) {
      if(current.length > 0 && current.reduce((a,b) => a + b) === target) {
        results.push(current);
        stop = true;
      }
      return;
    }
    if(!stop) {
      help([...current, remaining[0]], remaining.slice(1));
      help(current, remaining.slice(1));
    }
  }
  help([], xs);
  return results[0]
}
// console.log(subsetSum([1,2,3,4,5], 4));










// https://www.codewars.com/kata/5bdc191306a8a678f6000187/train/javascript
const shiftLeft = (s, t) => {
  let max = s.length === t.length ? s : s.length > t.length ? s : t;
  let min = s.length === t.length ? t : s.length < t.length ? s : t;
  console.log(max);
  console.log(min);
  let counter = 0;
  while (max !== min) {
    if(max !== '') {
      max = max.slice(1, max.length);
      counter++;
    }
    if(min !== '') {
      min = min.slice(1, min.length);
      counter++;
    }
  }
  return counter;
}
// console.log(shiftLeft("b", "ab"));


// DO PROBLEM BELOW

// DO PROBLEM BELOW

// DO PROBLEM BELOW

// DO PROBLEM BELOW

// DO PROBLEM BELOW

// DO PROBLEM BELOW

// DO PROBLEM BELOW

// DO PROBLEM BELOW


// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
const prefillTwo = (n, v) => {
  if (n === 0 || parseInt(n) === 0) return [];
  if (typeof n !== 'number' || typeof parseInt(n) !== 'number' || n === Infinity || n === -Infinity || Number.isNaN(n) || n % 1 === 0) throw new TypeError(`${n} is invalid`);
  return new Array(n).fill(v);
}
// console.log(prefillTwo(8, 1));



// https://www.codewars.com/kata/5923fbc72eafa9bcff00011a/train/javascript
const multiplyStrings = (str, ing) => {
  let strNum = Number(str);
  let ingNum = Number(ing);

  console.log(str.toLocaleString('fullwide', { useGrouping: false }))

  let num = strNum * ingNum;
  // return parseFloat(num.toPrecision(15)).toString();

  return BigInt(str) * BigInt(ing);
}
// console.log(multiplyStrings("823094582094385190384102934810293481029348123094818923749817.94818923749817n", "-234758927345982475298347523984572983472398457293847594193837.193228801196767580936937025n"));


const decompose = (n) => {
  let arr = [];
  for (let i = n - 1; i > 0; i--) {
    arr.push(i);
  }

  let answer = [];
  const solution = (number, a) => {
    a = a.slice();
    while (a.length) {
      let value = a.shift();
      let s = solution(n - value, arr);
      if (s) return answer.push(s);
    }
  }

  return answer;

}
// console.log(decompose(121));


const isPP = (n) => {

}
// console.log(isPP(81));


const checkRange = (a, x, y) => {
  return a.filter(n => n >= x & n <= y);
}
// console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7));


const upsideDown = (x, y) => {
  const opposite = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  }

  return opposite['1'] + opposite['0'] + opposite['1'] === '101'
  
}
// console.log(upsideDown('100','1000'));