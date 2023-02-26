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


function nbYear(p0, percent, aug, p) {
  let years = 0;
  let decPerc = percent / 100;
  let counter = p0 * decPerc + aug;
  
  p0 += counter;

  for (let i = p0; i <= p; i += counter) {
    years++
  }
  
  console.log(decPerc)
  console.log(counter)
  console.log(p0)


  return years
}
// console.log(nbYear(1500, 10, 100, 5000))


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
  let count = 0;
  str.split('').forEach(letter => ['a', 'e', 'i', 'o', 'u'].forEach(vowel => {
      if(vowel === letter) {
        count++
      }
    })
  )
  return count;
}
console.log(getCount('abracadabra'))