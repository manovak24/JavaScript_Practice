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

    var result = weight/Math.pow(height,2) 
  
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
    for(let i = 1; i <= num; i++) { str += `${i} sheep...`; }
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

  for (let i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
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


const stringToNumber = function(str) {
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
  const pairs = {'A':'T','T':'A','C':'G','G':'C'};
  return dna.split('').map(function(v){ return pairs[v] }).join('');
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

  return l.filter(function(v) {return typeof v == 'number'})
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


const summation = function(num) {
  // arr = []
  // for(let i = num; i > 0; i--) {
  //   arr.push(i)
  // }
  // return arr.reduce(function(a, b) {
  //   return a + b;
  // })

  let result = 0;
  for (let i = 1; i<= num; i++) {
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
  return (str.match(/[aeiou]/ig)||[]).length;
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

  numbers = numbers.sort(function(a, b){return a - b; });
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
  for(let i = 0; i < newArr.length; i++) {
    if(parseInt(newArr[i][0]) > parseInt(newArr[i][2])) {
      testArr.push('win');
    } else if(parseInt(newArr[i][0]) < parseInt(newArr[i][2])) {
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

  for(let key in obj) {
    // console.log(obj[key])
    if(obj[key] % 2 !== 0) {
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
  let ax = x.split(' ').map(x=>[...x].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
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
  if(names.length != 0) {
    names.splice(-1, 0, 'and')
  }
  return names.length == 0 ? 'no one liked this post' : `${names.join(' ')} liked this post`;

}
// console.log(likes(['mark', 'mike', 'randi']));


const positiveSum = (arr) => {
  // let newArr = arr.filter(num => num > 0);
  // return newArr.length === 0 ? 0 : newArr.reduce((a, b) => a + b);
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
// console.log(positiveSum([-1,2]));

const reverseSeq = (n) => {
  let arr = [];
  for(let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr;
}
// console.log(reverseSeq(5));


const century = (year) => {
  return Math.ceil(year/100);
}
// console.log(century(1935));


function squareSum(numbers) {
  // return numbers.length == 0 ? 0 : numbers.map(number => number * number).reduce((a, b) => a + b );
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
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
  return string.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
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
  return [...new Set(s1+s2)].sort().join('')
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
  return Math.ceil(n/5)*5;
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
  return (nums || []).sort(function(a, b){
    return a - b
  });
}
// console.log(solution([2, 20, 10]))


const isAnagram = (test, original) => {
  // return test.length === original.length ? test.toLowerCase().split('').sort().every((val, i) => val === original.toLowerCase().split('').sort()[i]) : false;
  const t = test.toLowerCase().split('').sort().join('');
  const o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
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
  arr.sort((a,b) => a - b)
  for(let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  return newArr.reduce((a,b) => a + b);

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


function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
// console.log(greet('Greg', 'Daniel'));


function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
}
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));


const switchItUp = (number) => {
  let num = '';
  switch(number) {
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
    i = arr.reduce((a,b) => a * b).toString().length;
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


function shortcut (string) {
  return string.replace(/[aeiou]/gi, '');
}
// console.log(shortcut('test'));


function seriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i++) {
    if(i === 0) {
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

  return num.toString().split("").reverse().map( (a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(" + ");
}
// console.log(expandedForm(420370022));


const accum = (s) => {
  let arr = s.split('');
  return arr.map(letter => letter.toUpperCase() + letter.toLowerCase().repeat(arr.indexOf(letter))).join('-');
}
// console.log(accum('RqaEzty'));


const sortNumbers = (num) => {
  return num.sort(function(a, b) {
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
    if(s[i] > 'm') {
      count++;
    }
  }
  return `${count}/${s.length}`
}
// console.log(printerErrors('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));


const toAlternatingCase = (string) => {
  let arr = string.split('');
  let newArr = [];
  for(let i = 0; i < string.length; i++) {
    if(arr[i] === 'number') {
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
  for(let i = 0; i < str.length; i++) {
    if(str[i] === letter) {
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
          .sort(function(a,b){return words[b]-words[a]})
          .slice(0,3)
}
// console.log(topThreeWords("  , e   .. "));


const digitize = (n) => {
  return n.toString().split('').map(num => parseInt(num)).reverse();
}
// console.log(digitize(1234567890));


const order = (words) => {
  return words.split(' ').sort((a,b) => a.match(/\d+/g) - b.match(/\d+/g)).join(' ');
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
  return triplet.indexOf([...triplet].sort((a,b) => a -b)[1]);
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

  return array.map(function(letter, index) {
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


const areaOrPerimeter = (l , w) => {
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

  for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) {
      capIndexes.push(i)
    }
  }
  return capIndexes;
}
// console.log(capitals('CodEWaRs'));


function nextBigger (n) {
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
  return Math.abs((a.reduce((x,y) => x * y)) - b.reduce((x,y) => x * y));
}
// console.log(findDifference([3, 2, 5], [1, 4, 4]));q


const index = (array, n) => {
  return array[n] ? Math.pow(array[n], n) : -1;
}
// console.log(index([1, 2, 3, 4], 2));


function sumStr(a, b) {
  // return ((a.length !== 0 ? parseInt(a) : 0) + (b.length !== 0 ? parseInt(b) : 0)).toString();
  return String(Number(a)+Number(b));
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
  return array.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even';
}
// console.log(oddOrEven([2]));
// console.log(oddOrEven([1]));
// console.log(oddOrEven([]));

const lovefunc = (flower1, flower2) => {
  return flower1 % 2 !== flower2 % 2;
}
// console.log(lovefunc(2, 4));


function finalGrade(exam, projects) {
  if(exam > 90 || projects > 10) {
    return 100;
  } else if(exam > 75 && projects >= 5) {
    return 90;
  } else if(exam > 50 && projects >= 2) {
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
  if(names.length === 0) {
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
  return array.length > 0 ? array.reduce((x,y) => (x + y)) / array.length : 0;
}
// console.log(findAverage([1, 2, 3]));


function arithmetic(a, b, operator) {
  switch(operator) {
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


function addBinary(a,b) {
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


  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((number) => number % 2 ? odd.shift() : number);
}
// console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));


function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}
// console.log(howManyLightsabersDoYouOwn('Mark'));


function isPrime(num) {
  if(num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
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
    if(letter === letter.toUpperCase()) {
      upperCaseCount++;
    } else {
      lowerCaseCount++;
    }
  })

  if(upperCaseCount === lowerCaseCount) {
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
  return [...new Set([...arr1, ...arr2])].sort((a,b) => a - b);
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
    if(tempStr.length > longest.length) {
      longest = tempStr;
    }
  }

  return longest;
}
// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));


function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >=5 && n < 10 ? n * 95 : n * 90;
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

  for(let word of arr) {
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
  while(arr.length-1) {
    arr = arr.reduce((a,v,i)=>{
      if(v!=arr[i-1]) a.push(1)
      else a[a.length-1]++
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

  if(a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let l1 = a1.map(string => string.length);
  let l2 = a2.map(string => string.length);

  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
}
// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));


const sequenceSum = (begin, end, step) => {
  let answer = 0;
  for(let i = begin; i <= end; i += step) {
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
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
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
  while(principal < desired) {
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
  for(let i = integer; i <= limit; i += integer) {
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
  for(let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}
// console.log(countBy(2, 5));


// Filter array based on another array
function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function(bird) {
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
  
  for(let i = 1; i <= 10; i++) {
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
const remainder = (n, m) => {;
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
  if(Math.sqrt(sq) % 1 !== 0) {
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
  for(let i = 0; i < array1.length; i++) {
    if (array1[i].length === 0 || array2[i].length === 0) {
      score += 0;
    } else if (array1[i] === array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i]){
      score--;
    }
  }
  return score < 0 ? 0 : score;
}
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));


// looping through array of strings and indexing string
const pointsGame = (games) => {
  let score = 0;
  for(let i = 0; i < games.length; i++) {
    if(games[i][0] > games[i][2]) {
      score += 3;
    }
    if(games[i][0] === games[i][2]) {
      score++
    }
  }
  return score;
}
// console.log(pointsGame(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));


// Checking array for value using .includes() and not using a loop
function check(a,x) {
  return a.includes(x);
}
// console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));


// Search string using .includes() to see if it contains a specific word
function spEng(sentence) {
  return sentence.toLowerCase().includes('english');
}
// console.log(spEng("abcEnglishdef"));


const sumMul = (n,m) => {
  if(m <= 0 || n <= 0 ) {
    return "INVALID";
  }
  
  let res = 0;
  for(let i = 0; i < m; i+= n){
    res += i;
  }
  return res;
}
// console.log(sumMul(89,16020));


const calculateAge = (born, date) => {
  if(born === date) {
    return 'You were born this very year!';
  }

  let years = Math.abs(born - date) == 1 ? 'year' : 'years';
  if(born < date) {
    return `You are ${date - born} ${years} old.`;
  }
  if(born > date) {
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
  for (let i = 0; i < numbers.length-1; i++) {
      for (let j = i+1; j < numbers.length; j++) {
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

  numbers.sort(function(a, b){ return b - a });
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
  if(n === 1) {
    return 1;
  }
  if(n % Math.sqrt(n) === 0) {
    num++;
  }

  for(let i = 1; i < Math.sqrt(n); i++){
    if(n % i === 0){
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

  return x.map(num => parseInt(num)).reduce((x,y) => x + y);
}
// console.log(sumMix([9, 3, '7', '3']));


function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(Math.sqrt([age1, age2, age3, age4, age5, age6, age7, age8].map(age => age * age).reduce((x,y) => x + y)) / 2);
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


const humanYearsCatYearsDogYears = function(humanYears) {
  let dogYears = 0;
  let catYears = 0;
  for(let i = 1; i <= humanYears; i++) {
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
  for(let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(between(1, 4));


// Removing every other item from array
const removeEveryOther = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  return arr;
}
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));


// finding unique value in array (not the same as the others);
const findUniq = (arr) => {
  arr.sort((a,b) => b - a)

  if(arr[0] !== arr[1]) {
    return arr[0];
  }

  if(arr[0] === arr[1]) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  }
}
// console.log(findUniq([1, 1, 1, 2, 1]));


function defineSuit(card) {
  switch(card.slice(-1)) {
    case '♣' : return 'clubs';
    case '♦' : return 'diamonds';
    case '♥' : return 'hearts';
    case '♠' : return 'spades';
  }
}
// console.log(defineSuit('3♣'));


function greet(name) {
  return 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';
}
// console.log(greet('riley'));


function digPow(n, p) {
  let nTest = (n.toString().split('').map(num => Math.pow(parseInt(num), p++)).reduce((a,b) => a + b)) / n;
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
  return x.replace(/[_]/gi,'').length <= 15 ? 'Woohoo!' : "Car Dead";
}
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));


function adjacentElementsProduct(array) {
  let newArr = [];
  for(let i = 0; i < array.length - 1; i++) {
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
  return numbers.length === 0 ? 0 : numbers.reduce((a,b) => a + b);
}
// console.log(sumArray([]));


// Remove duplicates from string or array using .filter()
const uniqueInOrder = (iterable) => {
  let newIterable;
  if(Array.isArray(iterable)) {
    newIterable = iterable;
  } else {
    newIterable = iterable.split('')
  }
  return newIterable.filter(function(item, position, arr) {
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
  if(count < 0) {
    return `${count}<0`
  }

  if(count === 0) {
    return '0=0';
  }
  
  let answer = [];
  for(let i = 0; i <= count; i ++) {
    answer.push(i)
  }
  let sum = answer.reduce((a,b) => a + b);
  return `${answer.join('+')} = ${sum}`;
}
// console.log(sumSequence(6))


const unusualFive = () => {
  return 'string'.indexOf('g');
}
// console.log(unusualFive());

// Search array within array for matching arrays and return index of first match using .find();
const searchArray = (arrayToSearch, query) => {
  for(let i = 0; i < arrayToSearch.length; i++) {
    if(arrayToSearch[i].length !== 2 || !Array.isArray(arrayToSearch[i])) {
      throw new Error('Error');
    }
  }

  if(query.length !== 2) {
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
    total = strArr.reduce((a,b) => a * b);
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

  return [].concat(...array).sort((a,b) => a - b);
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
  for(let i = 0; i < ints.length; i++) {
    if(seen[s - ints[i]]) {
      return [s - ints[i], ints[i]];
    }
    seen[ints[i]] = true;
  };
}
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));


// numerical alphabet number
const wordsToMarks = (string) => {
  return string.split('').map(letter => letter.charCodeAt(0) - 96).reduce((a,b) => a + b);
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
  let longest = strArr.sort((a,b) => b.length - a.length);
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
  for(let i = 0; i < name.length; i++) {
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
  for(let i = 1; i <= nFloors; i++) {
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
  return arr.sort((a,b) => a - b).reduce((a,b) => a + b * arr.pop(), 0);
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
  return numbers.sort((a,b) => b - a).splice(0, size).reduce((a,b) => a * b);
}
// console.log(maxProduct([10, 8, 7, 9], 3));


const arrayLeaders = (numbers) => {
  let answerArr = [];
  for(let i = 0; i < numbers.length - 1; i++) {
    if(numbers[i] > numbers.slice(i + 1).reduce((a,b) => a + b)) {
      answerArr.push(numbers[i]);
    }
  }

  if(numbers[numbers.length - 1] > 0) {
    answerArr.push(numbers.pop());
  }
  return answerArr;
}
// console.log(arrayLeaders([498,-600,614,115,226,757,-38,-66,-453,427,134,-9,61,335,244,-184,136,78,-206,734,-665,434,651,-201,281,-830,-209,298,-33,350,80,-46,-262,143,174,-490,757,-536,-22,441,-230,965,-285,137,-322,-87,326,-556,200,-285,-16,-172,467,422,142,160,-326,-853,-651,-107,492,619,87,506,-145,698,292,-802,260,632,30,-423,-568]));


const stockList = (listOfArt, listOfCat) => {
  let obj = {};
  for(let i = 0; i < listOfCat.length; i++) {
    let counter = 0;
    for(let j = 0; j < listOfArt.length; j++) {
      if(listOfCat[i] === listOfArt[j].charAt(0)) {
        counter += parseInt(listOfArt[j].split(' ').pop());
      }
    }
    obj[listOfCat[i]] = counter;
  }

  return Object.values(obj).every((value) => value === 0) ? '' : listOfCat.map(function(cat) {
    return `(${cat} : ${obj[cat]})`
  }).join(' - ');

}
// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));

// Remove special character from string and remove 1st & last character
function arrayKata(string) {
  return string.split(',').slice(1,-1).join(' ') || null;
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
  numbers.sort((a,b) => b - a);
  for(let i = 0; i < numbers.length - 1; i++) {
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
  if(dolphin) {
    sharkSpeed /= 2;
  }

  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}
// console.log(shark(12, 50, 4, 8, true));


const isSortedAndHow = (array) => {
  let ascending = [...array].sort((a,b) => a - b);
  let descending = [...array].sort((a,b) => b - a);
  
  if(array.every((v,i) => v === ascending[i])) {
    return 'yes, ascending'
  } else if(array.every((v,i) => v === descending[i])) {
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

  return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}
// console.log(productArray([4, 3, 10, 3, 93, 79]));


function maxTriSum(numbers) {
  // return numbers.filter((num, i) => numbers.indexOf(num) === i).sort((a,b) => b - a).slice(0, 3).reduce((a,b) => a + b);

  return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a + b);
}
// console.log(maxTriSum([3,2,6,8,2,3]));


function reverse(string) {
  return string.split(' ').reverse().join(' ');
}
// console.log(reverse('I am an expert at this'));


// queue time and optimal load
const queueTime = (customers, n) => {
  let arr = new Array(n).fill(0);
  for(let i = 0; i < customers.length; i++) {
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
  return arr.filter(function(x) {
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


function nthSmallest(arr,pos) {
  return arr.sort((a,b) => a - b)[pos - 1];
}
// console.log(nthSmallest([2,169,13,-5,0,-1], 4));


function rowWeights(array) {
  // let teamOne = 0;
  // let teamTwo = 0;

  // for(let i = 0; i < array.length; i++) {
  //   i % 2 === 0 ? teamOne += array[i] : teamTwo += array[i];
  // }

  // return [teamOne, teamTwo];

  let teamOne = array.filter((x, i) => i % 2 === 0).reduce((a,b) => a + b, 0);
  let teamTwo = array.filter((x, i) => i % 2 !== 0).reduce((a,b) => a + b, 0);

  return [teamOne, teamTwo];
}
// console.log(rowWeights([29,83,67,53,19,28,96]));


// Shortest way to reverse array
const reverseThreeKu=a=>a.map(a.pop,[...a]);
// console.log(reverseThreeKu([1, 2, 3]));


function cookie(x) {
  return typeof x === 'number' ? 'Who ate the last cookie? It was Monica!' : typeof x === 'string' ? 'Who ate the last cookie? It was Zach!' : 'Who ate the last cookie? It was the dog!';
}
// console.log(cookie(true));


// Capitalize first letter of each word in string
function getDrinkByProfesion(param) {
  let test = param.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
  switch(test) {
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
  if(startPriceNew <= startPriceOld) {
    return [0, startPriceOld - startPriceNew]
  }

  let savings = 0;
  let counter = 0;

  while(savings + startPriceOld < startPriceNew) {
    counter++;
    if(counter % 2 === 0) {
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
  if(bounce > 0 && bounce < 1) {
    while(h > window) {
      nTimes += 2;
      h *= bounce;
    }
  }
  return nTimes;
}
// console.log(bouncingBall(40, 1.0, 10));


function calculator(a,b, sign) {
  if(typeof a !== 'number' || typeof b !== 'number') {
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


const arrayDiff = (a,b) => {
  return a.filter(number => !b.includes(number));
}
// console.log(arrayDiff([1,2,3], [1,2]));


const multiplicationTable = (size) => {
  let arr = [];

  for(let i = 0; i < size; i++) {
    arr[i] = [];
    for(let j = 0; j < size; j++) {
      arr[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return arr;
}
// console.log(multiplicationTable(3));


function pillars(numPill, dist, width) {
  if(numPill <= 1) {
    return 0;
  }

  if(numPill === 2) {
    return dist * 100;
  }

  if(numPill > 2) {
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
    return day.reduce((a,b) => a + b);
  }).reduce((a,b) => a + b) * 20;
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
  
  let objArr = Object.values(obj).sort((a,b) => a - b);
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
    if(vowels.includes(String.fromCharCode(number))) {
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
  for(let i = 0; i < arr.length - 1; i++) {
    if((arr[i] + 1) !== arr[i + 1]) {
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

  if(array1 == null || array2 == null) {
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


  if(n > 12 || n < 0) throw new Error ('RangeError');
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
  for ( let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
// console.log(powerOfTwo(1));


const sumTriangularNumbers = (n) => {
  return n > 0 ? n*(n+1)*(n+2)/6 : 0;
}
// console.log(sumTriangularNumbers(34));


const power = (base, exponent) => {
  let counter = 1;
  let arr = [];

  if(typeof base !== 'number') {
    return 1;
  }

  if(exponent > 0) {
    while(counter <= exponent) {
      counter++;
      arr.push(base)
    }
    return arr.reduce((a,b) => a * b);
  }

  if(exponent < 0) {
    while(counter <= exponent * -1) {
      counter++;
      arr.push(base);
    }
    return 1/ arr.reduce((a,b) => a * b);
  }
}
// console.log(power(x, 1));


const combat = (health, damage) => {
  return health < damage ? 0 : health - damage;
}
// console.log(combat(100, 5));


reverse = function(array) {
  return array.map(array.pop,[...array]);

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
  for(let i = 0; i < word.length; i++) {
    if(/[aeiouy]/i.test(word[i])) {
      answer.push(i+1);
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
  for(let i = 0; i < x.length - 1; i++) {
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
 let [a, b, c] = integers.sort((a,b) => a - b);
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
  if(n === 0) {
    return 1;
  }
  
  let products = [];
  for(let i = n; i > 0; i--) {
    products.push(i)
  }
  return products.reduce((a,b) => a * b);
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
  if(sz <= 0 || str.length === 0 || sz > str.length) {
    return "";
  }
  let arr = str.match(new RegExp('.{1,' + sz + '}', 'g'));
  let updatedArr = arr.map(item => {
    if(item.length === sz) {
      let testArr = [];
      for(let i = 0; i < item.length; i++) {
        testArr.push(Math.pow(parseInt(item[i]), 3));
      }
      if(testArr.reduce((a,b) => a + b) % 2 === 0) {
        return item.split('').reverse().join('');
      } else {
        return item.substring(1)+item[0];
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
    if(/^[A-Z]/.test(letter) && index === 0) {return letter.toLowerCase();} 
    else if (/^[A-Z]/.test(letter) && index !== 0) {return '-' + letter.toLowerCase();} 
    else {return letter}
  }).join('').replace(/\d+/g, '');
}
// console.log(kebabize('MyCamelCased3String'));


function strong(n) {
  let arr = n.toString().split('');
  let mapArr = arr.map(num => {
    let rval = 1;
    for(let i = 1; i <= num; i ++) {
      rval = rval * i;
    }
    return rval
  })
  return mapArr.reduce((a,b) => a + b) === n ? 'STRONG!!!!' : 'Not Strong !!';
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
    if(index % 2 !== 0) {
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
  let totalOne = x.split('').map(letter => letter.charCodeAt(0));
  let totalTwo = totalOne.map(num => num.toString())
                          .map(str => str.replace(/[7]/, '1'))
                          .map(str => parseInt(str));
  


  let sumOne = totalOne.map(num => num.toString().split('').map(letter => parseInt(letter)).reduce((a,b) => a + b)).reduce((a,b) => a + b);
  let sumTwo = totalTwo.map(num => num.toString().split('').map(letter => parseInt(letter)).reduce((a,b) => a + b)).reduce((a,b) => a + b);

  return sumOne - sumTwo;
}
// console.log(calcNumerical('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));


function typeOfSum(a, b) {
  let sum = a + b;
  return typeof sum;
}
// console.log(typeOfSum(true, 1));


Array.prototype.square = function() {
  return [...this].map(num => num * num)
}
Array.prototype.cube = function() {
  return [...this].map(num => num * num * num);
}
Array.prototype.average = function() {
  if(this.length === 0) return NaN;
  return [...this].reduce((a,b) => a + b) / this.length;
}
Array.prototype.sum = function() {
  if(this.length === 0) return NaN;
  return [...this].reduce((a,b) => a + b);
}
Array.prototype.even = function() {
  return [...this].filter(num => num % 2 === 0);
}
Array.prototype.odd = function() {
  return [...this].filter(num => num % 2 !== 0);
}
// const numbers = [1, 2, 3];
// console.log(numbers.even());


// rotating a number based on index which is basically remove a number a specific index and add to the end
const maxRot = (n) => {
  let str = n.toString();
  let arr = [str];
  for(let i = 0; i <= str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    console.log
    arr.push(str.split().join());
  }
  return Math.max(...arr);
}
// console.log(maxRot(56789));


const minimumSteps = (numbers, value) => {
  let sorted = numbers.sort((a,b) => a - b);
  let sum = sorted[0];
  let counter = 0;
  for(let i = 1; i < sorted.length; i ++) {
    if(sum < value) {
      sum += sorted[i];
      counter++
    }
  }
  return counter;
}
// console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464));


function cubeOdd(arr) {
  let allNumbers = arr.every(item => !isNaN(item));
  return allNumbers ? arr.filter(num => num % 2).reduce((a,b) => a + (Math.pow(b, 3)),0) : undefined;
}
// console.log(cubeOdd([1, 2, 3, 4]));


const capitalizeIndex = (s, arr) => {
  let sArr = s.split('');
  for(let i = 0; i < arr.length; i++) {
    if(sArr[arr[i]]) {
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
  while(v < m) {
    n++;
    v += n*n*n;
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
  for(let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for(let j = 0; j < arr.length; j++) {
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
  return power < 1 ? 1 : new Array(power).fill(number).reduce((a,b) => a * b);
}
// console.log(numberToPower(4, 1));

const nbDig = (n, d) => {
  let arr = [];
  for(let i = 0; i <= n; i++) {
    arr.push((i*i).toString())
  }

  let counter = 0;
  let newArr = arr.join('').split('');
  newArr.forEach(letter => {
    if(letter == d.toString()) {
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
  for(let i = 0; i < n; i++) {
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

  return function(n) {
    return arr.map(num => num * n);
  }
}
// console.log(multiplyAll([1,2,3])(2));


// Test if string contains only numbers and is less than 10
function isDigit(s) {
  return s==parseFloat(s);
}
// console.log(isDigit("3-4"));


function sumCubes(n) {
  let arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.map(num => num*num*num).reduce((a,b) => a + b);
}
// console.log(sumCubes(3));


const parseF = (s) => {
  return s==parseFloat(s) ? parseFloat(s) : null;
}
// console.log(parseF('NaN'));


const excludingVatPrice = (price) => {
  if(price === null) return -1;
  return Math.round(((price / 1.15) + Number.EPSILON)* 100) / 100;
}
// console.log(excludingVatPrice(230));


const findDigit = function(num, nth) {
  if(nth <= 0) return -1;
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

  if(x === 0) return 'undefined';

  return (y / x).toString();
}
// console.log(slope([-10,6,-10,3]));


const seven = (m) => {
  let counter = 0;
  while(m > 99) {
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

  return arr.reduce((a,b) => a + Math.min(...b), 0);
}
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));


// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
const squares = (x, n) => {
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(x);
    x *= x;
  }
  return arr;
}
// console.log(squares(2,5));

const outed = (meet, boss) => {
  meet[boss] = meet[boss] * 2;
  let sum = Object.values(meet).reduce((a,b) => a + b);
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
  for(let i=0; i<(str.length/2)-1 ; i++){
    leftTotal += Number(str[i]);
    rightTotal += Number(str[str.length-1-i]);
    
    // use below to see how it works for backwards
    // console.log(str[str.length-1-i])
  }
  return leftTotal===rightTotal?'Balanced':'Not Balanced';
}
// console.log(balancedNumber(7225127225));


const templateStrings = function(noun, adjective) {
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

  return s.replace(/[^0-9]/g, ' ').split(' ').reduce((a,b) => a + +b,0)

}
// console.log(sumOfIntegersInSTring('test'));


const switcher = (x) => {
  const numbers = x.map(item => parseInt(item));
  const numOps = numbers.map(num => {
    if(num > 26) {
      if(num === 27) return '!';
      if(num === 28) return '?';
      if(num === 29) return ' ';
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


String.prototype.digit = function() {
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
  for(let i = 0; i < arr.length - 1; i++) {
    if(Math.abs(arr[i] - arr[i + 1]) !== 1) {
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
const myCat = new Cat ('Fee');
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


Array.prototype.remove_ = function(integer_list, values_list) {
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

  return s.split(/[^aeiou]/).reduce((a,b) => Math.max(a,b.length),0);
}
// console.log(longestVowelChain('codewarriors'));


const generateShape = (integer) => {
  return ("+".repeat(integer)+"\n").repeat(integer).trim();
}
// console.log(generateShape(10));


const getOrder = (input) => {
  const arr = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke' ];
  let answerArr = [];
  for(let i = 0; i < arr.length; i ++) {
    let match = input.match(new RegExp(arr[i], "g")) || [];
    if(input.match(new RegExp(arr[i], "g")) || [].length > 0) {
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

  if(num1 === 0 || num2 === 0 && operation === '/') {
    answer = null;
  }


  return answer;
}
// console.log(calculate(3.2,"+", 8));


const multiplesFunction = (m, n) => {
  let arr = [];
  for(let i = 1; i < m + 1; i++) {
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

  return Array.from(text.split('').reduce((a,b) => a.set(b, a.has(b) ? a.get(b) + 1 : 1), new Map()));
}
// console.log(orderedCount('233312'));


const upArrayTwo = (arr) => {
  if(arr.length === 0) return null;
  if(!arr.every(num => num < 10)) return null;
  if(!arr.every(num => num > -1)) return null;

  let bigNum = BigInt(arr.join('')) + BigInt(1);
  let newArr = bigNum.toString().split('').map(num => parseInt(num));

  if(arr.length === newArr.length) {
    return newArr;
  } else if (arr.length > newArr.length) {
    let diff = arr.length - newArr.length;
    for(let i = 0; i < diff; i++) {
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

  if(age > 14) {
    min = (age / 2) + 7;
    max = (age - 7) * 2;
  }
  
  if(age <= 14) {
    min = age - .10 * age;
    max = age + .10 * age;
  }

  return Math.floor(min) + "-" + Math.floor(max);
}
// console.log(datingRange(17));

var ArrowFunc = function(arr) {
  return arr.map( num => String.fromCharCode(num) ).join(''); //Complete this function
}
// console.log(ArrowFunc([84,101,115,116]));


// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
const solveCount = (s) => {
  let upperCase = s.match(/[A-Z]/g)||[]
  let lowerCase = s.match(/[a-z]/g)||[]
  let num = s.match(/[0-9]/g)||[]
  let specialChar = s.match(/[^A-Z0-9]/gi)||[]

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

  const score = Object.keys(staff).reduce((a,b) => {
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
    if(vowels.includes(letter)) {
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
  const squareOfSums = Math.pow(arr.reduce((a,b) => a + b), 2);
  const sumOfSquares = arr.map(num => {
    return num * num;
  }).reduce((a,b) => a + b);

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
                .reduce((a,b) => a + b);

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
  return typeof variable ==  type;
}
// console.log(typeValidation(42, 'number'));


// Removing letters from string based on array 
const lastSurvivor = (letters, coords) => {
  for(let i = 0; i < coords.length; i++) {
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
  return [...new Set([...a, ...b])].sort((a,b) => a - b);
}
// console.log(mergeArraysThree([2, 4, 8], [2, 4, 6]));


// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
// Find noncommon chars between two strings and return one string with noncommon chars from both strings
const solveTwo = (a, b) => {
 return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
}
// console.log(solveTwo("xyabb","xzca"));


const evenAndOdds = (num) => {
  return num % 2 === 0 ? parseInt(num.toString(2)).toString() : num.toString(16);
}
// console.log(evenAndOdds(2));


const largestElements = (n, array) => {
  if(n === 0) return [];
  return array.sort((a,b) => a - b).slice(-n, array.length);
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


const wordValue = (a) =>{
  return a.map((item, index) => item.replace(/\s/g, '')
                                    .split('')
                                    .map(letter => (letter.charCodeAt() - 96))
                                    .reduce((x,y) => (x += y),0) * (index + 1));
}
// console.log(wordValue(["","abc abc","abc","abc"]));


const menFromBoys = (arr) => {
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}
console.log(menFromBoys([2,43,90,95,90,37]));



const decompose = (n) => {
  let arr = [];
  for(let i = n - 1; i > 0; i--) {
    arr.push(i);
  }

  let answer = [];
  const solution = (number, a) => {
    a = a.slice();
    while(a.length) {
      let value = a.shift();
      let s = solution(n - value, arr);
      if(s) return answer.push(s);
    }
  }
  
  return answer;

}
// console.log(decompose(121));


const isPP = (n) => {
  
}
// console.log(isPP(81));


const checkRange = (a, x, y) => {
  return a.filter(n=>n>=x&n<=y);
} 
// console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7));


const upsideDown = (x, y) => {
  const opposite = {
    '0':'0',
    '1':'1',
    '6':'9',
    '8':'8',
    '9':'6'
  }
  
  const arr = [];
  for(let i = Number(x); i <= Number(y); i++) {
    arr.push(i.toString())
  }
  
  const oppositeArr = ['2','3','4','5','7'];
  const results = arr.filter(str => {
    return !oppositeArr.some(letter => str.includes(letter));
  })

  const oppositeResults = results.map(str => {
    return str.split('').map(char => {
      return opposite[char]
    }).reverse().join('')
  })

  let counter = 0;
  for(let i = 0; i < results.length; i++) {
    if(results[i] === oppositeResults[i]) {
      counter++;
    }
  }

  return counter;
}
// console.log(upsideDown('100000','12345678900000000'));