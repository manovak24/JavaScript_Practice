const nums = [1, 2, 3, 4];
const ages = [14, 21, 13, 42, 50];

//find - this is similar to an for loop. This will run until it finds a number that is greater than 2
const found = nums.find(num => {
    if(num > 2) {
        return true;
    }
});
console.log(found);

//some, every
// some returns true if one value matches conditional
// every returns true if all vaues match conditional
const hasMinors = ages.some(age => {
    if (age >= 18) {
        return true;
    }
})

const allOver18 = ages.every(age => {
    if (age >= 18) {
        return true;
    }
})
console.log(hasMinors, allOver18);

// forEach works like a loop and doesn't return anything
ages.forEach(age => {
    console.log(age);
})

ages.forEach((age, index, arr) => {
    console.log(age, index, arr);
})

//map cam be used to create copy of original array and modify that new copy of the array
const newAges = ages.map(age => {
    return age / 2;
});

const newAgesTwo = ages.map(age => age / 2); // this is the exact same as above because there is only one line of code in the function body

const genNames = ages.map(age => {
    if(age > 40) {
        return 'Boomer'
    } else {
        return 'Zoomer'
    }
});
console.log(newAges, newAgesTwo, genNames);

// filter
const boomers = ages.filter(age => {
    if(age > 40) {
        return true
    }
})

const zoomers = ages.filter(age => {
    if(age < 40) {
        return true
    }
})
console.log(boomers, zoomers);

//sort works in place does not make a copy(the only one not to make copy!!). this will sort numbers lowest to highest and letters in alphabetical order
ages.sort();
console.log(ages);

//reduce
const result = nums.reduce((sum, num) => sum + num);

const sheep = nums.reduce((str, num) => {
  return str + num + ' sheep, ';
} , '')

console.log(result, sheep.slice(0, -2));

var sumOfPositive = function(nums) {
    var positiveNum = [];
    nums.map(num => {
      if(num > 0) {
        positiveNum.push(num);
      } else {
        positiveNum.push(0)
      }
    })
    return positiveNum.reduce((sum, num) => sum + num)
}