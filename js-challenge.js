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
// console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]))


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


// parsing url to get domain name
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
console.log(domainName("www.xakep.ru"));