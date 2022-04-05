//for loop

const firstName = 'Maaaaark';

let charCount = 0;

for (let i = 0; i < firstName.length; i++) {
    // let char = firstName[i]; can also store this as value an use in if statement
    if (firstName[i] === "a") {
        charCount++;
    }
}



console.log(charCount);

const nums = [100, 200, 300];
const doubled = [];

for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    console.log(num);
    doubled.push(num * 2);
}

console.log(doubled);


const numTwo = [400, 500, 600];

for (let i = 0; i < numTwo.length; i++) {
    numTwo[i] = numTwo[i] * 2;
    console.log(numTwo)
}

// for OF loop
const firstNames = ['mark', 'sadie', 'scout'];

for (let firstName of firstNames) {
    console.log(firstName);
}

const names = ['mark', 'sadie', 'scout'];

for (let name of names) {
    name = name.charAt(0).toUpperCase() + name.substring(1);
    console.log(name);
}

var sumOfPositive = function(nums) {
    var sum = 0;   
    for(var num of nums) {
        if(num > 0) {
          sum += num
        } 
      }
    return sum;
  }

// for IN loop
const user = {
    name: 'Mark',
    age: 32
}

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

// While loop
let test = 14;
let counter = 0;

while (test < 1000) {
    test *= 2;
    console.log(test);
    counter++;
}
console.log(counter);

var multiplyNumbers = function(num1, num2) {
    var sum = 0;
    while (num2--) { // this line of code means it is reducing down to 0 and once 0 it is falsy and stops running
      sum += num1;
    }
    return sum;
  }