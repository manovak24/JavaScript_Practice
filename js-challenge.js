const arr = [0, 4, 6, 8, 8, 8, 5, 5, 7];

const myFunction = (arr) => {
    return arr.filter((currentValue, currentIndex) => 
    arr.indexOf(currentValue) !== currentIndex)
}

myFunction(arr);

var array = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];
function findDuplicates(arr) {
    return arr.filter((currentValue, currentIndex) =>
    arr.indexOf(currentValue) !== currentIndex);
}

findDuplicates(arr);


console.log(arr)
