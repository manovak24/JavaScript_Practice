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
    // for (let i = str.length; i >= 0; i--) {
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
console.log(solutionToTestStrEnd('avcde', 'cde'));


function smash(words) {
  return words.join(' ');
}
console.log(smash(['hello', 'world', 'this', 'is', 'great']));


const stringToNumber = function(str) {
  return parseInt(str);
}
console.log(stringToNumber("1234"))


function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(num => num === true).length;
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));


function grow(x) {
  return x.reduce((a, b) => a * b);
}
console.log(grow([1, 2, 3, 4]));


function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords("This is an example!"));