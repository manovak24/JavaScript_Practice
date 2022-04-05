function createAddFn(n1) {
    return function(n2) {
        return n1 + n2;
    }
}

let addFive = createAddFn(5); // this stores the variable (5) in the n1 parameter. (lesson 3/10 5.20mark)
console.log(addFive(7)); // calling addFive now stores the variable (7) in the n2 parameter.
console.log(addFive(2));
console.log(addFive(0));

let addTwo = createAddFn(2);
console.log(addTwo(7)); 
console.log(addTwo(2));
console.log(addTwo(0));