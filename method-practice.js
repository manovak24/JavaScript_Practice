function stringMethods() {
    //string methods
    const animal = 'cool dog';

    //length
    console.log(animal.length)

    //indexOf 
    console.log(animal.indexOf('d'));
    console.log(animal.indexOf('cool'));

    //charAt this is for selecting specific index
    console.log(animal.charAt(3));

    //slice
    console.log(animal.slice(4));
    console.log(animal.slice(0, 5));
    console.log(animal.slice(-2));
    console.log(animal.slice(0, -4));

    //toUpper / toLowerCase
    console.log(animal.toUpperCase());
    console.log(animal.toLowerCase());

    //concat
    console.log(`${animal} (not, but yes)`);
    console.log(animal + '(The best)');
    console.log(animal.concat(' (I love dogs)'));

    //replace
    console.log(animal.replace('dog', 'cats'));
    console.log(animal.replace(/dog/g, 'cats')); // both do the same thing. first paramiter is a regular expression and will replace all dog variables

    //split
    console.log(animal.split(""));
    console.log(animal.split(" "));
    console.log(animal.split("l"));
}
stringMethods();

function numberMethods() {
    //number methods
    const num = 999;

    //toString
    console.log(num.toString());
    console.log(String(num));

    //toFixed number of fixed fraction digitis
    console.log(num.toFixed(2)); //use caution! This converts to a string
    console.log(num.toFixed(0)); //use if there a  decimials and need to round to whole number

    //Math.min, Math.max
    console.log(Math.min(12, 222, 5000, 10, 16));
    console.log(Math.max(12, 222, 5000, 10, 16));

    //Math.floor, Math.ceil, parseInt
    console.log(Math.ceil(999.001)); //round up number if there is a decimial
    console.log(Math.floor(999.999)); //round down number if there is a decimial aka trunkate
    console.log(parseInt(999.999));
}
numberMethods();

function arrayMethods() {
    const nums = [1, 2, 3];

    //concat
    const numsTwo = [4, 5, 6];
    console.log(nums.concat(numsTwo));
    console.log(nums.concat(numsTwo).concat(numsTwo)); //method chaining

    //slice
    console.log(nums.slice());
    console.log(nums.slice(1));
    console.log(nums.slice(0, 2));

    //pop, push (add, remove from end)
    let num = nums.pop();
    nums.pop();
    console.log(nums, num);
    nums.push(2);
    nums.push(num);
    console.log(nums);


    //shift, unshift (add, remove from beginning)
    num = nums.shift();
    nums.shift();
    console.log(nums, num);
    nums.unshift(2);
    nums.unshift(num);
    console.log(nums);

    //splice 
    const deleted = nums.splice(1);
    console.log(deleted); 
    console.log(nums); // this is original array and has been motified by the splice() method
}
arrayMethods();