const arr = [0, 4, 6, 8, 8, 9, 8, 4, 6];


const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(arr);
console.log(duplicateElements);

duplicateElements.forEach(dup => {
   let index = arr.indexOf(dup)
   console.log(index)
})

console.log(duplicateElements);

console.log(arr.indexOf(4))

// const myFunction = () => {
//     for (i = 0; i < arr.length -1; i++) {
//         let j = i + 1;
//         if(arr[i] === arr[j]) {
//             arr.splice(arr[i], 1, 1)
//         }
//         j++;
//     }
//     console.log(arr)
// }

// myFunction();